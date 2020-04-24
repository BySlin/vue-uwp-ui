import PseudoClasses from "../PseudoClasses";
import icons from "./icons";
import darkTheme from "../../styles/darkTheme";
import { bindEvent } from "../../common/eventUtil";

export default {
  name: "Icon",
  props: {
    size: {
      type: [Number, String]
    },
    hoverStyle: Object,
    activeStyle: Object,
    useSVGElement: {
      type: Boolean,
      default: false
    },
    className: String,
    styles: Object
  },
  data() {
    return {
      hovered: false,
      styleClasses: {}
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    handleMouseEnter() {
      this.hovered = true;
    },
    handleMouseLeave() {
      this.hovered = false;
    },
    value() {
      let defaultNode = this.$slots.default
        ? this.$slots.default.length > 0
          ? this.$slots.default[0]
          : null
        : null;

      if (defaultNode) {
        const text = defaultNode.text.trim();
        return icons[text] ? icons[text] : text;
      }
      return null;
    }
  },

  render(h) {
    const {
      context: { theme },
      size,
      className,
      hoverStyle,
      activeStyle,
      hovered,

      handleMouseEnter,
      handleMouseLeave,

      styles,

      value
    } = this;

    const inlineStyle = theme.prefixStyle({
      display: "inline-block",
      textAlign: "center",
      verticalAlign: "middle",
      fontFamily: theme.fonts.segoeMDL2Assets,
      transition: "all .25s",
      border: "none",
      outline: "none",
      userSelect: "none",
      width: size,
      height: size,
      lineHeight: size ? `${size}px` : "inherit",
      fontSize: size || "inherit",
      color: "inherit",
      ...styles,
      "&:hover": hovered ? hoverStyle : void 0,
      "&:active": activeStyle
    });

    let prepareStyle = theme.prepareStyle({
      className: "icon",
      style: inlineStyle,
      extendsClassName: className
    });

    let icon;

    const events = bindEvent(this);

    const event = {
      on: {
        ...events,
        mouseenter: () => {
          events.mouseenter();
          handleMouseEnter();
        },
        mouseleave: () => {
          events.mouseleave();
          handleMouseLeave();
        }
      }
    };

    const params = {
      class: prepareStyle.className,
      style: prepareStyle.style,
      ...event
    };
    if (this.useSVGElement) {
      icon = h("text", params, value());
    } else {
      icon = h("span", params, value());
    }
    return h(PseudoClasses, { props: { props: params } }, [icon]);
  }
};
