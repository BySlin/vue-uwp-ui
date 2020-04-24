import darkTheme from "../../styles/darkTheme";
import PseudoClasses from "../PseudoClasses";
import { bindEvent } from "../../common/eventUtil";

export default {
  name: "Link",

  props: {
    styles: Object,
    className: String,
    href: String,
    target: String
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { styles, className, href, target } = this;
    const { theme } = this.context;
    const inlineStyle = theme.prefixStyle({
      fontSize: 14,
      color: theme.accent,
      cursor: "pointer",
      textDecoration: "none",
      transition: "all .25s 0s ease-in-out",
      background: "none",
      "&:hover": {
        color: theme.baseMedium
      },
      ...styles
    });
    const styleClasses = theme.prepareStyle({
      className: "link",
      style: inlineStyle,
      extendsClassName: className
    });

    const event = { on: bindEvent(this) };

    const linkParams = {
      style: styleClasses.style,
      class: styleClasses.className,
      ...event
    };

    return h(
      PseudoClasses,
      {
        props: {
          props: { ...linkParams, ...this.$props }
        }
      },
      [
        h(
          "a",
          {
            attrs: {
              href,
              target
            }
          },
          this.$slots.default
        )
      ]
    );
  }
};
