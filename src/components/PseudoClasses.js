import { spreadObject } from "../common/spreadObject";
import ElementState from "./ElementState";
import darkTheme from "../styles/darkTheme";
import { renameEvent } from "../common/eventUtil";

const pseudoClassesNames = [
  "&:hover",
  "&:active",
  "&:visited",
  "&:focus",
  "&:disabled"
];
export default {
  name: "PseudoClasses",

  props: {
    props: {
      type: Object,
      require: false
    }
  },
  data() {
    return {
      rootElm: null
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  mounted() {
    if (this.$refs.ElementState) {
      this.rootElm = this.$refs.ElementState.$el;
    }
  },

  render(h) {
    const {
      context: { theme },
      props: { style, disabled = false, on },
      rootElm
    } = this;

    if (theme.useInlineStyle && style) {
      const { primaryObject, secondaryObject } = spreadObject(
        style,
        pseudoClassesNames
      );

      return h(
        ElementState,
        {
          props: {
            hoverStyle: secondaryObject["&:hover"],
            activeStyle: secondaryObject["&:active"],
            visitedStyle: secondaryObject["&:visited"],
            focusStyle: secondaryObject["&:focus"],
            disabledStyle: secondaryObject["&:disabled"],
            styles: primaryObject,
            event: renameEvent(on),
            rootElm,
            disabled
          },
          ref: "ElementState"
        },
        this.$slots.default
      );
    } else {
      return this.$slots.default;
    }
  }
};
