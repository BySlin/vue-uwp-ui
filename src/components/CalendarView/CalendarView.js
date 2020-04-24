import * as dateUtils from "../../common/date.utils";
import DayPicker from "./DayPicker";
import Icon from "../Icon";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";

import FadeInOut from "./FadeInOut";
import ScaleInOut from "./ScaleInOut";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "CalendarView",
  props: {
    value: {
      type: Date,
      default() {
        return new Date();
      }
    },
    pickerMode: {
      type: String,
      default: "day",
      validator(value) {
        return ["year", "month", "day"].includes(value);
      }
    },
    selectSingleDay: {
      type: Boolean,
      default: true
    },
    background: String,
    styles: Object,
    className: String
  },

  data() {
    return {
      viewDate: new Date(),
      direction: "bottom",
      chooseISODates: [],
      currPickerMode: this.pickerMode
    };
  },

  watch: {
    pickerMode(v) {
      this.currPickerMode = v;
    }
  },

  methods: {
    nextAction() {
      const { viewDate, currPickerMode } = this;
      switch (currPickerMode) {
        case "day": {
          this.viewDate = dateUtils.addMonths(viewDate, 1);
          this.direction = "bottom";
          break;
        }
        case "month": {
          this.viewDate = dateUtils.addYears(viewDate, 1);
          this.direction = "bottom";
          break;
        }
        case "year": {
          this.viewDate = dateUtils.addYears(viewDate, 10);
          this.direction = "bottom";
          break;
        }
        default: {
          break;
        }
      }
    },

    prevAction() {
      const { viewDate, currPickerMode } = this;
      switch (currPickerMode) {
        case "day": {
          this.viewDate = dateUtils.addMonths(viewDate, -1);
          this.direction = "top";
          break;
        }
        case "month": {
          this.viewDate = dateUtils.addYears(viewDate, -1);
          this.direction = "top";
          break;
        }
        case "year": {
          this.viewDate = dateUtils.addYears(viewDate, -10);
          this.direction = "top";
          break;
        }
        default: {
          break;
        }
      }
    },

    handleChooseDay(date) {
      let { chooseISODates, viewDate } = this;
      const { selectSingleDay } = this;
      const dateISOString = date.toISOString();
      const index = chooseISODates.indexOf(dateISOString);
      index > -1
        ? chooseISODates.splice(index, 1)
        : (chooseISODates = selectSingleDay
            ? [dateISOString]
            : [...chooseISODates, dateISOString]);
      if (viewDate.getMonth() === date.getMonth()) {
        this.chooseISODates = chooseISODates;
      } else {
        this.chooseISODates = chooseISODates;
        this.viewDate = date;
      }

      this.$emit("input", date);
      this.$emit("changeDate", date);
    },
    onChooseMonth(month) {
      const { viewDate } = this;
      const newDate = new Date(
        viewDate.getFullYear(),
        month,
        viewDate.getDate()
      );
      this.viewDate = new Date(
        viewDate.getFullYear(),
        month,
        viewDate.getDate()
      );
      this.currPickerMode = "day";
      this.$emit("input", newDate);
      this.$emit("changeDate", newDate);
    },
    onChooseYear(year) {
      const { viewDate } = this;
      const newDate = new Date(year, viewDate.getMonth(), viewDate.getDate());
      this.viewDate = newDate;
      this.currPickerMode = "month";

      this.$emit("input", newDate);
      this.$emit("changeDate", newDate);
    },
    getTitle() {
      const { viewDate, currPickerMode } = this;
      switch (currPickerMode) {
        case "day": {
          return `${viewDate.getFullYear()}年${
            dateUtils.monthList[viewDate.getMonth()]
          }`;
        }
        case "month": {
          const year = viewDate.getFullYear();
          return `${year}年`;
        }
        case "year": {
          const year = viewDate.getFullYear();
          const minYearOfTen = Math.floor(year / 10) * 10;
          const maxYearOfTen = Math.ceil(year / 10) * 10;
          return `${minYearOfTen}年-${maxYearOfTen}年`;
        }
        default: {
          break;
        }
      }
    },
    togglePickerMode(e) {
      if (typeof e === "string") {
        this.currPickerMode = e;
      }

      switch (this.currPickerMode) {
        case "day": {
          this.currPickerMode = "month";
          break;
        }
        case "month": {
          this.currPickerMode = "year";
          break;
        }
        case "year": {
          break;
        }
        default: {
          break;
        }
      }
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const {
      className,
      viewDate,
      direction,
      chooseISODates,
      currPickerMode,

      togglePickerMode,
      prevAction,
      nextAction,
      handleChooseDay,
      onChooseMonth,
      onChooseYear
    } = this;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "calendar-view",
      styles: inlineStyles
    });
    const title = this.getTitle();

    return h(
      "div",
      {
        style: styleClasses.root.style,
        class: theme.classNames(styleClasses.root.className, className)
      },
      [
        h(
          "div",
          {
            style: styleClasses.title.style,
            class: styleClasses.title.className
          },
          [
            h(
              FadeInOut,
              {
                props: {
                  appearAnimate: false,
                  speed: 250,
                  direction,
                  styles: {
                    overflow: "hidden",
                    height: 24
                  },
                  childStyles: theme.prefixStyle({
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start"
                  })
                }
              },
              [
                h(
                  "p",
                  {
                    style: {
                      cursor: "pointer",
                      height: "100%"
                    },
                    on: {
                      click: togglePickerMode
                    },
                    key: title
                  },
                  title
                )
              ]
            ),

            h(
              "div",
              {
                style: theme.prefixStyle({
                  display: "flex",
                  flexDirection: "row"
                })
              },
              [
                h(
                  Icon,
                  {
                    props: {
                      styles: styleClasses.titleIcon.style,
                      className: styleClasses.titleIcon.className,
                      hoverStyle: {
                        color: theme.baseMedium
                      }
                    },
                    on: {
                      click: prevAction
                    }
                  },
                  "ChevronUp"
                ),
                h(
                  Icon,
                  {
                    props: {
                      styles: styleClasses.titleIcon.style,
                      className: styleClasses.titleIcon.className,
                      hoverStyle: {
                        color: theme.baseMedium
                      }
                    },
                    on: {
                      click: nextAction
                    }
                  },
                  "ChevronDown"
                )
              ]
            )
          ]
        ),

        h(
          ScaleInOut,
          {
            props: {
              appearAnimate: false,
              styles: styleClasses.body.style,
              className: styleClasses.body.className,
              mode: "both",
              minScale: 0.4,
              speed: 250
            }
          },
          [
            currPickerMode === "day"
              ? h(DayPicker, {
                  props: {
                    date: viewDate,
                    direction,
                    chooseISODates
                  },
                  on: {
                    chooseDay: handleChooseDay
                  },
                  key: currPickerMode
                })
              : currPickerMode === "month"
              ? h(MonthPicker, {
                  props: {
                    date: viewDate,
                    direction
                  },
                  on: {
                    chooseMonth: onChooseMonth
                  },

                  key: currPickerMode
                })
              : h(YearPicker, {
                  props: {
                    date: viewDate,
                    direction
                  },
                  key: currPickerMode,
                  on: {
                    chooseYear: onChooseYear
                  }
                })
          ]
        )
      ]
    );
  }
};

function getStyles(CalendarView) {
  const { context, styles, background } = CalendarView;
  const { theme } = context;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: 14,
      color: theme.baseHigh,
      width: 296,
      background:
        background ||
        (theme.useFluentDesign
          ? theme.acrylicTexture80.background
          : theme.altHigh),
      border: `2px solid ${theme.baseLow}`,
      ...styles
    }),
    title: prefixStyle({
      fontSize: 14,
      height: 42,
      padding: "0 16px",
      fontWeight: "lighter",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    titleIcon: {
      fontSize: 16,
      paddingLeft: 8,
      cursor: "pointer"
    },
    body: prefixStyle({
      width: 296,
      height: 292
    })
  };
}
