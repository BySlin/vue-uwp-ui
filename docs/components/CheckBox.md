---
title: CheckBox 复选框
---

<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="25">
      <show-components-item label="CheckBox">
          <CheckBox
              :styles="baseStyle"
              v-model="a"
          />
          <CheckBox
              :styles="baseStyle"
              v-model="b"
          />
          <CheckBox
              :styles="baseStyle"
              v-model="c"
          />
          <CommandBar
              labelPosition="collapsed"
              :styles="{margin: '30px 0'}"
          >
              <template slot="primaryCommands">
                  <AppBarButton icon="Shuffle" label="Shuffle" />,
                  <AppBarButton icon="RepeatAll" label="Repeat" />,
                  <AppBarSeparator />,
                  <AppBarButton icon="Back" label="Back" />,
                  <AppBarButton icon="Stop" label="Stop" />,
                  <AppBarButton icon="Play" label="Play" />,
                  <AppBarButton icon="Forward" label="Forward" />,
                  <div>Will not render this item.</div>
              </template>
              <template slot="secondaryCommands">
                  <p focus>Open with</p>,
                  <p>Print</p>,
                  <p>Set as</p>,
                  <p>View actual size</p>,
                  <AppBarSeparator />,
                  <p>File info</p>,
                  <AppBarSeparator />,
                  <p>Send feedback</p>
              </template>
          </CommandBar>
          <AutoSuggestBox v-model="title" @itemClick="test">
              <p value="1">1</p>
              <p value="2">2</p>
              <p value="3">3</p>
          </AutoSuggestBox>
          <ContentDialog
              v-model="b"
              showCloseButton
              statusBarTitle="确认"
              title="Delete file permanently?"
              content="If you delete this file, you won't be able to recover it. Do you want to delete it?"
          />
          <DropDownMenu
              :values="['1', '2', '3', '4', '5', '6', '7']"
          />
          <FlipView :styles="{width:640,height:320}" direction="vertical">
            <img v-for="item in imageNames" :style="{  width: '100%',height: '100%',objectFit: 'cover'}" :src="$withBase('/images1/'+item)" />
          </FlipView>
          <Flyout>
           <Button>Your FlyoutContent</Button>
             <FlyoutContent
               :show="false"
               :styles="{ height: 40 }"
             >
                      Your Top FlyoutContent
              </FlyoutContent>
                    <FlyoutContent
                      :show="false"
                      verticalPosition="bottom"
                      :styles="{ height: 60 }"
                      :enterDelay="850"
                    >
                      Your Bottom FlyoutContent with delay 850ms
                    </FlyoutContent>
                  </Flyout>
          <FloatNav :isFloatRight="false">
               <IconButton slot="topNode">HomeSolid</IconButton>
               <FloatNavExpandedItem title="Start" @click="test">
                   <IconButton>RatingStarFillReducedPaddingHTMLLegacy</IconButton>
               </FloatNavExpandedItem>
               <IconButton slot="bottomNode">ScrollChevronUpLegacy</IconButton>
          </FloatNav>
          <div>
          <Menu :menuItemHeight="36" :menuItemWidth="220">
                         <MenuItem
                           icon="Share"
                           label="Share"
                         />
                         <MenuItem
                           icon="Copy"
                           label="Copy"
                         />
                         <MenuItem
                           icon="Delete"
                           label="Delete"
                         />
                         <Separator />
                         <MenuItem label="Rename" />
                         <MenuItem label="Select" />
                         <MenuItem label="Child Menu">
                             <MenuItem label="Rename">
                                <MenuItem
                                  label="Test"
                                />
                            </MenuItem>
                            <MenuItem
                                icon="Delete"
                                label="Delete"
                              />
                        </MenuItem>
                    </Menu>
          </div>
      </show-components-item>
<template slot="code">

```vue
<template>
  <CheckBox
    :styles="baseStyle"
    v-model="a"
  />
  <CheckBox
    :styles="baseStyle"
    v-model="b"
  />
  <CheckBox
    :styles="baseStyle"
    v-model="c"
  />
</template>
<script>
export default {
  data(){
    return {
      a: true,
      b: false,
      c: null,
      baseStyle: {margin: "10px 10px 10px 0"}
    }
  }
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
      a: true,
      b: false,
      c: null,
      title: "",
      baseStyle: {margin: "10px 10px 10px 0"},
             imageNames : [
              "banteng-2330138_1280.jpg",
              "chipmunk-2318395_1280.jpg",
              "dog-2332240_1280.jpg",
              "eyes-2344284_1280.jpg",
              "kitten-2307601_1280.jpg",
              "monkey-2320471_1280.jpg",
              "rest-2335341_1280.jpg"
            ]
    }
  },
  methods:{
    test(){
      console.log('1111')
    }
  }
};
</script>


