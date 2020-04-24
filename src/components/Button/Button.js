import PseudoClasses from "../PseudoClasses";
import darkTheme from "../../styles/darkTheme";
import { bindEvent } from "../../common/eventUtil";
import ToolTip from "../Tooltip";
import Icon from "../Icon";

const labelStyle = {
  verticalAlign: "middle"
};

export default {
  name: "Button",
  props: {
    borderSize: {
      type: String,
      default: "2px"
    },
    hoverStyle: Object,

    activeStyle: Object,
    icon: String,
    iconStyle: Object,
    iconPosition: {
      type: String,
      validator(value) {
        return ["left", "right"].includes(value);
      },
      default: "left"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tooltip: String,
    background: String,
    className: String,
    styles: Object
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const {
      context: { theme },

      borderSize,
      className,
      icon,
      iconStyle,
      iconPosition,
      disabled,
      tooltip,
      background,

      styles
    } = this;

    const event = { on: bindEvent(this) };

    const buttonPrepareStyle = theme.prepareStyle({
      className: "button-root",
      style: {
        display: "inline-block",
        verticalAlign: "middle",
        cursor: "pointer",
        color: theme.baseHigh,
        outline: "none",
        padding: "4px 16px",
        transition: "all .25s",
        border: `${borderSize} solid transparent`,
        background: background || theme.baseLow,
        ...theme.prefixStyle(styles),
        "&:hover": disabled
          ? void 0
          : {
              border: `2px solid ${theme.baseMediumLow}`
            },
        "&:active": disabled
          ? void 0
          : {
              background: theme.baseMediumLow
            },
        "&:disabled": {
          background: theme.baseMedium,
          cursor: "not-allowed",
          color: theme.baseMedium
        }
      },
      extendsClassName: className
    });

    const iconPrepareStyle = theme.prepareStyle({
      className: "button-icon",
      style: {
        padding: "0 4px",
        display: "inline-block",
        ...theme.prefixStyle(iconStyle)
      }
    });

    const buttonStyles = {
      style: buttonPrepareStyle.style,
      class: buttonPrepareStyle.className
    };

    let result;

    const buttonParams = { ...buttonStyles, ...event };

    if (icon) {
      const iconChild = h(
        Icon,
        {
          props: {
            styles: iconPrepareStyle.style,
            className: iconPrepareStyle.className
          }
        },
        icon
      );

      const spanChild = h("span", { style: labelStyle }, this.$slots.default);

      result = h(
        "button",
        buttonParams,
        iconPosition === "right"
          ? [spanChild, iconChild]
          : [iconChild, spanChild]
      );
    } else {
      result = h("button", buttonParams, this.$slots.default);
    }

    const normalRender = h(
      PseudoClasses,
      {
        props: { props: { ...buttonParams, ...this.$props } },
        attrs: { disabled }
      },
      [result]
    );

    const tooltipSlot = this.$slots.tooltip;

    const tooltipNode = tooltip
      ? h("span", { slot: "content" }, tooltip)
      : tooltipSlot
      ? h("template", { slot: "content" }, tooltipSlot)
      : void 0;

    return tooltipNode ? h(ToolTip, [tooltipNode, normalRender]) : normalRender;
  }
};
