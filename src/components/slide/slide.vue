<template>
  <div class="slide">
    <div class="top">
      <p>{{name}}</p>
      <p class="more-text">更多</p>
    </div>
    <mt-swipe class="slide-swipe" :auto="0">
      <mt-swipe-item v-for="list in listData">
        <div class="item" v-for="item in list">
          <div class="item-top-label">{{item.topTag}}</div>
          <img style="width:110px;height:156px" :src="item.imgSrc">
          <div class="item-botton-label">{{item.bottomTag}}</div>
          <p class="info">{{item.info}}</p>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .slide
    .top
      display flex
      justify-content space-between
      width 100%
      height 44px
      line-height 44px
      padding 0 10px
      box-sizing border-box
      color #333
      font-size 14px
      .more-text
        font-size 14px
        color #999
    .slide-swipe
      height 200px
      padding-top 44px
      top -44px
      padding-left 10px
      .item
        position relative
        width 30%
        padding 2px
        display inline-block
        vertical-align top
        .item-top-label
          position absolute
          top -1px
          left 1px
          background #ff791f
          color #fff
        .item-botton-label
          position absolute
          bottom 40px
          left 5px
          color #fff
        .info
          height 35px
          overflow hidden
      .mint-swipe-indicators
        position absolute
        top 12px
        left 100px
        .is-active
          background #ff6d57
        .mint-swipe-indicator
          width 4px
          height 4px
          border-radius 2px





</style>
<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default{
    data () {
      return { };
    },
    components: {
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem
    },
    props: {
      name: {
        type: String
      },
      listData: {
        type: Array
      }
    }
  };
</script>
