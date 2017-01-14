<template>
  <div class='main' ref='main'>
    <div>
      <Swipe :swipeWidth='swipeWidth' :swipeHeight='swipeHeight' :swipeImgs='swipeImgs'></Swipe>
      <nav class='r-icons'>
        <div class='menu-item touching' data-url='/card/index' data-log='{&quot;da_src&quot;: &quot;icon_3&quot;}'>
          <img src='https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/movie/20161116/i-member.png'>
          <span class='text'>会员卡</span>
        </div>
        <div class='menu-item touching' data-url='/mall/index' data-log='{&quot;da_src&quot;: &quot;icon_10&quot;}'>
          <img src='https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/movie/20161116/i-mall.png'>
          <span class='text'>商城</span>
        </div>
        <div class='menu-item touching' data-url='/fan/liveList' data-log='{&quot;da_src&quot;: &quot;icon_13&quot;}'>
          <img src='https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/movie/20161116/i-live.png'>
          <span class='text'>直播</span>
        </div>
        <div class='menu-item touching' data-url='/video/index' data-log='{&quot;da_src&quot;: &quot;icon_4&quot;}'>
          <img src='https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/movie/20161116/i-video.png'>
          <span class='text'>视频</span>
        </div>
        <div class='menu-item touching' data-url='/rank/index' data-log='{&quot;da_src&quot;: &quot;icon_5&quot;}'>
          <img src='https://gss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/movie/20161116/i-box.png'>
          <span class='text'>票房</span>
        </div>
      </nav>
      <div class='activity'>
        <div class='left'>
          <div style='display:inline-block;width:50%'>
            <p class='title'>六块六起</p>
            <p class='describe'>超级星期六</p>
          </div>
          <div class='pic' style='background-image: url(https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/aec379310a55b319a6c412244aa98226cffc17a5.png)'></div>
        </div>
        <div class='right'>
          <div style='display:inline-block;width:50%'>
            <p class='title'>热门话剧</p>
            <p class='describe'>TOP10</p>
          </div>
          <div class='pic' style='background-image: url(https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/bainuo_cmovie/pic/item/6c224f4a20a44623709b29189122720e0cf3d773.png)'></div>
        </div>
      </div>
      <div class='movie-wrapper' ref='movieWrapper'>
        <div class='movie' ref='movie' >
          <div v-for='m in movies'>
            <Movie :m='m'></Movie>
          </div>
          <div class='more-btn'><span>全部影片</span></div>
        </div>

      </div>
      <div class='movieHouse'>
        <div class='house' v-for='mHouse in movieHouses'>
          <p class='title'>{{ mHouse.name }}</p>
          <p class='des'>{{ mHouse.des }}</p>
        </div>
      </div>
      <div class='more'>
        全部影院 <i class='icon-aw'></i>
      </div>
      <div class='slide-wrap'>
        <Slide :name='nameShow' :listData='listData'></Slide>
      </div>
      <div class='slide-wrap'>
        <Slide :name='namePreference' :listData='listData'></Slide>
      </div>
      <div class="goods-wrap">
        <Goods></Goods>
      </div>
      <div class='slide-wrap'>
        <Slide :name='nameXin' :listData='listData'></Slide>
      </div>
      <div class='slide-wrap'>
        <Slide :name='nameHw' :listData='listData'></Slide>
      </div>
      <div style='height:500px'></div>
    </div>
    <div class='pop'>
      <Pop></Pop>
    </div>
  </div>
</template>
<style lang='stylus' rel='stylesheet/stylus'>
  .main
    position: absolute;
    top: 50px;
    bottom: 55px;
    width: 100%;
    overflow: hidden;
    background rgba(204, 204, 204,.7)
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
    .pop
      position fixed
      right 2px
      top 60%
      height 70px
      width 80px
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
    .movie-wrapper
      margin 10px 0
      overflow hidden
      height 226px
      background #fff
      .movie
        padding 20px 10px
        display flex
        .more-btn
          width: 1.875em;
          height: 160px;
          box-sizing: border-box;
          float: left;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: #333;
          padding: .9375em;
          line-height: 20px;
          border 1px solid #ccc
    .movieHouse
      background #fff
      padding 20px 10px 0px 20px
      .house
        height 50px
        .title
          font-size 16px
        .des
          font-size 12px
          overflow hidden
          word-break keep-all
          white-space nowrap
          text-overflow ellipsis
    .more
      display flex
      justify-content center
      align-items center
      height 50px
      line-height 50px
      background #fff
      color #999
      font-size 16px
      border-top 1px solid #ccc
    .slide-wrap
      height 260px
      background #fff
      margin 10px 0
    .goods-wrap
      height 400px
      background #fff
</style>
<script>
  import swipe from './../../components/swipe/swipe';
  import pop from './../../components/pop/pop';
  import movie from './../../components/movie/movie';
  import slide from './../../components/slide/slide';
  import goods from './../../components/goods/goods';
  import BScroll from 'better-scroll';
  import axios from 'axios';

  const ERR_OK = 0;

  export default{
    data: function () {
      return {
        swipeWidth: '100%',
        swipeHeight: '90px',
        swipeImgs: [
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b750_2343750&quality=85&name=cmoive&di=0822806508b7fa46017c1b86be519df5&sec=0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbainuo_cmovie%2Fpic%2Fitem%2Fa71ea8d3fd1f41347352f72e2c1f95cad1c85e7d.jpeg'},
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b750_2343750&quality=85&name=cmoive&di=b75f1ec0fe4d262541c16939dc869ead&sec=0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbainuo_cmovie%2Fpic%2Fitem%2Fa6efce1b9d16fdfa4ad452bebd8f8c5494ee7b22.jpeg'},
        {a: '#', imgSrc: 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=b750_2343750&quality=85&name=cmoive&di=d6da5ecae7ce28be59b7b2feec787400&sec=0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbainuo_cmovie%2Fpic%2Fitem%2F5882b2b7d0a20cf4e0315cb97f094b36acaf9937.jpeg'}
        ],
        movieHouses: [
          {name: '星美国际影城(北京金源店)', des: '北京市海淀区远大路1号金源时代购物中心5层东首511'},
          {name: '北京横店电影城(王府井店)', des: '北京市东城区王府井大街253号王府井百货(北京市百货大楼)北馆8F'},
          {name: '星美国际影城(北京分钟寺店)', des: '北京市丰台区南三环东路成寿寺路2号新业广场2层'}
        ],
        movies: [],
        listData: [
          [
            {
              'topTag': '特惠',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=cfc061b3190b31647420bd1fd4b5b2eb&sec=0&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F5d6034a85edf8db1df33c8610023dd54564e7491.jpg'
            },
            {
             'topTag': '特惠',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=52445a68ccf94ab1cc56188c9b0ec3cf&sec=0&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F8b82b9014a90f6036d0b77353012b31bb051ed0d.jpg'
            },
            {
              'topTag': '特惠',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=dbfbee0634caae3c61ef20e3a4cde02f&sec=0&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fcaef76094b36acaf0335e23574d98d1000e99c25.jpg'
            }
          ],
          [
            {
              'topTag': '特惠',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=cfc061b3190b31647420bd1fd4b5b2eb&sec=0&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F5d6034a85edf8db1df33c8610023dd54564e7491.jpg'
            },
            {
             'topTag': '特惠',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=52445a68ccf94ab1cc56188c9b0ec3cf&sec=0&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F8b82b9014a90f6036d0b77353012b31bb051ed0d.jpg'
            },
            {
              'topTag': '特惠',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=dbfbee0634caae3c61ef20e3a4cde02f&sec=0&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fcaef76094b36acaf0335e23574d98d1000e99c25.jpg'
            }
          ],
          [
            {
              'topTag': '4.5',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=cfc061b3190b31647420bd1fd4b5b2eb&sec=0&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F5d6034a85edf8db1df33c8610023dd54564e7491.jpg'
            },
            {
             'topTag': '特惠',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=52445a68ccf94ab1cc56188c9b0ec3cf&sec=0&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2F8b82b9014a90f6036d0b77353012b31bb051ed0d.jpg'
            },
            {
              'topTag': '特惠',
              'bottomTag': '我也想看',
              'info': '【第二张半价/第三张免单】开心麻花·戏剧新体验《青鸟》 导演李雅菂作品】',
              'imgSrc': 'https://gsp0.baidu.com/6bNXsjip0QIZ8Aqbn9fN2DC/timg?size=f427_596&quality=85&name=cmoive&di=dbfbee0634caae3c61ef20e3a4cde02f&sec=0&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fmovie%2Fpic%2Fitem%2Fcaef76094b36acaf0335e23574d98d1000e99c25.jpg'
            }
          ]
        ],
        nameShow: '热门演出',
        namePreference: '优质特惠',
        nameXin: '新片预告',
        nameHw: '院线重温'
      };
    },
    components: {
      Swipe: swipe,
      Pop: pop,
      Movie: movie,
      Slide: slide,
      Goods: goods
    },
    created () {
      this.$nextTick(() => {
        this._initScroll();
      });
      axios.get('/api/movie')
        .then((res) => {
          var data = res.data;
          if (data.errno === ERR_OK) {
              this.movies = data.data;
              this.$nextTick(() => {
                this._initMoviesScroll();
              });
            };
        });
    },
    methods: {
      _initScroll () {
        this.main = new BScroll(this.$refs.main, {
          click: true
        });
      },
      _initMoviesScroll () {
        if (this.movies) {
          let picWidth = 106;
        let margin = 5;
        let width = (picWidth + margin) * this.movies.length - margin;
        this.$refs.movie.style.width = width + 100 + 'px';
          this.$nextTick(() => {
            if (!this.movieWrapper) {
              this.movieWrapper = new BScroll(this.$refs.movieWrapper, {
                scrollX: true,
                scrollY: false,
                eventPassthrougt: 'vertical'
              });
            } else {
              this.movieWrapper.refresh();
            }
          });
        }
      }
    }
  };

</script>
