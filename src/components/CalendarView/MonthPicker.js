import SlideInOut from "./SlideInOut";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "MonthPicker",
  props: {
    date: {
      type: Date,
      default() {
        return new Date();
      }
    },
    direction: {
      type: String,
      validator(value) {
        return ["bottom", "top"].includes(value);
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

  methods: {
    handleMouseEnter(e, isNow) {
      const { theme } = this.context;
      e.currentTarget.style.border = `2px solid ${
        isNow ? theme.baseHigh : theme.baseLow
      }`;
    },

    handleMouseLeave(e) {
      e.currentTarget.style.border = "2px solid transparent";
    },

    getMonthsArray() {
      const months = [];
      for (let i = 0; i < 16; i++) {
        months[i] = i < 12 ? i + 1 : (i % 12) + 1;
      }
      return months;
    }
  },

  render(h) {
    const { date, direction, handleMouseEnter, handleMouseLeave } = this;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "calendar-view-month",
      styles: inlineStyles
    });
    const months = this.getMonthsArray();

    const vm = this;

    return h(
      SlideInOut,
      {
        props: {
          styles: inlineStyles.root,
          mode: "both",
          speed: 350,
          direction,
          appearAnimate: false
        }
      },
      [
        h(
          "div",
          {
            key: `${date.getFullYear()}, ${date.getMonth()} ${date.getDate()}`
          },
          months.map((month, index) => {
            const isCurrYear = index < 12;
            const isNow =
              isCurrYear &&
              date.getFullYear() === new Date().getFullYear() &&
              month === new Date().getMonth() + 1;

            return h(
              "button",
              {
                key: `${index}`,
                class: styleClasses.monthItem.className,
                style: {
                  ...styleClasses.monthItem.style,
                  background: isNow
                    ? theme.accent
                    : theme.useFluentDesign
                    ? isCurrYear
                      ? theme.altLow
                      : theme.listLow
                    : isCurrYear
                    ? theme.altHigh
                    : theme.chromeLow,
                  border: "2px solid transparent"
                },
                on: {
                  click() {
                    vm.$emit("chooseMonth", index);
                  },
                  mouseenter(e) {
                    handleMouseEnter(e, isNow);
                  },
                  mouseleave(e) {
                    handleMouseLeave(e, isNow);
                  }
                }
              },
              `${month}`
            );
          })
        )
      ]
    );
  }
};

function getStyles(MonthPicker) {
  const {
    context: { theme },
    styles
  } = MonthPicker;

  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      width: 296 + "px",
      height: 292 + "px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      ...styles
    }),
    monthItem: {
      transition: "all .25s 0s ease-in-out",
      background: "none",
      outline: "none",
      color: theme.baseHigh,
      border: "none",
      width: 292 / 4,
      height: 292 / 4
    }
  };
}
