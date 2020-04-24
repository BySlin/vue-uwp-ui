import CustomAnimate from "./CustomAnimate";
import ScaleInOut from "./ScaleInOut";
import SlideInOut from "./SlideInOut";
import FadeInOut from "./FadeInOut";

export { CustomAnimate, ScaleInOut, SlideInOut, FadeInOut };

export default {
  install(Vue) {
    Vue.component(CustomAnimate.name, CustomAnimate);
    Vue.component(ScaleInOut.name, ScaleInOut);
    Vue.component(SlideInOut.name, SlideInOut);
    Vue.component(FadeInOut.name, FadeInOut);
  }
};
