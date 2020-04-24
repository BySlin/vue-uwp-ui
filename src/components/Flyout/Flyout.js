import darkTheme from "../../styles/darkTheme";
import FlyoutContent from "./FlyoutContent";

export default {
  name: "Flyout",
  props: {
    styles: Object,
    className: String
  },
  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { styles } = this;
    const { theme } = this.context;
    const flyoutContents = [];
    const renderChild = [];

    const vNodes = this.$slots.default;

    vNodes.forEach(child => {
      if (child.componentOptions) {
        if (child.componentOptions.tag === FlyoutContent.name) {
          flyoutContents.push(child);
          return;
        }
      }
      renderChild.push(child);
    });

    return h(
      "div",
      {
        style: theme.prefixStyle({
          display: "inline-block",
          ...styles,
          position: "relative"
        })
      },
      [...flyoutContents, ...renderChild]
    );
  }
};
