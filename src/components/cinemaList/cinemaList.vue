<template>
  <div class="cinemaList">
    <div class="name">星美国际影城(北京金源店)</div>
    <div class="info">北京市海淀区远大路1号金源时代购物中心5层东首511</div>
    <div class="tag">
      <span class="zui">座</span>
      <span class="huiyan">会员</span>
      <span class="gaiqian">改签</span>
      <span class="vip">VIP</span>
    </div>
    <div class="favorable">
      <span class="hui">惠</span>
      <span class="text">大闹天竺特惠 | 钱包新户最高减15元</span>
    </div>
    <div class="price">
      ¥33.9
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.cinemaList
  position relative
  margin-left 15px
  border-bottom 1px solid #ccc
  padding 10px 15px 10px 0
  .name
    font-size 14px
    height 25px
    line-height 25px
  .info
    font-size 12px
    height 20px
    line-height 20px
    color #999
    width 80%
    overflow hidden
    word-break keep-all
    text-overflow ellipsis
  .tag
    height 30px
    line-height 30px
    .zui, .huiyan,.gaiqian,.vip
      font-size 12px
      height 20px
      line-height 20px
      text-align center
      color #dd4444
      border 1px solid #dd4444
      border-radius 2px
      margin-right 5px
    .gaiqian
      color #00d6b2
      border 1px solid #00d6b2
  .favorable
    .hui
      display inline-block
      width 18px
      height 18px
      margin-right 5px
      border-radius 9px
      line-height 18px
      text-align center
      background #ff562f
      color #fff
    .text
      color #999
  .price
    position absolute
    top 80px
    right 20px
    color #dd4444
    font-size 16px


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
