---
title: CalendarView 日历视图
---
<ClientOnly>
<template>
  <show-components title="日历视图" :linesOfCode="25">
       <CalendarView v-model="date"/>
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
