export default class AddBlurEvent {
  constructor() {}
  clickListener = null;
  keydownListener = null;

  cleanEvent = () => {
    if (this.clickListener) {
      document.documentElement.removeEventListener("click", this.clickListener);
      this.clickListener = null;
    }
    if (this.keydownListener) {
      document.documentElement.removeEventListener(
        "keydown",
        this.keydownListener
      );
      this.keydownListener = null;
    }
  };

  setConfig = config => {
    const {
      addListener,
      blurCallback,
      clickIncludeElm,
      clickExcludeElm,
      blurKeyCodes
    } = config;

    if (addListener) {
      if (!this.clickListener) {
        this.clickListener = e => {
          if (clickIncludeElm) {
            if (
              Array.isArray(clickIncludeElm)
                ? clickIncludeElm.some(elm => elm === e.target)
                : clickIncludeElm === e.target
            ) {
              this.cleanEvent();
              blurCallback(e);
            }
            return;
          }

          if (clickExcludeElm) {
            if (
              Array.isArray(clickExcludeElm)
                ? clickExcludeElm.some(elm => elm.contains(e.target))
                : clickExcludeElm.contains(e.target)
            ) {
              return;
            } else {
              this.cleanEvent();
              blurCallback(e);
            }
          }
        };

        //变更执行顺序
        setTimeout(() => {
          document.documentElement.addEventListener(
            "click",
            this.clickListener
          );
        }, 0);
      }

      if (!this.keydownListener && blurKeyCodes) {
        this.keydownListener = e => {
          const { keyCode } = e;
          if (blurKeyCodes.includes(keyCode)) {
            blurCallback(e);
          }
          this.cleanEvent();
        };
        document.documentElement.addEventListener(
          "keydown",
          this.keydownListener
        );
      }
    } else {
      this.cleanEvent();
    }
  };
}
