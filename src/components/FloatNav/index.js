import FloatNav from "./FloatNav";
import FloatNavExpandedItem from "./FloatNavExpandedItem";

FloatNav.install = function(Vue) {
  Vue.component(FloatNav.name, FloatNav);
  Vue.component(FloatNavExpandedItem.name, FloatNavExpandedItem);
};

export default FloatNav;
