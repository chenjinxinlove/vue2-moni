<template>
    <div class="list">
        <div class="pic">
          <img style="width:100%;height:100%"  :src="m.imgSrc">
          <i v-show="m.tag" class="tag" :class="'tag-' + m.tag">{{m.tagName}}</i>
        </div>
        <div class="info">
          <p class="movie-name">{{m.name}}</p>
          <div class="score">
            <star :size="24" :score="m.score"></star>
            <span class="fen">{{m.score}}</span>
          </div>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .list
    width 106px
    margin-right 10px
    position relative
    .pic
      width 106px
      height 150px
      position relative
      .tag
        position absolute
        top 0
        left 0
        height 18px
        width 34px
        color #fff
        font-size 12px
        border-radius 2px
        text-align center
      .tag-new
        background #ff791f
      .tag-hui
          background #ff2244
    .info
      .movie-name
        margin 5px 0
        font-size 14px
        overflow hidden
        word-break keep-all
        white-space nowrap
        text-overflow ellipsis
      .score
        display flex
        .fen
          color #ff9c38
          color 12px
          margin 0 3  px
          line-height 11px
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
    props: ['m']
  };
</script>
