import darkTheme from "../../styles/darkTheme";
import Icon from "../Icon";

export default {
  name: "Placeholder",

  props: {
    styles: Object
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
        style: theme.prefixStyle({
          background: theme.chromeMedium,
          padding: "20px",
          display: "inline-block",
          verticalAlign: "middle",
          cursor: "default",
          ...styles
        })
      },
      [
        h(
          Icon,
          {
            props: {
              styles: {
                color: theme.baseMedium,
                fontSize: 80,
                verticalAlign: "middle",
                display: "block"
              },
              hoverStyle: {}
            }
          },
          "Photo2"
        )
      ]
    );
  }
};
