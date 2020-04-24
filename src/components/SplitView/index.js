import SplitView from "./SplitView";
import SplitViewPane from "./SplitViewPane";

SplitView.install = function(Vue) {
  Vue.component(SplitView.name, SplitView);
  Vue.component(SplitViewPane.name, SplitViewPane);
};

export default SplitView;
