import darkTheme from "../../styles/darkTheme";
import AddBlurEvent from "../../common/AddBlurEvent";
import scrollToYEasing from "../../common/browser/scrollToYEasing";
import { getLastDayOfMonth } from "../../common/date.utils";
import PseudoClasses from "../PseudoClasses";
import ListView from "../ListView";
import IconButton from "../IconButton";
import Separator from "../Separator";

export default {
  name: "DatePicker",
  props: {
    value: {
      type: Date,
      default: new Date()
    },
    maxYear: {
      type: Number,
      default: new Date().getFullYear() + 50
    },
    minYear: {
      type: Number,
      default: new Date().getFullYear() - 50
    },
    inputItemHeight: {
      type: Number,
      default: 28
    },
    pickerItemHeight: {
      type: Number,
      default: 44
    },
    background: String,
    className: String,
    styles: Object
  },

  data() {
    return {
      showPicker: false,
      currDate: this.value,
      addBlurEvent: new AddBlurEvent(),
      monthIndex: 0,
      dateIndex: 0,
      yearIndex: 0,
      prevDate: this.value
    };
  },

  watch: {
    value(v) {
      this.currDate = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    addBlurEventMethod() {
      this.addBlurEvent.setConfig({
        addListener: this.showPicker,
        clickExcludeElm: this.$refs.rootElm,
        blurCallback: () => {
          this.showPicker = false;
          this.currDate = this.prevDate;
        },
        blurKeyCodes: [27]
      });
    },
    setDate(date, month, year) {
      const { currDate } = this;
      const currDateNumb = date === void 0 ? currDate.getDate() : date;
      const currMonth = month === void 0 ? currDate.getMonth() : month;
      const currYear = year === void 0 ? currDate.getFullYear() : year;
      this.currDate = new Date(currYear, currMonth, currDateNumb);
    },
    toggleShowPicker(showPicker = !this.showPicker) {
      this.showPicker = showPicker;
      if (showPicker) {
        this.prevDate = this.currDate;
      }
    }
  },

  mounted() {
    this.addBlurEventMethod();
  },

  updated() {
    const { pickerItemHeight } = this;

    if (this.$refs.monthListView) {
      scrollToYEasing(
        this.$refs.monthListView.$el,
        this.monthIndex * pickerItemHeight,
        0.1
      );
    }

    if (this.$refs.dateListView) {
      scrollToYEasing(
        this.$refs.dateListView.$el,
        this.dateIndex * pickerItemHeight,
        0.1
      );
    }

    if (this.$refs.yearListView) {
      scrollToYEasing(
        this.$refs.yearListView.$el,
        this.yearIndex * pickerItemHeight,
        0.1
      );
    }

    this.addBlurEventMethod();
  },

  destroyed() {
    this.addBlurEvent.cleanEvent();
  },

  render(h) {
    const {
      maxYear,
      minYear,
      pickerItemHeight,
      className,
      currDate,

      dateIndex,
      yearIndex,
      monthIndex,
      toggleShowPicker
    } = this;

    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "date-picker",
      styles: inlineStyles
    });

    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth() + 1;
    const currDateNumb = currDate.getDate();

    const monthArray = Array(12)
      .fill(0)
      .map((numb, index) => index + 1);

    const dateArray = Array(getLastDayOfMonth(currDate).getDate())
      .fill(0)
      .map((numb, index) => index + 1);

    const yearArray = Array(maxYear - minYear)
      .fill(0)
      .map((numb, index) => minYear + index);

    this.monthIndex = monthArray.indexOf(currMonth);
    this.dateIndex = dateArray.indexOf(currDateNumb);
    this.yearIndex = yearArray.indexOf(currYear);

    const vm = this;

    return h(
      PseudoClasses,
      {
        props: {
          props: {
            style: styleClasses.root.style,
            class: styleClasses.root.className,
            ...this.$props
          }
        }
      },
      [
        h(
          "div",
          {
            style: styleClasses.root.style,
            class: theme.classNames(styleClasses.root.className, className),
            ref: "rootElm"
          },
          [
            h(
              "div",
              {
                style: styleClasses.pickerModal.style,
                class: theme.classNames(
                  styleClasses.pickerModal.className,
                  className
                )
              },
              [
                h(
                  "div",
                  {
                    style: styleClasses.listViews.style,
                    class: styleClasses.listViews.className
                  },
                  [
                    h(
                      ListView,
                      {
                        props: {
                          styles: inlineStyles.listView,
                          listItemStyle: inlineStyles.listItem,
                          defaultFocusListIndex: yearIndex
                        },
                        on: {
                          chooseItem(yearIndex) {
                            vm.setDate(void 0, void 0, minYear + yearIndex);
                          }
                        },
                        ref: "yearListView"
                      },
                      yearArray.map(child => {
                        return h("span", {}, child);
                      })
                    ),

                    h(
                      ListView,
                      {
                        props: {
                          styles: inlineStyles.listView,
                          listItemStyle: inlineStyles.listItem,
                          defaultFocusListIndex: monthIndex
                        },
                        on: {
                          chooseItem(month) {
                            vm.setDate(void 0, month, void 0);
                          }
                        },
                        ref: "monthListView"
                      },
                      monthArray.map(child => {
                        return h("span", {}, child);
                      })
                    ),

                    h(
                      ListView,
                      {
                        props: {
                          styles: inlineStyles.listView,
                          listItemStyle: inlineStyles.listItem,
                          defaultFocusListIndex: dateIndex
                        },
                        on: {
                          chooseItem(dayIndex) {
                            vm.setDate(dayIndex + 1, void 0, void 0);
                          }
                        },
                        ref: "dateListView"
                      },
                      dateArray.map(child => {
                        return h("span", {}, child);
                      })
                    )
                  ]
                ),

                h(
                  "div",
                  {
                    style: styleClasses.iconButtonGroup.style,
                    class: styleClasses.iconButtonGroup.className
                  },
                  [
                    h(
                      IconButton,
                      {
                        props: {
                          styles: inlineStyles.iconButton,
                          size: pickerItemHeight
                        },
                        on: {
                          click() {
                            vm.showPicker = false;
                            vm.$emit("input", currDate);
                          }
                        }
                      },
                      "AcceptLegacy"
                    ),

                    h(
                      IconButton,
                      {
                        props: {
                          styles: inlineStyles.iconButton,
                          size: pickerItemHeight
                        },
                        on: {
                          click() {
                            vm.showPicker = false;
                            vm.currDate = vm.prevDate;
                          }
                        }
                      },
                      "ClearLegacy"
                    )
                  ]
                )
              ]
            ),

            h(
              "span",
              {
                style: styleClasses.button.style,
                class: styleClasses.button.className,
                on: {
                  click() {
                    toggleShowPicker();
                  }
                }
              },
              currYear
            ),

            h(Separator, {
              props: {
                direction: "column",
                styles: { margin: 0 }
              }
            }),

            h(
              "span",
              {
                style: styleClasses.button.style,
                class: styleClasses.button.className,
                on: {
                  click() {
                    toggleShowPicker();
                  }
                }
              },
              currMonth
            ),

            h(Separator, {
              props: {
                direction: "column",
                styles: { margin: 0 }
              }
            }),

            h(
              "span",
              {
                style: styleClasses.button.style,
                class: styleClasses.button.className,
                on: {
                  click() {
                    toggleShowPicker();
                  }
                }
              },
              currDateNumb
            )
          ]
        )
      ]
    );
  }
};

function getStyles(DatePicker) {
  const {
    context: { theme },
    styles,
    inputItemHeight,
    pickerItemHeight,
    background,
    showPicker
  } = DatePicker;

  const { prefixStyle } = theme;
  const currBackground =
    background ||
    (theme.useFluentDesign
      ? theme.acrylicTexture80.background
      : theme.chromeLow);

  return {
    root: prefixStyle({
      width: 320,
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      verticalAlign: "middle",
      color: theme.baseMediumHigh,
      boxShadow: `inset 0 0 0 2px ${theme.baseMediumLow}`,
      height: inputItemHeight,
      lineHeight: `${inputItemHeight}px`,
      position: "relative",
      transition: "all .25s ease-in-out",
      "&:hover": {
        boxShadow: `inset 0 0 0 2px ${theme.baseMediumHigh}`
      },
      ...styles
    }),
    pickerModal: prefixStyle({
      overflow: "hidden",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      background: currBackground,
      top: 0,
      left: 0,
      width: "100%",
      opacity: showPicker ? 1 : 0,
      transform: `scaleY(${showPicker ? 1 : 0}) translateY(-50%)`,
      transformOrigin: "top",
      pointerEvents: showPicker ? "all" : "none",
      zIndex: theme.zIndex.flyout,
      transition: "all .25s ease-in-out"
    }),
    listViews: prefixStyle({
      border: `1px solid ${theme.listLow}`,
      flex: "0 0 auto",
      width: "100%",
      height: pickerItemHeight * 7,
      display: "flex",
      flexDirection: "row"
    }),
    listView: prefixStyle({
      userSelect: "none",
      border: "none",
      borderLeft: `1px solid ${theme.listLow}`,
      width: "100%",
      height: pickerItemHeight * 7,
      padding: `${pickerItemHeight * 3}px 0`,
      overflowY: "inherit",
      overflowX: "hidden",
      flex: "1 1 auto"
    }),
    listItem: {
      padding: "0 8px",
      height: pickerItemHeight,
      lineHeight: `${pickerItemHeight}px`,
      flex: "0 0 auto",
      fontSize: pickerItemHeight / 3
    },
    button: {
      flex: "1 1 auto",
      display: "inline-block",
      cursor: "default",
      verticalAlign: "top",
      height: inputItemHeight - 4,
      lineHeight: `${inputItemHeight - 4}px`,
      padding: `0 ${inputItemHeight - 4}px`
    },
    iconButtonGroup: {
      boxShadow: `inset 0 0 0 1px ${theme.baseLow}`,
      zIndex: theme.zIndex.flyout + 1
    },
    iconButton: {
      verticalAlign: "top",
      width: "50%",
      height: pickerItemHeight
    }
  };
}
