import darkTheme from "../../styles/darkTheme";

export default {
  name: "TextBox",

  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    hoverStyle: Object,
    focusStyle: Object,
    textBoxStyle: {
      type: Object,
      default() {
        return {
          fontSize: "inherit",
          outline: "none",
          transition: "all .25s"
        };
      }
    },
    placeholder: String,
    disabled: Boolean,
    background: {
      type: String,
      default: "none"
    },
    type: String,
    className: String,
    styles: Object,
    maxLength: Number
  },

  data() {
    return {
      hovered: null,
      focused: null
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    handleClick() {
      this.hovered = false;
    },
    handleHover() {
      this.hovered = true;
    },
    handleUnHover() {
      this.hovered = false;
    },
    handleFocus(e) {
      this.focused = true;
      this.$emit("focus", e);
    },
    handleBlur(e) {
      this.focused = false;
      this.$emit("blur", e);
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  },

  render(h) {
    const {
      value,
      placeholder,
      type,
      styles,
      className,
      textBoxStyle,
      background,
      maxLength,
      disabled,

      handleClick,
      handleFocus,
      handleBlur,
      handleHover,
      handleUnHover,
      handleInput
    } = this;

    const { hovered, focused } = this;

    const children = this.$slots.default;

    const { leftNode, rightNode } = this.$slots;

    const haveChild = leftNode || rightNode || children;

    const { theme } = this.context;

    const currBackground = background === void 0 ? theme.altHigh : background;

    const hoverProps = {
      mouseenter: handleHover,
      mouseleave: handleUnHover
    };

    const rootWrapperStyle = {
      lineHeight: "32px",
      height: 32,
      width: 296,
      padding: !haveChild ? "0 8px" : 0,
      fontSize: 14,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: focused ? "#000" : theme.baseHigh,
      background: focused ? "#fff" : currBackground || "none",
      boxShadow: focused
        ? `inset 0px 0px 0 2px ${theme.accent}`
        : hovered
        ? `inset 0px 0px 0 2px ${theme.baseMedium}`
        : `inset 0px 0px 0 2px ${theme.baseLow}`,
      border: "none",
      transition: "all .25s"
    };

    const inlineStyles = {
      root: haveChild
        ? theme.prefixStyle({
            ...rootWrapperStyle,
            ...styles
          })
        : {},
      input: theme.prefixStyle({
        ...(haveChild
          ? {
              paddingLeft: rightNode ? 8 : void 0,
              paddingRight: leftNode ? 8 : void 0,
              width: "100%",
              height: "100%",
              background: "none",
              border: "none",
              outline: "none",
              color: "inherit",
              transition: "all .25s"
            }
          : rootWrapperStyle),
        ...(haveChild ? void 0 : styles),
        ...textBoxStyle
      })
    };

    const styleClasses = theme.prepareStyles({
      className: "text-box",
      styles: inlineStyles
    });

    const normalRender = h("input", {
      style: styleClasses.input.style,
      class: theme.classNames(className, styleClasses.input.className),
      on: {
        focus: handleFocus,
        blur: handleBlur,
        input: handleInput,
        ...(haveChild ? void 0 : hoverProps)
      },
      domProps: {
        value,
        placeholder,
        type,
        maxLength,
        disabled
      },
      ref: "inputElm"
    });

    return haveChild
      ? h(
          "div",
          {
            class: styleClasses.root.className,
            style: styleClasses.root.style,
            on: {
              click: handleClick,
              ...hoverProps
            }
          },
          [leftNode, normalRender, children, rightNode]
        )
      : normalRender;
  }
};
