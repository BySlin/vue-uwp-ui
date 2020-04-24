import darkTheme from "../../styles/darkTheme";
import AddBlurEvent from "../../common/AddBlurEvent";
import PseudoClasses from "../PseudoClasses";
import { bindEvent } from "../../common/eventUtil";
import Icon from "../Icon";

export default {
  name: "MenuItem",
  props: {
    styles: Object,
    className: String,
    itemHeight: {
      type: Number,
      default: 44
    },
    itemWidth: {
      type: Number,
      default: 240
    },
    expandedMethod: {
      type: String,
      validator(value) {
        return ["active", "hover"].includes(value);
      },
      default: "hover"
    },
    icon: String,
    label: String,
    defaultExpanded: Boolean,
    hoverStyle: Object
  },

  data() {
    return {
      expanded: this.defaultExpanded,
      addBlurEvent: new AddBlurEvent()
    };
  },
  watch: {
    defaultExpanded(v) {
      this.expanded = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    addBlurEventMethod() {
      this.addBlurEvent.setConfig({
        addListener: this.expanded,
        clickExcludeElm: this.$el,
        blurCallback: () => {
          this.expanded = false;
        },
        blurKeyCodes: [27]
      });
    },
    toggleExpanded(expanded = !this.expanded) {
      this.expanded = expanded;
    },
    getMenuItems() {
      const { itemWidth, itemHeight, hoverStyle, expandedMethod } = this;

      return (
        this.$slots.default &&
        this.$slots.default
          .filter(vNode => vNode.tag !== void 0 && vNode.componentOptions)
          .map(vNode => {
            if (vNode.componentOptions.tag === this.$options._componentTag) {
              Object.assign(vNode.componentOptions.propsData, {
                itemWidth,
                itemHeight,
                hoverStyle,
                expandedMethod
              });
            }
            return vNode;
          })
      );
    }
  },

  mounted() {
    this.addBlurEventMethod();
  },

  updated() {
    this.addBlurEventMethod();
  },

  destroyed() {
    this.addBlurEvent.cleanEvent();
  },

  render(h) {
    const {
      icon,
      label,
      itemHeight,
      className,
      expandedMethod,
      toggleExpanded
    } = this;

    const { theme } = this.context;

    const menuItems = this.getMenuItems();

    const inlineStyles = getStyles(this, menuItems);

    const styleClasses = theme.prepareStyles({
      className: "menu",
      styles: inlineStyles
    });

    const isHoverToggled = expandedMethod === "hover";

    const iconProps = {
      size: itemHeight,
      styles: { fontSize: itemHeight / 3 }
    };

    const events = bindEvent(this);

    const event = {
      on: {
        ...events,
        mouseenter: () => {
          events.mouseenter();
          if (isHoverToggled) {
            toggleExpanded(true);
          }
        },
        mouseleave: () => {
          events.mouseleave();
          if (isHoverToggled) {
            toggleExpanded(false);
          }
        }
      }
    };

    const params = {
      class: theme.classNames(styleClasses.root.className, className),
      style: styleClasses.root.style,
      ...event
    };

    return h(PseudoClasses, { props: { props: params } }, [
      h("div", params, [
        h(
          Icon,
          {
            props: iconProps
          },
          icon
        ),
        h(
          "span",
          {
            class: styleClasses.label.className,
            style: styleClasses.label.style
          },
          label
        ),

        menuItems &&
          h(
            Icon,
            {
              props: {
                size: iconProps.size,
                styles: {
                  ...iconProps.styles,
                  fontSize: itemHeight / 3,
                  cursor: "pointer",
                  pointerEvents: "all"
                }
              },
              on: {
                click() {
                  if (isHoverToggled) {
                    toggleExpanded();
                  }
                }
              }
            },
            "ScrollChevronRightLegacy"
          ),
        menuItems &&
          h(
            "div",
            {
              class: styleClasses.child.className,
              style: styleClasses.child.style
            },
            menuItems
          )
      ])
    ]);
  }
};

function getStyles(MenuItem, menuItems) {
  const {
    context: { theme },
    hoverStyle,
    styles,
    itemWidth,
    itemHeight,
    expanded
  } = MenuItem;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      cursor: "default",
      height: itemHeight,
      fontSize: itemHeight / 3,
      lineHeight: `${itemHeight}px`,
      width: "100%",
      position: menuItems ? "relative" : void 0,
      "&:hover": hoverStyle || {
        background: theme.listLow
      },
      ...styles
    }),
    label: {
      width: itemWidth - itemHeight - (menuItems ? itemHeight : 0),
      height: itemHeight,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    child: prefixStyle({
      transform: `translate3d(${expanded ? 0 : `-${itemHeight}px`}, 0, 0)`,
      opacity: expanded ? 1 : 0,
      pointerEvents: expanded ? "all" : "none",
      transition: "all .25s",
      position: "absolute",
      top: -1,
      left: "100%",
      width: "100%",
      background: theme.useFluentDesign
        ? theme.acrylicTexture60.background
        : theme.chromeLow,
      border: `1px solid ${theme.listLow}`
    })
  };
}
