<template>
  <div>
    <transition name="fade" appear :duration="1000">
      <div v-if="this.$store.getters.isPageCalled">
        <StartPageEllipse />
      </div>
    </transition>
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
    return {};
  },
  methods: {
    // animateStartPageEllipse(){
    //     console.log("ellipse is clicked", "page:", this.$store.getters.isPageCalled);
    // }
  },
  beforeCreate() {
    // this.$store.dispatch("changePageStatus", true);
  },
  created() {
    console.log("Before ellipse created", this.$store.getters.isPageCalled);
    this.$store.dispatch("changePageStatus", true);
  },
  beforeDestroy() {
    // this.$store.dispatch("changePageStatus", false);
    // console.log('Exit the component, page:', this.$store.getters.isPageCalled);
  },
  beforeRouteLeave(to, from, next) {
    setTimeout(() => {
      next();
    }, 1000);
    // if (this.$store.getters.isPageCalled) next();
  }
};
</script>

<style>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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
