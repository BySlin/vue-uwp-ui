//TODO 未知组件
export default {
  name: "ScrollBar",
  props: {
    styles: Object,
    className: String,

    scrollBarStyle: {
      type: Object,
      default() {
        return {
          width: 10,
          height: "100%",
          background: "#f1f1f1"
        };
      }
    },
    trackStyle: Object,

    thumbStyle: {
      type: Object,
      default() {
        return {
          width: 80,
          background: "#969696"
        };
      }
    },

    iconStyle: {
      type: Object,
      default() {
        return {
          background: "#b1b1b1"
        };
      }
    },

    showVerticalBar: {
      type: Boolean,
      default: true
    },

    showHorizontalBar: {
      type: Boolean,
      default: false
    },
    autoHide: Boolean,

    scrollSpeed: {
      type: Number,
      default: 250
    }
  },

  data() {
    return {
      mouseDowning: false,
      loopIconMouseDownTimeOut: null,
      translateX: 0,
      translateY: 0
    };
  },

  methods: {
    addListeners() {},
    removeListeners() {},
    topIconClick() {
      this.scrollTopByStep(true);
      this.mouseDowning = true;
    },
    topIconMouseDown() {
      this.mouseDowning = true;
      this.iconMouseDown(true);
    },

    bottomIconClick() {
      this.scrollTopByStep(false);
      this.mouseDowning = true;
    },

    bottomIconMouseDown() {
      this.mouseDowning = true;
      this.iconMouseDown(false);
    },

    iconMouseUp() {
      clearTimeout(this.loopIconMouseDownTimeOut);
      this.mouseDowning = false;
    },

    scrollTopByStep(toTop) {
      const { style } = this.$refs.view;
      const newTranslateY = this.translateY + (toTop ? 40 : -40);
      this.translateY = toTop
        ? newTranslateY > 0
          ? 0
          : newTranslateY
        : newTranslateY;
      style.transform = `translate3d(0px, ${this.translateY}px, 0px)`;
    },

    iconMouseDown(toTop) {
      this.loopIconMouseDownTimeOut = setTimeout(() => {
        this.scrollTopByStep(toTop);
        if (this.mouseDowning) this.iconMouseDown(toTop);
      }, this.scrollSpeed / 10);
    }
  },

  mounted() {
    this.addListeners();
  },

  destroyed() {
    this.removeListeners();
  },

  render(h) {
    const {
      showHorizontalBar,
      showVerticalBar,

      topIconMouseDown,
      iconMouseUp,
      topIconClick,
      bottomIconClick,
      bottomIconMouseDown
    } = this;
    const styleClasses = getStyles(this);

    return h(
      "div",
      {
        style: styleClasses.root
      },
      [
        h("div", { ref: "view" }, this.$slots.default),

        showHorizontalBar &&
          h(
            "div",
            {
              style: styleClasses.horizontal
            },
            [
              h("div", {
                style: {
                  ...styleClasses.icon,
                  top: 0,
                  left: 0
                }
              }),
              h("div", {
                style: {
                  ...styleClasses.thumb,
                  height: styleClasses.thumb.width,
                  width: styleClasses.thumb.height
                }
              }),
              h("div", {
                style: {
                  ...styleClasses.icon,
                  top: 0,
                  right: 0
                }
              })
            ]
          ),

        showVerticalBar &&
          h(
            "div",
            {
              style: styleClasses.vertical
            },
            [
              h("div", {
                on: {
                  mousedown: topIconMouseDown,
                  mouseup: iconMouseUp,
                  click: topIconClick
                },
                style: {
                  ...styleClasses.icon,
                  left: 0,
                  top: 0
                }
              }),

              h("div", {
                style: {
                  ...styleClasses.thumb,
                  height: styleClasses.thumb.width,
                  width: styleClasses.thumb.height
                }
              }),

              h("div", {
                on: {
                  click: bottomIconClick,
                  mousedown: bottomIconMouseDown,
                  mouseup: iconMouseUp
                },
                style: {
                  ...styleClasses.icon,
                  left: 0,
                  bottom: 0
                }
              })
            ]
          )
      ]
    );
  }
};
function getStyles(ScrollBar) {
  const {
    styles,
    scrollBarStyle,
    trackStyle,
    thumbStyle,
    iconStyle,
    scrollSpeed
  } = ScrollBar;

  return {
    root: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "100%",
      ...styles
    },
    view: {
      WebkitOverflowScrolling: "touch",
      width: "100%",
      height: "100%",
      transition: `all ${scrollSpeed}ms 0s linear`,
      transform: `translate3d(0px, 0px, 0px)`
    },
    horizontal: {
      ...scrollBarStyle,
      position: "absolute",
      bottom: 0,
      left: 0,
      ...trackStyle,
      paddingLeft: scrollBarStyle.width,
      paddingRight: scrollBarStyle.width
    },
    vertical: {
      ...scrollBarStyle,
      position: "absolute",
      top: 0,
      right: 0,
      ...trackStyle,
      paddingTop: scrollBarStyle.width,
      paddingBottom: scrollBarStyle.width
    },
    thumb: {
      position: "absolute",
      ...scrollBarStyle,
      ...thumbStyle
    },
    icon: {
      zIndex: 1,
      position: "absolute",
      transition: "all .25s 0s ease-in-out",
      ...iconStyle,
      width: scrollBarStyle.width,
      height: scrollBarStyle.width
    }
  };
}
