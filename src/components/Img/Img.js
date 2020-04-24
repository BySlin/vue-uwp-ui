import darkTheme from "../../styles/darkTheme";
import Placeholder from "./Placeholder";

export default {
  name: "Img",

  props: {
    useLazyLoad: Boolean,
    useDivContainer: Boolean,

    src: {
      type: String,
      require: true
    },

    styles: Object,
    className: String
  },

  data() {
    return {
      showEmptyImage: false
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    errorHandler() {
      this.showEmptyImage = true;
    }
  },

  render(h) {
    const {
      useLazyLoad,
      useDivContainer,
      styles,

      src,
      errorHandler
    } = this;

    const lazy =
      useLazyLoad && this.$root.$options.directives["lazy"] !== void 0;

    if (useLazyLoad && !lazy) {
      console.warn("please add vue-lazyload to dependencies");
    }

    const { theme } = this.context;

    const placeholder = this.$slots.placeholder;

    const currPlaceholder =
      placeholder || h(Placeholder, { attrs: { src }, props: { styles } });

    const baseStyle = theme.prefixStyle({
      background: `url(${src}) no-repeat center center / cover`,
      display: "inline-block",
      verticalAlign: "middle",
      ...styles
    });

    let Img;

    const on = {
      error() {
        errorHandler();
      }
    };
    if (lazy) {
      Img = h("img", {
        style: baseStyle,
        directives: [
          {
            name: "lazy",
            value: src
          }
        ],
        on
      });
    } else {
      Img = h("img", {
        attrs: { src },
        style: baseStyle,
        on
      });
    }

    const ImageOrDiv = useDivContainer ? h("div", { style: baseStyle }) : Img;

    if (!src || this.showEmptyImage) {
      return useLazyLoad ? currPlaceholder : null;
    }

    return ImageOrDiv;
  }
};
