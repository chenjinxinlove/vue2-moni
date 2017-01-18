<template>
  <div class="cinemas">
    <div class="cinemas-select">
      <span>全城</span>
      <span>品牌</span>
      <span>筛选</span>
      <span>搜索</span>
    </div>
    <div class="cinemaList-wrap">
      <cinemaList  v-for="movieinfo in cinemainfos"></cinemaList>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.cinemas
 .cinemas-select
    position fixed
    top 91px
    height 40px
    line-height 40px
    width 100%
    border-bottom 1px solid #ccc
    background #fff
    z-index 999
    span
      display inline-block
      width 24%
      text-align center
      background #fff
 .cinemaList-wrap
    margin 40px 0 75px 0
</style>
<script>
  import cinemaList from 'components/cinemaList/cinemaList';

  export default{
    data () {
      return {
        cinemainfos: [1, 2, 3, 4, 5, 6, 7, 8, 9]
       };
    },
    components: {
      cinemaList
    },
    props: {
      food: {
        type: Object
      }
    }
  };
</script>
