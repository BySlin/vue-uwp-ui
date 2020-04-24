import darkTheme from "../../styles/darkTheme";
import ScaleInOutChild from "./ScaleInOutChild";

export default {
  name: "ScaleInOut",
  props: {
    appearAnimate: {
      type: Boolean,
      default: true
    },
    enterDelay: {
      type: Number,
      default: 0
    },
    leaveDelay: {
      type: Number,
      default: 0
    },
    maxScale: {
      type: Number,
      default: 1
    },
    minScale: {
      type: Number,
      default: 0
    },
    mode: {
      validator(value) {
        return ["in", "out", "both"].includes(value);
      },
      default: "both"
    },
    speed: {
      type: Number,
      default: 500
    },
    styles: Object,
    className: String,
    childStyles: Object
  },

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
    setAppearStyle(el, done) {
      const { appearAnimate } = this;
      if (appearAnimate) {
        this.enter(el, done);
      }
    },

    enter(el, done) {
      const { mode } = this;

      if (mode !== "out") {
        const display = el.style.display;
        el.style.display = "none";
        this.displayStyleTimer = setTimeout(() => {
          el.style.display = display;
          this.initializeAnimation(el, () => {
            this.animate(el, done);
          });
        }, this.speed / 2 + this.enterDelay);
      }
    },

    leave(el, done) {
      const { mode } = this;

      if (mode !== "in") {
        this.initializeAnimation(el, done);
      } else {
        done();
      }
    },

    animate(el, callback = () => {}) {
      const { speed, maxScale, enterDelay } = this;

      const transform = `scale(${maxScale})`;

      Object.assign(el.style, {
        transform,
        webkitTransform: transform,
        opacity: "1"
      });

      this.enterTimer = setTimeout(callback, speed + enterDelay);
    },

    initializeAnimation(el, callback = () => {}) {
      let { minScale, speed, leaveDelay } = this;

      const transform = `scale(${minScale})`;

      Object.assign(el.style, {
        transform,
        webkitTransform: transform,
        opacity: "0"
      });

      this.leaveTimer = setTimeout(callback, speed + leaveDelay);
    }
  },

  destroyed() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    clearTimeout(this.displayStyleTimer);
  },

  render(h) {
    const { appearAnimate, childStyles, speed, className } = this;
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
        class: className,
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
              ScaleInOutChild,
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

function getStyles(ScaleInOut) {
  const { styles, speed } = ScaleInOut;

  return {
    root: {
      position: "relative",
      overflow: "inherit",
      transition: `transform ${speed}ms 0s ease-in-out`,
      ...styles
    }
  };
}
