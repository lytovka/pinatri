<template>
  <div style="overflow:hidden;">
    <div v-if="HomePage()">
      <Header />
      <div v-if="displayNavigation()" class="content">
        <Navigation />
      </div>
      <Footer v-if="displayNavigation()" />
      <hover-element v-if="displayHover()"></hover-element>
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
    Footer,
  },
  methods: {
    HomePage() {
      return Boolean(!this.$route.fullPath.includes("/table-of-contents"));
    },
    displayNavigation() {
      return Boolean(!this.$route.fullPath.includes("poems"));
    },
    displayHover() {
      return Boolean(
        this.$route.fullPath.includes("/chapter") &&
          !this.$route.fullPath.includes("poems")
      );
    },
    enableOverflow() {
      return Boolean(this.$route.fullPath.includes("/chapters/chapter"));
    }
  }
};
</script>

<style>
body {
  background: #212121;
  background-image: url(~@/assets/images/backgroundimg.png);
  font-family: "lighthaus";
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.content {
  min-height: calc(100vh - 200px);
}

@font-face {
  font-family: "lighthaus";
  src: url(~@/assets/fonts/lighthaus.otf);
}
</style>