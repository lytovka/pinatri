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
    this.$store.dispatch("updateLastRoute", "");
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "TableOfContents") next();
    else {
      setTimeout(() => {
        this.$store.dispatch("changePageStatus", false);
        next();
      }, 1000);
    }
  }
};
</script>


<style>

#start-page-title {
  z-index: 10;
  position: absolute;
  width: 25vw;
  height: 25vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  width: 7.6vw;
  height: 8vw;
  position: absolute;
  left: 75%;
  top: 50%;
  transform: translateY(-50%);
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/group2.svg);
}

#group21 {
  z-index: 2;
  width: 7.6vw;
  height: 8vw;
  position: absolute;
  right: 75%;
  top: 50%;
  transform: translateY(-50%);
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/group21.svg);
}
</style>