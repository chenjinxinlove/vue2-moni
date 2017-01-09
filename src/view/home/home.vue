<template>
  <div class="home" ref="home">
    <div>
      <div class="user-wrap">
        <img class="avatar" src="https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/movie/activity/cms/images/1475903912648.png">
        <p class="login-btn">立即登录</p>
      </div>
      <div class="order-list-entrance">
        <div class="order-status">
          <div class="purse">

          </div>
          待付款
        </div>
        <div class="order-status">
          <div class="paided"></div>
          已付款
        </div>
      </div>
      <div class="user-list-two">
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-vip"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">我的会员卡</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-voucher"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">我的抵用券</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-code"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">我的兑换码</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div style="height:10px;background:rgba(244,244,244,.7)"></div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-mind"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">演出收藏</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-address"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">我的地址</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div style="height:10px;background:rgba(244,244,244,.7)"></div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-comment"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">我的评论</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-collect"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">我的想看</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-voucher"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">我的约票活动</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-message"></i>
          </div>
          <div class="user-list-item-right">
            <p class="user-list-item-name">我的信息</p>
            <i class="icon-more"></i>
          </div>
        </div>
        <div class="user-list-item" >
          <div class="img-wrap">
            <i class="icon-opinion"></i>
          </div>
          <div class="user-list-item-right-y">
            <p class="user-list-item-name">意见反馈</p>
            <i class="icon-more"></i>
          </div>
        </div>
      </div>
      <div style="height:50px"></div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../components/common/stylus/font.styl";
  .home
    position: absolute;
    top: 50px;
    bottom: 55px;
    width: 100%;
    overflow: hidden;
    background rgba(244,244,244,.7)
    .user-wrap
      height 120px
      width 100%
      background url(//gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/movie/activity/cms/images/1475053036249.png) no-repeat
      -webkit-background-size cover
      background-size cover
      text-align center;
      color #fff
      position relative
      .avatar
        position absolute
        left 50%;
        margin-top 20px
        margin-left -32px
        height 64px
        width 64px
        border 2px solid rgba(255,255,255,0);
        border-radius 100%
      .login-btn
        position absolute
        top 90px
        left 50%
        transform translate(-50%, 0)
        color #fff
        font-size 16px
    .order-list-entrance
      display flex
      font-size 14px
      margin-bottom 5px
      background #fff
      .order-status
        text-align center
        display block
        flex 1
        height 80px
        color #5c5c5c
        .purse
          width 52px
          height 42px
          margin 5px auto
          background-size cover
          background url("https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/movie/activity/cms/images/1475053012827.png") no-repeat center;
        .paided
          width 52px
          height 42px
          margin 5px auto
          background-size cover
          background url("https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/movie/activity/cms/images/1475052954836.png") no-repeat center;
    .user-list-two
      margin-top 10px
      background #fff
      .user-list-item
        display flex
        padding 0 5px
      .img-wrap
        width 50px
        line-height 45px
        padding-top 5px
        height 45px
        text-align center
        .icon-vip,.icon-address ,.icon-code,.icon-collect,.icon-comment,.icon-message,.icon-mind,.icon-more,.icon-paided,.icon-purse,.icon-voucher,,.icon-zipiao
          font-size 20px
      .user-list-item-right
        display flex
        justify-content space-between
        width 80%
        line-height 14px
        height 14px
        font-size 14px
        padding 15px 10px 15px 0
        border-bottom 1px solid rgba(244,244,244,.5)
      .user-list-item-right-y
        display flex
        justify-content space-between
        width 80%
        line-height 14px
        height 14px
        font-size 14px
        padding 15px 10px 15px 0

</style>
<script>
  import BScroll from 'better-scroll';

  export default{
    data: function () {
      return {};
    },
    components: {
    },
    created () {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    methods: {
      _initScroll () {
        this.homeScroll = new BScroll(this.$refs.home, {
          click: true
        });
      }
    }
  };
</script>
