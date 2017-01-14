<template>
  <div class="goods">
    <div class="top">
      <p>精选商品</p>
      <p class="more-text">更多</p>
    </div>
    <div class="slideTar" :style="styleLeft">
      <ul>
        <li class="tar" >
          <img class="img"  :class="{ active: pick == 0}" @click="switcher" data-index="0" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/f3d3572c11dfa9ecae749ecc6ad0f703908fc197.jpeg">
        </li>
        <li class="tar" >
          <img class="img" :class="{ active: pick == 1}" @click="switcher" data-index="1" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/c9fcc3cec3fdfc03574e2963dc3f8794a4c22633.jpeg" >
        </li>
        <li class="tar" >
          <img class="img" :class="{ active: pick == 2}" @click="switcher" data-index="2" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/a5c27d1ed21b0ef4d5cf5385d5c451da80cb3ec2.jpeg">
        </li>
        <li class="tar" >
          <img class="img " :class="{ active: pick == 3}"  @click="switcher" data-index="3" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/2cf5e0fe9925bc31c870ca4356df8db1cb137038.jpeg">
        </li>
        <li class="tar" >
          <img class="img " :class="{ active: pick == 4}" @click="switcher" data-index="4" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/a5c27d1ed21b0ef4d5cf5385d5c451da80cb3ec2.jpeg">
        </li>
        <li class="tar" >
          <img class="img" :class="{ active: pick == 5}" @click="switcher" data-index="5" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/f3d3572c11dfa9ecae749ecc6ad0f703908fc197.jpeg">
        </li>
        <li class="tar" >
          <img class="img " :class="{ active: pick == 6}" @click="switcher" data-index="6" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/4afbfbedab64034f4569586aa6c379310a551d31.jpeg">
        </li>
        <li class="tar" >
          <img class="img" :class="{ active: pick == 7}" @click="switcher" data-index="7" src="https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/2cf5e0fe9925bc31c870ca4356df8db1cb137038.jpeg">
        </li>
      </ul>
    </div>
    <div class="name">{{pick}}</div>
    <div class="goodList">
      {{pick}}的商品列表
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .goods
    position relative
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
      overflow hidden
      .more-text
        font-size 14px
        color #999
    .slideTar
      position absolute
      top 44px
      ul
        display flex
        width 550px
        .tar
          align-self center
          width 60px
          height 60px
          padding 2px
          box-sizing border-box
          list-style none
          display flex
          justify-content center
          .img
            width 48px
            height 48px
            align-self center
            border-radius 24px
          .active
            width 60px
            height 60px
            border-radius 30px


    .name
      margin-top 60px
      width 100%
      height 50px
      line-height 50px
      align-self center
      text-align center
      font-size 16px
    .goodList
      height 100px
      width 100%
</style>
<script>
  export default{
    data () {
      return {
        pick: '3',
        styleLeft: {
          left: '0px'
        }
      };
    },
    components: {
    },
    methods: {
      switcher (e) {
        this.pick = e.target.getAttribute('data-index');
        this.styleLeft.left = (3 - this.pick) * 60 + 'px';
      }
    },
    props: {
      food: {
        type: Object
      }
    }
  };
</script>
