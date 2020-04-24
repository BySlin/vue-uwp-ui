import SlideInOut from "./SlideInOut";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "YearPicker",
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
    maxYear: {
      type: Number,
      default: 2117 // MAX Year is 275760
    },
    minYear: {
      type: Number,
      default: 1920 // MIN Year is -271821
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

    getYearsArray() {
      const { date } = this;
      const year = date.getFullYear();
      const minYearOfTen = Math.floor(year / 10) * 10;
      const years = [];
      for (let i = 0; i < 16; i++) {
        years[i] = minYearOfTen + i;
      }
      return years;
    }
  },

  render(h) {
    const { date, direction, handleMouseEnter, handleMouseLeave } = this;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "calendar-view-year",
      styles: inlineStyles
    });

    const years = this.getYearsArray();

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
          years.map((year, index) => {
            const isNow = year === new Date().getFullYear();

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
                    ? theme.altLow
                    : theme.altHigh,
                  border: "2px solid transparent"
                },
                on: {
                  click() {
                    vm.$emit("chooseYear", year);
                  },
                  mouseenter(e) {
                    handleMouseEnter(e, isNow);
                  },
                  mouseleave(e) {
                    handleMouseLeave(e, isNow);
                  }
                }
              },
              `${year}`
            );
          })
        )
      ]
    );
  }
};

function getStyles(YearPicker) {
  const {
    context: { theme },
    styles
  } = YearPicker;

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
