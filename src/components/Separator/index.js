import Separator, { SeparatorProps } from "./Separator";

export { SeparatorProps };

Separator.install = function(Vue) {
  Vue.component(Separator.name, Separator);
};

export default Separator;
