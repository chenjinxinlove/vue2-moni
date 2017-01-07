<template>
  <div id="app">
    <mNheader></mNheader>
    <router-view ></router-view>
    <mNbar ></mNbar>
  </div>
</template>

<script>
import mNheader from './components/header/header';
import mNbar from './components/bar/bar';

export default {
  components: {
    mNheader,
    mNbar
  },
  created: function () {
    if (this.$route.name === undefined) {
        this.$router.push(this.$store.state.selected);
    };
  }
};
</script>

<style type="stylus">

</style>
