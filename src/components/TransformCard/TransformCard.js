import darkTheme from "../../styles/darkTheme";

export default {
  name: "TransformCard",
  props: {
    perspective: {
      type: [String, Number],
      default: 200
    },
    xMaxRotate: {
      type: Number,
      default: 15
    },
    yMaxRotate: {
      type: Number,
      default: 15
    },
    defaultRotateX: {
      type: Number,
      default: 0
    },
    defaultRotateY: {
      type: Number,
      default: 0
    },
    leaveSpeed: {
      type: Number,
      default: 750
    },
    leaveTimingFunction: {
      type: String,
      default: ""
    },
    className: String,
    styles: Object
  },

  data() {
    return {
      isEnter: null
    };
  },

  methods: {
    handleMouseMove(e) {
      const { xMaxRotate, yMaxRotate, defaultRotateX, defaultRotateY } = this;
      const { currentTarget, clientX, clientY } = e;
      const {
        width,
        height,
        left,
        top
      } = currentTarget.getBoundingClientRect();
      const xOffset = (left + width - clientX) / width;
      const yOffset = (top + height - clientY) / height;

      Object.assign(this.$refs.wrapperElm.style, {
        transition: "all 0ms",
        transform: `rotateX(${defaultRotateX +
          (yOffset - 0.5) * xMaxRotate}deg) rotateY(${defaultRotateY +
          (0.5 - xOffset) * yMaxRotate}deg)`
      });
    },

    handleMouseLeave() {
      const {
        defaultRotateX,
        defaultRotateY,
        leaveSpeed,
        leaveTimingFunction
      } = this;
      const transition = `all ${leaveSpeed}ms ${
        leaveTimingFunction ? " " + leaveTimingFunction : ""
      }`;

      Object.assign(this.$refs.wrapperElm.style, {
        transition,
        transform: `rotateX(${defaultRotateX}deg) rotateY(${defaultRotateY}deg)`
      });
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { handleMouseLeave, handleMouseMove } = this;
    const styleClasses = getStyles(this);

    return h(
      "div",
      {
        style: styleClasses.root,
        on: {
          mouseleave: handleMouseLeave,
          mousemove: handleMouseMove
        }
      },
      [
        h(
          "div",
          {
            style: styleClasses.wrapper,
            ref: "wrapperElm",
            on: {
              mouseleave: handleMouseLeave,
              mousemove: handleMouseMove
            }
          },
          this.$slots.default
        )
      ]
    );
  }
};

function getStyles(TransformCard) {
  const {
    context: { theme },
    perspective,
    styles,
    defaultRotateX,
    defaultRotateY,
    leaveSpeed,
    leaveTimingFunction
  } = TransformCard;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      display: "inline-block",
      perspective,
      ...styles
    }),
    wrapper: theme.prefixStyle({
      display: "inline-block",
      transition: `all ${leaveSpeed}ms ${
        leaveTimingFunction ? " " + leaveTimingFunction : ""
      }`,
      transform: `rotateX(${defaultRotateX}deg) rotateY(${defaultRotateY}deg)`
    })
  };
}
