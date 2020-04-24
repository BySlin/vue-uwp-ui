import CustomAnimate from "../Animate/CustomAnimate";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "ScrollReveal",

  props: {
    speed: {
      type: Number,
      default: 250
    },

    leaveStyle: {
      type: Object,
      default() {
        return {
          transform: "scale(0)"
        };
      }
    },

    enterStyle: {
      type: Object,
      default() {
        return {
          transform: "scale(1)"
        };
      }
    },

    transitionTimingFunction: String,

    topOffset: {
      type: Number,
      default: 0
    },

    bottomOffset: {
      type: Number,
      default: 0
    },

    useWrapper: {
      type: Boolean,
      default: false
    },

    wrapperStyle: Object,
    styles: Object,
    className: String
  },

  data() {
    return {
      animated: false
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  updated() {
    if (!this.context.theme.scrollReveals.includes(this)) {
      this.context.theme.scrollReveals.push(this);
    }
  },

  mounted() {
    this.context.theme.scrollReveals.push(this);
    this.setBeforeEnterStyle(this.$el);
  },

  destroyed() {
    const { scrollReveals } = this.context.theme;
    scrollReveals.splice(scrollReveals.indexOf(this), 1);
  },

  methods: {
    setBeforeEnterStyle() {
      this.$refs.customAnimate.setBeforeEnterStyle(this.$el);
    },
    setEnterStyle() {
      this.$refs.customAnimate.setEnterStyle(this.$el);
    },

    setLeaveStyle() {
      this.$refs.customAnimate.setLeaveStyle(this.$el);
    }
  },

  render(h) {
    const {
      styles,
      leaveStyle,
      enterStyle,
      speed,
      transitionTimingFunction,
      useWrapper,
      wrapperStyle
    } = this;

    return h(
      CustomAnimate,
      {
        props: {
          styles,
          speed,
          transitionTimingFunction,
          leaveStyle,
          enterStyle,
          appearAnimate: false,
          useWrapper,
          wrapperStyle
        },
        ref: "customAnimate"
      },
      this.$slots.default
    );
  }
};
