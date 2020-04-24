import CustomAnimate, { slideRightInProps } from "../Animate/CustomAnimate";
import Icon from "../Icon";
import darkTheme from "../../styles/darkTheme";

export default {
  name: "Toast",

  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    description: {
      type: [String, Array]
    },
    closeDelay: Number,
    showCloseIcon: {
      type: Boolean,
      default: false
    },
    className: String,
    styles: Object
  },

  data() {
    return {
      h: null,
      toastId: null,
      hiddenTimer: null,
      closeTimer: null,
      showToast: this.value
    };
  },

  watch: {
    value(v) {
      this.showToast = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  mounted() {
    const { theme } = this.context;
    theme.addToast(this.trueRender(), toastId => {
      this.toastId = toastId;
      this.addCloseDelay();
    });
  },

  updated() {
    if (this.toastId !== void 0) {
      this.context.theme.updateToast(this.toastId, this.trueRender());
    }

    if (!this.customAnimateElm) {
      this.customAnimateElm = this.$refs.customAnimate.$el;
    }
    const { style } = this.customAnimateElm;

    if (this.showToast && this.customAnimateElm && style) {
      Object.assign(style, {
        height: "auto",
        margin: "10px 0"
      });
      clearTimeout(this.hiddenTimer);
    } else if (!this.showToast && this.customAnimateElm && style) {
      this.hiddenTimer = setTimeout(() => {
        Object.assign(style, {
          height: "0px",
          margin: "0px"
        });
        clearTimeout(this.hiddenTimer);
      }, 250);
    }

    this.addCloseDelay();
  },

  destroyed() {
    const { deleteToast } = this.context.theme;
    deleteToast(this.toastId);

    clearTimeout(this.hiddenTimer);
    clearTimeout(this.closeTimer);
  },

  methods: {
    addCloseDelay() {
      clearTimeout(this.closeTimer);
      const { closeDelay } = this;
      if (closeDelay !== void 0 && this.showToast) {
        this.closeTimer = setTimeout(() => {
          this.toggleShowToast(false);
        }, closeDelay);
      }
    },

    toggleShowToast(showToast) {
      this.$emit("input", showToast);
    },

    trueRender() {
      const {
        title,
        description,
        showCloseIcon,
        className,
        h,

        toggleShowToast
      } = this;
      const { theme } = this.context;

      const styles = getStyles(this);
      const styleClasses = theme.prepareStyles({
        className: "toast",
        styles
      });

      const { logoNode = [], default: vNodes } = this.$slots;

      return h(
        CustomAnimate,
        {
          props: {
            ...slideRightInProps,
            appearAnimate: false,
            wrapperStyle: { ...styles.root }
          },
          ref: "customAnimate"
        },
        [
          h(
            "div",
            {
              style: styleClasses.wrapper.style,
              class: theme.classNames(styleClasses.wrapper.className, className)
            },
            [
              h(
                "div",
                {
                  style: styleClasses.card.style,
                  class: styleClasses.card.className
                },
                [
                  ...logoNode,
                  h(
                    "span",
                    {
                      style: styleClasses.descContent.style,
                      class: styleClasses.descContent.className
                    },
                    [
                      h(
                        "p",
                        {
                          style: styleClasses.title.style,
                          class: styleClasses.title.className
                        },
                        title
                      ),
                      typeof description === "string"
                        ? h(
                            "p",
                            {
                              style: styleClasses.description.style,
                              class: styleClasses.description.className
                            },
                            description
                          )
                        : description &&
                          description.map((desc, index) =>
                            h(
                              "p",
                              {
                                key: index,
                                style: styleClasses.description.style,
                                class: styleClasses.description.className
                              },
                              desc
                            )
                          )
                    ]
                  )
                ]
              ),

              showCloseIcon
                ? h(
                    Icon,
                    {
                      props: {
                        hoverStyle: {
                          color: theme.baseHigh
                        },
                        styles: styles.closeIcon
                      },
                      on: {
                        click() {
                          toggleShowToast(false);
                        }
                      }
                    },
                    "ClearLegacy"
                  )
                : null,

              vNodes
            ]
          )
        ]
      );
    }
  },

  render(h) {
    this.h = h;
    return null;
  }
};

function getStyles(Toast) {
  const {
    context: { theme },
    showCloseIcon,
    showToast,

    styles
  } = Toast;

  const { prefixStyle } = theme;

  return {
    root: {
      display: "inherit",
      overflow: "hidden",
      transition: "transform .75s, opacity .75s",
      margin: "10px 0",
      opacity: showToast ? 1 : 0.5,
      transform: `translate3d(${showToast ? 0 : "100%"}, 0, 0)`
    },
    wrapper: prefixStyle({
      width: 320,
      padding: 10,
      position: "relative",
      fontSize: 14,
      color: theme.baseMediumHigh,
      background: theme.chromeLow,
      border: `1px solid ${theme.listLow}`,
      pointerEvents: "all",
      flex: "0 0 auto",
      overflow: "hidden",
      height: "auto",
      ...styles
    }),
    closeIcon: {
      fontSize: 12,
      position: "absolute",
      top: 10,
      right: 10,
      cursor: "pointer"
    },
    card: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: 18,
      lineHeight: 1.6
    }),
    descContent: {
      marginLeft: 10,
      marginRight: showCloseIcon ? 16 : 0,
      width: "100%"
    },
    title: {
      fontSize: 14,
      color: theme.baseHigh,
      lineHeight: 1.6
    },
    description: {
      fontSize: 12,
      color: theme.baseMedium,
      lineHeight: 1.4
    }
  };
}
