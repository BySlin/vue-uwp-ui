import darkTheme from "../../styles/darkTheme";
import Icon from "../Icon";
import IconButton from "../IconButton/IconButton";

export default {
  name: "Dots",

  props: {
    count: Number,
    showControl: Boolean,
    controlStyle: Object,
    controlContentStyle: Object,
    iconStyle: Object,
    handleSwipeToIndex: Function,
    defaultFocusSwipeIndex: Number,
    toggleCanAutoSwipe: Function,
    currCanAutoSwipe: Boolean
  },

  data() {
    return {
      focusSwipeIndex: this.defaultFocusSwipeIndex
    };
  },

  methods: {
    setFocusIndex(focusSwipeIndex) {
      this.focusSwipeIndex = focusSwipeIndex % this.count;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const {
      count,
      showControl,
      controlStyle,
      controlContentStyle,
      iconStyle,
      handleSwipeToIndex,
      toggleCanAutoSwipe,
      currCanAutoSwipe
    } = this;

    const { focusSwipeIndex } = this;
    const { theme } = this.context;

    const vm = this;

    const styleClasses = theme.prepareStyles({
      className: "flip-view-control",
      styles: {
        controlStyle,
        controlContentStyle
      }
    });
    const playOrPause = currCanAutoSwipe ? "Pause" : "Play";

    return (
      count > 1 &&
      showControl &&
      h(
        "div",
        {
          style: styleClasses.controlStyle.style,
          class: styleClasses.controlStyle.className
        },
        [
          h(
            "div",
            {
              style: styleClasses.controlContentStyle.style,
              class: styleClasses.controlContentStyle.className
            },
            [
              Array(count)
                .fill(0)
                .map((num, index) => {
                  return h(
                    Icon,
                    {
                      props: {
                        styles: iconStyle
                      },
                      on: {
                        click() {
                          vm.focusSwipeIndex = index;
                          handleSwipeToIndex(index);
                        }
                      }
                    },
                    focusSwipeIndex === index ? "FullCircleMask" : "CircleRing"
                  );
                }),

              h(
                IconButton,
                {
                  props: {
                    styles: {
                      marginLeft: 2
                    },
                    size: 32
                  },
                  on: {
                    click: toggleCanAutoSwipe
                  }
                },
                playOrPause
              )
            ]
          )
        ]
      )
    );
  }
};
