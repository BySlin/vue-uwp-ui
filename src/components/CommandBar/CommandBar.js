import darkTheme from "../../styles/darkTheme";
import AppBarButton from "../AppBarButton";
import AppBarSeparator from "../AppBarSeparator";
import ListView from "../ListView";
import AddBlurEvent from "../../common/AddBlurEvent";

export default {
  name: "CommandBar",

  props: {
    contentStyle: Object,

    content: String,

    labelPosition: {
      type: String,
      default: "bottom",
      validator(value) {
        return ["right", "bottom", "collapsed"].includes(value);
      }
    },

    verticalPosition: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom"].includes(value);
      }
    },

    flowDirection: {
      type: String,
      validator(value) {
        return ["row", "row-reverse"].includes(value);
      }
    },

    expanded: {
      type: Boolean,
      default: false
    },
    isMinimal: Boolean,
    background: String,
    styles: Object,
    className: String
  },

  watch: {
    expanded(v) {
      this.currExpanded = v;
    }
  },

  data() {
    return {
      currExpanded: this.expanded,
      addBlurEvent: new AddBlurEvent()
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    toggleExpanded(expanded = !this.currExpanded) {
      this.currExpanded = expanded;
      this.$emit("update:expanded", expanded);
    },
    addBlurEventMethod() {
      this.addBlurEvent.setConfig({
        addListener: this.currExpanded,
        clickExcludeElm: this.$el,
        blurCallback: () => {
          this.toggleExpanded(false);
        },
        blurKeyCodes: [27]
      });
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
      content,
      labelPosition,
      expanded,
      isMinimal,
      currExpanded,

      toggleExpanded
    } = this;

    const { contentNode, primaryCommands, secondaryCommands } = this.$slots;

    const { theme } = this.context;
    const defaultHeight = isMinimal ? 24 : 48;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "command-bar",
      styles: inlineStyles
    });

    const primaryCommandsNode =
      isMinimal && !currExpanded
        ? []
        : primaryCommands
            .filter(child => {
              if (child.componentOptions) {
                return (
                  child.componentOptions.tag === AppBarButton.name ||
                  child.componentOptions.tag === AppBarSeparator.name
                );
              }
            })
            .map((child, index) => {
              Object.assign(child.componentOptions.propsData, {
                labelPosition,
                key: index,
                styles:
                  child.componentOptions.tag === AppBarSeparator.name
                    ? {
                        height: 24
                      }
                    : void 0
              });

              return child;
            });

    const secondaryCommandsNode = secondaryCommands.map(itemNode => {
      if (itemNode.componentOptions) {
        if (itemNode.componentOptions.tag === AppBarSeparator.name) {
          Object.assign(itemNode.componentOptions.propsData, {
            disabled: true,
            direction: "row",
            styles: { padding: "0 8px" }
          });
        } else {
          const clickFunc = () => {
            const itemClick = itemNode.data.on.click;
            if (itemClick) {
              itemClick();
            }
            toggleExpanded();
          };

          Object.assign(itemNode.data.on, {
            click: clickFunc
          });
        }
      }

      return itemNode;
    });

    return h(
      "div",
      {
        style: styleClasses.wrapper.style,
        class: styleClasses.wrapper.className
      },
      [
        h(
          "div",
          {
            style: styleClasses.root.style,
            class: styleClasses.root.className
          },
          [
            (content !== void 0 || contentNode !== void 0) &&
              h(
                "div",
                {
                  style: styleClasses.content.style,
                  class: styleClasses.content.className
                },
                [content || contentNode]
              ),
            h(
              "div",
              {
                style: styleClasses.commands.style,
                class: styleClasses.commands.className
              },
              [
                ...primaryCommandsNode,
                h(AppBarButton, {
                  props: {
                    styles: inlineStyles.moreLegacy,

                    labelPosition: "bottom",
                    iconStyle: {
                      maxWidth: defaultHeight,
                      height: defaultHeight,
                      lineHeight: isMinimal
                        ? expanded
                          ? "48px"
                          : "24px"
                        : "48px"
                    },
                    icon: "MoreLegacy"
                  },
                  on: {
                    click: toggleExpanded
                  }
                }),
                secondaryCommands &&
                  h(
                    ListView,
                    {
                      props: {
                        styles: inlineStyles.secondaryCommands
                      }
                    },
                    secondaryCommandsNode
                  )
              ]
            )
          ]
        )
      ]
    );
  }
};

function getStyles(CommandBar) {
  const {
    context: { theme },
    styles,
    flowDirection,
    labelPosition,
    content,
    contentStyle,
    isMinimal,
    verticalPosition,
    background,

    currExpanded
  } = CommandBar;

  const { contentNode, primaryCommands } = CommandBar.$slots;

  const { prefixStyle } = theme;
  const inBottom = verticalPosition !== "top";
  const notChangeHeight = labelPosition !== "bottom";
  const haveContent = content || contentNode;
  const transition = "all .125s ease-in-out";
  const isReverse = flowDirection === "row-reverse";
  const defaultHeight = isMinimal ? 24 : 48;
  const expandedHeight = 72;
  let changedHeight;
  if (isMinimal) {
    changedHeight = currExpanded ? (notChangeHeight ? 48 : 72) : defaultHeight;
  } else {
    changedHeight =
      currExpanded && !notChangeHeight && primaryCommands
        ? expandedHeight
        : defaultHeight;
  }
  return {
    wrapper: theme.prefixStyle({
      height: inBottom ? "auto" : defaultHeight,
      display: "block",
      zIndex: currExpanded ? theme.zIndex.commandBar : void 0,
      ...styles
    }),
    root: prefixStyle({
      position: "relative",
      display: "flex",
      flexDirection: flowDirection || (haveContent ? "row" : "row-reverse"),
      alignItems: "flex-start",
      justifyContent: haveContent ? "space-between" : "flex-start",
      fontSize: 14,
      color: theme.baseMediumHigh,
      background:
        background || (theme.useFluentDesign ? theme.listLow : theme.altHigh),
      height: changedHeight,
      transition
    }),
    content: prefixStyle({
      height: defaultHeight,
      lineHeight: `${defaultHeight}px`,
      paddingLeft: 10,
      paddingRight: 10,
      ...contentStyle
    }),
    commands: prefixStyle({
      display: "flex",
      flexDirection: flowDirection,
      alignItems: "flex-start",
      height: "100%"
    }),
    moreLegacy: theme.prefixStyle({
      height: changedHeight,
      transition
    }),
    secondaryCommands: {
      width: "auto",
      maxWidth: 240,
      zIndex: theme.zIndex.commandBar,
      position: "absolute",
      right: isReverse ? void 0 : 0,
      left: isReverse ? 0 : void 0,
      top: inBottom ? void 0 : changedHeight,
      bottom: inBottom ? changedHeight : void 0,
      transform: `translate3d(0, ${currExpanded ? 0 : -8}px, 0)`,
      opacity: currExpanded ? 1 : 0,
      pointerEvents: currExpanded ? "all" : "none"
    }
  };
}
