import darkTheme from "../../styles/darkTheme";
import TextBox from "../TextBox";
import Icon from "../Icon";

export default {
  name: "PasswordBox",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: String,
    passwordBoxHeight: {
      type: Number,
      default: 32
    },
    defaultShowPassword: {
      type: Boolean,
      default: false
    },
    maxLength: Number
  },

  data() {
    return {
      showPassword: this.defaultShowPassword
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    toggleShowPassword() {
      const showPassword = !this.showPassword;
      this.showPassword = showPassword;
      this.$emit("update:defaultShowPassword", showPassword);
    },
    handleInput(v) {
      this.$emit("input", v);
    }
  },

  render(h) {
    const {
      value,
      placeholder,
      showPassword,
      passwordBoxHeight,
      toggleShowPassword,
      maxLength,

      handleInput
    } = this;
    const { theme } = this.context;
    const styleClasses = getStyles(this);

    return h(
      TextBox,
      {
        props: {
          type: showPassword ? "text" : "password",
          styles: styleClasses.root,
          hoverStyle: {
            border: `2px solid ${theme.accent}`
          },
          value,
          placeholder,
          maxLength
        },
        on: {
          input: handleInput
        }
      },
      [
        h(
          Icon,
          {
            slot: "rightNode",
            props: {
              hoverStyle: {
                color: "#fff",
                background: theme.accent
              },
              styles: theme.prefixStyle({
                width: passwordBoxHeight,
                height: passwordBoxHeight,
                fontSize: passwordBoxHeight / 2,
                lineHeight: `${passwordBoxHeight}px`,
                cursor: "pointer",
                background: "none",
                color: theme.baseHigh,
                flex: "0 0 auto",
                transition: "all .25s"
              })
            },
            on: {
              click: toggleShowPassword
            }
          },
          "RevealPasswordLegacy"
        )
      ]
    );
  }
};

function getStyles(PasswordBox) {
  const { context, styles, passwordBoxHeight } = PasswordBox;
  const { theme } = context;

  return {
    root: theme.prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden",
      fontWeight: "lighter",
      fontSize: passwordBoxHeight / 2,
      padding: 0,
      ...styles,
      height: passwordBoxHeight
    })
  };
}
