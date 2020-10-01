<template>
  <div id="app">
    <PhrasePage />
  </div>
</template>


<script>
import PhrasePage from './pages/PhrasePage/PhrasePage';

export default {
  name: "App",
  components: { PhrasePage },
};
</script>

<style>
@import "blocks/index.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Roboto", sans-serif;
}
</style>
