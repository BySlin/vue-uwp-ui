import PseudoClasses from "../PseudoClasses";
import Icon from "../Icon";
import darkTheme from "../../styles/darkTheme";
import { bindEvent } from "../../common/eventUtil";

export default {
  name: "AppBarButton",

  props: {
    icon: String,
    iconStyle: Object,
    hoverStyle: Object,
    label: String,
    labelPosition: {
      type: String,
      validator(value) {
        return ["right", "bottom", "collapsed"].includes(value);
      },
      default: "bottom"
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
    const {
      context: { theme },
      label,
      icon,
      className,
      labelPosition
    } = this;

    const inlineStyles = getStyles(this);

    const styles = theme.prepareStyles({
      styles: inlineStyles,
      className: "app-bar-button"
    });

    const event = { on: bindEvent(this) };

    const appBarButtonParams = {
      class: theme.classNames(className, styles.root.className),
      style: styles.root.style,
      ...event
    };

    return h(
      PseudoClasses,
      {
        props: {
          props: {
            ...appBarButtonParams,
            ...this.$props
          }
        }
      },
      [
        h("div", { ...appBarButtonParams }, [
          h(
            Icon,
            {
              props: {
                styles: inlineStyles.icon
              }
            },
            icon
          ),
          labelPosition !== "collapsed" &&
            h(
              "p",
              {
                style: styles.label.style,
                class: styles.label.className
              },
              label
            )
        ])
      ]
    );
  }
};

function getStyles(AppBarButtonButton) {
  const {
    context: { theme },
    labelPosition,
    iconStyle,
    hoverStyle,
    styles
  } = AppBarButtonButton;

  const { prefixStyle } = theme;

  const flexDirection = {
    bottom: "column",
    right: "row",
    left: "row-reverse"
  };

  const isRight = labelPosition === "right";

  return {
    root: prefixStyle({
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: "none",
      display: "flex",
      flexDirection: flexDirection[labelPosition],
      alignItems: "center",
      justifyContent: "flex-start",
      flex: "0 0 auto",
      height: "100%",
      padding: "0 10px",
      maxWidth: isRight ? 120 : 72,
      cursor: "default",
      transition: "all .25s",
      "&:hover": hoverStyle || {
        background: theme.listAccentLow
      },
      ...styles
    }),
    label: {
      lineHeight: isRight ? void 0 : 1,
      height: isRight ? void 0 : 28,
      fontSize: 12,
      width: "100%",
      textAlign: "center",
      textOverflow: "ellipsis",
      overflow: "hidden"
    },
    icon: prefixStyle({
      width: 48,
      height: 48,
      lineHeight: "48px",
      fontSize: 18,
      ...iconStyle
    })
  };
}
