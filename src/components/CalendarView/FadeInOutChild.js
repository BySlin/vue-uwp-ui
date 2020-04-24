import { cloneVNode } from "../../common/VNodeClone";

export default {
  name: "FadeInOutChild",

  props: {
    styles: Object,
    speed: {
      type: Number,
      default: 500
    }
  },

  render(h) {
    const { speed, styles } = this;
    const $slots = this.$slots;
    const children = $slots.default && $slots.default[0];

    return children && children.tag === void 0
      ? [
          h(
            "span",
            {
              style: {
                transition: `all ${speed}ms ease-in-out`,
                ...styles
              }
            },
            [children]
          )
        ]
      : cloneVNode(h, children, {
          style: {
            transition: `all ${speed}ms ease-in-out`
          }
        });
  }
};
