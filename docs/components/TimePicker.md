---
title: TimePicker 时间选择器
---
<ClientOnly>
<template>
  <show-components title="时间选择器" :linesOfCode="25">
      <TimePicker v-model="time" disabledSecond />
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
      time:"11:30",
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
