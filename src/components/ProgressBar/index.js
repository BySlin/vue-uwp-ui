import ProgressBar from "./ProgressBar";

ProgressBar.install = function(Vue) {
  Vue.component(ProgressBar.name, ProgressBar);
};

export default ProgressBar;
