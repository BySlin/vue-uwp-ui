import CustomAnimate, { props } from "./CustomAnimate";

export default {
  name: "SlideInOut",

  components: {
    CustomAnimate
  },

  props: {
    ...props,
    position: {
      type: String,
      default: "100%"
    },
    direction: {
      type: String,
      default: "bottom",
      validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      }
    }
  },

  render(h) {
    const { position, wrapperStyle } = this;

    return h(
      "CustomAnimate",
      {
        props: {
          ...this.$props,
          leaveStyle: {
            transform: `translate3d(0, ${position}, 0)`,
            opacity: 0
          },
          enterStyle: {
            transform: `translate3d(0, 0, 0)`,
            opacity: 1
          },
          wrapperStyle: {
            overflow: "hidden",
            ...wrapperStyle
          }
        }
      },
      this.$slots.default
    );
  }
};
