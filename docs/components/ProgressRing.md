---
title: ProgressRing 进度环
---
<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="25">
      <show-components-item label="ProgressRing">
          <ProgressRing :size="25" />
          <ProgressRing :size="50" />
          <ProgressRing :size="75" />
          <ProgressRing :size="75" :dotsNumber="4" />
          <ProgressRing :size="100" :speed="6125" />
          <ProgressRing :size="100" :dotsStyle="{ background: 'yellowgreen' }" />
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
    }
  },
  created() {
    //debugger
  }
};
</script>
