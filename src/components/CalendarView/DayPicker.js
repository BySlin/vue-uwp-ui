import * as dateUtils from "../../common/date.utils";
import SlideInOut from "./SlideInOut";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "DayPicker",

  props: {
    date: {
      type: Date,
      default: new Date()
    },
    direction: {
      type: String,
      validator(value) {
        return ["bottom", "top"].includes(value);
      },
      default: "bottom"
    },
    chooseISODates: {
      type: Array,
      default: []
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
    handleMouseEnter(e, date, isCurrMonth, isNow) {
      if (isNow) return;
      const { theme } = this.context;
      const { chooseISODates } = this;
      const isChoose = chooseISODates.includes(date.toISOString());
      e.currentTarget.style.boxShadow = isChoose
        ? `inset 0 0 0 2px ${theme.accent}, inset 0 0 0px 4px ${theme.altHigh}`
        : `inset 0 0 0 2px ${theme.baseMedium}`;
      e.currentTarget.style.background = isChoose
        ? theme.accent
        : isCurrMonth
        ? theme.useFluentDesign
          ? theme.altLow
          : theme.altHigh
        : theme.useFluentDesign
        ? theme.listLow
        : theme.chromeLow;
    },

    handleMouseLeave(e, date, isCurrMonth, isNow) {
      if (isNow) return;
      const { theme } = this.context;
      const { chooseISODates } = this;
      const isChoose = chooseISODates.includes(date.toISOString());
      e.currentTarget.style.boxShadow = isChoose
        ? `inset 0 0 0 2px ${theme.accent}, inset 0 0 0px 4px ${
            theme.altMedium
          }`
        : `inset 0 0 0 2px ${theme.baseLow}`;
      e.currentTarget.style.background = isChoose
        ? theme.accent
        : isCurrMonth
        ? theme.useFluentDesign
          ? theme.altLow
          : theme.altHigh
        : theme.useFluentDesign
        ? theme.listLow
        : theme.chromeLow;
    },

    getDaysArray() {
      const { date } = this;
      const currMonth = date.getMonth();
      const currYear = date.getFullYear();
      const daysArray = [];
      const prevMonthLast = dateUtils.getLastDayOfPrevMonth(date);
      const prevMonthLastDay = prevMonthLast.getDay();
      const prevMonthLastDate = prevMonthLast.getDate();
      const monthFirst = dateUtils.getFirstDayOfMonth(date);
      const monthFirstDate = monthFirst.getDate();
      const monthLastDate = dateUtils.getLastDayOfMonth(date).getDate();
      for (let i = 0; i < 42; i++) {
        daysArray[i] = {};
        let day;
        if (i < prevMonthLastDay) {
          day = prevMonthLastDate - prevMonthLastDay + i + 1;
          daysArray[i]["date"] = new Date(currYear, currMonth - 1, day);
          daysArray[i]["isCurrMonth"] = false;
        } else if (i < monthLastDate + prevMonthLastDay) {
          day = monthFirstDate - prevMonthLastDay + i;
          daysArray[i]["date"] = new Date(currYear, currMonth, day);
          daysArray[i]["isCurrMonth"] = true;
        } else {
          day = i - prevMonthLastDay - monthLastDate + 1;
          daysArray[i]["date"] = new Date(currYear, currMonth + 1, day);
          daysArray[i]["isCurrMonth"] = false;
        }
        daysArray[i]["day"] = day;
      }
      return daysArray;
    }
  },

  render(h) {
    const {
      date,
      direction,
      chooseISODates,
      handleMouseEnter,
      handleMouseLeave
    } = this;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "calendar-view-day",
      styles: inlineStyles
    });
    const days = this.getDaysArray();

    const vm = this;

    return h(
      "div",
      {
        class: styleClasses.container.className,
        style: styleClasses.container.style
      },
      [
        h(
          "div",
          {
            class: styleClasses.weeklyHead.className,
            style: styleClasses.weeklyHead.style
          },
          dateUtils.dayShortList.map((str, index) => {
            return h(
              "button",
              {
                key: `${index}`,
                class: styleClasses.weeklyHeadItem.className,
                style: styleClasses.weeklyHeadItem.style
              },
              str
            );
          })
        ),

        h(
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
              days.map(({ day, isCurrMonth, date }, index) => {
                const dateISOString = date.toISOString();
                const isChoose = chooseISODates.includes(dateISOString);
                const nowDate = new Date();
                const isNow =
                  date.getFullYear() === nowDate.getFullYear() &&
                  date.getMonth() === nowDate.getMonth() &&
                  date.getDate() === nowDate.getDate();

                return h(
                  "button",
                  {
                    key: `${index}`,
                    class: styleClasses.dayItem.className,
                    style: {
                      ...styleClasses.dayItem.style,
                      boxShadow: isNow
                        ? `inset 0 0 0 2px ${theme.accent}, inset 0 0 0px 4px ${
                            theme.altHigh
                          }`
                        : isChoose
                        ? `inset 0 0 0 2px ${theme.accent}, inset 0 0 0px 4px ${
                            theme.altMedium
                          }`
                        : `inset 0 0 0 2px ${theme.baseLow}`,
                      color: isCurrMonth ? theme.baseHigh : theme.baseLow,
                      background:
                        isNow || isChoose
                          ? theme.accent
                          : isCurrMonth
                          ? theme.useFluentDesign
                            ? theme.altLow
                            : theme.altHigh
                          : theme.useFluentDesign
                          ? theme.listLow
                          : theme.chromeLow
                    },
                    on: {
                      click() {
                        vm.$emit("chooseDay", date);
                      },
                      mouseenter(e) {
                        handleMouseEnter(e, date, isCurrMonth, isNow);
                      },
                      mouseleave(e) {
                        handleMouseLeave(e, date, isCurrMonth, isNow);
                      }
                    }
                  },
                  day
                );
              })
            )
          ]
        )
      ]
    );
  }
};

function getStyles(DayPicker) {
  const {
    context: { theme },
    styles
  } = DayPicker;
  const { prefixStyle } = theme;

  return {
    container: prefixStyle({
      height: 292,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexGrow: 0
    }),
    root: prefixStyle({
      width: 296 + "px",
      height: (292 / 7) * 6 - 2 + "px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      ...styles
    }),
    weeklyHead: prefixStyle({
      display: "flex",
      flexDirection: "row"
    }),
    weeklyHeadItem: {
      background: "none",
      border: "none",
      outline: "none",
      color: theme.baseHigh,
      width: 292 / 7,
      height: 40
    },
    dayItem: {
      transition: "all .25s 0s ease-in-out",
      border: "none",
      background: "none",
      outline: "none",
      color: theme.baseHigh,
      width: 292 / 7,
      height: 292 / 7
    }
  };
}
