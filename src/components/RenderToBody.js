export default {
  name: "RenderToBody",
  mounted() {
    document.body.insertBefore(this.$el, document.body.lastChild);
  },
  render(h) {
    return h("div", this.$slots.default);
  },
  destroyed() {
    document.body.removeChild(this.$el);
  }
};
