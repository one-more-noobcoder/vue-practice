<template>
  <div id="app">
    <Header />
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Header from './components/Header/Header';

export default {
  name: "App",
  components: { Header },
  beforeRouteEnter(to) {
    console.log(to)
  },
  beforeRouteUpdate(to) {
    console.log(to)
  }
};
</script>

<style>
@import "blocks/index.css"; /* general styles */
</style>
