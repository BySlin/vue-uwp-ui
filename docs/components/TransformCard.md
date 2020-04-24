---
title: TransformCard 3D视图
---
<ClientOnly>
<template>
  <show-components title="3D视图" :linesOfCode="25">
       <TransformCard :xMaxRotate="30" :yMaxRotate="30" :perspective="240">
                   <img
                     :style="{
                       marginTop: 40,
                       height: 'auto'
                     }"
                     :src="$withBase('/reveal.png')"
                   />
       </TransformCard>
  </show-components-item>
<template slot="code">

```vue
<template>
</template>
<script>
export default {
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
      baseStyle: {
          display: "block",
          margin: "10px 0",
          height: 400,
          width: 570
      },
    }
  },
  
  inject: ["context"],
  
  created() {
  },
  
  methods:{
  }
};
</script>
