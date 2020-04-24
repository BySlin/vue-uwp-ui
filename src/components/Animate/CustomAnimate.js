import darkTheme from "../../styles/darkTheme";

const baseStyle = {
  display: "inline-block",
  verticalAlign: "middle"
};

const slideBottomInProps = {
  leaveStyle: {
    transform: "translateY(100%)",
    opacity: 0
  },
  enterStyle: {
    transform: "translateY(0)",
    opacity: 1
  },
  wrapperStyle: { overflow: "hidden" },
  speed: 500,
  useWrapper: true
};

const slideTopInProps = {
  leaveStyle: {
    transform: "translateY(-100%)",
    opacity: 0
  },
  enterStyle: {
    transform: "translateY(0)",
    opacity: 1
  },
  wrapperStyle: { overflow: "hidden" },
  speed: 500,
  useWrapper: true
};

const slideLeftInProps = {
  leaveStyle: {
    transform: "translateX(-100%)",
    opacity: 0
  },
  enterStyle: {
    transform: "translateX(0)",
    opacity: 1
  },
  wrapperStyle: { overflow: "hidden" },
  speed: 500,
  useWrapper: true
};

const slideRightInProps = {
  leaveStyle: {
    transform: "translateX(100%)",
    opacity: 0
  },
  enterStyle: {
    transform: "translateX(0)",
    opacity: 1
  },
  wrapperStyle: { overflow: "hidden" },
  appearAnimate: true,
  speed: 500,
  useWrapper: true
};

const scaleInProps = {
  leaveStyle: {
    transform: "scale(0)",
    opacity: 0
  },
  enterStyle: {
    transform: "scale(1)",
    opacity: 1
  },
  appearAnimate: true,
  speed: 500,
  useWrapper: true
};

const fadeInProps = {
  leaveStyle: {
    opacity: 0
  },
  enterStyle: {
    opacity: 1
  },
  appearAnimate: true,
  speed: 500,
  useWrapper: true
};

export {
  fadeInProps,
  scaleInProps,
  slideTopInProps,
  slideBottomInProps,
  slideLeftInProps,
  slideRightInProps
};

export const props = {
  appearAnimate: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: "in-out",
    validator(value) {
      return ["in", "out", "in-out"].includes(value);
    }
  },
  leaveStyle: Object,
  enterStyle: Object,
  speed: {
    type: Number,
    default: 500
  },
  transitionTimingFunction: {
    type: String,
    default: ""
  },
  enterDelay: {
    type: Number,
    default: 0
  },
  leaveDelay: {
    type: Number,
    default: 0
  },
  component: {
    type: String,
    default: "span"
  },
  useWrapper: {
    type: Boolean,
    default: true
  },
  wrapperStyle: {
    type: Object,
    default() {
      return {};
    }
  }
};

export default {
  name: "CustomAnimate",

  props,

  data() {
    return {
      enterTimer: null,
      leaveTimer: null,
      displayStyleTimer: null
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    setBeforeEnterStyle(el) {
      const {
        speed,
        enterStyle,
        leaveStyle,
        transitionTimingFunction,
        appearAnimate,
        $vnode: {
          data: { style }
        },
        context: { theme }
      } = this;

      const currStyle = theme.prefixStyle({
        transition: `all ${speed}ms${
          transitionTimingFunction ? ` ${transitionTimingFunction}` : ""
        }`,
        ...style,
        ...(appearAnimate
          ? leaveStyle
          : Object.assign({}, leaveStyle, enterStyle))
      });

      Object.assign(el.style, currStyle);
    },

    setEnterStyle(el, done = () => {}) {
      const {
        speed,
        enterDelay,
        enterStyle,
        context: { theme }
      } = this;

      Object.assign(el.style, theme.prefixStyle(enterStyle));

      this.enterTimer = setTimeout(done, speed + enterDelay);
    },

    setLeaveStyle(el, done = () => {}) {
      const {
        leaveStyle,
        context: { theme }
      } = this;

      Object.assign(el.style, theme.prefixStyle(leaveStyle));

      done();
    },

    setBeforeAppearStyle(el) {
      const { mode, appearAnimate } = this;
      if (appearAnimate) {
        this.setBeforeEnterStyle(el);
        if (mode !== "out") {
          this.setLeaveStyle(el);
        }
      }
    },

    setAppearStyle(el, done) {
      const { mode, enterDelay, appearAnimate } = this;
      if (appearAnimate) {
        if (mode !== "out") {
          this.enterTimer = setTimeout(() => {
            this.setEnterStyle(el, done);
          }, enterDelay);
        }
      }
    },

    enter(el, done) {
      const { mode, speed, enterDelay } = this;

      clearTimeout(this.leaveTimer);

      const { style } = el;
      const { display } = el.style;

      style.display = "none";

      this.displayStyleTimer = setTimeout(() => {
        style.display = display;
      }, (mode === "in" ? 0 : speed) + enterDelay);

      if (mode === "out") {
        this.enterTimer = setTimeout(() => {
          this.setEnterStyle(el);
          done();
        }, speed);
        return;
      }

      this.setLeaveStyle(el);

      this.enterTimer = setTimeout(
        () => {
          style.display = display;
          this.setEnterStyle(el);
          done();
        },
        mode === "in" ? 40 + enterDelay : speed + 40 + enterDelay
      );
    },

    leave(el, done) {
      const { mode, speed, leaveDelay } = this;

      if (mode !== "in") {
        this.setLeaveStyle(el);

        this.leaveTimer = setTimeout(() => {
          el.style.display = "none";
          done();
        }, speed + leaveDelay);
      } else {
        el.display = "none";
        done();
      }
    }
  },

  destroyed() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    clearTimeout(this.displayStyleTimer);
  },

  render(h) {
    const {
      appearAnimate,
      leaveStyle,
      wrapperStyle,
      component,
      useWrapper
    } = this;

    const event = {
      on: {
        enter: this.enter,
        leave: this.leave,
        beforeEnter: this.setBeforeEnterStyle,
        beforeAppear: this.setBeforeAppearStyle,
        appear: this.setAppearStyle
      }
    };

    const vNodes = this.$slots.default;

    const newVNodes = vNodes.map((n, index) => {
      const { key = `.$null/.${index}` } = n;

      let child = n;
      if (useWrapper && n.tag) {
        child = h(
          "span",
          {
            key,
            style: { ...baseStyle, width: "100%" }
          },
          [n]
        );
      }

      return child;
    });

    return h(
      useWrapper ? "transition-group" : "transition",
      {
        style: {
          ...baseStyle,
          ...(useWrapper ? wrapperStyle : leaveStyle)
        },
        props: {
          tag: useWrapper ? component : null,
          css: false,
          appear: appearAnimate
        },
        ...event
      },
      newVNodes
    );
  }
};
