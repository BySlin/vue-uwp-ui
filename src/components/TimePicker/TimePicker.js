import AddBlurEvent from "../../common/AddBlurEvent";
import darkTheme from "../../styles/darkTheme";
import Separator from "../Separator";
import IconButton from "../IconButton";
import PseudoClasses from "../PseudoClasses";
import ListView from "../ListView";
import scrollToYEasing from "../../common/browser/scrollToYEasing";

export default {
  name: "TimePicker",

  props: {
    disabledHour: {
      type: Boolean,
      default: false
    },
    disabledMinute: {
      type: Boolean,
      default: false
    },
    disabledSecond: {
      type: Boolean,
      default: false
    },

    value: {
      type: String,
      default: "12:30:00"
    },

    defaultShowPicker: {
      type: Boolean,
      default: false
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
    const currTimeArray = this.currTimeArray();

    return {
      showPicker: this.defaultShowPicker,
      currHour: currTimeArray[0],
      currMinute: currTimeArray[1],
      currSecond: currTimeArray[2],
      addBlurEvent: new AddBlurEvent(),
      hourIndex: 0,
      minuteIndex: 0,
      secondIndex: 0,
      prevState: {
        currHour: currTimeArray[0],
        currMinute: currTimeArray[1],
        currSecond: currTimeArray[2]
      }
    };
  },

  watch: {
    defaultShowPicker(v) {
      this.showPicker = v;
    },
    value() {
      const currTimeArray = this.currTimeArray();
      this.currHour = currTimeArray[0];
      this.currMinute = currTimeArray[1];
      this.currSecond = currTimeArray[2];
    }
  },

  computed: {
    currTime() {
      const {
        formatValue,
        disabledHour,
        disabledMinute,
        disabledSecond
      } = this;

      let result = [];
      if (!disabledHour) {
        result.push(this.currHour);
      }

      if (!disabledMinute) {
        result.push(this.currMinute);
      }

      if (!disabledSecond) {
        result.push(this.currSecond);
      }

      return result.map(i => formatValue(i)).join(":");
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
          const { currHour, currMinute, currSecond } = this.prevState;

          this.showPicker = false;
          this.currHour = currHour;
          this.currMinute = currMinute;
          this.currSecond = currSecond;
        },
        blurKeyCodes: [27]
      });
    },
    toggleShowPicker(showPicker = !this.showPicker) {
      this.showPicker = showPicker;
    },
    formatValue(v) {
      return v < 10 ? "0" + v : v;
    },
    currTimeArray() {
      return this.value.split(":").map(i => parseInt(i));
    }
  },

  mounted() {
    this.addBlurEventMethod();
  },

  updated() {
    const { pickerItemHeight } = this;

    if (this.$refs.hourListView) {
      scrollToYEasing(
        this.$refs.hourListView.$el,
        this.hourIndex * pickerItemHeight,
        0.1
      );
    }

    if (this.$refs.minuteListView) {
      scrollToYEasing(
        this.$refs.minuteListView.$el,
        this.minuteIndex * pickerItemHeight,
        0.1
      );
    }

    if (this.$refs.secondListView) {
      scrollToYEasing(
        this.$refs.secondListView.$el,
        this.secondIndex * pickerItemHeight,
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
      className,
      pickerItemHeight,
      currHour,
      currMinute,
      currSecond,
      currTime,

      disabledHour,
      disabledMinute,
      disabledSecond,

      hourIndex,
      minuteIndex,
      secondIndex,
      toggleShowPicker,

      formatValue
    } = this;

    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "date-picker",
      styles: inlineStyles
    });

    const hourArray = Array(24)
      .fill(0)
      .map((zero, index) => index);

    const minuteArray = Array(60)
      .fill(0)
      .map((zero, index) => index);

    const secondArray = minuteArray;

    this.hourIndex = hourArray.indexOf(currHour);

    this.minuteIndex = minuteArray.indexOf(currMinute);

    this.secondIndex = secondArray.indexOf(currSecond);

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
                    !disabledHour &&
                      h(
                        ListView,
                        {
                          props: {
                            styles: inlineStyles.listView,
                            listItemStyle: inlineStyles.listItem,
                            defaultFocusListIndex: hourIndex
                          },
                          on: {
                            chooseItem(hourIndex) {
                              vm.currHour = hourIndex;
                            }
                          },
                          ref: "hourListView"
                        },
                        hourArray.map(child => {
                          return h("span", {}, formatValue(child));
                        })
                      ),

                    !disabledMinute &&
                      h(
                        ListView,
                        {
                          props: {
                            styles: inlineStyles.listView,
                            listItemStyle: inlineStyles.listItem,
                            defaultFocusListIndex: minuteIndex
                          },
                          on: {
                            chooseItem(minuteIndex) {
                              vm.currMinute = minuteIndex;
                            }
                          },
                          ref: "minuteListView"
                        },
                        minuteArray.map(child => {
                          return h("span", {}, formatValue(child));
                        })
                      ),

                    !disabledSecond &&
                      h(
                        ListView,
                        {
                          props: {
                            styles: inlineStyles.listView,
                            listItemStyle: inlineStyles.listItem,
                            defaultFocusListIndex: secondIndex
                          },
                          on: {
                            chooseItem(secondIndex) {
                              vm.currSecond = secondIndex;
                            }
                          },
                          ref: "secondListView"
                        },
                        secondArray.map(child => {
                          return h("span", {}, formatValue(child));
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
                            vm.$emit("input", currTime);
                            vm.prevState = { currHour, currMinute, currSecond };
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
                            const {
                              currHour,
                              currMinute,
                              currSecond
                            } = vm.prevState;

                            vm.showPicker = false;
                            vm.currHour = currHour;
                            vm.currMinute = currMinute;
                            vm.currSecond = currSecond;
                          }
                        }
                      },
                      "ClearLegacy"
                    )
                  ]
                )
              ]
            ),

            !disabledHour &&
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
                formatValue(currHour)
              ),
            h(Separator, {
              props: {
                direction: "column",
                styles: { margin: 0 }
              }
            }),
            !disabledMinute &&
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
                formatValue(currMinute)
              ),
            h(Separator, {
              props: {
                direction: "column",
                styles: { margin: 0 }
              }
            }),
            !disabledSecond &&
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
                formatValue(currSecond)
              )
          ]
        )
      ]
    );
  }
};

function getStyles(TimePicker) {
  const {
    context: { theme },
    styles,
    inputItemHeight,
    pickerItemHeight,
    background,
    showPicker,

    disabledHour,
    disabledMinute,
    disabledSecond
  } = TimePicker;

  const disabledLength = [disabledHour, disabledMinute, disabledSecond].filter(
    i => i
  ).length;

  const { prefixStyle } = theme;
  const currBackground =
    background ||
    (theme.useFluentDesign
      ? theme.acrylicTexture80.background
      : theme.chromeLow);

  return {
    root: prefixStyle({
      width: 320 - (320 / 3) * disabledLength,
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
      padding: `${pickerItemHeight * 3}px 0`,
      height: pickerItemHeight * 7,
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
