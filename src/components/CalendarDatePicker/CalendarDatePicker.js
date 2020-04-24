import AddBlurEvent from "../../common/AddBlurEvent";
import Icon from "../Icon";
import TextBox from "../TextBox";
import CalendarView from "../CalendarView";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "CalendarDatePicker",

  props: {
    placeholder: {
      type: String,
      default: "yyyy/mm/dd"
    },
    value: {
      type: Date
    },
    width: {
      type: Number,
      default: 296
    },
    height: {
      type: Number,
      default: 32
    }
  },

  data() {
    return {
      currDate: this.value ? this.value : new Date(),
      isInit: !this.value,
      showCalendarView: false,
      addBlurEvent: new AddBlurEvent()
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
        addListener: this.showCalendarView,
        clickExcludeElm: this.$el,
        blurCallback: () => {
          this.showCalendarView = false;
        },
        blurKeyCodes: [27]
      });
    },
    toggleShowCalendarView(showCalendarView) {
      if (!this.$refs.textBox.$el.contains(showCalendarView.target)) return;
      this.$emit("click", showCalendarView);
      this.showCalendarView = !this.showCalendarView;
    },
    handleChangeDate(date) {
      this.currDate = date;
      this.isInit = false;
      this.$emit("changeDate", date);
      this.$emit("input", date);
    }
  },

  mounted() {
    this.addBlurEventMethod();
  },

  updated() {
    this.addBlurEventMethod();
  },

  destroyed() {
    this.addBlurEvent.cleanEvent();
  },

  render(h) {
    const {
      value,
      placeholder,
      currDate,
      isInit,

      toggleShowCalendarView,
      handleChangeDate
    } = this;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      styles: inlineStyles,
      className: "calendar-picker"
    });

    let day = currDate.getDate();
    let month = currDate.getMonth() + 1;
    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;
    const yymmdd = [currDate.getFullYear(), month, day].join("/");

    return h(
      "div",
      {
        class: styleClasses.root.className,
        style: styleClasses.root.style,
        on: {
          click: toggleShowCalendarView
        }
      },
      [
        h(
          TextBox,
          {
            ref: "textBox",
            props: {
              styles: inlineStyles.input,
              placeholder: isInit ? placeholder : yymmdd,
              disabled: true
            }
          },
          [
            h(
              Icon,
              {
                slot: "rightNode",
                props: {
                  styles: inlineStyles.icon
                }
              },
              "Calendar"
            )
          ]
        ),

        h(CalendarView, {
          props: {
            value,
            styles: inlineStyles.calendarView
          },
          on: {
            changeDate: handleChangeDate
          }
        })
      ]
    );
  }
};

function getStyles(CalendarDatePicker) {
  const {
    context,
    width,
    height,
    style,
    showCalendarView
  } = CalendarDatePicker;

  const { theme } = context;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      display: "inline-block",
      verticalAlign: "middle",
      position: "relative",
      ...style
    }),
    input: {
      width,
      height
    },
    icon: {
      margin: "0 8px",
      cursor: "pointer",
      color: theme.baseHigh
    },
    calendarView: {
      position: "absolute",
      top: height,
      left: 0,
      transform: `translate3d(0, ${
        showCalendarView
          ? "4px"
          : typeof height === "number"
          ? `-${height}px`
          : `-${height}`
      }, 0)`,
      zIndex: showCalendarView ? theme.zIndex.flyout : void 0,
      opacity: showCalendarView ? 1 : 0,
      pointerEvents: showCalendarView ? "all" : "none",
      transition: "all .25s ease"
    }
  };
}
