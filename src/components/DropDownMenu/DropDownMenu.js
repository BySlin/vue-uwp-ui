import AddBlurEvent from "../../common/AddBlurEvent";
import darkTheme from "../../styles/darkTheme";
import Icon from "../Icon";

export default {
  name: "DropDownMenu",
  props: {
    value: {
      type: [String, Number]
    },
    values: {
      type: Array
    },
    background: String,

    itemWidth: {
      type: Number,
      default: 132
    },

    padding: {
      type: Number,
      default: 4
    },

    itemHeight: {
      type: Number,
      default: 28
    },

    styles: Object,
    className: String,
    wrapperAttributes: Object
  },

  data() {
    return {
      currentValue:
        this.value || (Array.isArray(this.values) && this.values[0]),
      currentValues: this.resetCurrentValues(),
      showList: false,
      addBlurEvent: new AddBlurEvent()
    };
  },

  watch: {
    value(v) {
      this.currentValue = v;
    },
    values() {
      this.resetCurrentValues();
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    resetCurrentValues() {
      let { values, value } = this;
      values = [...values];
      value = value || values[0];
      values.unshift(...values.splice(values.indexOf(value), 1));
      return values;
    },
    addBlurEventMethod() {
      this.addBlurEvent.setConfig({
        addListener: this.showList,
        clickExcludeElm: this.$el,
        blurCallback: () => {
          const { currentValue, currentValues } = this;
          currentValues.unshift(
            ...currentValues.splice(currentValues.indexOf(currentValue), 1)
          );
          this.showList = false;
        },
        blurKeyCodes: [27]
      });
    },
    toggleShowList(currentValue) {
      const { currentValues, showList } = this;
      if (showList) {
        currentValues.unshift(
          ...currentValues.splice(currentValues.indexOf(currentValue), 1)
        );
      }

      if (currentValue !== this.currentValue) {
        this.$emit("input", currentValue);
        this.$emit("change", currentValue);
        this.currentValue = currentValue;
      }

      this.showList = !this.showList;
      this.currentValues = showList ? currentValues : [...this.values];
    }
  },

  created() {
    this.$emit("input", this.currentValue);
    this.$emit("change", this.currentValue);
  },

  mounted() {
    this.addBlurEventMethod();
  },

  updated() {
    this.addBlurEventMethod();
  },

  destroyed() {
    this.addBlurEvent.cleanEvent();
  },

  render(h) {
    const {
      itemHeight,

      showList,
      currentValue,
      currentValues,

      toggleShowList
    } = this;

    const vm = this;

    const { theme } = this.context;

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "dropDownMenu",
      styles: inlineStyles
    });

    return h(
      "div",
      {
        style: styleClasses.root.style,
        class: styleClasses.root.className
      },
      [
        h(
          "div",
          {
            ref: "wrapperElm",
            style: {
              ...styleClasses.wrapper.style,
              border: `${showList ? "1px" : "2px"} solid ${theme.baseLow}`
            },
            class: styleClasses.wrapper.className,
            on: {
              mouseenter(e) {
                if (!showList) {
                  e.currentTarget.style.border = `2px solid ${
                    showList ? theme.baseLow : theme.baseHigh
                  }`;
                }
                vm.$emit("wrapperMouseEnter", e);
              },
              mouseleave(e) {
                if (!showList) {
                  e.currentTarget.style.border = `2px solid ${theme.baseLow}`;
                }
                vm.$emit("wrapperMouseLeave", e);
              }
            }
          },
          currentValues.map((value, index) => {
            const isCurrent = currentValue === value;

            return h(
              "div",
              {
                class: styleClasses.value.className,
                style: {
                  ...styleClasses.value.style,
                  height: (isCurrent || showList ? itemHeight : 0) + "px",
                  background:
                    isCurrent && showList ? theme.listAccentLow : "none"
                },
                on: {
                  click: () => toggleShowList(value),
                  mouseenter: !showList
                    ? e => vm.$emit("itemMouseEnter", e)
                    : e => {
                        e.currentTarget.style.background = isCurrent
                          ? theme.listAccentMedium
                          : theme.useFluentDesign
                          ? theme.listLow
                          : theme.chromeMedium;
                        vm.$emit("itemMouseEnter", e);
                      },

                  mouseleave: !showList
                    ? e => vm.$emit("itemMouseLeave", e)
                    : e => {
                        e.currentTarget.style.background = isCurrent
                          ? theme.listAccentLow
                          : "transparent";
                        vm.$emit("itemMouseLeave", e);
                      }
                },
                key: `${index}`
              },
              [
                h(
                  "p",
                  {
                    style: styleClasses.content.style,
                    class: styleClasses.content.className
                  },
                  value
                ),

                !showList && isCurrent
                  ? h(
                      Icon,
                      {
                        props: {
                          styles: {
                            fontSize: itemHeight / 2
                          }
                        }
                      },
                      "ChevronDown4Legacy"
                    )
                  : null
              ]
            );
          })
        )
      ]
    );
  }
};

function getStyles(DropDownMenu) {
  const {
    context: { theme },
    styles,
    itemHeight,
    itemWidth,
    padding,
    wrapperAttributes,
    background,
    values,
    showList
  } = DropDownMenu;
  const { prefixStyle } = theme;

  const currBackground =
    background ||
    (theme.useFluentDesign
      ? theme.acrylicTexture80.background
      : theme.chromeLow);
  const haveWrapperStyle = wrapperAttributes && wrapperAttributes.style;
  const zIndex =
    styles && styles.zIndex
      ? styles.zIndex
      : showList
      ? theme.zIndex.dropDownMenu
      : 1;

  return {
    root: prefixStyle({
      position: "relative",
      display: "inline-block",
      verticalAlign: "middle",
      width: itemWidth,
      height: itemHeight + padding,
      ...styles,
      zIndex
    }),
    wrapper: prefixStyle({
      position: "absolute",
      top: 0,
      left: 0,
      color: theme.baseMediumHigh,
      background: currBackground,
      width: itemWidth,
      height: showList ? values.length * itemHeight + 16 : itemHeight + padding,
      overflowX: "hidden",
      zIndex,
      padding: showList ? "6px 0" : 0,
      transition: "all .25s 0s ease-in-out",
      ...(showList && haveWrapperStyle ? wrapperAttributes.style : void 0),
      overflowY:
        showList && haveWrapperStyle
          ? wrapperAttributes.style.overflowY
          : "hidden"
    }),
    value: prefixStyle({
      width: itemWidth,
      display: "flex",
      padding: "0 8px",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }),
    content: {
      textAlign: "left",
      cursor: "default",
      height: "100%",
      width: "100%",
      overflow: "hidden",
      wordWrap: "normal",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      textOverflow: "ellipsis"
    }
  };
}
