import darkTheme from "../../styles/darkTheme";

export default {
  name: "ToastWrapper",

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  props: {
    className: String,
    styles: Object
  },

  data() {
    return {
      toasts: {}
    };
  },

  methods: {
    addToast(toastId, toast) {
      const { theme } = this.context;

      toast.key = toastId;

      theme.toasts[toastId] = toast;

      this.toasts = theme.toasts;

      this.$forceUpdate();
    },

    updateToast(toastId, toast) {
      const { theme } = this.context;

      toast.key = toastId;

      theme.toasts[toastId] = toast;

      this.toasts = theme.toasts;

      this.$forceUpdate();
    },

    deleteToast(toastId) {
      const { theme } = this.context;

      delete theme.toasts[toastId];

      this.toasts = theme.toasts;

      this.$forceUpdate();
    }
  },
  render(h) {
    const {
      context: { theme },
      toasts,
      className,

      styles
    } = this;

    const rootStyleClasses = theme.prepareStyle({
      className: "toast-wrapper",
      style: theme.prefixStyle({
        top: 0,
        right: 0,
        height: "100%",
        width: 360,
        padding: "10px 4px",
        position: "fixed",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        pointerEvents: "none",
        overflowY: "auto",
        overflowX: "hidden",
        zIndex: theme.zIndex.toast,
        ...styles
      }),
      extendsClassName: className
    });

    const params = {
      style: rootStyleClasses.style,
      class: rootStyleClasses.className
    };

    const keys = Object.keys(toasts);
    if (keys.length > 0) {
      return keys.map(key => h("div", { ...params }, [toasts[key]]));
    }

    return null;
  }
};
