import Menu from "./Menu";
import MenuItem from "./MenuItem";

Menu.install = function(Vue) {
  Vue.component(Menu.name, Menu);
  Vue.component(MenuItem.name, MenuItem);
};

export default Menu;
