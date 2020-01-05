<template>
  <div>
    <div id="group21"></div>
    <div id="group2"></div>
    <div id="start-page-title"></div>
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
    return {};
  },
  methods: {},
  beforeCreate() {
    this.$store.dispatch("changePageStatus", true);
  },
  created() {},
  beforeDestroy() {},
  beforeRouteLeave(to, from, next) {
    setTimeout(() => {
      this.$store.dispatch("changePageStatus", false);
      next();
    }, 1000);
  }
};
</script>

<style>
.title-container {
  position: relative;
  padding-bottom: 55%;
}

#start-page-title {
  z-index: 10;
  position: absolute;
  left: 37.4%;
  right: 37.76%;
  top: 27.22%;
  bottom: 30.2%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/pinatri_title.svg);
}

.fade-enter-active {
  animation: bounce-in 2s;
}
.fade-leave-active {
  transform-origin: 0;
  animation: bounce-in 2s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

#group2 {
  z-index: 2;
  width: 114px;
  height: 120px;
  position: absolute;
  left: 75%;
  top: 41%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/group2.svg);

}

#group21 {
  z-index: 2;
  width: 114px;
  height: 120px;
  position: absolute;
  left: 17%;
  top: 41%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/group21.svg);
}
</style>