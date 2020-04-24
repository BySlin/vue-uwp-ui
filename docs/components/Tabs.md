---
title: Tabs 标签页
---
<ClientOnly>
<template>
  <show-components title="标签页" :linesOfCode="25">
       <Tabs :styles="baseStyle">
                 <Tab>
                   Tab1
                 </Tab>
                 <Tab>
                   Tab2
                 </Tab>
                 <Tab>
                   Tab3
                 </Tab>
                 <Tab title="Custom TabTile">
                   Custom TabTile
                 </Tab>
       </Tabs>
               <Tabs
                 :tabStyle="tabStyle"
                 :styles="baseStyle"
                 :tabTitleStyle="{ marginRight: 40 }"
                 :renderTitle="renderTitle"
               >
                 <Tab title="People">
                   People
                 </Tab>
                 <Tab title="NUIFace">
                   NUIFace
                 </Tab>
                 <Tab title="Game">
                   Game
                 </Tab>
                 <Tab title="Color">
                   Color
                 </Tab>
               </Tabs>
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
          display: "block",
          margin: "10px 0",
          height: 400,
          width: 570
      },
    }
  },
  
  inject: ["context"],
  
  created() {
    //debugger
  },
  
  computed: {
    tabStyle() {
      const { theme } = this.context;
    
      return {
        background: theme.useFluentDesign ? theme.acrylicTexture60.background : theme.chromeLow
      }
    }
  },
  
  
  watch:{
    a(v){
    console.log(v)
    }
  },
  methods:{
    renderTitle(h,title){
      return h('span',{},[
        h('Icon',{},title),
        h('span',{style:{marginLeft: 12}},title)
      ])
    }
  }
};
</script>
