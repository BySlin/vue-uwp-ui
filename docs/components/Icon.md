---
title: Icon 图标
---

<ClientOnly>
<template>
  <div class="demo-icon">
    <div class="icon-note">
      <span class="icon-note-text">点击图标可复制标签</span>
    </div>
    <div class="icon-list">
      <show-icon v-for="(iconValue, iconKey) in icons" :key="iconKey" :label="iconKey">
        <Icon :styles="{fontSize:24}">{{iconValue}}</Icon>
      </show-icon>
    </div>
  </div>
</template>

<style lang="less" scoped>
.icon-note {
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  color: #909399;
  &-text {
    font-size: 14px;
  }
}
.icon-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
</ClientOnly>

<script>
import Clipboard from 'clipboard';
import icons from '@/components/Icon/icons.js';
export default {
  data() {
    return {
      icons
    };
  },
  mounted() {
    /* eslint-disable no-new */
    new Clipboard('.demo-icon .show-icon');
    /* eslint-enable */
  }
};
</script>
