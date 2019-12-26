<template>
  <div>
    <StartPageEllipse />
  </div>
</template>

<script>
import StartPageEllipse from "@/components/StartPageEllipse";

export default {
  name: "StartPage",
  components: {
    StartPageEllipse
  },
  data() {
    return {
    };
  },
  methods: {
    // animateStartPageEllipse(){
    //     console.log("ellipse is clicked", "page:", this.$store.getters.isPageCalled);
    // }
  },
  created() {
    this.$store.dispatch("changePageStatus", true);
  },
  beforeDestroy() {
    this.$store.dispatch("changePageStatus", false);
    console.log('Exit the component, page:', this.$store.getters.isPageCalled);
  }
};
</script>

<style>
body {
  overflow: hidden;
  background-color: #212121;
  font-family: "lighthaus";
  box-sizing: border-box;
}

@font-face {
  font-family: "lighthaus";
  src: url(~@/assets/fonts/lighthaus.otf);
}
</style>
