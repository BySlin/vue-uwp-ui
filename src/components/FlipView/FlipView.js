import darkTheme from "../../styles/darkTheme";
import IconButton from "../IconButton";
import Swipe from "../Swipe";
import Dots from "./Dots";

export default {
  name: "FlipView",

  props: {
    initialFocusIndex: Number,
    stopSwipe: {
      type: Boolean,
      default: false
    },
    autoSwipe: {
      type: Boolean,
      default: true
    },
    speed: Number,
    easy: Number,
    direction: {
      type: String,
      validator(value) {
        return ["vertical", "horizontal"].includes(value);
      },
      default: "horizontal"
    },
    showNavigation: {
      type: Boolean,
      default: true
    },
    controlledNavigation: {
      type: Boolean,
      default: true
    },
    showControl: {
      type: Boolean,
      default: true
    },
    supportPcDrag: {
      type: Boolean,
      default: false
    },
    navigationIconSize: {
      type: Number,
      default: 24
    },
    styles: Object,
    className: String
  },

  data() {
    return {
      mounted: false,
      focusSwipeIndex: 0,
      currCanAutoSwipe: this.autoSwipe,
      currShowNavigation: this.showNavigation
    };
  },
  watch: {
    autoSwipe(v) {
      this.currCanAutoSwipe = v;
    },
    showNavigation(v) {
      this.currShowNavigation = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },
  mounted() {
    this.mounted = true;
  },
  methods: {
    swipeForward() {
      this.$refs.swipe.swipeForward();
    },

    swipeBackWord() {
      this.$refs.swipe.swipeBackWord();
    },
    handleChangeSwipe(focusSwipeIndex) {
      const count = this.childrenLength();
      if (this.mounted) {
        this.focusSwipeIndex = focusSwipeIndex % count;
      }
    },
    toggleCanAutoSwipe() {
      this.currCanAutoSwipe = !this.currCanAutoSwipe;
    },
    handleSwipeToIndex(index) {
      this.focusSwipeIndex = index;
      this.$refs.swipe.swipeToIndex(index);
    },
    handleMouseEnter() {
      if (!this.currShowNavigation) {
        this.currShowNavigation = true;
      }
    },
    handleMouseLeave() {
      if (this.currShowNavigation) {
        this.currShowNavigation = false;
      }
    },
    childrenLength() {
      return this.$slots.default.filter(v => v.tag !== void 0).length;
    }
  },

  render(h) {
    const {
      className,
      showNavigation,
      initialFocusIndex,
      stopSwipe,
      speed,
      easy,
      direction,
      navigationIconSize,
      supportPcDrag,
      showControl,
      controlledNavigation,

      handleMouseEnter,
      handleMouseLeave,
      swipeForward,
      swipeBackWord
    } = this;

    const vm = this;

    const { theme } = this.context;
    const { focusSwipeIndex, currCanAutoSwipe, currShowNavigation } = this;
    const count = this.childrenLength();

    const isHorizontal = direction === "horizontal";
    const _showNavigation = controlledNavigation
      ? showNavigation
      : currShowNavigation;

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "flip-view",
      styles: inlineStyles
    });

    return h(
      "div",
      {
        style: styleClasses.root.style,
        class: theme.classNames(styleClasses.root.className, className),
        on: {
          mouseenter: handleMouseEnter,
          mouseleave: handleMouseLeave
        }
      },
      [
        count > 1 &&
          _showNavigation &&
          h(
            IconButton,
            {
              on: {
                click: swipeBackWord
              },
              props: {
                styles: inlineStyles.iconLeft,
                hoverStyle: {
                  background: theme.baseLow
                },
                activeStyle: {
                  background: theme.accent,
                  color: "#fff"
                }
              }
            },
            isHorizontal ? "ChevronLeft3Legacy" : "ScrollChevronUpLegacy"
          ),

        h(
          Swipe,
          {
            ref: "swipe",
            on: {
              changeSwipe(index) {
                vm.$refs.dots.setFocusIndex(index);
              }
            },
            props: {
              initialFocusIndex,
              stopSwipe,
              autoSwipe: currCanAutoSwipe,
              speed,
              easy,
              direction,
              navigationIconSize,
              supportPcDrag
            }
          },
          this.$slots.default
        ),
        count > 1 &&
          _showNavigation &&
          h(
            IconButton,
            {
              on: {
                click: swipeForward
              },
              props: {
                styles: inlineStyles.iconRight,
                hoverStyle: {
                  background: theme.baseLow
                },
                activeStyle: {
                  background: theme.accent,
                  color: "#fff"
                }
              }
            },
            isHorizontal ? "ChevronRight3Legacy" : "ScrollChevronDownLegacy"
          ),
        h(Dots, {
          ref: "dots",
          props: {
            count,
            showControl,
            controlStyle: inlineStyles.control,
            controlContentStyle: inlineStyles.controlContent,
            iconStyle: inlineStyles.icon,
            handleSwipeToIndex: this.handleSwipeToIndex,
            defaultFocusSwipeIndex: focusSwipeIndex,
            toggleCanAutoSwipe: this.toggleCanAutoSwipe,
            currCanAutoSwipe: currCanAutoSwipe
          }
        })
      ]
    );
  }
};

function getStyles(FlipView) {
  const { navigationIconSize, direction, styles } = FlipView;
  const { theme } = FlipView.context;
  const { prefixStyle } = theme;
  const isHorizontal = direction === "horizontal";

  const baseIconStyle = {
    position: "absolute",
    background: theme.listLow,
    zIndex: 20,
    fontSize: navigationIconSize / 2,
    width: navigationIconSize * (isHorizontal ? 1 : 2),
    lineHeight: `${navigationIconSize * (isHorizontal ? 2 : 1)}px`,
    height: navigationIconSize * (isHorizontal ? 2 : 1)
  };

  return {
    root: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: 0,
      width: "100%",
      background: theme.chromeLow,
      height: "auto",
      minHeight: baseIconStyle.height,
      ...styles
    }),
    iconLeft: {
      ...baseIconStyle,
      top: isHorizontal ? `calc(50% - ${navigationIconSize}px)` : 0,
      left: isHorizontal ? 0 : `calc(50% - ${navigationIconSize}px)`
    },
    iconRight: {
      ...baseIconStyle,
      bottom: isHorizontal ? `calc(50% - ${navigationIconSize}px)` : 0,
      right: isHorizontal ? 0 : `calc(50% - ${navigationIconSize}px)`
    },
    control: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      pointerEvents: "none",
      ...(isHorizontal
        ? {
            flexDirection: "row",
            width: "100%",
            bottom: 4,
            left: 0
          }
        : {
            flexDirection: "column",
            height: "100%",
            top: 0,
            right: 4
          })
    },
    controlContent: prefixStyle({
      display: "flex",
      flexDirection: isHorizontal ? "row" : "column",
      alignItems: "center",
      pointerEvents: "all"
    }),
    icon: {
      fontSize: 6,
      margin: 2,
      cursor: "pointer"
    }
  };
}
