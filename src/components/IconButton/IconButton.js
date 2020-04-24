import darkTheme from "../../styles/darkTheme";
import Icon from "../Icon";
import { bindEvent } from "../../common/eventUtil";

export default {
  name: "IconButton",

  props: {
    hoverStyle: Object,
    activeStyle: Object,
    size: {
      type: Number,
      default: 48
    },
    disabled: Boolean,
    styles: Object,
    className: String
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { styles, hoverStyle, activeStyle, size, disabled } = this;
    const { theme } = this.context;

    const events = bindEvent(this);

    return h(
      Icon,
      {
        props: {
          styles: {
            display: "inline-block",
            fontFamily: theme.fonts.segoeMDL2Assets,
            verticalAlign: "middle",
            textAlign: "center",
            userSelect: "none",
            background: disabled ? theme.baseLow : "none",
            border: "none",
            outline: "none",
            fontSize: size / 2,
            width: size,
            height: size,
            cursor: "pointer",
            color: disabled ? theme.baseMedium : theme.baseHigh,
            padding: 0,
            flexShrink: 0,
            lineHeight: `${size}px`,
            transition: "background .25s ease-in-out",
            ...styles
          },
          hoverStyle: disabled
            ? void 0
            : hoverStyle || {
                background: theme.listLow
              },
          activeStyle: disabled
            ? void 0
            : activeStyle || {
                background: theme.baseLow
              }
        },
        on: events
      },
      this.$slots.default
    );
  }
};
