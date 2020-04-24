import darkTheme from "../../styles/darkTheme";
import Icon from "../Icon";

export default {
  name: "RatingControl",
  props: {
    value: {
      type: Number,
      default: 2.5
    },
    maxRating: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: "FavoriteStarFill"
    },
    iconStyle: Object,
    iconRatedStyle: Object,
    label: String,
    isReadOnly: {
      type: Boolean,
      default: false
    },
    iconPadding: {
      type: Number,
      default: 10
    },
    styles: Object,
    className: String
  },
  data() {
    return {
      currRating: this.value
    };
  },

  watch: {
    value(v) {
      this.currRating = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    handleRationClick(e, index) {
      const { iconPadding, maxRating } = this;
      const lastIndex = maxRating - 1;
      const clientRect = e.currentTarget.getBoundingClientRect();
      const left = e.clientX - clientRect.left;
      let offset =
        left /
        (index === lastIndex
          ? clientRect.width
          : clientRect.width - iconPadding);
      if (offset > 1) offset = 1;
      const currRating = index + offset;

      this.currRating = currRating;
      this.$emit("input", currRating);
    }
  },

  render(h) {
    const {
      maxRating,
      icon,
      iconStyle,
      iconRatedStyle,
      label,
      isReadOnly,
      iconPadding,
      currRating,

      handleRationClick
    } = this;
    const { theme } = this.context;

    const fontSize = iconStyle ? +Number(iconStyle.fontSize) || 24 : 24;

    const offset =
      Math.floor(currRating) * (fontSize + iconPadding) +
      (currRating % 1) * fontSize;
    const lastIndex = maxRating - 1;

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "rating-control",
      styles: inlineStyles
    });

    const renderRatings = (notRated = true) => {
      return h(
        "div",
        {
          style: theme.prefixStyle({
            ...(notRated
              ? styleClasses.group.style
              : styleClasses.groupMask.style),
            ...(notRated
              ? void 0
              : {
                  clipPath: `polygon(0% 0%, ${offset}px 0%, ${offset}px 100%, 0% 100%)`
                })
          }),
          class: notRated
            ? styleClasses.group.className
            : styleClasses.groupMask.className
        },
        Array(maxRating)
          .fill(0)
          .map((zero, index) => {
            return h(
              Icon,
              {
                key: `${index}`,
                props: {
                  styles: {
                    fontSize: 24,
                    paddingRight: index === lastIndex ? 0 : iconPadding,
                    ...iconStyle,
                    ...(notRated ? void 0 : iconRatedStyle)
                  }
                },
                nativeOn: {
                  click(e) {
                    if (!isReadOnly) {
                      handleRationClick(e, index);
                    }
                  }
                }
              },
              icon
            );
          })
      );
    };

    const normalRender = h(
      "div",
      {
        class: styleClasses.root.className,
        style: styleClasses.root.style
      },
      [renderRatings(), renderRatings(false)]
    );

    return label
      ? h(
          "div",
          {
            style: { display: "inline-block" }
          },
          [
            h(
              "div",
              {
                class: styleClasses.labelWrapper.className,
                style: styleClasses.labelWrapper.style
              },
              [normalRender, h("span", {}, label)]
            )
          ]
        )
      : normalRender;
  }
};

function getStyles(RatingControl) {
  const {
    context: { theme },
    styles
  } = RatingControl;

  const { prefixStyle } = theme;

  return {
    root: prefixStyle({
      color: theme.baseMediumHigh,
      display: "inline-block",
      position: "relative",
      cursor: "default",
      ...styles
    }),
    group: prefixStyle({
      display: "inline-block",
      transition: "all .25s"
    }),
    groupMask: prefixStyle({
      display: "inline-block",
      transition: "all .25s",
      color: theme.accent,
      position: "absolute",
      top: 0,
      left: 0
    }),
    labelWrapper: prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    })
  };
}
