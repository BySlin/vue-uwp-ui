---
title: CalendarDatePicker 日历时间选择器
---
<ClientOnly>
<template>
  <show-components title="日历时间选择器" :linesOfCode="25">
       <CalendarDatePicker v-model="date"/>
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
      date: new Date(),
    }
  },
  
  inject: ["context"],
  
  created() {
  },
  
  methods:{
  },
  watch:{
    date(v) {
      console.log(v);
    }
  }
};
</script>
