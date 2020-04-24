---
title: Button 按钮
---

<ClientOnly>
<template>
  <show-components title="类型" :linesOfCode="3">
    <show-components-item label="默认按钮">
      <Button @click="handleClick" tooltip="222" :styles="{margin: 10}">default</Button>
    </show-components-item>
    <show-components-item label="图标按钮">
      <Button icon="RatingStarFillZeroWidthLegacy" @click="handleClick">
            default
            <span slot="tooltip">1111111111111</span>
      </Button>
    </show-components-item>
    <show-components-item label="禁用按钮">
      <Button disabled icon="RatingStarFillZeroWidthLegacy" iconPosition="right" @click="handleClick">disabled</Button>
    </show-components-item>
    <show-components-item label="动画">
        <FadeInOut :speed="1000">
            <Button :styles="{margin: 10}">
                FadeInOut
            </Button>
            <Button :styles="{margin: 10}">
                FadeInOut
            </Button>
        </FadeInOut>
    </show-components-item>
    <Toast
        v-model="a"
        :title="title"
        :description="['Conf Room 2001 / Building 135', '10:00 AM - 10:30 AM']"
        showCloseIcon
    >
        <Icon slot="logoNode">ActionCenterNotification</Icon>
    </Toast>
    <show-components-item label="AppBarButton">
        <AppBarButton
            class="aa"
          :styles="{margin: 10,background: 'rgba(255, 255, 255, 0.1)'}"
          icon="Shuffle"
          label="Shuffle"
        />
    </show-components-item>
    <show-components-item label="CheckBox">
        <CheckBox
            :styles="{margin: '10px 10px 10px 0'}"
            :label="a ? '显示通知': '隐藏通知'"
            v-model="a"
        />
        <RadioButton
            :styles="{margin: '10px 10px 10px 0'}"
            :label="a ? '显示通知': '隐藏通知'"
            v-model="a"
        />
        <Toggle v-model="a" :label="a ? '显示通知': '隐藏通知'" />
        <IconButton>
            GlobalNavButton
        </IconButton>
        <HyperLink :styles="{ margin: '10px 0' }" href="/" target="_blank">
            Link to Home Page
        </HyperLink>
        <TextBox v-model="title" placeholder="请输入" :maxLength="10">
          <Icon slot="leftNode" :styles="{margin: '0 4px'}">HeartFillLegacy</Icon>
          <Icon slot="rightNode" :styles="{margin: '0 4px'}">Emoji2Legacy</Icon>
        </TextBox>
        <PasswordBox v-model="title" placeholder="请输入" :maxLength="10" />
        <Dialog
            v-model="a"
            :styles="{ zIndex: 400 }">
            <Button>Dialog 2</Button>
        </Dialog>
    </show-components-item>
<template slot="code">

```vue
<Button type="default">空</Button>
<Button type="primary">default</Button>
<Button type="disabled">disabled</Button>
```

</template>
  </show-components>
</template>
</ClientOnly>

<script>
export default {
  methods: {
    handleClick() {
      alert('按钮被点击');
    }
  },
  created(){
    setTimeout(()=>{
      //this.a = true;
      this.title = "bbbbbbbbbb"
    }, 3000)
  },
  watch:{
    a(v){
    console.log(v)
    }
  },
  data(){
    return {
      a: null,
      title:"aaaaa"
    }
  }
};
</script>
