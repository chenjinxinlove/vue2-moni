<template>
  <div class="bar">
    <mt-tabbar v-model="selected" :fixed=true :value="selected">
      <mt-tab-item id="index" >
        <i slot="icon" class="tj"></i>
        推荐
      </mt-tab-item>
      <mt-tab-item id="film" >
        <i slot="icon" class="dy"></i>
        电影
      </mt-tab-item>
      <mt-tab-item id="show">
        <i slot="icon" class="yc"></i>
        演出
      </mt-tab-item>
      <mt-tab-item id="circle" >
        <i slot="icon" class="fq"></i>
        饭圈
      </mt-tab-item>
      <mt-tab-item id="home">
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
        background-position 44.5% 0
      .wd
        background-position 33.5% 0
    .is-selected
      .tj
        background-position  55.5% 0
      .dy
        background-position 66.5% 0
      .yc
        background-position 78% 0
      .fq
        background-position 89% 0
      .wd
        background-position 100% 0



</style>
<script>
  import { Tabbar, TabItem } from 'mint-ui';

  export default{
    data: function () {
      return {
        selected: this.$store.state.selected
      };
    },
    components: {
      mtTabbar: Tabbar,
      mtTabItem: TabItem
    },
    watch: {
      'selected': function (val) {
        this.$store.commit('changeSelected', val);
        this.$router.push('/' + val);
      }
    }
  };
</script>
