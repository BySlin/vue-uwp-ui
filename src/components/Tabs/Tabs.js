import Tab from "./Tab";
import CustomAnimate from "../Animate/CustomAnimate";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "Tabs",

  props: {
    value: {
      type: Number,
      default: 0
    },
    tabTitleStyle: Object,

    tabTitleFocusStyle: Object,

    tabStyle: Object,

    useAnimate: {
      type: Boolean,
      default: true
    },

    animateMode: {
      type: String,
      validator(value) {
        return ["in", "out", "in-out"].includes(value);
      },
      default: "in"
    },

    animateSpeed: {
      type: Number,
      default: 500
    },

    animateEnterStyle: {
      type: Object,
      default() {
        return {
          transform: "translateX(0)",
          opacity: 1
        };
      }
    },

    animateLeaveStyle: {
      type: Object,
      default() {
        return {
          transform: "translateX(100%)",
          opacity: 0
        };
      }
    },

    styles: Object,
    className: String,
    renderTitle: {
      type: Function,
      default: (h, title) => title
    }
  },
  data() {
    return {
      tabFocusIndex: this.value || 0
    };
  },
  watch: {
    value(v) {
      this.tabFocusIndex = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const {
      tabStyle,
      renderTitle,
      useAnimate,
      animateMode,
      animateSpeed,
      animateEnterStyle,
      animateLeaveStyle,
      tabFocusIndex
    } = this;
    const { theme } = this.context;

    const childrenArray = this.$slots.default;

    const isAvailableArray = childrenArray && childrenArray.length > 0;
    const tabs =
      isAvailableArray &&
      childrenArray.filter(
        child =>
          child.componentOptions && child.componentOptions.tag === Tab.name
      );

    const currTab = tabs && tabs[tabFocusIndex];

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "tabs",
      styles: inlineStyles
    });

    const vm = this;

    const normalRender = h(
      "div",
      {
        key: `tabStyle-${tabFocusIndex}`,
        class: styleClasses.tabStyle.className,
        style: styleClasses.tabStyle.style
      },
      [currTab]
    );

    return h(
      "div",
      {
        class: styleClasses.root.className,
        style: styleClasses.root.style
      },
      [
        h(
          "div",
          {
            class: styleClasses.titles.className,
            style: styleClasses.titles.style
          },
          tabs &&
            tabs.map((tab, index) => {
              const tabTitle =
                tab.componentOptions.propsData.title ||
                `Tabs Items ${index + 1}`;

              return h(
                "span",
                {
                  ...(index === tabFocusIndex
                    ? {
                        class: styleClasses.titleFocus.className,
                        style: styleClasses.titleFocus.style
                      }
                    : {
                        class: styleClasses.title.className,
                        style: styleClasses.title.style
                      }),
                  on: {
                    click() {
                      vm.tabFocusIndex = index;
                      vm.$emit("input", index);
                    }
                  }
                },
                [renderTitle(h, tabTitle)]
              );
            })
        ),

        useAnimate
          ? h(
              CustomAnimate,
              {
                props: {
                  mode: animateMode,
                  speed: animateSpeed,
                  enterStyle: animateEnterStyle,
                  leaveStyle: animateLeaveStyle,
                  wrapperStyle: {
                    width: "100%",
                    height: "100%",
                    ...tabStyle
                  },
                  appearAnimate: false
                }
              },
              [normalRender]
            )
          : normalRender
      ]
    );
  }
};

function getStyles(Tabs) {
  const {
    context: { theme },
    tabTitleStyle,
    tabTitleFocusStyle,
    tabStyle,
    styles
  } = Tabs;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      color: theme.baseMediumHigh,
      display: "inline-block",
      verticalAlign: "middle",
      overflow: "hidden",
      ...styles
    }),
    titles: prefixStyle({
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      width: "100%",
      overflow: "auto"
    }),
    title: prefixStyle({
      color: theme.baseHigh,
      borderBottom: `1px solid transparent`,
      fontWeight: "lighter",
      cursor: "pointer",
      fontSize: 18,
      padding: "4px 12px",
      transition: "all .25s",
      ...tabTitleStyle
    }),
    titleFocus: prefixStyle({
      color: theme.baseHigh,
      fontWeight: "lighter",
      cursor: "pointer",
      fontSize: 18,
      padding: "4px 12px",
      transition: "all .25s",
      ...tabTitleStyle,
      borderBottom: `2px solid ${theme.accent}`,
      ...tabTitleFocusStyle
    }),
    tabStyle: prefixStyle({
      width: "100%",
      height: "100%",
      ...tabStyle
    })
  };
}
