---
title: NavigationView 导航视图
                      
---
<ClientOnly>
<template>
  <show-components title="导航视图" :linesOfCode="25">
      <show-components-item label="NavigationView">
          <NavigationView pageTitle="San Francisco"
                          displayMode="overlay"
                          :initWidth="48"
                          :autoResize="false"
                          :background="context.theme.listLow"
                          :focusNavigationNodeIndex="3">
            <template slot="navigationTopNodes">
              <SplitViewCommand icon="People" @click="test" />
              <SplitViewCommand label="Print" icon="PrintLegacy" />
            </template>
            <template slot="navigationBottomNodes">
              <SplitViewCommand label="Settings" icon="Settings" />
              <SplitViewCommand label="CalendarDay" icon="CalendarDay" />
            </template>
            <div :style="{ display: 'inline-block' }">
              <img :src="$withBase('/golden-gate-bridge-2037990_1280.jpg')" :style="{ width: '420px', maxWidth: '100vw', minHeight: '640px', maxHeight: '100vh', height: '100%', objectFit: 'cover'}"/>
            </div>
          </NavigationView>
          <NavigationView
                  pageTitle="San Francisco"
                  displayMode="minimal"
                  :autoResize="false"
                  :focusNavigationNodeIndex="1"
                >
             <template slot="navigationTopNodes">
               <SplitViewCommand icon="People" />
               <SplitViewCommand label="Print" icon="PrintLegacy" />
             </template>
             <template slot="navigationBottomNodes">
               <SplitViewCommand label="Settings" icon="Settings" />
               <SplitViewCommand label="CalendarDay" icon="CalendarDay" />
             </template>
             <div :style="{ display: 'inline-block' }">
               <img :src="$withBase('/golden-gate-bridge-2037990_1280.jpg')" :style="{ width: '420px', maxWidth: '100vw', minHeight: '640px', maxHeight: '100vh', height: '100%', objectFit: 'cover'}"/>
             </div>
         </NavigationView>
         <NavigationView
                              isControlled
                              :styles="{ width: 640, height: 640 }"
                              pageTitle="San Francisco"
                              displayMode="compact"
                              :value="true"
                              :autoResize="false"
                              :focusNavigationNodeIndex="2"
                            >
                            <template slot="navigationTopNodes">
                                           <SplitViewCommand icon="People" />
                                           <SplitViewCommand label="Print" icon="PrintLegacy" />
                                         </template>
                                         <template slot="navigationBottomNodes">
                                           <SplitViewCommand label="Settings" icon="Settings" />
                                           <SplitViewCommand label="CalendarDay" icon="CalendarDay" />
                                         </template>
                              <img
                                :src="$withBase('/golden-gate-bridge-2037990_1280.jpg')"
                                height="100%"
                                :style="{ objectFit: 'cover' }"
                              />
          </NavigationView>
          <NavigationView
                     :isControlled="false"
                     :styles="{ width: 640, height: 640 }"
                     pageTitle="San Francisco"
                     displayMode="compact"
                     :autoResize="false"
                     :initWidth="120"
                     :expandedWidth="480"
                     :value="false"
                     :focusNavigationNodeIndex="2"
                   >
                   <template slot="navigationTopNodes">
                                  <SplitViewCommand icon="People" />
                                  <SplitViewCommand label="Print" icon="PrintLegacy" />
                                </template>
                                <template slot="navigationBottomNodes">
                                  <SplitViewCommand label="Settings" icon="Settings" />
                                  <SplitViewCommand label="CalendarDay" icon="CalendarDay" />
                                </template>
                     <img
                       :src="$withBase('/golden-gate-bridge-2037990_1280.jpg')"
                       height="100%"
                       :style="{ objectFit: 'cover' }"
                     />
          </NavigationView>
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
      baseStyle:{
        width: '420px',
        height: '640px'
      }
    }
  },
  
  inject: ["context"],
  
  created() {
    //debugger
  },
  
  methods: {
    test() {
      alert('111111')
    }
  }
};
</script>
