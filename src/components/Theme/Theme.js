import darkTheme from "../../styles/darkTheme";
import StyleManager from "../../styles/StyleManager";
import getBaseCSSText from "./getBaseCSSText";
import getTheme from "../../styles/getTheme";
import IS_NODE_ENV from "../../common/nodeJS/IS_NODE_ENV";
import RenderToBody from "../RenderToBody";
import ToastWrapper from "../Toast/ToastWrapper";
import setSegoeMDL2AssetsFonts from "../../styles/fonts";

const baseClassName = "vue-uwp-theme";
const customLocalStorageName = "__VUE_UWP__";

export default {
  name: "Theme",
  props: {
    theme: {
      type: Object,
      require: false,
      default() {
        return darkTheme;
      }
    },
    onGeneratedAcrylic: {
      type: Function,
      require: false,
      default() {
        return () => {};
      }
    },
    needGenerateAcrylic: {
      type: Boolean,
      require: false,
      default: true
    },
    scrollBarStyleSelector: {
      type: String,
      require: false,
      default: "*"
    },
    themeWillUpdate: {
      type: Function,
      default() {
        return () => {};
      }
    },
    autoSaveTheme: Boolean,
    styles: Object
  },

  provide() {
    const context = {};
    Object.defineProperty(context, "theme", {
      enumerable: true,
      get: () => this.currTheme
    });
    return { context };
  },

  computed: {
    themeClassName() {
      return `${baseClassName}-${this.currTheme.themeName}`;
    }
  },

  data() {
    return {
      currTheme: this.getDefaultTheme(),
      acrylicTextureCount: 0,
      toastId: -1,
      findToastNodeTimers: [],
      cacheDarkAcrylicTextures: {},
      cacheLightAcrylicTextures: {},
      toastWrapper: null,
      prevStyleManager: null
    };
  },

  watch: {
    theme(theme) {
      this.updateTheme(theme);
    },
    currTheme: {
      immediate: true,
      handler() {
        if (this.prevStyleManager) {
          this.prevStyleManager.cleanStyleSheet();
          this.prevStyleManager = null;
        }
        this.bindNewThemeMethods();
        this.handleNewTheme();
      }
    }
  },

  methods: {
    getDefaultTheme() {
      let { theme, autoSaveTheme } = this;

      if (autoSaveTheme) {
        return this.getLocalStorageTheme();
      } else {
        theme = theme || darkTheme;
      }

      return theme;
    },

    getLocalStorageTheme() {
      let themeConfig = {};
      let { theme } = this;

      if (theme) {
        Object.assign(themeConfig, {
          themeName: theme.themeName,
          accent: theme.accent,
          useFluentDesign: theme.useFluentDesign,
          desktopBackgroundImage: theme.desktopBackgroundImage
        });
      }

      let result;

      const storageString = localStorage.getItem(customLocalStorageName);
      if (storageString) {
        let data = {};
        try {
          data = JSON.parse(storageString);
          const {
            themeName,
            accent,
            useFluentDesign,
            desktopBackgroundImage
          } = data;

          result = getTheme({
            themeName: themeName === void 0 ? themeConfig.themeName : themeName,
            accent: accent === void 0 ? themeConfig.accent : accent,
            useFluentDesign:
              useFluentDesign === void 0
                ? themeConfig.useFluentDesign
                : useFluentDesign,
            desktopBackgroundImage:
              desktopBackgroundImage === void 0
                ? themeConfig.desktopBackgroundImage
                : desktopBackgroundImage
          });
        } catch (error) {
          result = this.theme || darkTheme;
        }
      } else {
        result = this.theme || darkTheme;
      }

      return result;
    },

    bindNewThemeMethods() {
      const { currTheme: theme } = this;

      const { scrollBarStyleSelector } = this;

      const styleManager = new StyleManager({ theme });

      styleManager.addCSSTextWithUpdate(
        getBaseCSSText(theme, "uwp-base", scrollBarStyleSelector)
      );

      Object.assign(theme, {
        desktopBackground: `url(${
          theme.desktopBackgroundImage
        }) no-repeat fixed top left / cover`,
        updateTheme: this.updateTheme,
        addToast: this.addToast,
        updateToast: this.updateToast,
        deleteToast: this.deleteToast,
        scrollRevealListener: this.handleScrollReveal,
        forceUpdateTheme: this.forceUpdateTheme,
        styleManager
      });
    },

    handleNewTheme() {
      const { currTheme } = this;

      this.themeWillUpdate(currTheme);

      this.prevStyleManager = currTheme.styleManager;
    },

    addToast(toast, callback, increaseId = true, currToastId) {
      let toastId = currToastId !== void 0 ? currToastId : this.toastId;
      if (increaseId) {
        toastId += 1;
        this.toastId = toastId;
      }

      if (this.toastWrapper) {
        clearTimeout(this.findToastNodeTimers[toastId]);
        this.toastWrapper.addToast(toastId, toast);
        if (callback) callback(toastId);
      } else {
        this.findToastNodeTimers[toastId] = setTimeout(() => {
          this.addToast(toast, callback, false, toastId);
        }, 100);
      }
    },

    updateToast(toastId, toast) {
      if (this.toastWrapper) {
        this.toastWrapper.updateToast(toastId, toast);
      }
    },

    deleteToast(toastId) {
      if (this.toastWrapper) {
        this.toastWrapper.deleteToast(toastId);
      }
    },

    handleScrollReveal() {
      const { currTheme } = this;
      for (const scrollReveal of currTheme.scrollReveals) {
        const {
          $el: rootElm,
          animated,
          setEnterStyle,
          setLeaveStyle,
          topOffset,
          bottomOffset
        } = scrollReveal;
        if (!rootElm) return;
        const { top, height } = rootElm.getBoundingClientRect();
        const { innerHeight } = window;

        let isIn = false;
        if (height > innerHeight) {
          isIn = top < innerHeight - height * height && top > -height * 0.5;
        } else {
          isIn =
            top > 0 + topOffset && top + height + bottomOffset < innerHeight;
        }
        if (isIn) {
          if (!animated) {
            setEnterStyle();
            scrollReveal.animated = true;
          }
        } else {
          if (animated) {
            setLeaveStyle();
            scrollReveal.animated = false;
          }
        }
      }
    },

    updateTheme(newTheme) {
      if (this.autoSaveTheme) {
        localStorage.setItem(
          customLocalStorageName,
          JSON.stringify({
            themeName: newTheme.themeName,
            accent: newTheme.accent,
            useFluentDesign: newTheme.useFluentDesign,
            desktopBackgroundImage: newTheme.desktopBackgroundImage
          })
        );
      }

      const needGenerateAcrylic = this.sureNeedGenerateAcrylic(newTheme);

      this.currTheme = newTheme;

      this.$nextTick(() => {
        if (needGenerateAcrylic) {
          newTheme.generateAcrylicTextures(
            newTheme,
            currTheme => (this.currTheme = { ...this.currTheme, ...currTheme })
          );
        }
      });
    },

    forceUpdateTheme(currTheme) {
      this.currTheme = currTheme;
    },

    sureNeedGenerateAcrylic(newTheme) {
      const { currTheme } = this;
      let needGenerateAcrylic =
        newTheme.desktopBackgroundImage && this.needGenerateAcrylic;

      if (
        needGenerateAcrylic &&
        newTheme.desktopBackgroundImage === currTheme.desktopBackgroundImage
      ) {
        if (currTheme.useFluentDesign) {
          Object.assign(
            currTheme.isDarkTheme
              ? this.cacheDarkAcrylicTextures
              : this.cacheLightAcrylicTextures,
            {
              acrylicTexture40: currTheme.acrylicTexture40,
              acrylicTexture60: currTheme.acrylicTexture60,
              acrylicTexture80: currTheme.acrylicTexture80
            }
          );

          needGenerateAcrylic = false;
        }
        if (newTheme.useFluentDesign) {
          if (
            (newTheme.isDarkTheme &&
              this.cacheDarkAcrylicTextures.acrylicTexture40) ||
            (!newTheme.isDarkTheme &&
              this.cacheLightAcrylicTextures.acrylicTexture40)
          ) {
            Object.assign(
              newTheme,
              newTheme.isDarkTheme
                ? this.cacheDarkAcrylicTextures
                : this.cacheLightAcrylicTextures
            );
            needGenerateAcrylic = false;
          } else {
            needGenerateAcrylic = true;
          }
        } else {
          needGenerateAcrylic = false;
          Object.assign(newTheme, {
            acrylicTexture40: currTheme.acrylicTexture40,
            acrylicTexture60: currTheme.acrylicTexture60,
            acrylicTexture80: currTheme.acrylicTexture80
          });
        }
      }
      needGenerateAcrylic =
        needGenerateAcrylic &&
        newTheme.useFluentDesign &&
        this.needGenerateAcrylic;
      return needGenerateAcrylic;
    },

    cleanLocalStorage() {
      localStorage.setItem(customLocalStorageName, "");
    }
  },

  mounted() {
    this.toastWrapper = this.$refs.toastWrapper;

    const { currTheme } = this;

    if (IS_NODE_ENV && this.autoSaveTheme) {
      const currTheme = this.getLocalStorageTheme();
      this.themeWillUpdate(currTheme);
      this.currTheme = currTheme;
    }

    if (IS_NODE_ENV) {
      setSegoeMDL2AssetsFonts();
    }

    if (
      currTheme.useFluentDesign &&
      currTheme.desktopBackgroundImage &&
      this.needGenerateAcrylic
    ) {
      currTheme.generateAcrylicTextures(
        currTheme,
        currTheme => (this.currTheme = currTheme)
      );
    }

    window.addEventListener("scroll", this.handleScrollReveal);
  },
  destroyed() {
    const currTheme = this.currTheme;

    const { acrylicTexture40, acrylicTexture60, acrylicTexture80 } = currTheme;

    URL.revokeObjectURL(acrylicTexture40.background);
    URL.revokeObjectURL(acrylicTexture60.background);
    URL.revokeObjectURL(acrylicTexture80.background);

    currTheme.styleManager.cleanStyleSheet();

    window.removeEventListener("scroll", this.handleScrollReveal);
  },

  render(h) {
    const {
      onGeneratedAcrylic,
      className,
      needGenerateAcrylic,
      currTheme,
      themeClassName,

      styles
    } = this;

    const vm = this;

    const rootStyle = darkTheme.prefixStyle({
      fontSize: 14,
      fontFamily: currTheme.fonts.sansSerifFonts,
      color: currTheme.baseHigh,
      display: "inline-block",
      verticalAlign: "middle",
      background: currTheme.useFluentDesign
        ? this.acrylicTextureCount === 3
          ? "none"
          : needGenerateAcrylic
          ? currTheme.altMediumHigh
          : "none"
        : currTheme.altHigh,
      width: "100%",
      height: "100%",
      ...styles
    });

    const backgroundStyle = {
      position: "fixed",
      zIndex: -1,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        currTheme.useFluentDesign && currTheme.desktopBackgroundImage
          ? currTheme.desktopBackground
          : currTheme.altHigh,
      pointerEvents: "none"
    };

    currTheme.generateAcrylicTextures.callback = theme => {
      const { backgroundEl } = vm.$refs;

      if (backgroundEl) {
        Object.assign(backgroundEl.$el.style, backgroundStyle, {
          background: theme.desktopBackground
        });
      }
      if (onGeneratedAcrylic) onGeneratedAcrylic();
    };

    const prepareStyle = currTheme.prepareStyle({
      style: rootStyle,
      className: "currTheme-root",
      extendsClassName: className
        ? `${themeClassName} ${className}`
        : themeClassName
    });

    const backgroundPrepareStyle = currTheme.prepareStyle({
      style: backgroundStyle,
      className: "fluent-background"
    });

    const backgroundParams = {
      class: backgroundPrepareStyle.className,
      style: backgroundPrepareStyle.style,
      ref: "backgroundEl"
    };

    const themeParams = {
      class: prepareStyle.className,
      style: prepareStyle.style
    };

    return h("div", themeParams, [
      h(RenderToBody, backgroundParams),
      h(RenderToBody, {}, [h(ToastWrapper, { ref: "toastWrapper" })]),
      this.$slots.default
    ]);
  }
};
