---
title: ColorPicker 颜色选择器
---

<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="25">
      <show-components-item label="Image">
          <ColorPicker v-model="color"
          />
      </show-components-item>
<template slot="code">

```vue
<template>
  <CheckBox
    :styles="baseStyle"
    v-model="a"
  />
  <CheckBox
    :styles="baseStyle"
    v-model="b"
  />
  <CheckBox
    :styles="baseStyle"
    v-model="c"
  />
</template>
<script>
export default {
  data(){
    return {
      color: "#FFFFFF",
    }
  }
};
</script>
```
</template>
  </show-components>
</template>
</ClientOnly>

<script>
export default {
  data() {
    return {
      color: "#FFFFFF",
    }
  },
  created() {
    //debugger
  }
};
</script>
