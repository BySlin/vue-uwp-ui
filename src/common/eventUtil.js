const emptyFunc = () => {};

export function bindEvent(vm) {
  return {
    click: () => {
      vm.$emit("click");
    },
    focus: () => {
      vm.$emit("focus");
    },
    mouseenter: () => {
      vm.$emit("mouseenter");
    },
    mouseleave: () => {
      vm.$emit("mouseleave");
    },
    mousedown: () => {
      vm.$emit("mousedown");
    },
    mouseup: () => {
      vm.$emit("mouseup");
    }
  };
}

export function renameEvent(event) {
  if (event === void 0) {
    return {
      onHover: emptyFunc,
      onFocus: emptyFunc,
      onActive: emptyFunc,
      onVisited: emptyFunc,
      unHover: emptyFunc,
      unFocus: emptyFunc,
      unActive: emptyFunc,
      unVisited: emptyFunc,
      onMouseEnter: emptyFunc,
      onMouseLeave: emptyFunc,
      onMouseDown: emptyFunc,
      onMouseUp: emptyFunc,
      onClick: emptyFunc
    };
  } else {
    const {
      mouseenter = emptyFunc,
      mouseleave = emptyFunc,
      mousedown = emptyFunc,
      mouseup = emptyFunc,
      click = emptyFunc,
      focus = emptyFunc,
      onHover = emptyFunc,
      onActive = emptyFunc,
      onVisited = emptyFunc,
      unHover = emptyFunc,
      unFocus = emptyFunc,
      unActive = emptyFunc,
      unVisited = emptyFunc
    } = event;

    return {
      onHover,
      onFocus: focus,
      onActive,
      onVisited,
      unHover,
      unFocus,
      unActive,
      unVisited,
      onMouseEnter: mouseenter,
      onMouseLeave: mouseleave,
      onMouseDown: mousedown,
      onMouseUp: mouseup,
      onClick: click
    };
  }
}
