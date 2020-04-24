import Separator, { SeparatorProps } from "../Separator";

export default {
  name: "AppBarSeparator",

  props: {
    ...SeparatorProps,
    direction: {
      type: String,
      default: "column",
      validator(value) {
        return ["row", "column"].includes(value);
      }
    }
  },

  render(h) {
    const { direction, styles } = this;

    return h(Separator, {
      props: {
        direction,
        styles: {
          margin: "10px 0",
          ...styles
        }
      }
    });
  }
};
