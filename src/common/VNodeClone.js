export function cloneVNode(
  h,
  vnode,
  {
    props,
    on,
    key,
    style,
    class: className,
    attrs,
    domProps,
    ref,
    refInFor,
    slot
  }
) {
  if (!vnode.tag) {
    return vnode;
  }

  const children = vnode.children
    ? vnode.children.map(x => cloneVNode(h, x, {}))
    : [];

  const isComponent = !!vnode.componentOptions;

  const tag = isComponent ? vnode.componentOptions.Ctor : vnode.tag;
  const data = isComponent
    ? cloneComponentData(vnode)
    : Object.assign({}, vnode.data);

  if (props) {
    data.props = Object.assign(data.props || {}, props);
  }

  if (on) {
    data.on = Object.assign(data.on || {}, on);
  }

  if (key) {
    data.key = key;
  }

  if (style) {
    data.style = Object.assign(data.style || {}, style);
  }

  if (attrs) {
    data.attrs = Object.assign(data.attrs || {}, style);
  }

  if (className) {
    data.class = className;
  }

  if (domProps) {
    data.domProps = Object.assign(data.domProps || {}, style);
  }

  if (ref) {
    data.ref = ref;
  }

  if (refInFor) {
    data.refInFor = refInFor;
  }

  if (slot) {
    data.slot = slot;
  }

  return h(tag, data, children);
}

export function cloneComponentData(vnode) {
  const data = Object.assign({}, vnode.data, { hooks: undefined });
  data.props = vnode.componentOptions.propsData;
  data.on = Object.assign(data.on || {}, vnode.componentOptions.listeners);

  return data;
}
