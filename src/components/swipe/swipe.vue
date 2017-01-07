<template>
  <div class="swipe">
    <mt-swipe :auto="4000" :style="{height:swipeHeight,width:swipeWidth}" >
      <mt-swipe-item v-for="swipeImg in swipeImgs" >
        <a :href="swipeImg.a">
            <img :src="swipeImg.imgSrc" style="width:100%;height:100%">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
  import { Swipe, SwipeItem } from 'mint-ui';
  export default{
    data () {
      return { };
    },
    components: {
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem
    },
    props: {
      swipeImgs: {
        type: Array
      },
      swipeWidth: {
        type: String
      },
      swipeHeight: {
        type: String
      }
    }
  };
</script>
