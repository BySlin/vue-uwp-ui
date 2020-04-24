import darkTheme from "../../styles/darkTheme";
import Link from "../Link";

export default {
  name: "HyperLink",

  props: {
    href: String,
    target: String,
    styles: Object
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { href, target, styles } = this;

    return h(
      Link,
      {
        props: {
          styles: { textDecoration: "underline", ...styles },
          href,
          target
        }
      },
      this.$slots.default
    );
  }
};
