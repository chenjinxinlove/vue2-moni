<template>
  <div>
    <MovieInfo v-for="movieinfo in movieinfos"></MovieInfo>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
  import movieInfo from './../../components/movieInfo/movieInfo';

  export default{
    data () {
      return {
        movieinfos: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      };
    },
    components: {
      MovieInfo: movieInfo
    },
    props: {
      food: {
        type: Object
      }
    }
  };
</script>
