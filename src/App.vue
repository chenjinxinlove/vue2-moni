<template>
  <div id="app">
    <mNheader></mNheader>
    <mNbar></mNbar>
  </div>
</template>

<script>
import mNheader from './components/header/header';
import mNbar from './components/bar/bar';

export default {
  name: 'app',
  components: {
    mNheader,
    mNbar
  }
};
</script>

<style type="stylus">

</style>
