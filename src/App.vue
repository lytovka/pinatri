<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>

import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style>
body {
  overflow: hidden;
  background: #212121;
  /* background-image: url(~@/assets/images/backgroundimg.png); */
  font-family: "lighthaus";
  box-sizing: border-box;
}

@font-face {
  font-family: "lighthaus";
  src: url(~@/assets/fonts/lighthaus.otf);
}
</style>
