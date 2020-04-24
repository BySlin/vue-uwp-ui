import darkTheme from "../../styles/darkTheme";

export default {
  name: "Toggle",

  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 18
    },
    label: String,
    background: String,
    styles: Object,
    className: String
  },

  data() {
    return {
      currToggled: this.value
    };
  },

  watch: {
    value(v) {
      this.currToggled = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    toggleToggle() {
      const toggled = !this.value;
      this.currToggled = toggled;
      this.$emit("input", toggled);
    }
  },

  render(h) {
    const { className, label, toggleToggle } = this;
    const { theme } = this.context;
    const styleClasses = theme.prepareStyles({
      styles: getStyles(this),
      className: "toggle"
    });

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
            style: styleClasses.wrapper.style,
            class: styleClasses.wrapper.className,
            on: {
              click: toggleToggle
            }
          },
          [
            h("div", {
              style: styleClasses.button.style,
              class: styleClasses.button.className
            })
          ]
        ),
        label
          ? h(
              "span",
              {
                style: styleClasses.label.style,
                class: styleClasses.label.className
              },
              label
            )
          : void 0
      ]
    );
  }
};

function getStyles(Toggle) {
  const { size, background, styles, currToggled } = Toggle;
  const { theme } = Toggle.context;

  return {
    root: theme.prefixStyle({
      display: "inline-block",
      verticalAlign: "middle",
      cursor: "default",
      ...styles
    }),
    wrapper: theme.prefixStyle({
      userSelect: "none",
      position: "relative",
      display: "inline-block",
      verticalAlign: "middle",
      boxSizing: "content-box",
      width: size * 2.5,
      height: size,
      background: currToggled ? theme.accent : background || "none",
      border: `${size / 9}px solid ${
        currToggled ? theme.accent : theme.baseMediumHigh
      }`,
      borderRadius: size * 2,
      transition: "all .25s ease-in-out"
    }),
    button: theme.prefixStyle({
      transform: `translateX(${
        currToggled ? size * 2.5 - size / 1.5 - size / 9 : size / 4.5
      }px)`,
      flex: "0 0 auto",
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      margin: "auto",
      width: size / 1.5,
      height: size / 1.5,
      borderRadius: size / 1.5,
      background: currToggled ? "#fff" : theme.baseMediumHigh,
      transition: "all .25s 0s ease-in-out"
    }),
    label: {
      marginLeft: size / 4,
      verticalAlign: "middle",
      fontSize: size / 1.5,
      lineHeight: `${size / 1.5}px`
    }
  };
}
