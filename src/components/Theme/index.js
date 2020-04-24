import Theme from "./Theme";

Theme.install = function(Vue) {
  Vue.component(Theme.name, Theme);
};

export default Theme;
