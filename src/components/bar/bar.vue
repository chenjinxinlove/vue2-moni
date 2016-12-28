<template>
  <div class="bar">
    <mt-tabbar v-model="selected" :fixed=true value="推荐">
      <mt-tab-item id="推荐">
        <i slot="icon" class="tj"></i>
        推荐
      </mt-tab-item>
      <mt-tab-item id="电影">
        <i slot="icon" class="dy"></i>
        电影
      </mt-tab-item>
      <mt-tab-item id="演出">
        <i slot="icon" class="yc"></i>
        演出
      </mt-tab-item>
      <mt-tab-item id="饭圈">
        <i slot="icon" class="fq"></i>
        饭圈
      </mt-tab-item>
      <mt-tab-item id="我的">
        <i slot="icon" class="wd"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .bar
      .tj, .dy, .yc, .fq, .wd
        background url("portal-icons_e576a23c.png") no-repeat
        background-size 1000% 100%
      .tj
        background-position  0 0
      .dy
        background-position 11% 0
      .yc
        background-position 22% 0
      .fq
        background-position 44% 0
      .wd
        background-position 33% 0
    .is-selected
      .tj
        background-position  55% 0
      .dy
        background-position 66% 0
      .yc
        background-position 77% 0
      .fq
        background-position 99% 0
      .wd
        background-position 88% 0


</style>
<script>
  import { Tabbar, TabItem } from 'mint-ui';

  export default{
    data: function () {
      return {};
    },
    components: {
      mtTabbar: Tabbar,
      mtTabItem: TabItem
    }
  };
</script>
