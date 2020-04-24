import darkTheme from "../../styles/darkTheme";

const rootStyle = {
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "default"
};

export default {
  name: "RadioButton",

  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 24
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    background: String,
    styles: Object,
    className: String,
    radioStyle: Object,
    radioCheckedStyle: Object,
    radioDotStyle: Object,
    radioDotCheckedStyle: Object
  },

  data() {
    return {
      hovered: false,
      currChecked: this.value
    };
  },

  watch: {
    value(v) {
      this.currChecked = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    handleClick() {
      const checked = !this.value;
      if (checked) {
        this.currChecked = checked;
        this.$emit("input", checked);
      }
    },
    handleMouseEnter() {
      this.hovered = true;
    },
    handleMouseLeave() {
      this.hovered = false;
    }
  },

  render(h) {
    const {
      disabled,
      label,
      className,

      handleClick,
      handleMouseEnter,
      handleMouseLeave
    } = this;

    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "radio-button",
      styles: inlineStyles
    });

    const normalRender = h(
      "div",
      {
        style: styleClasses.radioShape.style,
        class: styleClasses.radioShape.className,
        on: {
          click: disabled ? void 0 : handleClick,
          mouseenter: disabled ? void 0 : handleMouseEnter,
          mouseleave: disabled ? void 0 : handleMouseLeave
        }
      },
      [
        h("div", {
          style: styleClasses.radioDot.style,
          class: styleClasses.radioDot.className
        })
      ]
    );

    return h(
      "div",
      {
        style: styleClasses.root.style,
        class: theme.classNames(styleClasses.root.className, className),
        attrs: {
          disabled
        }
      },
      [
        label
          ? h(
              "div",
              {
                style: styleClasses.label.style,
                class: styleClasses.label.className
              },
              [
                normalRender,
                h(
                  "span",
                  {
                    style: styleClasses.labelText.style,
                    class: styleClasses.labelText.className
                  },
                  label
                )
              ]
            )
          : normalRender
      ]
    );
  }
};

function getStyles(RadioButton) {
  const {
    currChecked,
    styles,
    size,
    disabled,
    radioStyle,
    radioCheckedStyle,
    radioDotStyle,
    radioDotCheckedStyle,

    hovered,

    context: { theme }
  } = RadioButton;
  const dotSize = size / 2.5;

  return {
    root: styles
      ? theme.prefixStyle({
          ...rootStyle,
          ...styles
        })
      : rootStyle,
    radioShape: theme.prefixStyle({
      position: "relative",
      flex: "0 0 auto",
      display: "inline-block",
      borderRadius: size,
      color: theme.altHigh,
      border: disabled
        ? `${size / 12}px solid ${theme.baseLow}`
        : `${size / 12}px solid ${
            currChecked
              ? theme.accent
              : hovered
              ? theme.baseHigh
              : theme.baseMediumHigh
          }`,
      width: size,
      height: size,
      overflow: "hidden",
      transition: "all .25s ease-in-out",
      ...radioStyle,
      ...(currChecked ? radioCheckedStyle : void 0)
    }),
    radioDot: theme.prefixStyle({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      background: disabled
        ? theme.baseLow
        : hovered
        ? theme.baseHigh
        : theme.baseMediumHigh,
      transition: "all .25s",
      borderRadius: dotSize,
      width: dotSize,
      height: dotSize,
      transform: `scale(${currChecked ? 1 : 0})`,
      ...radioDotStyle,
      ...(currChecked ? radioDotCheckedStyle : void 0)
    }),
    label: theme.prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    }),
    labelText: {
      fontSize: size / 2,
      lineHeight: `${size}px`,
      color: disabled ? theme.baseLow : theme.baseMediumHigh,
      marginLeft: size / 4,
      cursor: "text"
    }
  };
}
