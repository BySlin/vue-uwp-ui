---
title: RatingControl 评分
---
<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="25">
      <show-components-item label="RatingControl">
          <RatingControl />
          <RatingControl
               :iconStyle="{ fontSize: 48 }"
               :iconRatedStyle="{ color: 'yellowgreen' }"
               icon="HeartFillLegacy"
               v-model="a"
               :maxRating="4"
          />
          <RatingControl
               icon="HighlightLegacy"
               isReadOnly
               label="ReadOnly"
               v-model="a"
               :maxRating="7"
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
      a: 1.25
    }
  },
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
