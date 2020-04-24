---
title: Img 图片
---

<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="25">
      <show-components-item label="Image">
          <Img
              :styles="imageStyle"
              :src="$withBase('/images/cat-649164_1280.jpg')"
          />
          <Img
               useLazyLoad
               :styles="imageStyle"
               src=""
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
      a: true,
      b: false,
      c: null,
      baseStyle: {margin: "10px 10px 10px 0"}
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
      imageStyle: {
         width: "100%",
         height: "auto",
         maxWidth: '320px',
         maxHeight: '320px',
         margin: '10px'
      }
    }
  },
  created() {
    //debugger
  }
};
</script>
