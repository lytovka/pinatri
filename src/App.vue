<template>
  <div>
    <div id="app" v-if="HomePage()">
      <Header />
      <div class="content">
        <Navigation />
      </div>
      <Footer />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navigation,
    Header,
    Footer
  },
  methods: {
    HomePage() {
      return Boolean(!this.$route.fullPath.includes("/table-of-contents"));
    }
  }
};
</script>

<style>

body {
  overflow: hidden;
  background: #212121;
  background-image: url(~@/assets/images/backgroundimg.png);
  font-family: "lighthaus";
  box-sizing: border-box;
}

.content {
  min-height: calc(100vh - 200px);
}

@font-face {
  font-family: "lighthaus";
  src: url(~@/assets/fonts/lighthaus.otf);
}
</style>
