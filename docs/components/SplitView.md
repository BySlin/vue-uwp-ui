---
title: SplitView 分割视图
---
<ClientOnly>
<template>
  <show-components title="分割视图" :linesOfCode="25">
       <SplitView
               v-model="expanded"
               :styles="{
                 width: '85%',
                 margin: '20px auto',
                 height: 640
               }"
             >
               <div>
                 <Toggle
                   label="Toggle SplitView"
                   v-model="expanded"
                   background="none"
                   :styles="{ margin: 20 }"
                 />
               </div>
               <SplitViewPane>
                 SplitViewPane
               </SplitViewPane>
             </SplitView>
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
      expanded: true
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
