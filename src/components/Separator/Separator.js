import darkTheme from "../../styles/darkTheme";

export const SeparatorProps = {
  direction: {
    type: String,
    default: "row",
    validator(value) {
      return ["row", "column"].includes(value);
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  styles: Object
};

export default {
  name: "Separator",

  props: {
    ...SeparatorProps
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { direction, styles, className } = this;
    const isColumn = direction === "column";
    const { theme } = this.context;

    const styleClasses = theme.prepareStyle({
      style: theme.prefixStyle({
        display: isColumn ? "inline-block" : "block",
        flex: "0 0 auto",
        width: isColumn ? 1 : "100%",
        height: isColumn ? "100%" : 1,
        background: theme.baseLow,
        margin: "0 auto",
        ...styles
      }),
      className: "separator",
      extendsClassName: className
    });

    return h("span", {
      style: styleClasses.style,
      class: styleClasses.className
    });
  }
};
