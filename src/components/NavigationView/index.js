import NavigationView from "./NavigationView";

NavigationView.install = function(Vue) {
  Vue.component(NavigationView.name, NavigationView);
};

export default NavigationView;
