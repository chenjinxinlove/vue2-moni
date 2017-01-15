<template>
  <div class="film">
    <div class="top">
      <router-link to="/film/movies">
        <p>影片</p>
      </router-link>
      <router-link to="/film/cinemas">
        <p>影院</p>
      </router-link>
    </div>
    <div class="content">
      <router-view>

      </router-view>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .film
    .top
      display flex
      height 29px
      width 120px
      line-height 29px
      margin 10px auto
      font-size 14px
      border 1px #ff6d57 solid
      border-radius 3px
      a
        width 60px
        text-align center
        text-decoration none
        color #ff6d57
      .router-link-active
        background #ff6d57
        color #ffffff
</style>
<script>
  export default{
    data: function () {
      return {};
    },
    created () {
      this.$router.push('/film/movies/hotShowing');
    },
    components: {
    }
  };
</script>
