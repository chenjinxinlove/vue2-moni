<template>
  <div class="movie-info">
    <div class="right">
      <div class="movie-top">新片</div>
      <img style="width:100%;height:100%" src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/bd3eb13533fa828ba17508b1f41f4134970a5a09.jpg">
    </div>
    <div class="left">
      <p class="name">太空旅客</p>
      <div class="star-wrap">
        <star :size="24" :score="8.5"></star><span class="score">8.5</span>
      </div>
      <p class="info">穿越光年 扭转命运</p>
      <p class="text">118分钟，科幻、冒险、爱情</p>
      <div class="threed">3D</div>
      <div class="shop">购票</div>
    </div>
    <div class="foot">
      <span class="tag">专题</span>
      <span>绝密任务，燃爆存亡之战</span>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .movie-info
    width 100%
    padding 20px
    box-sizing border-box
    position relative
    .right
      width 85px
      height 113px
      display inline-block
      vertical-align top
      position relative
      .movie-top
        position absolute
        top -1px
        left -1px
        width 30px
        height 20px
        line-height 20px
        text-align center
        background #ff791f
        color #fff
    .left
      display inline-block
      vertical-align top
      margin-left 10px
      .name
        font-size 16px
      .star-wrap
        margin 10px 0 28px 0
        display flex
        .score
          font-size 12px
          color #ff791f
          margin-left 10px
          display inline-block
          line-height 10px
          vertical-align top
      .info
        color #ccc
      .text
        color #cccccc
        font-size 12px
        margin-top 5px
      .threed
        position absolute
        top 20px
        right 20px
        height 20px
        padding 0 5px
        line-height 20px
        background #8c97cb
        color #fff
        font-size 14px
        border-radius 8px
      .shop
        position absolute
        right 20px
        top 100px
        width 65px
        height 28px
        line-height 28px
        border-radius 10px
        border 1px solid #ff791f
        color #ff791f
        text-align center
    .foot
      height 40px
      line-height 40px
      font-size 12px
      text-align center
      color #ccc
      border-bottom 1px solid #ccc
      .tag
        color #fbab00
        border 1px solid #fbab00
        border-radius 2px
</style>
<script>
  import star from 'components/star/star';
  export default{
    data () {
      return { };
    },
    components: {
      star
    },
    props: {
    }
  };
</script>
