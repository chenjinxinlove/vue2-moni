<template>
  <div id="app">
    <mNheader></mNheader>
    <router-view ></router-view>
    <mNbar></mNbar>
  </div>
</template>

<script>
import mNheader from './components/header/header';
import mNbar from './components/bar/bar';

export default {
  components: {
    mNheader,
    mNbar
  }
};
</script>

<style type="stylus">

</style>
