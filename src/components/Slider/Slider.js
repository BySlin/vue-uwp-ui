import darkTheme from "../../styles/darkTheme";
import IS_NODE_ENV from "../../common/nodeJS/IS_NODE_ENV";

export default {
  name: "Slider",

  props: {
    styles: Object,
    className: String,

    displayMode: {
      type: String,
      validator(value) {
        return ["vertical", "horizon"].includes(value);
      },
      default: "horizon"
    },
    minValue: {
      type: Number,
      default: 0
    },
    maxValue: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: Number,
      default: 2
    },
    height: {
      type: [String, Number],
      default: 24
    },
    width: {
      type: [String, Number]
    },
    controllerWidth: {
      type: Number,
      default: 8
    },
    showValueInfo: {
      type: Boolean,
      default: false
    },
    numberToFixed: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ""
    },
    transition: {
      type: String,
      default: "all 0.25s"
    },
    throttleTimer: {
      type: Number,
      default: 120 / 1000
    },
    barBackground: String,
    barBackgroundImage: String,
    customControllerStyle: Object,
    useSimpleController: {
      type: Boolean,
      default: false
    },
    label: String
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  data() {
    return {
      originBodyStyle: IS_NODE_ENV ? void 0 : { ...document.body.style },
      currValue: this.value,
      valueRatio: this.value / (this.maxValue - this.minValue),
      throttleNow: null,
      throttleNowTimer: null,
      onChangedValueTimer: null,
      hovered: null,
      dragging: null
    };
  },

  watch: {
    value(v) {
      this.currValue = v;
    }
  },

  methods: {
    handelMouseEnter() {
      this.hovered = true;
    },
    handelMouseLeave() {
      this.hovered = false;
    },

    handleDraggingStart(e) {
      e.preventDefault();
      Object.assign(document.body.style, {
        userSelect: "none",
        msUserSelect: "none",
        webkitUserSelect: "none",
        cursor: "default"
      });
      document.documentElement.addEventListener(
        "mousemove",
        this.setValueByEvent
      );
      document.documentElement.addEventListener(
        "touchmove",
        this.setValueByEvent
      );
      document.documentElement.addEventListener("mouseup", this.handleDragged);
      document.documentElement.addEventListener("touchend", this.handleDragged);
    },

    handleDragged() {
      Object.assign(document.body.style, {
        userSelect: void 0,
        msUserSelect: void 0,
        webkitUserSelect: void 0,
        cursor: void 0,
        ...this.originBodyStyle
      });
      if (this.dragging) {
        this.dragging = false;
      }
      document.documentElement.removeEventListener(
        "mousemove",
        this.setValueByEvent
      );
      document.documentElement.removeEventListener(
        "touchmove",
        this.setValueByEvent
      );
      document.documentElement.removeEventListener(
        "mouseup",
        this.handleDragged
      );
      document.documentElement.removeEventListener(
        "touchend",
        this.handleDragged
      );
    },

    setValueByEvent(e, type) {
      const isTouchEvent = e.type.includes("touch");
      clearTimeout(this.onChangedValueTimer);
      const isDraggingEvent = e.type === "mousemove" || e.type === "touchmove";
      if (isDraggingEvent && !this.dragging) {
        e.preventDefault();
        this.dragging = true;
      }

      if (isDraggingEvent) {
        const nowTime = performance ? performance.now() : Date.now();
        if (
          !this.throttleNow ||
          nowTime - this.throttleNow > this.throttleTimer
        ) {
          clearTimeout(this.throttleNowTimer);
          this.throttleNow = nowTime;
        } else {
          this.throttleNowTimer = setTimeout(() => {
            this.setValueByEvent(e, type);
          }, this.throttleTimer);
          return;
        }
      }

      const {
        displayMode,
        maxValue,
        minValue,
        barBackground,
        barBackgroundImage,
        label,
        numberToFixed,
        unit
      } = this;

      const isHorizonMode = displayMode === "horizon";
      const useCustomBackground = barBackground || barBackgroundImage;
      const {
        left,
        width,
        bottom,
        height
      } = this.$refs.rootElm.getBoundingClientRect();
      const { clientX, clientY } = isTouchEvent ? e.changedTouches[0] : e;

      const controllerClientRect = this.$refs.controllerElm.getBoundingClientRect();

      const controllerWidth = controllerClientRect.width;
      const controllerHeight = controllerClientRect.height;

      let valueRatio = isHorizonMode
        ? (clientX - left) / (width - controllerWidth)
        : -(clientY - bottom) / (height - controllerHeight);
      valueRatio = valueRatio < 0 ? 0 : valueRatio > 1 ? 1 : valueRatio;
      const currValue = minValue + (maxValue - minValue) * valueRatio;

      this.currValue = currValue;

      this.valueRatio = valueRatio;

      if (e.type === "click" || e.type === "touchstart") {
        this.currValue = currValue;
      } else {
        if (!useCustomBackground) {
          const barTransform = `translate${
            isHorizonMode ? "X" : "Y"
          }(${(isHorizonMode ? valueRatio - 1 : 1 - valueRatio) * 100}%)`;
          Object.assign(this.$refs.barElm.style, {
            transform: barTransform,
            webKitTransform: barTransform,
            msTransform: barTransform,
            mozTransform: barTransform
          });
        }

        const transform = `translate${
          isHorizonMode ? "X" : "Y"
        }(${(isHorizonMode ? valueRatio : 1 - valueRatio) * 100}%)`;
        Object.assign(this.$refs.controllerWrapperElm.style, {
          transform,
          webKitTransform: transform,
          msTransform: transform,
          mozTransform: transform
        });

        if (label)
          this.$refs.labelElm.innerText = `${currValue.toFixed(
            numberToFixed
          )}${unit}`;
      }

      this.$emit("changeValue", currValue);
      this.$emit("changeValueRatio", valueRatio);

      this.onChangedValueTimer = setTimeout(() => {
        this.$emit("changedValue", currValue);
        this.$emit("input", currValue);
        this.$emit("changeValueRatio", valueRatio);
      }, 0);
    }
  },

  mounted() {
    this.$refs.rootElm.addEventListener(
      "touchstart",
      this.handleDraggingStart,
      false
    );
    this.$refs.rootElm.addEventListener("touchend", this.handleDragged, false);
  },
  beforeDestroy() {
    clearTimeout(this.throttleNowTimer);
    clearTimeout(this.onChangedValueTimer);
    this.$refs.rootElm.removeEventListener(
      "touchstart",
      this.handleDraggingStart,
      false
    );
    this.$refs.rootElm.removeEventListener(
      "touchend",
      this.handleDragged,
      false
    );
  },
  render(h) {
    const {
      showValueInfo,
      numberToFixed,
      unit,

      currValue,

      handelMouseEnter,
      handelMouseLeave,
      setValueByEvent,
      handleDraggingStart,
      handleDragged
    } = this;

    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "slider",
      styles: inlineStyles
    });

    const normalRender = h(
      "div",
      {
        ref: "rootElm",
        class: styleClasses.root.className,
        style: styleClasses.root.style,
        on: {
          mouseenter: handelMouseEnter,
          mouseleave: handelMouseLeave,
          click: setValueByEvent,
          touchStart: setValueByEvent,
          mousedown: handleDraggingStart,
          mouseup: handleDragged
        }
      },
      [
        h(
          "div",
          {
            class: styleClasses.barContainer.className,
            style: styleClasses.barContainer.style
          },
          [
            h("div", {
              ref: "barElm",
              class: styleClasses.bar.className,
              style: styleClasses.bar.style
            })
          ]
        ),
        h(
          "div",
          {
            ref: "controllerWrapperElm",
            class: styleClasses.controllerWrapper.className,
            style: styleClasses.controllerWrapper.style
          },
          [
            h("div", {
              ref: "controllerElm",
              class: styleClasses.controller.className,
              style: styleClasses.controller.style
            })
          ]
        )
      ]
    );

    return h(
      "div",
      {
        class: styleClasses.wrapper.className,
        style: styleClasses.wrapper.style
      },
      [
        showValueInfo
          ? h(
              "div",
              {
                class: styleClasses.infoWrapper.className,
                style: styleClasses.infoWrapper.style
              },
              [
                normalRender,
                h(
                  "span",
                  {
                    class: styleClasses.label.className,
                    style: styleClasses.label.style,
                    ref: "labelElm"
                  },
                  `${currValue.toFixed(numberToFixed)}${unit}`
                )
              ]
            )
          : normalRender
      ]
    );
  }
};

function getStyles(Slider) {
  const {
    context: { theme },
    transition,
    maxValue,
    styles,
    height,
    barHeight,
    controllerWidth,
    barBackground,
    barBackgroundImage,
    useSimpleController,
    customControllerStyle,
    showValueInfo,
    displayMode,

    currValue,
    dragging,
    hovered
  } = Slider;

  const { prefixStyle } = theme;
  const isHorizonMode = displayMode === "horizon";
  const height2px = Number.parseFloat(height);
  const barHeight2px = Number.parseFloat(barHeight);
  const controllerWidth2px = Number.parseFloat(controllerWidth);
  const currTransition = dragging ? void 0 : transition || void 0;
  const useCustomBackground = barBackground || barBackgroundImage;
  const valueRatio = currValue / maxValue;

  return {
    wrapper: prefixStyle({
      width: isHorizonMode ? 320 : height2px,
      height: isHorizonMode ? height2px : 320,
      display: "inline-block",
      verticalAlign: "middle",
      ...styles
    }),
    root: prefixStyle({
      flex: showValueInfo ? "0 0 auto" : void 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: isHorizonMode ? "100%" : height2px,
      height: isHorizonMode ? height2px : "100%",
      cursor: "default",
      position: "relative"
    }),
    barContainer: {
      background: theme.baseLow,
      position: "absolute",
      width: isHorizonMode ? "100%" : barHeight,
      height: isHorizonMode ? barHeight : "100%",
      overflow: "hidden",
      left: isHorizonMode ? 0 : `calc(50% - ${barHeight2px / 2}px)`,
      top: isHorizonMode ? `calc(50% - ${barHeight2px / 2}px)` : 0
    },
    infoWrapper: prefixStyle({
      display: "flex",
      flexDirection: displayMode === "horizon" ? "row" : "column",
      alignItems: "center",
      height: isHorizonMode ? void 0 : "100%"
    }),
    bar: prefixStyle({
      transition: currTransition,
      background: useCustomBackground ? barBackground : theme.listAccentLow,
      backgroundImage: barBackgroundImage,
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      dynamicStyle: {
        transform: useCustomBackground
          ? void 0
          : `translate${isHorizonMode ? "X" : "Y"}(${(isHorizonMode
              ? valueRatio - 1
              : 1 - valueRatio) * 100}%)`
      }
    }),
    controllerWrapper: prefixStyle({
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      transition: currTransition,
      dynamicStyle: {
        transform: `translate${isHorizonMode ? "X" : "Y"}(${(isHorizonMode
          ? valueRatio
          : 1 - valueRatio) * 100}%)`
      }
    }),
    controller: prefixStyle({
      pointerEvents: "none",
      transition: currTransition,
      display: "inline-block",
      background:
        useSimpleController || dragging || hovered
          ? theme.baseHigh
          : theme.accent,
      borderRadius: controllerWidth2px / 2,
      width: isHorizonMode ? controllerWidth2px : height2px,
      height: isHorizonMode ? height2px : controllerWidth2px,
      float: "left",
      transform: `translate3d(${
        isHorizonMode ? -controllerWidth2px / 2 : 0
      }px, 0, 0)`,
      ...customControllerStyle
    }),
    label: {
      flex: showValueInfo ? "0 0 auto" : void 0,
      display: "inline-block",
      marginLeft: 12,
      fontSize: height2px / 1.5,
      lineHeight: `${height2px / 1.5}px`,
      color: theme.baseMediumHigh
    }
  };
}
