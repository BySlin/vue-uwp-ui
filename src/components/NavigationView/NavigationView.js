import AddBlurEvent from "../../common/AddBlurEvent";
import SlideInOut from "../Animate/SlideInOut";
import IconButton from "../IconButton";
import SplitViewCommand from "../SplitViewCommand";
import darkTheme from "../../styles/darkTheme";
import { cloneVNode } from "../../common/VNodeClone";

export default {
  name: "NavigationView",

  props: {
    value: {
      type: Boolean,
      default: false
    },

    background: String,

    initWidth: {
      type: Number,
      default: 48
    },

    expandedWidth: {
      type: Number,
      default: 320
    },

    isControlled: Boolean,

    displayMode: {
      type: String,
      validator(value) {
        return ["overlay", "compact", "minimal"].includes(value);
      },
      default: "compact"
    },

    pageTitle: String,

    paneStyle: Object,

    isTenFt: {
      type: Boolean,
      default: false
    },

    autoResize: {
      type: Boolean,
      default: true
    },

    focusNavigationNodeIndex: Number,

    styles: Object,
    className: String
  },

  data() {
    return {
      expanded: this.value,
      focusNodeIndex: this.focusNavigationNodeIndex,
      currDisplayMode: this.displayMode,
      currInitWidth: this.initWidth,
      addBlurEvent: new AddBlurEvent()
    };
  },

  watch: {
    value(v) {
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
        clickExcludeElm: this.$refs.paneElm,
        blurCallback: () => {
          this.toggleExpanded(false);
        },
        blurKeyCodes: [27]
      });
    },

    toggleExpanded(expanded = !this.expanded) {
      this.expanded = expanded;
      this.$emit("input", expanded);
    },

    autoResizeFunc() {
      if (window.innerWidth < 1280) {
        if (this.currDisplayMode !== "compact") {
          this.currDisplayMode = "compact";
          this.currInitWidth = 0;
        }
      } else {
        if (this.state.currDisplayMode === "compact") {
          this.currDisplayMode = "minimal";
          this.currInitWidth = 48;
        }
      }
    },

    topIcon(h, inlineStyles) {
      const {
        isControlled,
        context: { theme }
      } = this;

      const { topIcon } = this.$slots;

      const vm = this;

      if (topIcon) {
        topIcon.forEach(item => {
          const { click } = item.data.on || {};
          Object.assign(item.data.on, {
            click() {
              if (!isControlled) {
                vm.toggleExpanded();
                if (click) {
                  click();
                }
              }
            }
          });
        });

        return topIcon;
      }

      return [
        h(
          IconButton,
          {
            props: {
              styles: inlineStyles.icon,
              hoverStyle: {
                background: theme.baseLow
              },
              activeStyle: {
                background: theme.baseMediumLow
              }
            },
            on: {
              click() {
                if (!isControlled) {
                  vm.toggleExpanded();
                }
              }
            }
          },
          "GlobalNavButton"
        )
      ];
    },
    getNewNode(currNode, index, expanded, haveExpandedNode) {
      const { focusNodeIndex } = this;

      const vm = this;

      const { click } = currNode.componentOptions.listeners || {};

      const data = {
        key: `${index} ${expanded}`,
        props: {
          visited: focusNodeIndex === void 0 ? void 0 : focusNodeIndex === index
        },
        on: {
          click(e) {
            vm.focusNodeIndex = index;
            vm.expanded = haveExpandedNode ? true : vm.expanded;
            if (click) {
              click(e);
            }
          }
        }
      };
      const isSplitViewCommand =
        currNode.componentOptions &&
        currNode.componentOptions.tag === SplitViewCommand.name;

      if (isSplitViewCommand) {
        data.props.showLabel = this.expanded;
      }

      return cloneVNode(this.$createElement, currNode, data);
    }
  },

  mounted() {
    if (this.autoResize) {
      this.autoResizeFunc();
      window.addEventListener("resize", this.autoResizeFunc);
    }
    if (!this.isControlled) {
      this.addBlurEventMethod();
    }
  },

  updated() {
    if (!this.isControlled) {
      this.addBlurEventMethod();
    }
  },

  destroyed() {
    this.addBlurEvent.cleanEvent();
  },

  render(h) {
    const {
      topIcon,
      pageTitle,
      className,

      expanded,
      getNewNode
    } = this;

    const { theme } = this.context;

    const { navigationTopNodes, navigationBottomNodes } = this.$slots;

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "navigation-view",
      styles: inlineStyles
    });
    let nodeIndex = -1;

    return h(
      "div",
      {
        style: styleClasses.root.style,
        class: theme.classNames(styleClasses.root.className, className)
      },
      [
        h(
          "div",
          {
            style: styleClasses.paneParent.style,
            class: styleClasses.paneParent.className,
            ref: "paneElm"
          },
          [
            h(
              "div",
              {
                style: styleClasses.pane.style,
                class: styleClasses.pane.className
              },
              [
                h(
                  "div",
                  {
                    style: styleClasses.paneTop.style,
                    class: styleClasses.paneTop.className
                  },
                  [
                    h(
                      "div",
                      {
                        style: styleClasses.topIcon.style,
                        class: styleClasses.topIcon.className
                      },

                      [
                        ...topIcon(h, inlineStyles),
                        h(
                          "p",
                          {
                            style: styleClasses.pageTitle.style,
                            class: styleClasses.pageTitle.className
                          },
                          pageTitle
                        )
                      ]
                    ),

                    h(
                      "div",
                      {
                        style: styleClasses.paneTopIcons.style,
                        class: styleClasses.paneTopIcons.className
                      },
                      navigationTopNodes &&
                        navigationTopNodes
                          .filter(node => node.tag !== void 0)
                          .map((node, index) => {
                            let currNode = node;
                            const haveExpandedNode = "expanded" in node;
                            if (node.default) currNode = node.default;
                            if (haveExpandedNode && expanded)
                              currNode = node.expanded;
                            ++nodeIndex;

                            return h(
                              SlideInOut,
                              {
                                props: {
                                  appearAnimate: false,
                                  mode: "in",
                                  direction: "right",
                                  key: `${index}`,
                                  styles: { height: 48 }
                                }
                              },
                              [
                                getNewNode(
                                  currNode,
                                  nodeIndex,
                                  Boolean(expanded && haveExpandedNode),
                                  haveExpandedNode
                                )
                              ]
                            );
                          })
                    )
                  ]
                ),

                h(
                  "div",
                  {
                    style: styleClasses.paneBottomIcons.style,
                    class: styleClasses.paneBottomIcons.className
                  },
                  navigationBottomNodes &&
                    navigationBottomNodes
                      .filter(node => node.tag !== void 0)
                      .map((node, index) => {
                        let currNode = node;
                        const haveExpandedNode = "expanded" in node;
                        if (node.default) currNode = node.default;
                        if (haveExpandedNode && expanded)
                          currNode = node.expanded;
                        ++nodeIndex;

                        return h(
                          SlideInOut,
                          {
                            props: {
                              appearAnimate: false,
                              mode: "in",
                              direction: "right",
                              key: `${index}`,
                              styles: { height: 48 }
                            }
                          },
                          [
                            getNewNode(
                              currNode,
                              nodeIndex,
                              Boolean(expanded && haveExpandedNode),
                              haveExpandedNode
                            )
                          ]
                        );
                      })
                )
              ]
            )
          ]
        ),

        h(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }
          },
          this.$slots.default
        )
      ]
    );
  }
};

function getStyles(NavigationView) {
  const {
    context,
    expandedWidth,
    styles,
    paneStyle,
    background,
    currInitWidth,
    expanded,
    currDisplayMode
  } = NavigationView;

  const { navigationTopNodes, navigationBottomNodes } = NavigationView.$slots;

  const isOverLay = currDisplayMode === "overlay";
  const isMinimal = currDisplayMode === "minimal";
  const isCompact = currDisplayMode === "compact";
  const { theme } = context;
  const { prefixStyle } = theme;

  // eslint-disable-next-line no-unused-vars
  let minHeight = isMinimal ? 0 : 48;

  if (navigationTopNodes) {
    minHeight += 48 * navigationTopNodes.length;
  }
  if (navigationBottomNodes) {
    minHeight += 48 * navigationBottomNodes.length;
  }
  const currBackground =
    background ||
    (theme.useFluentDesign ? theme.acrylicTexture40.background : theme.altHigh);
  const transition = "width .25s ease-in-out";

  return {
    root: prefixStyle({
      display: isCompact ? "flex" : "inline-block",
      fontSize: 16,
      color: theme.baseHigh,
      height: isCompact ? "100%" : void 0,
      position: "relative",
      ...styles
    }),
    topIcon: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: isMinimal ? "100%" : expandedWidth,
      background: currBackground,
      flex: "0 0 auto",
      zIndex: 1
    }),
    pageTitle: prefixStyle({
      paddingLeft: 2,
      opacity: expanded || isMinimal ? 1 : 0,
      width: isMinimal ? expandedWidth : "100%",
      wordWrap: "normal",
      whiteSpace: "nowrap",
      overflow: isMinimal ? void 0 : "hidden",
      textOverflow: "ellipsis"
    }),
    paneParent: prefixStyle({
      display: "inline-block",
      verticalAlign: "top",
      width: isMinimal
        ? "100%"
        : isOverLay
        ? currInitWidth
        : expanded
        ? expandedWidth
        : currInitWidth,
      flex: "0 0 auto",
      height: isMinimal ? currInitWidth : "100%",
      zIndex: isOverLay || isMinimal ? 1 : void 0,
      position: isOverLay ? "absolute" : void 0,
      top: isOverLay ? 0 : void 0,
      background: isMinimal ? currBackground : void 0,
      transition
    }),
    pane: prefixStyle({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
      background: currBackground,
      overflow: isMinimal ? void 0 : "hidden",
      width: expanded ? expandedWidth : isMinimal ? 0 : currInitWidth,
      ...(isMinimal
        ? {
            position: "absolute",
            top: 0,
            left: 0,
            background: currBackground
          }
        : void 0),
      height: "100%",
      transition,
      ...prefixStyle(paneStyle)
    }),
    paneTop: prefixStyle({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      flex: "0 0 auto"
    }),
    paneTopIcons: prefixStyle({
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      width: isMinimal && !expanded ? 0 : expandedWidth,
      flex: "0 0 auto",
      zIndex: 1
    }),
    paneBottomIcons: prefixStyle({
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      width: isMinimal && !expanded ? 0 : expandedWidth,
      flex: "0 0 auto",
      zIndex: 1
    }),
    iconButton: {
      cursor: "pointer",
      fontSize: 16,
      width: 48,
      height: 48,
      background: "none"
    }
  };
}
