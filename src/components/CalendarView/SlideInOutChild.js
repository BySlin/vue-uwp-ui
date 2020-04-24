export default {
  name: "SlideInOutChild",

  props: {
    styles: Object,
    speed: {
      type: Number,
      default: 500
    }
  },

  render(h) {
    const { speed, styles } = this;
    return h(
      "div",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: `all ${speed}ms ease-in-out`,
          ...styles
        }
      },
      this.$slots.default
    );
  }
};
