<template>
  <div class="show">
    <div class="search">
      <span class="input">搜索演出</span>
    </div>
    <Swipe :swipeWidth='swipeWidth' :swipeHeight='swipeHeight' :swipeImgs='swipeImgs'></Swipe>
    <nav class='r-icons'>
      <div class='menu-item touching' data-url='/card/index' data-log='{&quot;da_src&quot;: &quot;icon_3&quot;}'>
        <img src='https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/37d12f2eb9389b50798693bd8d35e5dde6116ee7.jpg'>
        <span class='text'>演唱会</span>
      </div>
      <div class='menu-item touching' data-url='/mall/index' data-log='{&quot;da_src&quot;: &quot;icon_10&quot;}'>
        <img src='https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/d8f9d72a6059252dd7636eeb3c9b033b5ab5b9ec.jpg'>
        <span class='text'>话剧舞台剧</span>
      </div>
      <div class='menu-item touching' data-url='/fan/liveList' data-log='{&quot;da_src&quot;: &quot;icon_13&quot;}'>
        <img src='https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/377adab44aed2e7348a3f6c38f01a18b86d6fa93.jpg'>
        <span class='text'>儿童亲子</span>
      </div>
      <div class='menu-item touching' data-url='/video/index' data-log='{&quot;da_src&quot;: &quot;icon_4&quot;}'>
        <img src='https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/2934349b033b5bb5c03550113ed3d539b700bc7a.jpg'>
        <span class='text'>小型现场</span>
      </div>
      <div class='menu-item touching' data-url='/rank/index' data-log='{&quot;da_src&quot;: &quot;icon_5&quot;}'>
        <img src='https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/8694a4c27d1ed21b88175e0aa56eddc450da3f06.jpg'>
        <span class='text'>更多</span>
      </div>
    </nav>

    <div class="tuijian">
      <img class="img" src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/7e3e6709c93d70cf8dff9f0bf1dcd100baa12baa.jpg">
      <p class="tuitext">{{tuitext}}</p>
    </div>
    <div style="height:10px;background:rgba(0,0,0,0.2)"></div>
    <div class='activity'>
      <div class='left'>
        <div style='display:inline-block;width:50%;color:#ff3333'>
          <p class='title'>特价票品</p>
          <p class='describe'>特惠等你来</p>
        </div>
        <div class='pic' style='background-image: url(https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/e1fe9925bc315c6071ce108585b1cb1349547704.jpg)'></div>
      </div>
      <div class='right'>
        <div style='display:inline-block;width:50%'>
          <p class='title'>热门活动</p>
          <p class='describe'>抢超低折扣</p>
        </div>
        <div class='pic' style='background-image: url(https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/a8773912b31bb051205cac5f3e7adab44aede049.jpg)'></div>
      </div>
    </div>
    <div class='activity'>
      <div class='left'>
        <div style='display:inline-block;width:50%;'>
          <p class='title'>演出日历</p>
          <p class='describe'>纪念日有我</p>
        </div>
        <div class='pic' style='background-image: url(https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/0e2442a7d933c8956b40850cd91373f08202008e.jpg)'></div>
      </div>
      <div class='right'>
        <div style='display:inline-block;width:50%'>
          <p class='title'>精彩剧院</p>
          <p class='describe'>场馆任我行</p>
        </div>
        <div class='pic' style='background-image: url(https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/5243fbf2b21193139fc1e4c76d380cd790238dc2.jpg)'></div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
      <div class="piao-info" >
        <div class="imgbox">
          <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
          <span class="icon-num icon-num1">1</span>
        </div>
        <div class="content">
          <p class="desc">
            张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
          </p>
          <div class="otherdesc">
            <p class="date">
              2017-05-20
              至 2017-05-21                                        </p>
            <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
            <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="piao">
    <div class="piao-info" >
      <div class="imgbox">
        <img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/movie/pic/item/faedab64034f78f0b57c04f370310a55b3191cbe.jpg">
        <span class="icon-num icon-num1">1</span>
      </div>
      <div class="content">
        <p class="desc">
          张惠妹"乌托邦 2.0庆典"世界巡回演唱会北京站
        </p>
        <div class="otherdesc">
          <p class="date">
            2017-05-20
            至 2017-05-21                                        </p>
          <p class="addr">北京市.乐视体育生态中心 LeSports Center</p>
          <p class="price">
              <span class="text fl">
                  <em>￥</em>380
                  -
                  <em>￥</em>1520
              </span>
              <span class="fr status border border-all status-1">
                  预售中
              </span>
          </p>
        </div>
      </div>
    </div>
  </div>


  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.show
  margin-bottom 70px
  .search
    width 100%
    height 48px
    padding 10px
    box-sizing border-box
    .input
      display inline-block
      width 95%
      height 28px
      line-height 28px
      padding-left 15px
      background #f2f2f2
      border-radius 5px
  .r-icons
    height 80px
    padding 12px 5px 1px
    display flex
    border-bottom 1px solid #ccc
    background #fff
    .menu-item
      width 20%
      img
        height 47px
        width 47px
        display block
        margin 0 auto
      .text
        margin-top 5px
        display block
        text-align center
  .activity
    display flex
    width 100%
    height 65px
    background #fff
    .left
      width 50%
      padding 5px 17px
      box-sizing border-box
      border-right 1px solid #ccc
      .title
        margin 5px 0
        font-size 16px
      .describe
        font-size 12px
        color #ccc
      .pic
        display inline-block
        vertical-align top
        width 63px
        height 50px
        background-position center
        background-size cover
    .right
      width 50%
      padding 5px 17px
      box-sizing border-box
      border-right 1px solid #ccc
      .title
        margin 5px 0
        font-size 16px
        color red
      .describe
        font-size 12px
        color #ccc
      .pic
        display inline-block
        vertical-align top
        width 63px
        height 50px
        background-position center
        background-size cover
  .tuijian
    height 40px
    line-height 40px
    display flex
    .img
      align-self center
      height 20px
    .tuitext
      margin-left  20px
  .piao
    .piao-info
      padding 12px 10px 15px 10px
      border-bottom  1px solid #ccc
      display flex
      .imgbox
        position: relative;
        width: 82px;
        height: 110px;
        line-height: 110px;
        overflow: hidden;
        margin-right: 10px;
        text-align: center;
        vertical-align: middle;
        -webkit-background-size: auto 33px;
        background-size: auto 33px;
        background-color: #e8e8e8;
        img
          display: inline-block;
          width: 100%;
          height: 100%;


      .content
        .desc
          color: #22222d;
          font-size: 15px;
          margin-bottom: 17px;
          line-height: 19px;
          padding-top: 2px;
          margin-top: -2px;
          -webkit-text-size-adjust: none;
          height: 38px;
          overflow: hidden;
        .otherdesc
          width: 100%;
          font-size: 12px;
          line-height: 19px;
          .price
            color: #f24;
            font-size: 18px;
            padding-top: 2px;
            margin-top: -2px;




</style>
<script>
  import swipe from './../../components/swipe/swipe';

  export default{
    data: function () {
      return {
        swipeWidth: '100%',
        swipeHeight: '150px',
        swipeImgs: [
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b640_260&quality=50&name=yanchupiao&wh_rate=0&di=23d598bb667674441a624d545fb6c421&sec=0&imgtype=0&src=http://imgsrc.baidu.com/bainuo_cmovie/pic/item/730e0cf3d7ca7bcb7c7a316eb7096b63f624a86a.jpeg'},
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b640_260&quality=50&name=yanchupiao&wh_rate=0&di=3a3bcda330db7dc79566209cd057d8b8&sec=0&imgtype=0&src=http://imgsrc.baidu.com/bainuo_cmovie/pic/item/50da81cb39dbb6fd3723bd7b0024ab18972b3776.jpeg'},
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b640_260&quality=50&name=yanchupiao&wh_rate=0&di=2aa4d99d6259af7137e84d8a277c6579&sec=0&imgtype=0&src=http://imgsrc.baidu.com/bainuo_cmovie/pic/item/060828381f30e9244e1cb53045086e061d95f773.jpeg'}
        ],
        tuitext: '2017「如果」田馥甄巡回演唱会PLUS 武汉站'
      };
    },
    components: {
       Swipe: swipe
    }
  };
</script>
