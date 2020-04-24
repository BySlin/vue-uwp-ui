import darkTheme from "../../styles/darkTheme";
import Icon from "../Icon";

export default {
  name: "TreeView",
  props: {
    listSource: {
      type: Array,
      require: true
    },

    iconDirection: {
      type: String,
      validator(value) {
        return ["left", "right"].includes(value);
      },
      default: "left"
    },
    itemHeight: {
      type: Number,
      default: 32
    },
    itemPadding: Number,
    iconPadding: {
      type: Number,
      default: 2
    },
    background: String,
    showFocus: Boolean,
    className: String,
    styles: Object
  },

  data() {
    return {
      init: true,
      chooseTreeItem: null
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    setChooseItem(chooseTreeItem) {
      if (this.chooseTreeItem && chooseTreeItem !== this.chooseTreeItem) {
        this.chooseTreeItem.visited = false;
      }
      chooseTreeItem.visited = true;

      if (chooseTreeItem.children) {
        chooseTreeItem.expanded = !chooseTreeItem.expanded;
      }

      this.chooseTreeItem = chooseTreeItem;
      this.init = false;

      this.$emit("chooseTreeItem", chooseTreeItem);
      this.$forceUpdate();
    },

    renderTree(h) {
      const { theme } = this.context;
      const {
        iconDirection,
        showFocus,
        itemHeight,
        iconPadding,
        itemPadding,
        listSource,

        init
      } = this;

      const { headerIcon, itemIcon } = this.$slots;

      const styles = getStyles(this);

      const renderList = (item, index, isChild, prevIndexArray = []) => {
        const indexArray = prevIndexArray.concat(index);
        if (typeof item === "string" || typeof item === "number") {
          let lastIndex = indexArray.splice(-1)[0];
          let itemParent = listSource;
          for (const numb of indexArray) {
            itemParent = itemParent.children
              ? itemParent.children[numb]
              : itemParent[numb];
          }
          const newData = { title: item };
          if (itemParent.children) {
            itemParent.children[lastIndex] = newData;
          } else {
            itemParent[lastIndex] = newData;
          }
          item = newData;
        }

        let {
          title,
          expanded,
          disabled,
          visited,
          focus,
          children,
          hidden,
          style,
          hoverStyle
        } = item;

        let titleNode = item.render ? item.render(h, item) : title;

        const haveChild = Array.isArray(children) && children.length !== 0;
        const isRight = iconDirection === "right";
        const isVisited = (visited && !haveChild) || (visited && init);

        const inlineStyles = hidden
          ? null
          : {
              root: {
                paddingLeft: isChild
                  ? isRight
                    ? itemHeight / 2.8
                    : itemPadding || (itemHeight * 2) / 3
                  : void 0
              },
              title: {
                color: disabled ? theme.baseLow : void 0,
                ...styles.title
              },
              titleNode: {
                cursor: disabled ? "not-allowed" : "pointer",
                pointerEvents: disabled ? "none" : void 0,
                paddingLeft: isRight
                  ? 0
                  : haveChild
                  ? iconPadding
                  : itemHeight / 8,
                fontSize: itemHeight / 2.25,
                height: "100%",
                lineHeight: `${itemHeight}px`,
                ...styles.titleNode,
                ...style
              },
              icon: {
                cursor: disabled ? "not-allowed" : "pointer",
                color: disabled ? theme.baseLow : void 0,
                fontSize: itemHeight / 2,
                lineHeight: `${itemHeight / 2}px`,
                width: itemHeight / 2,
                height: itemHeight / 2,
                flex: "0 0 auto",
                zIndex: 1,
                transform: `rotateZ(${
                  expanded ? "-180deg" : isRight ? "0deg" : "-90deg"
                })`
              },
              behindBG: {
                cursor: disabled ? "not-allowed" : "pointer",
                transition: "all 0.25s",
                zIndex: 0,
                background:
                  focus && showFocus
                    ? theme.accent
                    : isVisited
                    ? theme.listAccentLow
                    : "none",
                ...styles.behindBG
              },
              child: haveChild
                ? theme.prefixStyle({
                    height: "auto",
                    overflow: expanded ? void 0 : "hidden",
                    opacity: expanded ? 1 : 0,
                    transform: `translateY(${expanded ? 0 : -10}px)`,
                    transformOrigin: "top",
                    transition: "all .25s"
                  })
                : void 0
            };
        const listStyles = hidden
          ? null
          : theme.prepareStyles({
              className: "tree-view",
              styles: inlineStyles
            });

        const vm = this;

        return hidden
          ? null
          : h(
              "div",
              {
                key: `${index}`,
                class: listStyles.root.className,
                style: listStyles.root.style
              },
              [
                h(
                  "div",
                  {
                    class: listStyles.title.className,
                    style: listStyles.title.style,
                    on: {
                      mouseenter(e) {
                        if (!disabled) {
                          const targetChild = e.target.children;
                          const behindElm = targetChild[targetChild.length - 1];

                          if (
                            behindElm.classList.contains(
                              listStyles.behindBG.className
                            )
                          ) {
                            Object.assign(behindElm.style, {
                              background: isVisited
                                ? theme.accent
                                : theme.baseLow,
                              ...hoverStyle
                            });
                          }
                        }
                      },
                      mouseleave(e) {
                        if (!disabled) {
                          const targetChild = e.target.children;
                          const behindElm = targetChild[targetChild.length - 1];

                          if (
                            behindElm.classList.contains(
                              listStyles.behindBG.className
                            )
                          ) {
                            Object.assign(behindElm.style, {
                              background: isVisited
                                ? theme.listAccentLow
                                : "none"
                            });
                          }
                        }
                      }
                    }
                  },
                  [
                    h(
                      "div",
                      {
                        class: listStyles.titleNode.className,
                        style: listStyles.titleNode.style,
                        on: {
                          click() {
                            if (!disabled) {
                              vm.setChooseItem(item);
                            }
                          }
                        }
                      },
                      titleNode
                    ),
                    haveChild ? headerIcon : itemIcon,
                    (headerIcon || itemIcon ? headerIcon && itemIcon : true) &&
                      haveChild &&
                      h(
                        Icon,
                        {
                          props: {
                            styles: listStyles.icon.style,
                            className: listStyles.icon.className
                          },
                          on: {
                            click() {
                              if (!disabled) {
                                vm.setChooseItem(item);
                              }
                            }
                          }
                        },
                        "ScrollChevronDownLegacy"
                      ),
                    h("div", {
                      class: listStyles.behindBG.className,
                      style: {
                        ...listStyles.behindBG.style,
                        background:
                          focus && showFocus
                            ? theme.accent
                            : isVisited
                            ? theme.listAccentLow
                            : "none"
                      },
                      on: {
                        click() {
                          if (!disabled) {
                            vm.setChooseItem(item);
                          }
                        }
                      }
                    })
                  ]
                ),
                haveChild &&
                  h(
                    "div",
                    {
                      class: listStyles.child.className,
                      style: listStyles.child.style
                    },
                    expanded
                      ? children.map((item, index) =>
                          renderList(item, index, true, indexArray)
                        )
                      : null
                  )
              ]
            );
      };

      return listSource.map((list, index) => renderList(list, index));
    }
  },

  render(h) {
    const { listSource, className } = this;
    const styles = getStyles(this);

    const prepareStyle = this.context.theme.prepareStyle({
      style: styles.root,
      className: "tree-view",
      extendsClassName: className
    });

    return h(
      "div",
      {
        class: prepareStyle.className,
        style: prepareStyle.style
      },
      listSource ? this.renderTree(h) : null
    );
  }
};

function getStyles(TreeView) {
  const { context, iconDirection, itemHeight, styles, background } = TreeView;
  const isRight = iconDirection === "right";
  const { theme } = context;
  const { prefixStyle } = theme;
  return {
    root: prefixStyle({
      fontSize: 14,
      overflowX: "hidden",
      overflowY: "auto",
      color: theme.baseMediumHigh,
      background:
        background ||
        (theme.useFluentDesign ? theme.acrylicTexture60.background : "none"),
      width: itemHeight * 10,
      padding: "0 16px",
      ...styles
    }),
    title: prefixStyle({
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      width: "100%",
      position: "relative",
      fontSize: 14,
      display: "flex",
      height: itemHeight,
      flexDirection: `row${isRight ? "" : "-reverse"}`,
      alignItems: "center",
      justifyContent: isRight ? "space-between" : "flex-end",
      transition: "all .25s 0s ease-in-out"
    }),
    titleNode: prefixStyle({
      color: "inherit",
      zIndex: 1,
      width: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }),
    behindBG: {
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "400%",
      height: "100%"
    }
  };
}
