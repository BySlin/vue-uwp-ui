---
title: SplitViewCommand 分割视图命令
---
<ClientOnly>
<template>
  <show-components title="分割视图命令" :linesOfCode="25">
       <div :style="{ margin: '10px 0' }">
               <SplitViewCommand
                 :styles="baseStyle"
                 label="Shuffle"
                 icon="ShuffleLegacy"
               />
               <SplitViewCommand
                 :styles="baseStyle"
                 label="Print"
                 icon="PrintLegacy"
                 visited
               />
               <SplitViewCommand
                 :styles="baseStyle"
                 label="Mail"
                 icon="MailLegacy"
                 visited
                 isTenFt
               />
             </div>
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
         width: 240
      }
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
