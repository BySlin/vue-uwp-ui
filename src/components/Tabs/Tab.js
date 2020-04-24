import darkTheme from "../../styles/darkTheme";

export default {
  name: "Tab",
  props: {
    styles: Object,
    className: String,
    title: String
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { styles } = this;
    const { theme } = this.context;

    return h(
      "div",
      {
        style: {
          display: "inline-block",
          verticalAlign: "middle",
          ...theme.prefixStyle(styles)
        }
      },
      this.$slots.default
    );
  }
};
