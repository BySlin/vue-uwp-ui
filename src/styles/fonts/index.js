import addCSSRule from "../../common/browser/addCSSRule";

export default function setSegoeMDL2AssetsFonts() {
  addCSSRule(
    `@font-face {
      font-family: "Segoe MDL2 Assets";
      font-style: normal;
      font-weight: 400;
      src:
        local("Segoe MDL2 Assets"),
        url("${require("../../assets/fonts/segmdl2.eot")}"),
        url("${require("../../assets/fonts/segmdl2.woff2")}") format("woff2"),
        url("${require("../../assets/fonts/segmdl2.woff")}") format("woff"),
        url("${require("../../assets/fonts/segmdl2.svg")}#SegoeMDL2Assets") format("svg"),
        url("${require("../../assets/fonts/segmdl2.ttf")}") format("truetype");
    }`
  );
}
