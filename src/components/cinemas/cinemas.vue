<template>
  <div class="cinemas">
    <div class="cinemas-select">
      <span>全城</span>
      <span>品牌</span>
      <span>筛选</span>
      <span>搜索</span>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.cinemas
 .cinemas-select
    height 40px
    line-height 40px
    width 100%
    border-bottom 1px solid #ccc
    span
      display inline-block
      width 24%
      text-align center
</style>
<script>
  export default{
    data () {
      return { };
    },
    components: {
    },
    props: {
      food: {
        type: Object
      }
    }
  };
</script>
