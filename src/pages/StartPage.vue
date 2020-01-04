<template>
  <div>
    <svg
      width="114"
      height="120"
      viewBox="0 0 114 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="group21"
    >
      <circle
        cx="75.4108"
        cy="82.1522"
        r="37.3478"
        transform="rotate(-90 75.4108 82.1522)"
        stroke="white"
      />
      <circle
        cx="75.4108"
        cy="38.3285"
        r="37.3478"
        transform="rotate(-90 75.4108 38.3285)"
        stroke="white"
      />
      <circle
        cx="37.8478"
        cy="59.9557"
        r="37.3478"
        transform="rotate(-90 37.8478 59.9557)"
        stroke="white"
      />
    </svg>

    <svg
      width="114"
      height="120"
      viewBox="0 0 114 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="group2"
    >
      <circle r="37.3478" transform="matrix(0 -1 -1 0 37.848 82.1522)" stroke="white" />
      <circle r="37.3478" transform="matrix(0 -1 -1 0 37.848 38.3285)" stroke="white" />
      <circle r="37.3478" transform="matrix(0 -1 -1 0 75.411 59.9557)" stroke="white" />
    </svg>

<<<<<<< HEAD
    <figure>
      <div class="title-container">
        <div id="start-page-title"></div>
      </div>
    </figure>

    <!-- <transition name="fade" appear>
=======
    <transition name="fade" appear :duration="1000">
>>>>>>> 4adb2093c90bb33af903378a038808886ae58294
      <div v-if="this.$store.getters.isPageCalled">
        <StartPageEllipse :class="wrapperEllipse"/>
      </div>
    </transition>-->

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
      //Ivan bazarit
      divOpacity: 1
    };
  },
  methods: {},
<<<<<<< HEAD
=======
  beforeCreate() {},
>>>>>>> 4adb2093c90bb33af903378a038808886ae58294
  created() {
    this.$store.dispatch("changePageStatus", true);
  },
  beforeDestroy() {},
  beforeRouteLeave(to, from, next) {
    setTimeout(() => {
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
  z-index: 2;
  position: absolute;
  left: 37.4%;
  right: 37.76%;
  top: 27.22%;
  bottom: 30.2%;
  max-width: auto;
  background-size: cover;
  background-image: url(~@/assets/images/pinatri_title.svg);
}
/* 
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */

.fade-enter-active {
  transform-origin: right;
  animation: bounce-in 5s;
}
.fade-leave-active {
  transform-origin: 0;
  animation: bounce-in 5s;
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
  position: absolute;
  left: 75%;
  top: 41%;
}

#group21 {
  z-index: 2;
  position: absolute;
  left: 17%;
  top: 41%;
}
</style>