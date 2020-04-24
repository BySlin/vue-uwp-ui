---
title: ScrollReveal 滚动显示
---
<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="25">
      <ScrollReveal :speed="2000"
                   :topOffset="topOffset"
                   :leaveStyle="{ padding: '10px', marginRight: '10px', background: context.theme.accent, color: '#fff' }"
                   :enterStyle="{ background: 'yellowgreen' }">
          <div :style="{ display: 'inline-block' }">Scroll the Window</div>
      </ScrollReveal>
      <ScrollReveal :speed="850"
                :topOffset="topOffset"
                :leaveStyle="{ transform: 'scale(0)', padding: '10px', marginRight: '10px', background: context.theme.baseLow }"
                :enterStyle="{ transform: 'scale(1)' }"
              >
          <div :style="{ display: 'inline-block' }">Scale In Animation</div>
      </ScrollReveal>
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
