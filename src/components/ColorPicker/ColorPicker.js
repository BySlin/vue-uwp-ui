import * as tinycolor from "tinycolor2";
import darkTheme from "../../styles/darkTheme";
import IS_NODE_ENV from "../../common/nodeJS/IS_NODE_ENV";
import Slider from "../Slider";

export default {
  name: "ColorPicker",
  props: {
    value: {
      type: String,
      default: "#ff0000"
    },
    size: {
      type: Number,
      default: 336
    },
    onChangedColorTimeout: {
      type: Number,
      default: 1000
    },
    styles: Object,
    className: String
  },
  data() {
    return {
      originBodyStyle: IS_NODE_ENV ? void 0 : { ...document.body.style },
      ...tinycolor(this.value).toHsv(),
      dragging: false,
      clickTimer: null,
      moveColorTimer: null,
      colorBarTimer: null,
      canvas: null,
      ctx: null,
      colorSelectorElm: null,
      colorMainBarElm: null,
      slider: null
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  mounted() {
    let { canvas, colorSelectorElm, colorMainBarElm, slider } = this.$refs;
    this.canvas = canvas;
    this.colorSelectorElm = colorSelectorElm;
    this.colorMainBarElm = colorMainBarElm;
    this.slider = slider;

    this.renderCanvas();
    this.canvas.addEventListener("touchstart", this.handleChooseColor, false);
    this.canvas.addEventListener("touchend", this.handleEnd, false);
  },

  updated() {
    this.renderCanvas();
  },
  destroyed() {
    clearTimeout(this.moveColorTimer);
    this.canvas.removeEventListener(
      "touchstart",
      this.handleChooseColor,
      false
    );
    this.canvas.removeEventListener("touchend", this.handleEnd, false);
  },
  methods: {
    async renderCanvas() {
      let { size } = this;
      size = size * 0.8125;
      Object.assign(this.canvas, {
        width: size,
        height: size
      });
      const _xPosition = size / 2;
      const _yPosition = _xPosition;
      const _r = _xPosition;

      const _pi_2 = Math.PI * 2;

      this.ctx = this.canvas.getContext("2d");
      const { ctx } = this;
      this.setCanvas2devicePixelRatio();

      // use save when using clip Path
      ctx.save();
      ctx.arc(_xPosition, _yPosition, _r, 0, _pi_2, true);
      ctx.clip();

      const { v } = this;

      for (let i = -1; i < 360; i++) {
        ctx.beginPath();
        ctx.moveTo(_xPosition, _yPosition);
        if (i === -1) {
          ctx.arc(_xPosition, _yPosition, _r, -_pi_2 / 360, 0, true);
        } else {
          ctx.arc(_xPosition, _yPosition, _r, 0, (_pi_2 * i) / 360, true);
        }
        ctx.closePath();
        const radialGradient = ctx.createRadialGradient(
          _xPosition,
          _yPosition,
          0,
          _xPosition,
          _yPosition,
          _r
        );
        radialGradient.addColorStop(
          0,
          tinycolor(`hsv(${Math.abs(i)}, 0%, ${v * 100}%)`).toHexString()
        );
        radialGradient.addColorStop(
          1,
          tinycolor(`hsv(${Math.abs(i)}, 100%, ${v * 100}%)`).toHexString()
        );
        ctx.fillStyle = radialGradient;
        ctx.fill();
      }

      // reset clip to default
      ctx.restore();
    },

    async setCanvas2devicePixelRatio() {
      const { devicePixelRatio } = window;
      const { canvas, ctx } = this;

      if (!devicePixelRatio) return;

      const { width, height } = canvas;

      Object.assign(canvas, {
        width: width * devicePixelRatio,
        height: height * devicePixelRatio
      });

      Object.assign(canvas.style, {
        width: `${width}px`,
        height: `${height}px`
      });

      ctx.scale(devicePixelRatio, devicePixelRatio);
    },

    async handleColorBarChange(v) {
      clearTimeout(this.colorBarTimer);
      const { h, s } = this;
      const { onChangedColorTimeout } = this;
      const colorHexString = tinycolor({ h, s, v }).toHexString();

      this.v = v;

      this.$emit("input", colorHexString);
      this.$emit("changeColor", colorHexString);

      this.colorBarTimer = setTimeout(() => {
        this.$emit("changedColor", colorHexString);
      }, onChangedColorTimeout);
    },

    async handleChooseColor(e, isClickEvent = true) {
      e.preventDefault();
      const isTouchEvent = e.type.includes("touch");
      const { prefixStyle } = this.context.theme;

      if (isClickEvent && (e.type === "mousedown" || e.type === "touchstart")) {
        document.documentElement.addEventListener(
          "mousemove",
          this.handleTouchMouseMove,
          false
        );
        document.documentElement.addEventListener("mouseup", this.handleEnd);
        this.canvas.addEventListener(
          "touchmove",
          this.handleTouchMouseMove,
          false
        );
        document.documentElement.addEventListener("touchend", this.handleEnd);
        Object.assign(document.body.style, {
          userSelect: "none",
          msUserSelect: "none",
          webkitUserSelect: "none",
          cursor: "default"
        });
      }
      const { size, onChangedColorTimeout } = this;
      const { v } = this;
      const clientReact = this.canvas.getBoundingClientRect();
      const colorPickerBoardSize = (size * 0.8125) / 2;
      const { clientX, clientY } = isTouchEvent ? e.changedTouches[0] : e;
      const x = clientX - clientReact.left - colorPickerBoardSize;
      const y = clientReact.top - clientY + colorPickerBoardSize;
      const r = Math.sqrt(x * x + y * y);
      let h = (Math.asin(y / r) / Math.PI) * 180;
      if (x > 0 && y > 0) h = 360 - h;
      if (x > 0 && y < 0) h = -h;
      if (x < 0 && y < 0) h = 180 + h;
      if (x < 0 && y > 0) h = 180 + h;
      let s = r / colorPickerBoardSize;
      if (s > 1) s = 1;

      const colorHexString = tinycolor({ h, s, v }).toHexString();
      if (this.slider) {
        const halfLightColor = tinycolor({ h, s, v: 1 });
        this.slider.$refs.barElm.style.backgroundImage = `linear-gradient(90deg, #000, ${halfLightColor.toHexString()})`;
      }

      if (isClickEvent && e.type === "click") {
        this.$emit("changeColor", colorHexString);
        this.$emit("input", colorHexString);

        this.h = h;
        this.s = s;
        this.$nextTick(() => {
          clearTimeout(this.clickTimer);
          this.clickTimer = setTimeout(() => {
            this.$emit("changedColor", colorHexString);
          }, 0);
        });
      } else {
        this.$emit("changeColor", colorHexString);
        this.$emit("input", colorHexString);

        clearTimeout(this.moveColorTimer);
        const r = colorPickerBoardSize * s;
        const x = Math.cos((h / 180) * Math.PI) * r;
        const y = Math.sin((h / 180) * Math.PI) * r;

        Object.assign(
          this.colorSelectorElm.style,
          prefixStyle({
            transform: `translate3d(${x}px, ${y}px, 0)`
          })
        );
        if (this.colorMainBarElm) {
          this.colorMainBarElm.style.background = colorHexString;
        }
        this.moveColorTimer = setTimeout(() => {
          // onChangedColor(colorHexString);
          this.$emit("changedColor", colorHexString);

          // this.setState({ h, s });
          this.h = h;
          this.s = s;
        }, onChangedColorTimeout);
      }
    },

    async handleTouchMouseMove(e) {
      if (!this.dragging) {
        this.dragging = true;
      }
      this.handleChooseColor(e, false);
    },

    async handleEnd() {
      if (this.dragging) {
        this.dragging = false;
      }
      clearTimeout(this.moveColorTimer);
      Object.assign(document.body.style, {
        userSelect: void 0,
        msUserSelect: void 0,
        webkitUserSelect: void 0,
        cursor: void 0,
        ...this.originBodyStyle
      });
      document.documentElement.removeEventListener(
        "mousemove",
        this.handleTouchMouseMove
      );
      this.canvas.removeEventListener("touchmove", this.handleTouchMouseMove);
      document.documentElement.removeEventListener("mouseup", this.handleEnd);
      document.documentElement.removeEventListener("touchend", this.handleEnd);
    }
  },

  render(createElement) {
    const {
      size,
      className,

      h,
      s,
      v,

      handleColorBarChange,
      handleChooseColor,
      handleEnd,

      context: { theme }
    } = this;

    const halfLightColor = tinycolor({ h, s, v: 1 });
    const colorPickerBoardSize = (size * 0.8125) / 2;
    const r = colorPickerBoardSize * s;
    const mainBoardDotSize = size / 25;
    const x = Math.cos((h / 180) * Math.PI) * r;
    const y = Math.sin((h / 180) * Math.PI) * r;
    const selectorSize = colorPickerBoardSize - mainBoardDotSize / 2;

    const styles = getStyles(this);
    styles.colorSelector = {
      ...styles.colorSelector,
      top: selectorSize,
      left: selectorSize,
      width: mainBoardDotSize,
      height: mainBoardDotSize,
      borderRadius: mainBoardDotSize,
      background: "none",
      boxShadow: `0 0 0 4px #fff`
    };
    const classes = theme.prepareStyles({
      className: "color-picker",
      styles
    });

    return createElement(
      "div",
      {
        style: classes.root.style,
        class: theme.classNames(classes.root.className, className)
      },
      [
        createElement(
          "div",
          {
            style: classes.board.style,
            class: classes.board.className
          },
          [
            createElement(
              "div",
              {
                style: {
                  position: "relative"
                }
              },
              [
                createElement(
                  "canvas",
                  {
                    ref: "canvas",
                    style: classes.mainBoard.style,
                    class: classes.mainBoard.className,
                    on: {
                      click: handleChooseColor,
                      mousedown: handleChooseColor,
                      mouseup: handleEnd
                    }
                  },
                  " Your Browser not support canvas."
                ),
                createElement("div", {
                  ref: "colorSelectorElm",
                  style: theme.prefixStyle({
                    ...classes.colorSelector.style,
                    transform: `translate3d(${x}px, ${y}px, 0)`
                  }),
                  class: classes.colorSelector.className
                })
              ]
            ),

            createElement("div", {
              ref: "colorMainBarElm",
              style: classes.colorMainBar.style,
              class: classes.colorMainBar.className
            })
          ]
        ),

        createElement(Slider, {
          ref: "slider",
          props: {
            maxValue: 1,
            styles: {
              marginTop: size * 0.0125,
              width: "100%"
            },
            value: v,
            width: size,
            barHeight: size * 0.025,
            barBackgroundImage: `linear-gradient(90deg, #000, ${halfLightColor.toHexString()})`,
            useSimpleController: true
          },
          on: {
            changedValue: handleColorBarChange
          }
        })
      ]
    );
  }
};

function getStyles(ColorPicker) {
  const {
    context: { theme },
    h,
    s,
    v,
    size,
    styles
  } = ColorPicker;
  const { prefixStyle } = theme;
  const currColor = tinycolor({ h, s, v }).toHslString();

  return {
    root: prefixStyle({
      display: "inline-block",
      verticalAlign: "middle",
      width: size,
      flexDirection: "column",
      ...styles
    }),
    board: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    mainBoard: prefixStyle({
      userDrag: "none",
      margin: 0,
      userSelect: "none"
    }),
    colorMainBar: {
      height: size * 0.8125,
      marginLeft: size * 0.025,
      width: size * 0.125,
      background: currColor
    },
    colorSelector: prefixStyle({
      pointerEvents: "none",
      userDrag: "none",
      position: "absolute"
    })
  };
}
