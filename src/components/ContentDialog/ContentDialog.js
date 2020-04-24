import darkTheme from "../../styles/darkTheme";
import AddBlurEvent from "../../common/AddBlurEvent";
import RenderToBody from "../RenderToBody";
import IconButton from "../IconButton";
import Button from "../Button";

const iconButtonHoverStyle = { background: "#d00f2a", color: "#fff" };

export default {
  name: "ContentDialog",

  props: {
    value: {
      type: Boolean,
      default: false
    },
    statusBarTitle: String,
    showCloseButton: Boolean,
    title: String,
    content: String,
    primaryButtonText: {
      type: String,
      default: "Delete"
    },
    secondaryButtonText: {
      type: String,
      default: "Cancel"
    },
    background: String,
    className: String,
    styles: Object,
    padding: {
      type: Number,
      default: 16
    }
  },
  data() {
    return {
      showDialog: this.value,
      addBlurEvent: new AddBlurEvent()
    };
  },

  watch: {
    value(v) {
      this.showDialog = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    addBlurEventMethod() {
      this.addBlurEvent.setConfig({
        addListener: this.showDialog,
        clickExcludeElm: this.$refs.rootElm,
        blurCallback: () => {
          this.closeDialog();
        },
        blurKeyCodes: [27]
      });
    },
    closeDialog() {
      this.showDialog = false;
      this.$emit("closeDialog");
      this.$emit("input", false);
    },
    containerMouseEnterHandle(e) {
      e.currentTarget.style.border = `1px solid ${this.context.theme.accent}`;
    },
    containerMouseLeaveHandle(e) {
      e.currentTarget.style.border = `1px solid ${this.context.theme.baseLow}`;
    },
    closeButtonAction(e) {
      this.$emit("closeButtonAction", e);
      this.closeDialog();
    },
    primaryButtonAction(e) {
      this.$emit("primaryButtonAction", e);
      this.closeDialog();
    },
    secondaryButtonAction(e) {
      this.$emit("secondaryButtonAction", e);
      this.closeDialog();
    }
  },

  mounted() {
    this.addBlurEventMethod();
  },

  updated() {
    this.addBlurEventMethod();
  },

  destroyed() {
    this.addBlurEvent.cleanEvent();
  },

  render(h) {
    const {
      statusBarTitle,
      title,
      primaryButtonText,
      secondaryButtonText,
      showCloseButton,
      content,
      className,

      containerMouseEnterHandle,
      containerMouseLeaveHandle,
      closeButtonAction,
      primaryButtonAction,
      secondaryButtonAction
    } = this;

    const contentNode = this.$slots.contentNode;

    const { theme } = this.context;
    const inlineStyles = getStyles(this);

    const styleClasses = theme.prepareStyles({
      className: "content-dialog",
      styles: inlineStyles
    });

    return h(RenderToBody, {}, [
      h(
        "div",
        {
          style: styleClasses.mask.style,
          class: theme.classNames(styleClasses.mask.className, className)
        },
        [
          h(
            "div",
            {
              ref: "rootElm",
              on: {
                mouseenter: containerMouseEnterHandle,
                mouseleave: containerMouseLeaveHandle
              },
              style: styleClasses.container.style,
              class: styleClasses.container.className
            },
            [
              statusBarTitle &&
                h(
                  "div",
                  {
                    style: styleClasses.statusBar.style,
                    class: styleClasses.statusBar.className
                  },
                  [
                    h(
                      "p",
                      {
                        style: styleClasses.statusBarTitle.style,
                        class: styleClasses.statusBarTitle.className
                      },
                      statusBarTitle
                    ),
                    showCloseButton
                      ? h(
                          IconButton,
                          {
                            props: {
                              styles: inlineStyles.iconButton,
                              size: 24,
                              hoverStyle: iconButtonHoverStyle,
                              activeStyle: iconButtonHoverStyle
                            },
                            on: {
                              click: closeButtonAction
                            }
                          },
                          "\uE894"
                        )
                      : null
                  ]
                ),

              h(
                "div",
                {
                  style: styleClasses.titleWrapper.style,
                  class: styleClasses.titleWrapper.className
                },
                [
                  title
                    ? h(
                        "h5",
                        {
                          style: styleClasses.title.style,
                          class: styleClasses.title.className
                        },
                        title
                      )
                    : null,

                  content && h("p", {}, [content])
                ]
              ),
              contentNode,
              h(
                "div",
                {
                  style: styleClasses.content.style,
                  class: styleClasses.content.className
                },
                [
                  (primaryButtonText || secondaryButtonText) &&
                    h(
                      "div",
                      {
                        style: styleClasses.buttonGroup.style,
                        class: styleClasses.buttonGroup.className
                      },
                      [
                        primaryButtonText &&
                          h(
                            Button,
                            {
                              props: {
                                styles: inlineStyles.button
                              },
                              on: {
                                click: primaryButtonAction
                              }
                            },
                            [primaryButtonText]
                          ),
                        secondaryButtonText &&
                          h(
                            Button,
                            {
                              props: {
                                styles: inlineStyles.button
                              },
                              on: {
                                click: secondaryButtonAction
                              }
                            },
                            [secondaryButtonText]
                          )
                      ]
                    )
                ]
              )
            ]
          )
        ]
      )
    ]);
  }
};

function getStyles(ContentDialog) {
  const {
    context,
    styles,
    background,
    padding,
    primaryButtonText,
    secondaryButtonText,

    showDialog
  } = ContentDialog;
  const { theme } = context;
  const { prefixStyle } = theme;

  return {
    mask: prefixStyle({
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
      zIndex: 2000,
      opacity: showDialog ? 1 : 0,
      pointerEvents: showDialog ? "all" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      fontSize: 14,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      color: theme.baseHigh,
      background: theme.altMediumHigh,
      transition: `all .25s ${showDialog ? 0 : 0.25}s ease-in-out`,
      ...styles
    }),
    container: prefixStyle({
      background:
        background ||
        (theme.useFluentDesign
          ? theme.acrylicTexture80.background
          : theme.altHigh),
      border: `1px solid ${theme.baseLow}`,
      flex: "0 0 auto",
      width: "80%",
      maxWidth: 720,
      cursor: "default",
      transform: `scale(${showDialog ? 1 : 0})`,
      opacity: showDialog ? 1 : 0,
      transition: `all .25s ${showDialog ? 0.25 : 0}s ease-in-out`
    }),
    statusBar: prefixStyle({
      color: "#fff",
      background: theme.accent,
      height: 28,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: 18
    }),
    statusBarTitle: {
      fontSize: 12,
      lineHeight: "28x"
    },
    iconButton: prefixStyle({
      color: "#fff",
      display: "flex",
      alignSelf: "flex-start",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      width: 40,
      lineHeight: "28px",
      height: 28
    }),
    content: prefixStyle({
      boxSizing: "border-box",
      width: "100%",
      padding,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    titleWrapper: {
      padding,
      minHeight: 160
    },
    title: {
      fontWeight: 500,
      fontSize: 18,
      margin: 0
    },
    buttonGroup: prefixStyle({
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    button: {
      width:
        primaryButtonText && secondaryButtonText ? "calc(50% - 2px)" : "100%"
    }
  };
}
