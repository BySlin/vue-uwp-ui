import * as createHash from "murmurhash-js/murmurhash3_gc";
import IS_NODE_ENV from "../common/nodeJS/IS_NODE_ENV";
import isUnitlessNumber from "../common/react/isUnitlessNumber";

export const replace2Dashes = key =>
  key.replace(/[A-Z]/g, $1 => `-${$1.toLowerCase()}`);
export const getStyleValue = (key, value) =>
  typeof value === "number" && !isUnitlessNumber[key] ? `${value}px` : value;

export const extendsStyleKeys = {
  "&:hover": true,
  "&:active": true,
  "&:focus": true,
  "&:disabled": true
};

export default class StyleManager {
  prefixClassName;
  theme;
  themeId = 0;
  styleElement = null;
  sheets = {};
  styleDidUpdate = () => {};
  CSSText = "";
  addedCSSText = {};

  constructor(config) {
    const { prefixClassName, theme, styleDidUpdate } = config;
    this.styleDidUpdate = styleDidUpdate || (() => {});
    this.prefixClassName = prefixClassName ? `${prefixClassName}-` : "";
    this.setupTheme(theme);
    this.setupStyleElement();
  }

  setupTheme = theme => {
    this.theme = theme;
    this.themeId = createHash(
      [theme.accent, theme.themeName, theme.useFluentDesign].join(", ")
    );
  };

  setupStyleElement = () => {
    if (IS_NODE_ENV) return;
    if (!this.styleElement) {
      const name = `data-uwp-jss-${this.themeId}`;
      this.styleElement = document.createElement("style");
      this.styleElement.setAttribute(name, "");
      document.head.appendChild(this.styleElement);
    }
  };

  cleanStyleSheet = () => {
    if (this.styleElement) document.head.removeChild(this.styleElement);
    this.theme = null;
    this.sheets = {};
    this.CSSText = "";
    this.styleElement = null;
  };

  style2CSSText = style => {
    return style
      ? Object.keys(style)
          .map(
            key =>
              `  ${replace2Dashes(key)}: ${getStyleValue(key, style[key])};`
          )
          .join("\n")
      : void 0;
  };

  sheetsToString = () => {
    return `\n${Object.keys(this.sheets)
      .map(id => this.sheets[id].CSSText)
      .join("")}`;
  };

  addStyle = (style, className = "", callback = () => {}) => {
    const id = createHash(`${this.themeId}: ${JSON.stringify(style)}`);
    if (this.sheets[id]) return this.sheets[id];

    const classNameWithHash = `${this.prefixClassName}${className}-${id}`;
    const styleKeys = Object.keys(style);
    let CSSText = "";
    let contentCSSText = "";
    let extendsCSSText = "";

    for (const styleKey of styleKeys) {
      if (extendsStyleKeys[styleKey]) {
        const extendsStyle = style[styleKey];
        if (extendsStyle) {
          extendsCSSText += `.${classNameWithHash}${styleKey.slice(
            1
          )} {\n${this.style2CSSText(extendsStyle)}\n}\n`;
        }
      } else {
        if (style[styleKey] !== void 0) {
          contentCSSText += `  ${replace2Dashes(styleKey)}: ${getStyleValue(
            styleKey,
            style[styleKey]
          )};\n`;
        }
      }
    }

    CSSText += `.${classNameWithHash} {\n${contentCSSText}\n}\n`;
    CSSText += extendsCSSText;

    this.sheets[id] = { CSSText, classNameWithHash, id, className };
    callback();
    return this.sheets[id];
  };

  addStyleWithUpdate = (style, className = "") => {
    return this.addStyle(style, className, this.renderSheets);
  };

  addCSSText = (CSSText, callback = () => {}) => {
    const hash = createHash(CSSText);
    const shouldUpdate = !this.addedCSSText[hash];
    if (shouldUpdate) {
      this.addedCSSText[hash] = true;
      this.CSSText += CSSText;
    }
    callback(shouldUpdate);
  };

  addCSSTextWithUpdate = CSSText => {
    this.addCSSText(CSSText, shouldUpdate => {
      if (this.styleElement && shouldUpdate) {
        this.updateStyleElement((this.styleElement.textContent += CSSText));
      }
    });
  };

  setStyleToManager = (config, callback) => {
    let newStyles = {};
    let { style, className } = config || {};
    if (callback) style = callback(this.theme);

    const { dynamicStyle, ...styleProperties } = style;
    className = className || "";
    const sheet = this.addStyleWithUpdate(styleProperties, className);
    newStyles = {
      className: sheet.classNameWithHash,
      style: dynamicStyle
    };

    return newStyles;
  };

  setStylesToManager = (config, callback) => {
    const newStyles = {};
    let { className, styles } = config;
    if (callback) styles = callback(this.theme);
    className = className || "";
    const keys = Object.keys(styles);

    // eslint-disable-next-line no-unused-vars
    let CSSText = "";

    for (const key of keys) {
      let styleItem = styles[key];
      if (!styleItem) continue;

      const isStyleClasses = styleItem.className || styleItem.style;
      let secondClassName = `-${key}`;

      if (isStyleClasses) {
        secondClassName = styleItem.className;
        secondClassName = secondClassName ? `-${secondClassName}` : "";
        secondClassName = `-${key}${secondClassName}`;
      }

      const { dynamicStyle, ...styleProperties } = isStyleClasses
        ? styleItem.style
        : styleItem;
      const sheet = this.addStyleWithUpdate(
        styleProperties,
        `${className}${secondClassName}`
      );
      newStyles[key] = {
        className: sheet.classNameWithHash,
        style: dynamicStyle
      };
      CSSText += `${sheet.CSSText}\n`;
    }

    return newStyles;
  };

  renderSheets = () => {
    let textContent = this.sheetsToString();
    textContent += this.CSSText;
    this.updateStyleElement(textContent);
  };

  updateStyleElement = textContent => {
    // const name = `data-uwp-jss-${this.themeId}`;
    if (this.styleElement) {
      this.styleElement.textContent = textContent;
      this.styleDidUpdate();
    }
  };
}
