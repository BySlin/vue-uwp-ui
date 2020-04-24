import darkTheme from "../../styles/darkTheme";

export default {
  name: "FlyoutContent",
  props: {
    verticalPosition: {
      type: String,
      validator(value) {
        return ["top", "bottom", "center"].includes(value);
      },
      default: "top"
    },
    horizontalPosition: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      },
      default: "center"
    },
    show: {
      type: Boolean,
      default: false
    },
    margin: {
      type: Number,
      default: 4
    },
    isControlled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    autoCloseTimeout: {
      type: Number,
      default: 1250
    },
    enterDelay: {
      type: Number,
      default: 0
    },
    styles: Object,
    className: String
  },

  data() {
    return {
      currShow: this.show,
      autoHideTimer: null,
      hideTimer: null
    };
  },

  watch: {
    show(v) {
      this.currShow = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },
  methods: {
    showFlyoutContent() {
      clearTimeout(this.autoHideTimer);
      clearTimeout(this.hideTimer);
      this.toggleShowFlyoutContent(true);

      if (this.autoClose) {
        this.autoHideTimer = setTimeout(() => {
          this.hideFlyoutContent();
        }, this.autoCloseTimeout);
      }
    },

    hideFlyoutContent() {
      this.hideTimer = setTimeout(() => {
        this.toggleShowFlyoutContent(false);
      }, 250);
    },

    toggleShowFlyoutContent(currShow = !this.currShow) {
      this.currShow = currShow;
    },

    getStaticStyle(currShow = this.currShow) {
      const {
        context: { theme },
        styles
      } = this;

      const enterDelay = currShow ? this.enterDelay : 0;

      return theme.prefixStyle({
        width: 280,

        boxSizing: "content-box",
        padding: 8,
        border: `1px solid ${theme.baseLow}`,
        color: theme.baseMediumHigh,
        background: theme.chromeLow,
        pointerEvents: currShow ? "all" : "none",
        opacity: currShow ? 1 : 0,
        transform: `translateY(${currShow ? "0px" : "10px"})`,
        position: "absolute",
        zIndex: theme.zIndex.flyout,
        transition: `transform .25s ${enterDelay}ms ease-in-out, opacity .25s ${enterDelay}ms ease-in-out, border ${enterDelay}ms .25s ease-in-out`,
        ...styles
      });
    },

    getDynamicStyle(unit = "") {
      if (!this.$el) return;
      let parentElement = this.$el.parentElement;
      const { verticalPosition, horizontalPosition, margin } = this;

      const { width, height } = parentElement.getBoundingClientRect();
      const containerWidth = this.$el.getBoundingClientRect().width;
      const containerHeight = this.$el.getBoundingClientRect().height;
      const positionStyle = {};
      if (width !== void 0 && height !== void 0) {
        switch (horizontalPosition) {
          case "left": {
            positionStyle.right = unit ? `0${unit}` : 0;
            break;
          }
          case "center": {
            const left = (width - containerWidth) / 2;
            positionStyle.left = unit ? `${left}${unit}` : left;
            break;
          }
          case "right": {
            positionStyle.left = unit ? `0${unit}` : 0;
            break;
          }
          default: {
            break;
          }
        }
        switch (verticalPosition) {
          case "top": {
            const top = -containerHeight - margin;
            positionStyle.top = unit ? `${top}${unit}` : top;
            break;
          }
          case "center": {
            const top = (height - containerHeight) / 2;
            positionStyle.top = unit ? `${top}${unit}` : top;
            break;
          }
          case "bottom": {
            const top = height + margin;
            positionStyle.top = unit ? `${top}${unit}` : top;
            break;
          }
          default: {
            break;
          }
        }
      }
      return positionStyle;
    },

    handelMouseEnter(e) {
      clearTimeout(this.autoHideTimer);
      clearTimeout(this.hideTimer);
      e.currentTarget.style.border = `1px solid ${
        this.context.theme.listAccentLow
      }`;
      if (!this.isControlled) this.showFlyoutContent();
      this.$emit("mouseenter", e);
    },
    handelMouseLeave(e) {
      e.currentTarget.style.border = `1px solid ${this.context.theme.baseLow}`;
      this.hideFlyoutContent();
      this.$emit("mouseleave", e);
    }
  },

  mounted() {
    Object.assign(this.$el.style, this.getDynamicStyle("px"));
    if (!this.isControlled) {
      this.$el.parentElement.addEventListener(
        "mouseenter",
        this.showFlyoutContent
      );
      this.$el.parentElement.addEventListener(
        "mouseleave",
        this.hideFlyoutContent
      );
    }
  },

  destroyed() {
    clearTimeout(this.autoHideTimer);
    if (!this.isControlled) {
      this.$el.parentElement.removeEventListener(
        "mouseenter",
        this.showFlyoutContent
      );
      this.$el.parentElement.removeEventListener(
        "mouseleave",
        this.hideFlyoutContent
      );
    }
  },

  render(h) {
    const { handelMouseEnter, handelMouseLeave } = this;
    const { theme } = this.context;

    const staticStyle = this.getStaticStyle();
    const stylesClasses = theme.prepareStyle({
      className: "flyout-content",
      style: staticStyle
    });
    const dynamicStyle = this.getDynamicStyle();

    return h(
      "div",
      {
        style: dynamicStyle
          ? { ...stylesClasses.style, ...dynamicStyle }
          : stylesClasses.style,
        class: stylesClasses.className,
        on: {
          mouseenter: handelMouseEnter,
          mouseleave: handelMouseLeave
        }
      },
      this.$slots.default
    );
  }
};
