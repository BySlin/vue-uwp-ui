import SlideInOutChild from "./SlideInOutChild";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "SlideInOut",
  props: {
    appearAnimate: {
      type: Boolean,
      default: true
    },
    direction: {
      validator(value) {
        return ["left", "right", "top", "bottom"].includes(value);
      },
      default: "left"
    },
    distance: {
      type: [String, Number],
      default: "100%"
    },
    enterDelay: {
      type: Number,
      default: 0
    },
    leaveDelay: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 500
    },
    mode: {
      validator(value) {
        return ["in", "out", "both"].includes(value);
      },
      default: "both"
    },

    styles: Object,
    className: String,
    childStyles: Object
  },

  data() {
    return {
      enterTimer: null,
      leaveTimer: null
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    setAppearStyle(el, done) {
      const { appearAnimate } = this;
      if (appearAnimate) {
        this.enter(el, done);
      }
    },

    enter(el, done) {
      const { mode } = this;

      if (mode !== "out") {
        this.initializeAnimation(el, () => {
          this.animate(el, done);
        });
      }
    },

    leave(el, done) {
      const { mode } = this;

      if (mode !== "in") {
        this.initializeAnimation(el, done, true);
      } else {
        el.style.display = "none";
        done();
      }
    },

    animate(el, callback = () => {}) {
      const { speed, enterDelay } = this;
      const transform = "translate(0, 0)";
      Object.assign(el.style, {
        transform,
        webkitTransform: transform,
        opacity: "1"
      });

      this.enterTimer = setTimeout(callback, speed + enterDelay);
    },

    initializeAnimation(el, callback = () => {}, revers = false) {
      if (el.parentElement) {
        Object.assign(el.parentElement.style, {
          overflow: "hidden"
        });
      }

      let { direction, speed, leaveDelay, distance } = this;

      distance = typeof distance === "string" ? distance : `${distance}px`;
      const x =
        direction === "left"
          ? `${revers ? "-" : ""}${distance}`
          : direction === "right"
          ? `${revers ? "" : "-"}${distance}`
          : "0";
      const y =
        direction === "top"
          ? `${revers ? "" : "-"}${distance}`
          : direction === "bottom"
          ? `${revers ? "-" : ""}${distance}`
          : "0";
      const transform = `translate(${x}, ${y})`;

      Object.assign(el.style, {
        transform,
        webkitTransform: transform,
        opacity: "0"
      });

      this.leaveTimer = setTimeout(callback, speed / 2 + leaveDelay);
    }
  },

  destroyed() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  },

  render(h) {
    const { appearAnimate, childStyles, speed } = this;
    const styleClasses = getStyles(this);

    const event = {
      on: {
        enter: this.enter,
        leave: this.leave,
        appear: this.setAppearStyle
      }
    };

    return h(
      "transition-group",
      {
        style: styleClasses.root,
        props: {
          tag: "div",
          css: false,
          appear: appearAnimate
        },
        ...event
      },
      this.$slots.default &&
        this.$slots.default
          .filter(i => i.tag !== void 0)
          .map(child => {
            return h(
              SlideInOutChild,
              {
                key: child.key,
                props: {
                  speed,
                  styles: childStyles
                }
              },
              [child]
            );
          })
    );
  }
};

function getStyles(SlideInOut) {
  const { styles, speed } = SlideInOut;

  return {
    root: {
      position: "relative",
      width: "100%",
      height: "100%",
      transition: `all ${speed}ms ease-in-out`,
      ...styles
    }
  };
}
