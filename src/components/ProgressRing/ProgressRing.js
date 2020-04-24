import darkTheme from "../../styles/darkTheme";
import vendors from "../../common/browser/vendors";

const vendorPrefixes = vendors.map(str => (str ? `-${str}-` : str));

export default {
  name: "ProgressRing",

  props: {
    dotsNumber: {
      type: Number,
      default: 6
    },
    speed: {
      type: Number,
      default: 5000
    },
    size: {
      type: Number,
      default: 100
    },
    dotsStyle: Object,
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
      const { dotsNumber, speed } = this;
      return `react-uwp-progress-ring_${dotsNumber}_${speed}`;
    },
    getCSSText(className) {
      const { dotsNumber, speed } = this;
      return `.${className} {
          }
          ${Array(dotsNumber)
            .fill(0)
            .map((name, index) =>
              [
                `.${className}-item-` + index + " {",
                vendorPrefixes
                  .map(
                    str =>
                      `    ${str}animation: CircleLoopFade ${speed}ms ${(index *
                        speed) /
                        40}ms linear infinite normal forwards;`
                  )
                  .join("\n"),
                "  }"
              ].join("")
            )
            .join("")}
          
          ${vendorPrefixes.map(
            str => `@${str}keyframes CircleLoopFade {
            0% {
              transform: rotateZ(0deg);
              opacity: 1;
            }
            12.5% {
              transform: rotateZ(180deg);
              opacity: 0.8;
            }
            25% {
              transform: rotateZ(270deg);
              opacity: 0.8;
            }
            37.5% {
              transform: rotateZ(300deg);
              opacity: 0.8;
            }
            50% {
              transform: rotateZ(360deg);
              opacity: 1;
            }
            62.5% {
              transform: rotateZ(540deg);
              opacity: 0;
            }
            75% {
              transform: rotateZ(630deg);
              opacity: 0;
            }
            87.5% {
              transform: rotateZ(660deg);
              opacity: 0;
            }
            100% {
              transform: rotateZ(720deg);
              opacity: 1;
            }
          }`
          )}.join("")`;
    }
  },

  render(h) {
    const { className } = this;

    const { theme } = this.context;
    const onlyClassName = this.getOnlyClassName();
    theme.styleManager.addCSSTextWithUpdate(this.getCSSText(onlyClassName));

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "progress-ring",
      styles: inlineStyles
    });

    return h(
      "div",
      {
        class: theme.classNames(styleClasses.root.className, className),
        style: styleClasses.root.style
      },
      [
        h(
          "div",
          null,
          Array(5)
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
        )
      ]
    );
  }
};

function getStyles(ProgressRing) {
  const {
    styles,
    dotsStyle,
    size,
    context: { theme }
  } = ProgressRing;

  const dotsSize = size / 12;

  return {
    root: theme.prefixStyle({
      display: "inline-block",
      ...styles,
      width: size,
      height: size,
      position: "relative"
    }),
    item: theme.prefixStyle({
      background: theme.accent,
      ...dotsStyle,
      position: "absolute",
      top: 0,
      left: size / 2,
      width: dotsSize,
      height: dotsSize,
      opacity: 0,
      transformOrigin: `0px ${size / 2}px`,
      borderRadius: dotsSize
    })
  };
}
