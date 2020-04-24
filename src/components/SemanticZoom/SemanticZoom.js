import SlideInOut from "../Animate/SlideInOut";
import darkTheme from "../../styles/darkTheme";

//TODO 未知组件
export default {
  name: "SemanticZoom",

  props: {
    styles: Object,
    className: String
  },

  data() {
    return {
      showController: false
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  render(h) {
    const { showController } = this;
    const styleClasses = getStyles(this);

    return h(
      SlideInOut,
      {
        props: {
          styles: styleClasses.root
        }
      },
      showController
        ? [
            h("div", {}, "SemanticZoomController"),
            h("div", {}, "SemanticZoomView")
          ]
        : null
    );
  }
};

function getStyles(SemanticZoom) {
  const {
    context: { theme },
    styles
  } = SemanticZoom;
  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: theme.altMediumHigh,
      ...styles
    })
  };
}
