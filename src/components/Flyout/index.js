import Flyout from "./Flyout";

import FlyoutContent from "./FlyoutContent";

Flyout.install = function(Vue) {
  Vue.component(Flyout.name, Flyout);
  Vue.component(FlyoutContent.name, FlyoutContent);
};

export default Flyout;
