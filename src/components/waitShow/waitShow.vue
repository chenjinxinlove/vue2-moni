<template>
  <div class="waitShow">
    <div class='movie-wrapper' ref='movieWrapper'>
      <div class='movie' ref='movie' >
        <div v-for='m in movies'>
          <Movie :m='m'></Movie>
        </div>
      </div>
    </div>
    <MovieInfo v-for="movieinfo in movieinfos"></MovieInfo>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.waitShow
  .movie-wrapper
    margin 10px 0
    overflow hidden
    height 226px
    background #fff
    .score
      display none
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
</style>
<script>
  import movie from './../../components/movie/movie';
  import movieInfo from './../../components/movieInfo/movieInfo';
  import BScroll from 'better-scroll';
  import axios from 'axios';

  const ERR_OK = 0;
  export default{
    data () {
      return {
        movies: [],
        movieinfos: [1, 2, 3, 4, 5, 6, 7, 8, 9]
       };
    },
    components: {
      Movie: movie,
      MovieInfo: movieInfo
    },
    props: {
      food: {
        type: Object
      }
    },
    created () {
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
      _initMoviesScroll () {
        if (this.movies) {
          let picWidth = 106;
          let margin = 5;
          let width = (picWidth + margin) * this.movies.length - margin;
          this.$refs.movie.style.width = width + 'px';
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
