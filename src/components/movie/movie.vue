<template>
  <div class="mod m-movie">
    <div class="list" style="width: 1042.66px; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) scale(1) translateZ(0px);">
      <a class="item" >
        <div class="pic">
          <i class="tag tag-new">新片</i>
        </div>
        <div class="info">
          <p class="movie-name">星球大战外传：侠盗一号</p>
          <div class="score">
            <span class="star-bg"><span class="star-percent" style="width: 76%"><span class="star-inner"></span></span></span>
            <span class="fen">7.6</span>
          </div>
        </div>
      </a>
      <div class="more-btn border border-all" data-log="{&quot;da_src&quot;: &quot;movieAll&quot;}"><span>全部影片</span></div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

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
