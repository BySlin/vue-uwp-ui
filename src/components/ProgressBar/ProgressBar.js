import darkTheme from "../../styles/darkTheme";
import vendors from "../../common/browser/vendors";

const vendorPrefixes = vendors.map(str => (str ? `-${str}-` : str));

export default {
  name: "ProgressBar",

  props: {
    defaultProgressValue: {
      type: Number,
      default: 0.5
    },
    speed: {
      type: Number,
      default: 4000
    },
    barWidth: {
      type: Number,
      default: 320
    },
    barHeight: {
      type: Number,
      default: 4
    },
    isIndeterminate: {
      type: Boolean,
      default: false
    },
    styles: Object,
    className: String
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    getOnlyClassName() {
      const { speed } = this;
      return `react-uwp-progress-bar_${speed}`;
    },
    getCSSText(className) {
      const { speed, barHeight, barWidth } = this;
      return `.${className} {
        }
        ${Array(5)
          .fill(0)
          .map((name, index) =>
            [
              `.${className}-item-` + index + " {",
              vendorPrefixes
                .map(
                  str =>
                    `    ${str}animation: ProgressBar ${speed}ms ${(index *
                      barHeight *
                      barWidth *
                      speed) /
                      5 /
                      10e3}ms cubic-bezier(0.25, 0.75, 0.75, 0.25) infinite normal forwards;`
                )
                .join("\n"),
              "  }"
            ].join("")
          )
          .join("")}
        
        ${vendorPrefixes.map(
          str => `@${str}keyframes ProgressBar {
          0% {
            left: -${barHeight}px;
          }
          15% {
            left: -${barHeight}px;
          }
          85% {
            left: ${barWidth + barHeight}px;
          }
          100% {
            left: ${barWidth + barHeight}px;
          }
        }`
        )}.join("")`;
    }
  },

  render(h) {
    const { isIndeterminate, className } = this;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "progress-bar",
      styles: inlineStyles
    });
    const onlyClassName = this.getOnlyClassName();
    theme.styleManager.addCSSTextWithUpdate(this.getCSSText(onlyClassName));

    return h(
      "div",
      {
        class: theme.classNames(styleClasses.root.className, className),
        style: styleClasses.root.style
      },
      [
        h(
          "div",
          {
            class: styleClasses.bar.className,
            style: styleClasses.bar.style
          },
          isIndeterminate
            ? Array(5)
                .fill(0)
                .map((numb, index) => {
                  return h("div", {
                    key: `${index}`,

                    class: theme.classNames(
                      styleClasses.item.className,
                      `${onlyClassName}-item-${index}`
                    ),
                    style: styleClasses.item.style
                  });
                })
            : null
        )
      ]
    );
  }
};

function getStyles(ProgressBar) {
  const {
    context: { theme },
    styles,
    barWidth,
    barHeight,
    isIndeterminate,
    defaultProgressValue
  } = ProgressBar;

  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      display: "inline-block",
      verticalAlign: "middle",
      background: isIndeterminate ? void 0 : theme.chromeLow,
      overflow: "hidden",
      width: barWidth,
      height: barHeight,
      ...styles
    }),
    bar: prefixStyle({
      overflow: "hidden",
      background: isIndeterminate ? void 0 : theme.accent,
      position: "relative",
      width: "100%",
      height: "100%",
      transform: isIndeterminate
        ? void 0
        : `translate3d(-${(1 - defaultProgressValue) * 100}%, 0, 0)`
    }),
    item: {
      background: theme.listAccentHigh,
      position: "absolute",
      top: 0,
      left: -barHeight,
      width: barHeight,
      height: barHeight,
      borderRadius: barHeight
    }
  };
}
