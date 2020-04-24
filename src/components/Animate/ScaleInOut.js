import CustomAnimate, { props } from "./CustomAnimate";

export default {
  name: "ScaleInOut",
  components: {
    CustomAnimate
  },
  props: {
    ...props,
    leaveStyle: {
      type: Object,
      default() {
        return { transform: "scale(0)" };
      }
    },
    enterStyle: {
      type: Object,
      default() {
        return { transform: "scale(1)" };
      }
    },
    minScale: Number,
    maxScale: Number
  },

  render(h) {
    return h("CustomAnimate", { props: this.$props }, this.$slots.default);
  }
};
