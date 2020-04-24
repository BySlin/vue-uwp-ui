import darkTheme from "../../styles/darkTheme";
import PseudoClasses from "../PseudoClasses";
import { bindEvent } from "../../common/eventUtil";
import Icon from "../Icon";

export default {
  name: "SplitViewCommand",
  props: {
    label: String,
    icon: String,
    visited: Boolean,
    iconStyle: Object,
    isTenFt: {
      type: Boolean,
      default: false
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    styles: Object,
    className: String
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { className, label, icon, visited, isTenFt } = this;

    const { theme } = this.context;
    const inlineStyles = getStyles(this);

    const rootStyleClasses = theme.prepareStyle({
      className: "split-view-command",
      style: inlineStyles.root,
      extendsClassName: className
    });
    const iconStyleClasses = theme.prepareStyle({
      className: "split-view-command-icon",
      style: inlineStyles.icon,
      extendsClassName: className
    });
    const labelStyleClasses = theme.prepareStyle({
      className: "split-view-command-label",
      style: inlineStyles.label,
      extendsClassName: className
    });
    const visitedBorderStyleClasses = theme.prepareStyle({
      className: "split-view-command-border",
      style: inlineStyles.visitedBorder,
      extendsClassName: className
    });

    const event = { on: bindEvent(this) };

    const splitViewParams = {
      style: rootStyleClasses.style,
      class: rootStyleClasses.className,
      ...event
    };

    return h(
      PseudoClasses,
      {
        props: {
          props: { ...splitViewParams, ...this.$props }
        }
      },
      [
        h("div", splitViewParams, [
          visited && !isTenFt
            ? h("div", {
                style: visitedBorderStyleClasses.style,
                class: visitedBorderStyleClasses.className
              })
            : null,
          h(
            Icon,
            {
              props: {
                styles: iconStyleClasses.style,
                className: iconStyleClasses.className
              }
            },
            icon
          ),

          label &&
            h(
              "div",
              {
                style: labelStyleClasses.style,
                class: labelStyleClasses.className
              },
              label
            )
        ])
      ]
    );
  }
};

function getStyles(SplitViewCommand) {
  const {
    context,
    styles,
    iconStyle,
    visited,
    isTenFt,
    showLabel
  } = SplitViewCommand;

  const { theme } = context;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: isTenFt ? (visited ? theme.listAccentLow : "none") : "none",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      transition: "all .25s 0s ease-in-out",
      "&:hover": {
        background: isTenFt ? theme.accent : theme.baseLow
      },
      ...styles
    }),
    visitedBorder: {
      width: 0,
      borderLeft: `4px solid ${theme.accent}`,
      height: "50%",
      left: 0,
      top: "25%",
      position: "absolute"
    },
    icon: prefixStyle({
      cursor: "default",
      flex: "0 0 auto",
      width: 48,
      height: 48,
      lineHeight: "48px",
      color: isTenFt ? void 0 : visited ? theme.accent : theme.baseHigh,
      fontSize: 16,
      ...iconStyle
    }),
    label: {
      color: isTenFt ? void 0 : visited ? theme.accent : theme.baseHigh,
      cursor: "default",
      opacity: showLabel ? 1 : 0,
      transition: "opacity .25s"
    }
  };
}
