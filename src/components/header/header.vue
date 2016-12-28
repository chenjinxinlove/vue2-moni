<template>
  <div class="header">
    <span class="icon-return"></span>
    <span class="text">天天电影</span>
    <span class="icon-home"></span>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    display flex
    justify-content space-between
    height 50px
    width 100%
    box-sizing border-box
    padding 15px 25px 10px
    background #ff2244
    .icon-return
      width 15px
      height 15px
      border-top 3px solid #fff
      border-left  3px solid #fff
      border-radius 2px
      transform rotate(-45deg)
    .icon-home
      height 21px
      width 21px
      background url("https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/movie1/dianying-static4/assets/src/ui/img/nm-h-home_ca6a166a.png") no-repeat center;
      background-size cover
    .text
      font-size 20px
      color #fff
      font-weight 700
</style>
<script>
  export default{
    data: function () {
      return { };
    },
    components: {
    }
  };
</script>
