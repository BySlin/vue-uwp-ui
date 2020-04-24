---
title: Slider 滑块
---
<ClientOnly>
<template>
  <show-components title="滑块" :linesOfCode="25">
       <Slider />
       <Slider showValueInfo
                 :value="0.8"
                 displayMode="vertical"
                 :numberToFixed="2"
                 :customControllerStyle="{
                   background: context.theme.baseHigh
                 }"
                 :styles="{height: 120}"
                 barBackground="yellowgreen"
                 unit="px"
               />
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
      topOffset: window.innerHeight / 16
    }
  },
  
  inject: ["context"],
  
  created() {
    //debugger
  },
  watch:{
    a(v){
    console.log(v)
    }
  }
};
</script>
