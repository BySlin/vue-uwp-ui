import darkTheme from "../../styles/darkTheme";
import PseudoClasses from "../PseudoClasses";
import { bindEvent } from "../../common/eventUtil";

export default {
  name: "ListView",

  props: {
    listItemStyle: Object,
    styles: Object,
    background: String,
    defaultFocusListIndex: Number
  },

  data() {
    return {
      focusIndex: this.defaultFocusListIndex
    };
  },

  watch: {
    defaultFocusListIndex(v) {
      this.focusIndex = v;
    }
  },

  inject: {
    context: {
      default: { theme: darkTheme }
    }
  },

  methods: {
    onChooseItem(index) {
      this.$emit("chooseItem", index);
    },
    getItemNode(h, itemNode, index, itemStyles, disabled, focus, styles) {
      const { theme } = this.context;
      const { onChooseItem, focusIndex } = this;

      const isFocus = focus || focusIndex === index;

      const defaultBG = isFocus ? theme.listAccentLow : "none";
      const focusBG = isFocus
        ? theme.listAccentHigh
        : theme.useFluentDesign
        ? theme.acrylicTexture40.background
        : theme.listLow;

      const itemStyleClasses = theme.prepareStyle({
        className: "list-view-item",
        style: theme.prefixStyle({
          background: defaultBG,
          color: disabled ? theme.baseLow : theme.baseHigh,
          "&:hover": {
            background: focusBG
          },
          "&:active": {
            transform: "scale(0.99)"
          },
          ...itemStyles,
          ...styles
        })
      });

      const event = { on: bindEvent(this) };

      const itemParams = {
        style: itemStyleClasses.style,
        class: itemStyleClasses.className,
        ...event
      };

      const vm = this;

      return h(
        PseudoClasses,
        {
          props: { props: { ...itemParams, ...this.$props } },
          attrs: { disabled },
          key: `${index}`
        },
        [
          h(
            "div",
            {
              ...itemParams,
              on: {
                click(e) {
                  vm.$emit("itemClick", e, index);
                },
                mousedown: () => {
                  if (disabled === void 0) {
                    onChooseItem(index);
                  }
                }
              }
            },
            [itemNode]
          )
        ]
      );
    }
  },

  render(h) {
    const { theme } = this.context;

    const { default: listSource } = this.$slots;

    const inlineStyles = getStyles(this);
    const styleClasses = theme.prepareStyles({
      className: "list-view",
      styles: inlineStyles
    });

    return h(
      "div",
      {
        style: styleClasses.root.style,
        class: styleClasses.root.className
      },
      listSource
        .filter(item => item.tag !== void 0)
        .map((listItem, index) => {
          const itemStyles = inlineStyles.item;

          const componentOptions = listItem.componentOptions;
          const vNodeData = listItem.data;

          let disabled, styles, focus;

          if (componentOptions) {
            const props = componentOptions.propsData;
            if (props) {
              disabled = props.disabled;
              styles = props.styles;
              focus = props.focus;
            }
          }

          if (vNodeData) {
            focus =
              focus || (vNodeData.attrs && vNodeData.attrs.focus !== void 0);
          }

          return this.getItemNode(
            h,
            listItem,
            index,
            itemStyles,
            disabled,
            focus,
            styles
          );
        })
    );
  }
};

function getStyles(ListView) {
  const { context, listItemStyle, background, styles } = ListView;
  const { theme } = context;

  return {
    root: theme.prefixStyle({
      width: 320,
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: 14,
      padding: "8px 0",
      color: theme.baseMediumHigh,
      border: `1px solid ${
        theme.useFluentDesign ? theme.listLow : theme.altHigh
      }`,
      background:
        background ||
        (theme.useFluentDesign
          ? theme.acrylicTexture60.background
          : theme.chromeLow),
      transition: "all .25s",
      ...styles
    }),
    item: theme.prefixStyle({
      cursor: "default",
      padding: 8,
      width: "100%",
      transition: "all 0.25s",
      ...listItemStyle
    })
  };
}
