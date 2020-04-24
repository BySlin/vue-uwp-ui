import darkTheme from "../../styles/darkTheme";
import PseudoClasses from "../PseudoClasses";
import Icon from "../Icon";

export default {
  name: "CheckBox",

  props: {
    value: {
      type: Boolean,
      default: null
    },
    labelPosition: {
      type: String,
      default: "right",
      validator(value) {
        return ["left", "right"].includes(value);
      }
    },
    size: {
      type: [String, Number],
      default: 20
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    background: String,
    styles: Object
  },

  data() {
    return {
      checked: this.value
    };
  },

  watch: {
    value(v) {
      this.checked = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    toggleChecked() {
      if (!this.disabled) {
        const checked = !this.value;
        this.checked = checked;
        this.$emit("input", checked);
      }
    }
  },

  render(h) {
    const { label, disabled, toggleChecked } = this;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);

    const styleClasses = theme.prepareStyles({
      className: "checkbox",
      styles: inlineStyles
    });

    const checkBoxStyles = {
      style: styleClasses.iconParent.style,
      class: styleClasses.iconParent.className
    };

    const haveLabel = label !== void 0;

    const checkbox = h(
      PseudoClasses,
      {
        props: {
          props: {
            ...checkBoxStyles,
            ...this.$props
          }
        },
        attrs: { disabled }
      },
      [
        h("div", { ...checkBoxStyles }, [
          h(
            Icon,
            {
              props: {
                styles: inlineStyles.icon
              }
            },
            "CheckMarkZeroWidthLegacy"
          )
        ])
      ]
    );

    return h(
      "div",
      {
        class: styleClasses.wrapper.className,
        style: styleClasses.wrapper.style,
        on: {
          click() {
            toggleChecked();
          }
        }
      },
      [
        haveLabel
          ? h(
              "div",
              {
                class: styleClasses.root.className,
                style: styleClasses.root.style
              },
              [
                checkbox,
                h(
                  "span",
                  {
                    class: styleClasses.label.className,
                    style: styleClasses.label.style
                  },
                  label
                )
              ]
            )
          : checkbox
      ]
    );
  }
};

function getStyles(CheckBox) {
  const {
    context,
    style,
    size,
    disabled,
    labelPosition,
    background,

    checked
  } = CheckBox;
  const { theme } = context;

  const checkedIsNull = checked === null;

  const iconParentBase = theme.prefixStyle({
    transition: "all .25s",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.altHigh,
    border: `2px solid ${theme.baseMediumHigh}`,
    width: `${size}px`,
    height: `${size}px`,
    background: background || "none",
    cursor: "default",
    overflow: "hidden"
  });

  const iconParentHover = { border: `2px solid ${theme.baseHigh}` };
  let iconParent;

  switch (checked) {
    case true: {
      iconParent = {
        ...iconParentBase,
        border: disabled
          ? `2px solid ${theme.baseLow}`
          : `2px solid ${theme.accent}`,
        "&:hover": disabled ? void 0 : iconParentHover,
        "&:disabled": {
          border: `2px solid ${theme.baseLow}`
        }
      };
      break;
    }
    case false: {
      iconParent = {
        ...iconParentBase,
        border: disabled
          ? `2px solid ${theme.baseLow}`
          : `2px solid ${theme.baseMediumHigh}`,
        "&:hover": disabled ? void 0 : iconParentHover,
        "&:disabled": {
          border: `2px solid ${theme.baseLow}`
        }
      };
      break;
    }
    case null: {
      iconParent = {
        ...iconParentBase,
        border: disabled
          ? `2px solid ${theme.baseLow}`
          : `2px solid ${theme.baseMediumHigh}`,
        "&:hover": disabled ? void 0 : iconParentHover,
        "&:disabled": {
          border: `2px solid ${theme.baseLow}`
        }
      };
      break;
    }
    default: {
      break;
    }
  }

  const leftLabelPosition = labelPosition === "left";

  return {
    wrapper: theme.prefixStyle({
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    }),
    root: theme.prefixStyle({
      display: "flex",
      flex: "0 0 auto",
      justifyContent: leftLabelPosition ? "flex-end" : "flex-start",
      flexDirection: leftLabelPosition ? "row-reverse" : "row",
      alignItems: "center"
    }),
    iconParent,
    icon: theme.prefixStyle({
      transition: "all .25s",
      color: disabled
        ? checkedIsNull
          ? "transparent"
          : theme.baseLow
        : checkedIsNull
        ? theme.accent
        : "#fff",
      flex: "0 0 auto",
      padding: 0,
      margin: 0,
      width: size,
      height: size,
      fontSize: 18,
      transform: checked
        ? "scale(1)"
        : checkedIsNull
        ? "scale(0.6125)"
        : "scale(0)",
      background: disabled
        ? checkedIsNull
          ? theme.baseLow
          : void 0
        : theme.accent
    }),
    label: theme.prefixStyle({
      color: disabled ? theme.baseLow : theme.baseMediumHigh,
      [`margin${leftLabelPosition ? "Right" : "Left"}`]: 8
    })
  };
}
