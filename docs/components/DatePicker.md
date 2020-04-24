---
title: DatePicker 日期选择器
---
<ClientOnly>
<template>
  <show-components title="日期选择器" :linesOfCode="25">
      <DatePicker v-model="time" />
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
      time: new Date(),
    }
  },
  
  inject: ["context"],
  
  created() {
  },
  
  methods:{
  },
  
  watch:{
    time(v){
      console.log(v)
    }
  }
};
</script>
