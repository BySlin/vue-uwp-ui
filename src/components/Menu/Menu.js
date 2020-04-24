import darkTheme from "../../styles/darkTheme";
import MenuItem from "./MenuItem";

export default {
  name: "Menu",
  props: {
    menuItemHeight: {
      type: Number,
      default: 44
    },
    menuItemWidth: {
      type: Number,
      default: 240
    },
    menuItemHoverStyle: Object,
    expandedMethod: {
      type: String,
      validator(value) {
        return ["active", "hover"].includes(value);
      },
      default: "hover"
    },
    styles: Object,
    className: String
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    getMenuItems() {
      const {
        menuItemWidth,
        menuItemHeight,
        menuItemHoverStyle,
        expandedMethod
      } = this;

      return this.$slots.default
        .filter(vNode => vNode.tag !== void 0 && vNode.componentOptions)
        .map(vNode => {
          if (vNode.componentOptions.tag === MenuItem.name) {
            Object.assign(vNode.componentOptions.propsData, {
              itemWidth: menuItemWidth,
              itemHeight: menuItemHeight,
              hoverStyle: menuItemHoverStyle,
              expandedMethod: expandedMethod
            });
          }
          return vNode;
        });
    }
  },

  render(h) {
    const { className } = this;

    const { theme } = this.context;

    const styles = getStyles(this);
    const styleClasses = theme.prepareStyle({
      className: "menu",
      style: styles.root,
      extendsClassName: className
    });

    const menuItems = this.getMenuItems();

    return h(
      "div",
      {
        class: styleClasses.className,
        style: styleClasses.style
      },
      menuItems
    );
  }
};

function getStyles(Menu) {
  const {
    context: { theme },
    styles,
    menuItemWidth
  } = Menu;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      width: menuItemWidth,
      color: theme.baseHigh,
      background: theme.useFluentDesign
        ? theme.acrylicTexture60.background
        : theme.chromeLow,
      border: `1px solid ${theme.listLow}`,
      ...styles
    })
  };
}
