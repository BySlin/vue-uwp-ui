import darkTheme from "../../styles/darkTheme";
import Icon from "../Icon";
import TextBox from "../TextBox";
import ListView from "../ListView";
import PseudoClasses from "../PseudoClasses";

export default {
  name: "AutoSuggestBox",

  props: {
    value: {
      require: true
    },
    searchAction: {
      type: Function,
      default() {
        return () => {};
      }
    },
    iconSize: {
      type: Number,
      default: 32
    },
    background: {
      type: String,
      default: "none"
    },
    placeholder: String,
    styles: Object,
    className: String
  },

  data() {
    return {
      typing: void 0,
      showListSource: void 0,
      focusListSourceIndex: void 0,
      inputTimer: null
    };
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    handleInput(value) {
      this.$emit("input", value);

      clearTimeout(this.inputTimer);
      this.inputTimer = setTimeout(() => {
        if (value) {
          this.typing = true;
          this.showListSource = true;
        } else {
          this.typing = false;
          this.showListSource = false;
        }
      }, 150);
    },
    handleShowListSource() {
      this.showListSource = true;
    },
    toggleShowListSource() {
      this.showListSource = !this.showListSource;
    },
    handleButtonAction() {
      if (this.typing) {
        this.handleInput("");
        this.typing = false;
        this.showListSource = false;
        this.$refs.textBox.$refs.inputElm.focus();
      } else {
        this.searchAction(this.value);
      }
    },
    handleChooseItem(index) {
      const chooseTimer = setTimeout(() => {
        this.toggleShowListSource(false);
        clearTimeout(chooseTimer);
      }, 250);

      const vNode = this.$slots.default.filter(item => item.tag !== void 0)[
        index
      ];

      const data = vNode.data;
      if (data && data.attrs) {
        this.handleInput(data.attrs.value);
      }
    },
    handleInputKeyDown(e) {
      const { keyCode } = e;
      let { focusListSourceIndex, showListSource, searchAction } = this;

      const listSourceLength =
        this.$slots.default != null
          ? this.$slots.default.filter(item => item.tag !== void 0).length
          : 0;

      if (showListSource) {
        switch (keyCode) {
          case 38: {
            if (focusListSourceIndex === void 0) {
              this.focusListSourceIndex = 0;
            } else {
              let temp = focusListSourceIndex - 1;
              if (temp >= 0) {
                this.focusListSourceIndex = temp;
              }
            }
            break;
          }
          case 40: {
            if (focusListSourceIndex === void 0) {
              this.focusListSourceIndex = 0;
            } else {
              let temp = focusListSourceIndex + 1;
              if (temp < listSourceLength) {
                this.focusListSourceIndex = temp;
              }
            }
            break;
          }
          case 13: {
            if (focusListSourceIndex === void 0) {
              searchAction(this.value);
              this.showListSource = false;
            } else {
              this.handleChooseItem(focusListSourceIndex);
              this.focusListSourceIndex = void 0;
            }
            break;
          }
          default: {
            break;
          }
        }
      } else {
        if (keyCode === 13) {
          searchAction(this.value);
        }
      }
    },

    checkLayerClick(e) {
      if (!this.$refs.textBox.$el.contains(e.target)) {
        this.showListSource = false;
      }
    },
    checkLayerKeydown(e) {
      const { keyCode } = e;
      if (
        this.$refs.textBox.$refs.inputElm.matches(":focus") &&
        keyCode === 27
      ) {
        this.showListSource = false;
      }
    },
    itemClick(e, index) {
      this.$emit("itemClick", e, index);
    }
  },

  mounted() {
    document.documentElement.addEventListener("click", this.checkLayerClick);
    document.documentElement.addEventListener(
      "keydown",
      this.checkLayerKeydown
    );
  },

  destroyed() {
    document.documentElement.removeEventListener("click", this.checkLayerClick);
    document.documentElement.removeEventListener(
      "keydown",
      this.checkLayerKeydown
    );
  },

  render(h) {
    const {
      value,
      placeholder,
      className,
      background,

      typing,
      focusListSourceIndex,

      handleButtonAction,
      handleInput,
      handleShowListSource,
      handleInputKeyDown,
      handleChooseItem,
      itemClick
    } = this;
    const { theme } = this.context;
    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      styles: inlineStyles,
      className: "autosuggest-box"
    });

    return h(
      TextBox,
      {
        props: {
          styles: inlineStyles.root,
          className: theme.classNames(className, styleClasses.root.className),
          background,
          placeholder,
          value
        },
        on: {
          click: handleShowListSource,
          input: handleInput
        },
        nativeOn: {
          keydown: handleInputKeyDown
        },
        ref: "textBox"
      },
      [
        h(
          PseudoClasses,
          {
            props: {
              props: {
                style: inlineStyles.icon
              },
              on: {
                click: handleButtonAction
              }
            },
            slot: "rightNode"
          },
          [
            h(
              Icon,
              {
                props: {
                  styles: inlineStyles.icon
                },
                on: {
                  click: handleButtonAction
                }
              },
              typing ? "CancelLegacy" : "Search"
            )
          ]
        ),

        this.$slots.default &&
          this.$slots.default.length > 0 &&
          h(
            ListView,
            {
              props: {
                styles: inlineStyles.listView,
                listItemStyle: {
                  fontSize: 12
                }
              },
              on: {
                chooseItem: handleChooseItem,
                itemClick: itemClick
              }
            },
            this.$slots.default
              .filter(item => item.tag !== void 0)
              .map((item, index) => {
                if (index === focusListSourceIndex) {
                  item.data.attrs.focus = true;
                } else {
                  if (item.data.attrs) {
                    delete item.data.attrs.focus;
                  }
                }
                return item;
              })
          )
      ]
    );
  }
};

function getStyles(AutoSuggestBox) {
  const { context, styles, iconSize, showListSource } = AutoSuggestBox;
  const { theme } = context;

  return {
    root: theme.prefixStyle({
      display: "inline-block",
      verticalAlign: "middle",
      ...styles,
      position: "relative"
    }),
    listView: theme.prefixStyle({
      position: "absolute",
      width: "100%",
      top: "100%",
      left: 0,
      zIndex: 2,
      border: `1px solid ${theme.baseLow}`,
      transform: `translate3d(0, ${showListSource ? 0 : "-10px"}, 0)`,
      opacity: showListSource ? 1 : 0,
      pointerEvents: showListSource ? void 0 : "none",
      transition: "all .25s"
    }),
    icon: {
      position: "absolute",
      top: 0,
      right: 0,
      cursor: "pointer !important",
      height: iconSize,
      width: iconSize,
      color: "#a9a9a9",
      "&:hover": {
        color: theme.accent
      }
    }
  };
}
