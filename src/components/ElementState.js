import darkTheme from "../styles/darkTheme";
import setStyleToElement from "../common/setStyleToElement";

const emptyFunc = () => {};

export default {
  name: "ElementState",
  props: {
    hoverStyle: Object,
    activeStyle: Object,
    visitedStyle: Object,
    focusStyle: Object,
    disabledStyle: Object,
    disabled: Boolean,
    rootElm: HTMLElement,
    styles: Object,
    event: {
      type: Object,
      default() {
        return {
          onHover: emptyFunc,
          onFocus: emptyFunc,
          onActive: emptyFunc,
          onVisited: emptyFunc,
          unHover: emptyFunc,
          unFocus: emptyFunc,
          unActive: emptyFunc,
          unVisited: emptyFunc,
          onMouseEnter: emptyFunc,
          onMouseLeave: emptyFunc,
          onMouseDown: emptyFunc,
          onMouseUp: emptyFunc,
          onClick: emptyFunc
        };
      }
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  data() {
    return {
      originStyle: {},
      currVisitedStyle: {}
    };
  },

  mounted() {
    if (this.rootElm) {
      this.originStyle = { ...this.rootElm.style };
    }
  },

  updated() {
    if (this.rootElm) {
      this.originStyle = { ...this.rootElm.style };
    }
  },

  methods: {
    setStyle(style) {
      setStyleToElement(
        this.rootElm,
        this.context.theme.prefixStyle({ ...this.styles, ...style })
      );
    },
    hover() {
      this.setStyle(this.hoverStyle);
      this.event.onMouseEnter();
      this.event.onHover();
    },
    unHover() {
      this.resetStyle();
      this.event.onMouseLeave();
      this.event.unHover();
    },
    active() {
      this.setStyle(this.activeStyle);
      this.event.onMouseDown();
      this.event.onActive();
    },
    unActive() {
      this.setStyle(this.hoverStyle);
      this.event.onMouseUp();
      this.event.unActive();
    },

    focus() {
      this.setStyle(this.focusStyle);
      this.event.onFocus();
    },
    unFocus() {
      this.resetStyle();
      this.event.unFocus();
    },

    visited() {
      this.setStyle(this.visitedStyle);
      this.event.onClick();
      this.event.onVisited();
      this.currVisitedStyle = this.visitedStyle;
    },
    unVisited() {
      this.resetStyle(true);
      this.event.onClick();
      this.event.unVisited();
    },

    resetStyle(resetVisited = false) {
      if (resetVisited) {
        this.visitedStyle = void 0;
      }

      setStyleToElement(
        this.rootElm,
        { ...this.styles, ...this.currVisitedStyle },
        true
      );
    }
  },

  render() {
    const {
      context: { theme },
      disabled,
      styles,
      hoverStyle,
      focusStyle,
      activeStyle,
      visitedStyle,
      disabledStyle
    } = this;

    let vNodes = this.$slots.default;

    if (vNodes.length === 1) {
      const vNode = vNodes[0];

      vNode.data.style = theme.prefixStyle({
        transition: "all .25s",
        ...styles,
        ...(disabled ? disabledStyle : void 0)
      });

      const {
        mouseenter = emptyFunc,
        mouseleave = emptyFunc,
        mousedown = emptyFunc,
        mouseup = emptyFunc,
        click = emptyFunc,
        focus = emptyFunc
      } = vNode.data.on === void 0 ? {} : vNode.data.on;

      vNode.data.on = {
        ...vNode.data.on,
        mouseenter: hoverStyle && !disabled ? this.hover : mouseenter,
        mouseleave: hoverStyle && !disabled ? this.unHover : mouseleave,
        mousedown: activeStyle && !disabled ? this.active : mousedown,
        mouseup: activeStyle && !disabled ? this.unActive : mouseup,
        click: visitedStyle && !disabled ? this.visited : click,
        focus: focusStyle && !disabled ? this.focus : focus
      };
      return vNode;
    }

    return vNodes;
  }
};
