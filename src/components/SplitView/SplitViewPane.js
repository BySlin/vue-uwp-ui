import darkTheme from "../../styles/darkTheme";

export default {
  name: "SplitViewPane",

  props: {
    styles: Object,
    className: String
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { styles, className } = this;
    const { theme } = this.context;

    return h(
      "div",
      {
        style: theme.prefixStyle(styles),
        class: className
      },
      this.$slots.default
    );
  }
};
