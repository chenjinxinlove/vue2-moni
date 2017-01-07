<template>
  <div class="pop-expand-icon" @click="showPop">
    <div class="popContent" v-show="isShowPop">
        <div class="expand-wrapper-img">
          <div class="img-wrapper">
            <a href="#" class="expand-pop-link" style="width:100%;height:100%">
              <img style="width:100%;height:100%" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/9c16fdfaaf51f3dea849e00b9deef01f3b2979e1.png" alt="">
            </a>
          </div>
        </div>
    </div>
    <img style="width:100%;height:100%" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/9e3df8dcd100baa1822e1ed44e10b912c8fc2e5a.png">
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .popContent
    position fixed
    z-index 300000
    width 100%
    height 100%
    top 0
    left 0
    background rgba(0, 0, 0 ,.5)
    .expand-wrapper-img
      width 74%
      height 100%
      position: absolute
      top 65%
      left 50%
      -webkit-transform translateX(-50%) translateY(-50%)
      transform translateX(-50%) translateY(-50%)
      .img-wrapper
        width 100%
        height 60%
        border-radius 10px
        overflow hidden
</style>
<script>
  export default{
    data () {
      return {
        isShowPop: true
       };
    },
    components: {
    },
    methods: {
      showPop () {
        this.isShowPop = !this.isShowPop;
      }
    }
  };
</script>
