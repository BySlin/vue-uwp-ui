import darkTheme from "../../styles/darkTheme";
import IS_NODE_ENV from "../../common/nodeJS/IS_NODE_ENV";

export default {
  name: "Swipe",

  props: {
    initialFocusIndex: {
      type: Number,
      default: 0
    },
    stopSwipe: {
      type: Boolean,
      default: false
    },
    autoSwipe: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      validator(value) {
        return ["vertical", "horizontal"].includes(value);
      },
      default: "horizontal"
    },

    speed: {
      type: Number,
      default: 1500
    },
    easy: {
      type: Number,
      default: 0.85
    },
    delay: {
      type: Number,
      default: 5000
    },
    transitionTimingFunction: {
      type: String,
      default: "ease-in-out"
    },
    navigationIconSize: Number,
    showIcon: Boolean,
    animate: {
      type: String,
      validator(value) {
        return ["slide", "opacity"].includes(value);
      },
      default: "slide"
    },
    supportPcDrag: {
      type: Boolean,
      default: false
    },
    styles: Object,
    className: String
  },

  data() {
    return {
      isHorizontal: this.direction === "horizontal",
      focusIndex: this.isSingleChildren()
        ? this.initialFocusIndex
        : this.initialFocusIndex + 1,
      currStopSwipe: this.stopSwipe,
      haveAnimate: false,
      swiping: false,
      originBodyStyle: IS_NODE_ENV ? void 0 : { ...document.body.style },
      timeoutId: null,
      swipeTimer: null,
      startClientX: null,
      startClientY: null,
      endClientX: null,
      endClientY: null
    };
  },

  watch: {
    direction(direction) {
      this.isHorizontal = direction === "horizontal";
    },
    autoSwipe(autoSwipe) {
      this.currStopSwipe = !autoSwipe;
      this.updateState();
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },
  methods: {
    isSingleChildren() {
      return (
        this.$slots.default &&
        this.$slots.default.filter(v => v.tag !== void 0).length === 1
      );
    },
    childrenLength() {
      return this.$slots.default.filter(v => v.tag !== void 0).length;
    },
    checkIsToucheEvent(e) {
      return e.type.includes("touch");
    },
    updateState(autoSwipe) {
      clearTimeout(this.timeoutId);
      const childrenLength = this.childrenLength();
      const isSingleChildren = childrenLength === 1;

      if (autoSwipe && !isSingleChildren) {
        this.timeoutId = setTimeout(() => {
          this.swipeForward();
          this.setNextSlider();
        }, this.delay);
        this.setNextSlider.funStartTime = Date.now();
      }
    },

    setNextSlider() {
      const { delay } = this;
      if (
        this.currStopSwipe ||
        (this.setNextSlider.funStartTime &&
          Date.now() - this.setNextSlider.funStartTime < delay)
      )
        return;
      this.timeoutId = setTimeout(() => {
        if (!this.currStopSwipe) this.swipeForward();
        this.setNextSlider();
      }, delay);
      this.setNextSlider.funStartTime = Date.now();
    },

    swipeForward() {
      const { focusIndex, swiping } = this;

      if (swiping) return;
      if (!this.isSingleChildren()) {
        this.$emit("changeSwipe", focusIndex);
      }
      this.swiping = true;

      const isLast = focusIndex === this.getItemsLength() - 2;

      if (isLast) {
        this.focusIndex = this.setRightFocusIndex(focusIndex + 1);
        this.haveAnimate = true;

        this.$nextTick(() => {
          this.swipeTimer = setTimeout(() => {
            this.focusIndex = 1;
            this.haveAnimate = false;
            this.swiping = false;
          }, this.speed);
        });
      } else {
        this.focusIndex = this.setRightFocusIndex(focusIndex + 1);
        this.haveAnimate = true;
        this.swipeTimer = setTimeout(() => {
          this.swiping = false;
        }, this.speed);
      }
    },

    swipeBackWord() {
      const { focusIndex, swiping } = this;
      if (swiping || !this.autoSwipe) return;
      if (!this.isSingleChildren()) {
        this.$emit("changeSwipe", focusIndex);
      }

      this.swiping = true;
      const isFirst = focusIndex === 1;

      if (isFirst) {
        this.focusIndex = this.setRightFocusIndex(focusIndex - 1);
        this.haveAnimate = true;

        this.$nextTick(() => {
          this.swipeTimer = setTimeout(() => {
            this.focusIndex = this.getItemsLength() - 2;
            this.haveAnimate = false;
            this.swiping = false;
          }, this.speed);
        });
      } else {
        this.focusIndex = this.setRightFocusIndex(focusIndex - 1);
        this.haveAnimate = true;
        this.swipeTimer = setTimeout(() => {
          this.swiping = false;
        }, this.speed);
      }
    },

    swipeToIndex(focusIndex) {
      clearTimeout(this.timeoutId);
      focusIndex = focusIndex + 1;
      this.haveAnimate = true;
      this.focusIndex = this.setRightFocusIndex(focusIndex);
      this.currStopSwipe = true;
    },

    setRightFocusIndex(focusIndex) {
      const length = this.getItemsLength();
      return focusIndex < 0
        ? length - (Math.abs(focusIndex) % length)
        : focusIndex % length;
    },
    getItemsLength() {
      const childrenSize = this.childrenLength();
      return childrenSize > 1 ? childrenSize + 2 : childrenSize;
    },

    mouseOrTouchDownHandler(e) {
      Object.assign(document.body.style, {
        userSelect: "none",
        msUserSelect: "none",
        webkitUserSelect: "none"
      });
      this.endClientX = void 0;
      this.endClientY = void 0;
      const { isHorizontal } = this;
      this.currStopSwipe = true;
      const isToucheEvent = this.checkIsToucheEvent(e);
      if (!isToucheEvent && !this.supportPcDrag) return;
      if (isToucheEvent) {
        window.addEventListener("touchmove", this.mouseOrTouchMoveHandler);
        window.addEventListener("touchend", this.mouseOrTouchUpHandler);
      } else {
        window.addEventListener("mousemove", this.mouseOrTouchMoveHandler);
        window.addEventListener("mouseup", this.mouseOrTouchUpHandler);
      }
      if (isToucheEvent) {
        if (isHorizontal) {
          this.startClientX = e.changedTouches[0].clientX;
        } else {
          this.startClientY = e.changedTouches[0].clientY;
        }
      } else {
        if (isHorizontal) {
          this.startClientX = e.clientX;
        } else {
          this.startClientY = e.clientY;
        }
      }
      this.$refs.content.style.webkitTransition = "all 0.06125s 0s linear";
    },

    mouseOrTouchMoveHandler(e) {
      Object.assign(document.body.style, {
        userSelect: void 0,
        msUserSelect: void 0,
        webkitUserSelect: void 0,
        ...this.originBodyStyle
      });
      const isToucheEvent = this.checkIsToucheEvent(e);
      const { focusIndex, isHorizontal } = this;
      if (isToucheEvent) {
        if (isHorizontal) {
          this.endClientX = e.changedTouches[0].clientX;
        } else {
          this.endClientY = e.changedTouches[0].clientY;
        }
      } else {
        if (isHorizontal) {
          this.endClientX = e.clientX;
        } else {
          this.endClientY = e.clientY;
        }
      }
      this.$refs.content.style.webkitTransform = `translate${
        isHorizontal ? "X" : "Y"
      }(${this.$refs.container.getBoundingClientRect()[
        isHorizontal ? "width" : "height"
      ] *
        -focusIndex -
        this[isHorizontal ? "startClientX" : "startClientY"] +
        this[isHorizontal ? "endClientX" : "endClientY"]}px)`;
    },

    mouseOrTouchUpHandler(e) {
      Object.assign(document.body.style, {
        userSelect: void 0,
        msUserSelect: void 0,
        webkitUserSelect: void 0,
        cursor: void 0,
        ...this.originBodyStyle
      });
      const { isHorizontal } = this;
      const { transitionTimingFunction, speed } = this;
      const isToucheEvent = this.checkIsToucheEvent(e);
      if (isToucheEvent) {
        window.removeEventListener("touchmove", this.mouseOrTouchMoveHandler);
        window.removeEventListener("touchend", this.mouseOrTouchUpHandler);
      } else {
        window.removeEventListener("mousemove", this.mouseOrTouchMoveHandler);
        window.removeEventListener("mouseup", this.mouseOrTouchUpHandler);
      }

      if (
        (isHorizontal && this.endClientX === void 0) ||
        (!isHorizontal && this.endClientY === void 0)
      ) {
        return;
      }
      const transition = `all ${speed}ms 0s ${transitionTimingFunction}`;
      this.$refs.content.style.webkitTransition = transition;
      this.currStopSwipe = false;
      let { easy } = this;
      if (easy < 0) easy = 0;
      if (easy > 1) easy = 1;

      const movePosition = this.endClientX - this.startClientX;
      const isNext = movePosition < 0;
      let focusIndex =
        this.focusIndex +
        movePosition / this.$refs.container.getBoundingClientRect().width;
      focusIndex = isNext
        ? Math.ceil(focusIndex + easy / 2)
        : Math.floor(focusIndex - easy / 2);
      focusIndex = this.setRightFocusIndex(focusIndex);
      if (focusIndex === this.focusIndex) {
        this.$refs.content.style.webkitTransform = `translateX(${this.$refs.container.getBoundingClientRect()
          .width *
          (-focusIndex / this.childrenLength()) -
          this.startClientX +
          this.endClientX}px)`;
      } else {
        if (isNext) {
          this.swipeForward();
        } else {
          this.swipeBackWord();
        }
      }
      if (this.autoSwipe && !this.isSingleChildren() && 0) {
        this.setNextSlider();
      }
    }
  },

  mounted() {
    this.updateState(this.autoSwipe);
  },

  destroyed() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.swipeTimer);
  },

  render(h) {
    const { className, stopSwipe, speed, transitionTimingFunction } = this;

    const {
      focusIndex,
      isSingleChildren,
      mouseOrTouchDownHandler,
      isHorizontal,
      haveAnimate
    } = this;

    const childrenLength = this.childrenLength();

    const { theme } = this.context;

    const vNodes = this.$slots.default.filter(v => v.tag !== void 0);

    const childrenSize = vNodes.length;
    if (childrenSize > 1) {
      vNodes.push(vNodes[0]);
      vNodes.unshift(vNodes[childrenSize - 1]);
    }

    const transition = `transform ${speed}ms 0s ${transitionTimingFunction}`;

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "swipe",
      styles: inlineStyles
    });

    return h(
      "div",
      {
        ref: "container",
        style: styleClasses.root.style,
        class: theme.classNames(styleClasses.root.className, className)
      },
      [
        h(
          "div",
          {
            ref: "content",
            on: {
              mousedown:
                !stopSwipe && !isSingleChildren()
                  ? mouseOrTouchDownHandler
                  : void 0,
              touchStart:
                !stopSwipe && !isSingleChildren()
                  ? this.mouseOrTouchDownHandler
                  : void 0
            },

            style: theme.prefixStyle({
              ...styleClasses.content.style,
              transform: `translate${isHorizontal ? "X" : "Y"}(${(-focusIndex *
                100) /
                childrenLength}%)`,
              transition: haveAnimate ? transition : void 0
            }),
            class: styleClasses.content.className
          },
          vNodes.map((child, index) => {
            return h(
              "div",
              {
                attrs: {
                  "data-index": index
                },
                key: `${index}`,
                class: styleClasses.item.className,
                style: styleClasses.item.style
              },
              [child]
            );
          })
        )
      ]
    );
  }
};

function getStyles(Swipe) {
  const { styles, isHorizontal } = Swipe;
  const childrenLength = Swipe.childrenLength();
  const isSingleChildren = Swipe.isSingleChildren();

  const {
    theme: { prefixStyle }
  } = Swipe.context;

  return {
    root: prefixStyle({
      position: "relative",
      display: "flex",
      flexDirection: isHorizontal ? "row" : "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      flex: "0 0 auto",
      ...styles
    }),
    content: prefixStyle({
      position: "relative",
      flex: "0 0 auto",
      display: "flex",
      flexDirection: isHorizontal ? "row" : "column",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      height: isHorizontal ? "100%" : `${childrenLength * 100}%`,
      width: isHorizontal ? `${childrenLength * 100}%` : "100%",
      left:
        isHorizontal && !isSingleChildren
          ? `${((isSingleChildren ? 0 : 2 + childrenLength) / 2 - 0.5) * 100}%`
          : void 0,
      top: isHorizontal
        ? void 0
        : `${((isSingleChildren ? 0 : 2 + childrenLength) / 2 - 0.5) * 100}%`
    }),
    item: prefixStyle({
      position: "relative",
      overflow: "hidden",
      width: isHorizontal ? `${100 / childrenLength}%` : "100%",
      height: isHorizontal ? "100%" : `${100 / childrenLength}%`,
      flex: "0 0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      userDrag: "none",
      WebkitUserDrag: "none"
    })
  };
}
