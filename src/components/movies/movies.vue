<template>
  <div>
    <div class="bar">
      <router-link to="/film/movies/hotShowing" class="bar-link" active-class="movies-link-active">
        <span>热映中</span>
      </router-link>
      <router-link to="/film/movies/waitShow" class="bar-link" active-class="movies-link-active">
        <span>待上映</span>
      </router-link>
      <router-link to="/film/movies/offlineShow" class="bar-link" active-class="movies-link-active">
        <span>已下线</span>
      </router-link>
    </div>
    <div class="swipe-wrap">
      <Swipe :swipeWidth='swipeWidth' :swipeHeight='swipeHeight' :swipeImgs='swipeImgs'></Swipe>
    </div>
    <div class="content">
      <router-view>
      </router-view>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .bar
    display flex
    position fixed
    top 90px
    width 100%
    .bar-link
      display inline-block
      height 40px
      line-height 40px
      text-align center
      width 33%
      font-size 14px
      text-decoration none
      color #000
    .movies-link-active
      color #ff6d57
      span
        padding 9px 10px
        border-bottom 2px solid #ff6d57
  .swipe-wrap
    margin-top 40px
</style>
<script>
  import swipe from './../../components/swipe/swipe';

  export default{
    data () {
      return {
        swipeWidth: '100%',
        swipeHeight: '90px',
        swipeImgs: [
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b750_2343750&quality=85&name=cmoive&di=0822806508b7fa46017c1b86be519df5&sec=0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbainuo_cmovie%2Fpic%2Fitem%2Fa71ea8d3fd1f41347352f72e2c1f95cad1c85e7d.jpeg'},
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b750_2343750&quality=85&name=cmoive&di=b75f1ec0fe4d262541c16939dc869ead&sec=0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbainuo_cmovie%2Fpic%2Fitem%2Fa6efce1b9d16fdfa4ad452bebd8f8c5494ee7b22.jpeg'},
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b750_2343750&quality=85&name=cmoive&di=d6da5ecae7ce28be59b7b2feec787400&sec=0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbainuo_cmovie%2Fpic%2Fitem%2F5882b2b7d0a20cf4e0315cb97f094b36acaf9937.jpeg'}
        ]
      };
    },
    components: {
      Swipe: swipe
    },
     created () {
      this.$router.push('/film/movies/hotShowing');
    },
    props: {
      food: {
        type: Object
      }
    }
  };
</script>
