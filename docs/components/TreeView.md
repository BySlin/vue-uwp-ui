---
title: Tree 树形视图
---
<ClientOnly>
<template>
  <show-components title="树形视图" :linesOfCode="25">
      <TreeView :listSource="listSource">
        <Icon slot="headerIcon">FolderLegacy</Icon>
        <Icon slot="itemIcon">OpenFileLegacy</Icon>
      </TreeView>
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
      listSource: [{
                             title: "A",
                             children: [{
                               title: "A-Child1",
                               children: [{
                                 title: "A-Child1-Hidden",
                                 hidden: true
                               }, {
                                 title: "A-Child1-Child2"
                               }]
                             }]
                           },
                           "B", {
                             title: "C",
                             children: [
                               "C-Child-1",
                               "C-Child-2"
                             ]
                           }, {
                             title: "D",
                             disabled: true
                           }]
    }
  },
  
  inject: ["context"],
  
  created() {
  },
  
  methods:{
  }
};
</script>
