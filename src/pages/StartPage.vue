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
  /* transform-origin: 50% 50%; */
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
  position: absolute;
  left: 75%;
  top: 41%;
  max-width: auto;
  background-size: contain;
  background-repeat: no-repeat;
}

#group21 {
  z-index: 2;
  position: absolute;
  left: 17%;
  top: 41%;
  max-width: auto;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>