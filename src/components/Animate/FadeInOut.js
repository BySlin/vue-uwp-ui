import CustomAnimate, { props } from "./CustomAnimate";

export default {
  name: "FadeInOut",
  components: {
    CustomAnimate
  },
  props: {
    ...props,
    leaveStyle: {
      type: Object,
      default() {
        return { opacity: 0 };
      }
    },
    enterStyle: {
      type: Object,
      default() {
        return { opacity: 1 };
      }
    }
  },
  render(h) {
    return h("CustomAnimate", { props: this.$props }, this.$slots.default);
  }
};
