import Tabs from "./Tabs";
import Tab from "./Tab";

Tabs.install = function(Vue) {
  Vue.component(Tabs.name, Tabs);
  Vue.component(Tab.name, Tab);
};

export default Tabs;
