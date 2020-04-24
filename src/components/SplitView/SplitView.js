import darkTheme from "../../styles/darkTheme";
import AddBlurEvent from "../../common/AddBlurEvent";
import SplitViewPane from "./SplitViewPane";

export default {
  name: "SplitView",

  props: {
    styles: Object,
    className: String,
    paneStyle: Object,

    value: {
      type: Boolean,
      default: false
    },

    displayMode: {
      type: String,
      validator(value) {
        return ["compact", "overlay"].includes(value);
      },
      default: "compact"
    },

    expandedWidth: {
      type: Number,
      default: 320
    },

    panePosition: {
      type: String,
      validator(value) {
        return ["left", "right"].includes(value);
      },
      default: "right"
    },

    clickExcludeElms: {
      type: Array
    }
  },

  data() {
    return {
      expanded: this.value,
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
      const { clickExcludeElms } = this;
      this.addBlurEvent.setConfig({
        addListener: this.expanded,
        clickExcludeElm: clickExcludeElms
          ? [...clickExcludeElms, this.rootElm]
          : this.rootElm,
        blurCallback: () => {
          this.expanded = false;
          this.$emit("input", false);
          this.$emit("closePane");
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
    const { className } = this;
    const { theme } = this.context;
    const splitViewPanes = [];
    const childView = [];

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "split-view",
      styles: inlineStyles
    });

    const children = this.$slots.default;

    if (children) {
      children.forEach(child => {
        if (
          child.componentOptions &&
          child.componentOptions.tag === SplitViewPane.name
        ) {
          Object.assign(child.componentOptions.propsData, {
            styles: {
              ...styleClasses.pane.style,
              ...child.componentOptions.propsData.styles
            },
            className: styleClasses.pane.className
          });

          splitViewPanes.push(child);
        } else {
          childView.push(child);
        }
      });
    }

    return h(
      "div",
      {
        class: theme.classNames(styleClasses.root.className, className),
        style: styleClasses.root.style
      },
      [...childView, ...splitViewPanes]
    );
  }
};

function getStyles(SplitView) {
  const {
    context,
    styles,
    expandedWidth,
    displayMode,
    panePosition,
    paneStyle,
    expanded
  } = SplitView;
  const { theme } = context;
  const { prefixStyle } = theme;
  const isCompact = displayMode === "compact";
  const isOverlay = displayMode === "overlay";
  const panePositionIsRight = panePosition === "right";
  const transition = "all .25s ease-in-out";

  return {
    root: prefixStyle({
      color: theme.baseHigh,
      background: theme.useFluentDesign
        ? theme.acrylicTexture60.background
        : theme.chromeLow,
      display: "inline-block",
      position: "relative",
      margin: 0,
      padding: 0,
      transition,
      ...(isCompact
        ? {
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "auto",
            height: "auto"
          }
        : void 0),
      ...(isOverlay
        ? {
            width: "100%"
          }
        : void 0),
      ...styles,
      overflow: "hidden"
    }),
    pane: prefixStyle({
      background: theme.useFluentDesign
        ? theme.acrylicTexture40.background
        : theme.altHigh,
      transition,
      boxShadow: theme.useFluentDesign
        ? `rgba(0, 0, 0, 0.34) 0px 4px 24px`
        : void 0,
      ...(isCompact
        ? {
            height: "100%",
            width: expandedWidth,
            transform: `translate3d(${expanded ? 0 : expandedWidth}px, 0, 0)`
          }
        : void 0),
      ...(isOverlay
        ? {
            position: "absolute",
            top: 0,
            right: panePositionIsRight ? 0 : void 0,
            left: panePositionIsRight ? void 0 : 0,
            height: "100%",
            width: expandedWidth,
            transform: `translate3d(${expanded ? 0 : expandedWidth}px, 0, 0)`
          }
        : void 0),
      ...paneStyle
    })
  };
}
