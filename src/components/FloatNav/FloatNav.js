import IconButton from "../IconButton";
import darkTheme from "../../styles/darkTheme";
import FloatNavExpandedItem from "./FloatNavExpandedItem";

export default {
  name: "FloatNav",
  props: {
    isFloatRight: {
      type: Boolean,
      default: true
    },
    initWidth: {
      type: Number,
      default: 48
    },
    expandedWidth: {
      type: Number,
      default: 240
    },
    focusItemIndex: Number,
    styles: Object,
    className: String
  },
  data() {
    return {
      currFocusItemIndex: this.focusItemIndex,
      hoverItem: null,
      hoverIndexArray: []
    };
  },
  watch: {
    focusItemIndex(v) {
      this.currFocusItemIndex = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    getExpandedItems(h) {
      return this.$slots.default
        .filter(vNode => {
          return (
            vNode.componentOptions &&
            vNode.componentOptions.tag === FloatNavExpandedItem.name
          );
        })
        .map((vNode, index) => {
          const { focusColor, title, href } =
            vNode.componentOptions.propsData || {};
          const { click } = vNode.componentOptions.listeners || {};

          const {
            initWidth,
            currFocusItemIndex,
            hoverItem,
            hoverIndexArray,
            isFloatRight,
            expandedWidth,

            context: { theme }
          } = this;

          const isFirst = currFocusItemIndex === index;
          const isHovered = hoverItem === index;
          const padding = initWidth / 2;
          const linkStyle = theme.prefixStyle({
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            transition: "all .25s",
            textDecoration: "none",
            height: initWidth
          });
          const linkStyleClasses = theme.prepareStyle({
            className: "float-nav-link",
            style: linkStyle
          });

          const iconNode =
            vNode.componentOptions.children &&
            vNode.componentOptions.children[0];

          if (
            iconNode !== void 0 &&
            iconNode.componentOptions.tag === IconButton.name
          ) {
            Object.assign(iconNode.componentOptions.propsData, {
              styles: {
                color:
                  hoverIndexArray[index] || isFirst ? "#fff" : theme.baseHigh
              }
            });
          }
          const vm = this;

          return h(
            "a",
            {
              key: `expandedItem-${index}`,
              on: {
                mouseenter() {
                  vm.hoverIndexArray[index] = true;
                  vm.hoverItem = index;
                },

                mouseleave() {
                  vm.hoverIndexArray[index] = false;
                  vm.hoverItem = void 0;
                },
                click() {
                  vm.$emit("focusItem", index);
                  if (click) {
                    click();
                  }
                }
              },
              attrs: {
                href
              },
              style: theme.prefixStyle({
                ...linkStyleClasses.style,
                flexDirection: isFloatRight ? "row" : "row-reverse",
                justifyContent: isHovered ? "space-between" : "center",
                color: hoverIndexArray[index] ? "#fff" : theme.baseHigh,
                background:
                  isFirst || isHovered
                    ? theme.accent || focusColor
                    : theme.altHigh,
                width:
                  (hoverIndexArray[index] ? expandedWidth : initWidth) + "px"
              }),
              class: linkStyleClasses.className
            },
            [
              isHovered &&
                h(
                  "span",
                  {
                    style: {
                      cursor: "default",
                      color: "#fff",
                      margin: `0 ${padding}px`,
                      whiteSpace: "nowrap"
                    }
                  },
                  title
                ),
              iconNode
            ]
          );
        });
    }
  },

  render(h) {
    const { initWidth } = this;
    const { theme } = this.context;

    const itemStyle = theme.prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      background: theme.altHigh,
      transition: "all .25s 0s cubic-bezier(.04, .89, .44, 1.07)",
      fontSize: 12
    });

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "float-nav",
      styles: inlineStyles
    });

    const { topNode, bottomNode } = this.$slots;

    const expandedItems = this.getExpandedItems(h);

    return h(
      "div",
      {
        style: styleClasses.root.style,
        class: styleClasses.root.className
      },
      [
        h(
          "div",
          {
            style: styleClasses.wrapper.style,
            class: styleClasses.wrapper.className
          },
          [
            topNode.map((vNode, index) => {
              vNode.data.style = vNode.data.style || {};
              Object.assign(vNode.data.style, {
                width: initWidth + "px",
                height: initWidth + "px"
              });

              return h(
                "div",
                {
                  key: `topNode-${index}`,
                  style: theme.prefixStyle({
                    ...itemStyle,
                    width: initWidth + "px",
                    height: initWidth + "px"
                  })
                },
                [vNode]
              );
            }),
            expandedItems,
            bottomNode.map((vNode, index) => {
              vNode.data.style = vNode.data.style || {};
              Object.assign(vNode.data.style, {
                width: initWidth,
                height: initWidth + "px"
              });

              return h(
                "div",
                {
                  key: `bottomNode-${index}`,
                  style: theme.prefixStyle({
                    ...itemStyle,
                    width: initWidth,
                    height: initWidth + "px"
                  })
                },
                [vNode]
              );
            })
          ]
        )
      ]
    );
  }
};

function getStyles(FloatNav) {
  const {
    styles,
    initWidth,
    isFloatRight,
    context: { theme }
  } = FloatNav;

  const { prefixStyle } = theme;
  return {
    root: prefixStyle({
      width: 48,
      background: theme.altHigh,
      ...styles
    }),
    wrapper: prefixStyle({
      width: initWidth,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: isFloatRight ? "flex-end" : "flex-start"
    }),
    button: {
      background: theme.accent,
      color: "#fff"
    }
  };
}
