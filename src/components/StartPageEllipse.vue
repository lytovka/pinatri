<template>
  <transition name="fade" appear>
    <div v-if="this.$store.getters.isPageCalled">
      <div>
        <div class="wrapper-ellipse">
          <svg
            class="container-ellipse"
            viewBox="0 0 1484 632"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <pattern id="image" patternUnits="userSpaceOnUse" height="100%" width="100%">
                <image
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid slice"
                  xlink:href="@/assets/ellipse.png"
                />
              </pattern>
            </defs>
            <ellipse rx="742" :ry="ellipseMinorRadius" cx="742" cy="316" fill="url(#image)" />
            <use xlink:href="#curve-ellipse" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: "StartPageEllipse",
  data() {
    return {
      ellipseMinorRadius: 316
    };
  },
  methods: {},
  beforeCreate() {
    console.log("recreated the ellipse");
    this.$store.dispatch("changePageStatus", true);
  },
  created() {
    this.$store.dispatch("changePageStatus", true);
  },
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style>
.wrapper-ellipse {
  position: absolute;
  z-index: 1;
  left: 11.35%;
  right: 11.35%;
  top: 20.74%;
  bottom: 20.74%;
}

.fade-enter-active {
  transform-origin: center center;
  animation: bounce-in 5s;
}
.fade-leave-active {
  transform-origin: 0;
  animation: bounce-in 5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.container-ellipse {
  transform-origin: center;
  -moz-transform-origin: center;
  -webkit-transform-origin: center;
  -o-transform-origin: center;

  animation: rotator 7s infinite;
  -webkit-animation: rotator 7s infinite;
  -o-animation: rotator 7s infinite;
  -moz-animation: rotator 7s infinite;
}

@keyframes rotator {
  0% {
    transform: rotate(40.86deg);
  }

  50% {
    transform: rotate(-40.86deg);
  }

  100% {
    transform: rotate(40.86deg);
  }
}

@-webkit-keyframes rotator {
  0% {
    transform: rotate(40.86deg);
  }

  50% {
    transform: rotate(-40.86deg);
  }

  100% {
    transform: rotate(40.86deg);
  }
}

@-moz-keyframes rotator {
  0% {
    transform: rotate(40.86deg);
  }

  50% {
    transform: rotate(-40.86deg);
  }

  100% {
    transform: rotate(40.86deg);
  }
}

@-o-keyframes rotator {
  0% {
    transform: rotate(40.86deg);
  }

  50% {
    transform: rotate(-40.86deg);
  }

  100% {
    transform: rotate(40.86deg);
  }
}
</style>