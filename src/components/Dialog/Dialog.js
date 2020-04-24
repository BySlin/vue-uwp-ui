import AddBlurEvent from "../../common/AddBlurEvent";
import RenderToBody from "../RenderToBody";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "Dialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    isControlled: Boolean,
    contentStyle: Object,
    contentEnterStyle: {
      type: Object,
      default() {
        return {
          transform: "scale(1)"
        };
      }
    },
    contentLeaveStyle: {
      type: Object,
      default() {
        return {
          transform: "scale(0)"
        };
      }
    },
    className: String,
    styles: Object
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
    toggleShow(show = !this.showDialog) {
      this.showDialog = show;
      this.$emit("input", show);
      if (show === false) {
        this.$emit("closeDialog");
      }
    },
    addBlurEventMethod() {
      const { isControlled } = this;
      this.addBlurEvent.setConfig({
        addListener: this.showDialog,
        clickIncludeElm: this.$refs.renderToBody.$el,
        blurCallback: () => {
          if (isControlled) return;
          this.toggleShow(false);
        },
        blurKeyCodes: [27]
      });
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
    const { className } = this;

    const { theme } = this.context;
    const inlineStyles = getStyles(this);

    const styleClasses = theme.prepareStyles({
      className: "dialog",
      styles: inlineStyles
    });

    return h(
      RenderToBody,
      {
        style: styleClasses.root.style,
        class: theme.classNames(styleClasses.root.className, className),
        ref: "renderToBody"
      },
      [
        h(
          "div",
          {
            style: styleClasses.content.style,
            class: styleClasses.content.className
          },
          this.$slots.default
        )
      ]
    );
  }
};

function getStyles(Dialog) {
  const {
    context,
    showDialog,
    styles,
    contentStyle,
    contentEnterStyle,
    contentLeaveStyle
  } = Dialog;
  const { theme } = context;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      color: theme.baseMediumHigh,
      background: theme.altMediumHigh,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "all .25s",
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: theme.zIndex.contentDialog,
      ...styles,
      pointerEvents: showDialog ? "all" : "none",
      opacity: showDialog ? 1 : 0
    }),
    content: prefixStyle({
      display: "inline-block",
      transition: "all .25s",
      ...contentStyle,
      ...(showDialog ? contentEnterStyle : contentLeaveStyle)
    })
  };
}
