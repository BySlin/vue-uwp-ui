export default {
  name: "FloatNavExpandedItem",

  props: {
    title: String,
    href: String,
    focusColor: String
  },

  render() {
    return this.$slots.default;
  }
};
