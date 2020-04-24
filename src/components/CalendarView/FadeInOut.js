import darkTheme from "../../styles/darkTheme";
import FadeInOutChild from "./FadeInOutChild";

export default {
  name: "FadeInOut",

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
    maxValue: {
      type: Number,
      default: 1
    },
    minValue: {
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
      } else {
        done();
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
      const { speed, maxValue, enterDelay } = this;

      Object.assign(el.style, {
        opacity: `${maxValue}`
      });

      this.enterTimer = setTimeout(callback, speed + enterDelay);
    },

    initializeAnimation(el, callback = () => {}) {
      let { minValue, speed, leaveDelay } = this;

      Object.assign(el.style, {
        opacity: `${minValue}`
      });

      this.leaveTimer = setTimeout(callback, speed / 2 + leaveDelay);
    }
  },

  destroyed() {
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    clearTimeout(this.displayStyleTimer);
  },

  render(h) {
    const { appearAnimate, speed, childStyles } = this;
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
          tag: "span",
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
              FadeInOutChild,
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

function getStyles(FadeInOut) {
  const { styles } = FadeInOut;

  return {
    root: {
      overflow: "hidden",
      ...styles
    }
  };
}
