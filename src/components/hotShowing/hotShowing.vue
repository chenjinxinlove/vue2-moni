<template>
   <div>
     <MovieInfo></MovieInfo>
   </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
  import movieInfo from './../../components/movieInfo/movieInfo';

  export default{
    data () {
      return { };
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
