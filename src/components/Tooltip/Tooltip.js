import darkTheme from "../../styles/darkTheme";
import { bindEvent } from "../../common/eventUtil";

export default {
  name: "Tooltip",
  props: {
    verticalPosition: {
      type: String,
      require: false,
      validator(value) {
        return ["top", "bottom", "center"].includes(value);
      },
      default: "top"
    },

    horizontalPosition: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      },
      default: "center"
    },

    margin: {
      type: Number,
      default: 4
    },

    autoClose: {
      type: Boolean,
      default: false
    },

    autoCloseTimeout: {
      type: Number,
      default: 750
    },

    closeDelay: {
      type: Number,
      default: 0
    },

    background: String,
    className: String,
    styles: Object
  },
  data() {
    return {
      rootElm: null,
      tooltipElm: null,
      show: false,
      unShowTimer: null,
      timer: null
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  computed: {
    tooltipStyle() {
      return this.getTooltipStyle();
    }
  },

  methods: {
    showTooltip() {
      clearTimeout(this.unShowTimer);
      this.show = true;

      if (this.autoClose) {
        this.show = true;
        this.timer = setTimeout(() => {
          this.show = false;
        }, this.autoCloseTimeout);
      } else {
        this.show = true;
      }
    },

    unShowTooltip() {
      this.timer = setTimeout(() => {
        this.show = false;
      }, this.closeDelay);
    },

    getStyle(show = false, positionStyle = {}) {
      const {
        context: { theme },
        background,

        styles
      } = this;

      return theme.prefixStyle({
        height: 28,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        padding: "4px 8px",
        transition: "all .25s 0s ease-in-out",
        border: `1px solid ${
          theme.useFluentDesign ? theme.listLow : theme.baseLow
        }`,
        color: theme.baseMediumHigh,
        background: background || theme.chromeMedium,
        opacity: show ? 1 : 0,
        transform: `translateY(${show ? "0px" : "10px"})`,
        position: "absolute",
        fontSize: 14,
        pointerEvents: show ? "all" : "none",
        zIndex: theme.zIndex.tooltip,
        ...styles,
        ...positionStyle
      });
    },

    getTooltipStyle() {
      const { rootElm, tooltipElm } = this;
      if (!(rootElm && tooltipElm)) return this.getStyle();

      const { verticalPosition, horizontalPosition, margin } = this;
      const { width, height } = rootElm.getBoundingClientRect();
      const containerWidth = tooltipElm.getBoundingClientRect().width;
      const containerHeight = tooltipElm.getBoundingClientRect().height;
      const { show } = this;
      const positionStyle = {};
      const isVerticalCenter = verticalPosition === "center";

      if (width !== void 0 && height !== void 0) {
        switch (horizontalPosition) {
          case "left": {
            positionStyle.right = isVerticalCenter ? width + margin : 0;
            break;
          }
          case "center": {
            positionStyle.left = (width - containerWidth) / 2;
            break;
          }
          case "right": {
            positionStyle.left = isVerticalCenter ? -width - margin : 0;
            break;
          }
          default: {
            break;
          }
        }
        switch (verticalPosition) {
          case "top": {
            positionStyle.top = -containerHeight - margin;
            break;
          }
          case "center": {
            positionStyle.top = (height - containerHeight) / 2;
            break;
          }
          case "bottom": {
            positionStyle.top = height + margin;
            break;
          }
          default: {
            break;
          }
        }
      }

      return this.getStyle(show, positionStyle);
    }
  },

  mounted() {
    this.rootElm = this.$el;
    this.tooltipElm = this.$refs.tooltipElm;
  },

  render(h) {
    const {
      className,
      tooltipStyle,

      showTooltip,
      unShowTooltip
    } = this;
    const { theme } = this.context;

    const events = bindEvent(this);
    const event = {
      on: {
        ...events,
        mouseenter: () => {
          events.mouseenter();
          showTooltip();
        },
        click: () => {
          events.click();
          showTooltip();
        },
        mouseleave: () => {
          events.mouseleave();
          unShowTooltip();
        }
      }
    };

    const prepareStyle = theme.prepareStyle({
      className: "tooltip",
      style: tooltipStyle,
      extendsClassName: className
    });

    const params = {
      class: prepareStyle.className,
      style: prepareStyle.style
    };

    return h(
      "div",
      {
        style: {
          position: "relative",
          display: "inline-block"
        },
        ...event
      },
      [
        h("span", { ...params, ref: "tooltipElm" }, this.$slots.content),
        this.$slots.default
      ]
    );
  }
};
