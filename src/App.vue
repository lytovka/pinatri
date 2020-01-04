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
<<<<<<< HEAD
  background: #212121;
  /* background-image: url(~@/assets/images/backgroundimg.png); */
=======
  background-image: url(~@/assets/images/backgroundimg.png);
>>>>>>> 4adb2093c90bb33af903378a038808886ae58294
  font-family: "lighthaus";
  box-sizing: border-box;
}

@font-face {
  font-family: "lighthaus";
  src: url(~@/assets/fonts/lighthaus.otf);
}
</style>
