<template>
  <div style="overflow: hidden;">
    <div class="wrapper-ellipse">
      <transition name="fade" appear>
        <div v-if="isStartPageCalled()">
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

            <ellipse rx="742" ry="316" cx="742" cy="316" fill="url(#image)" />
            <use xlink:href="#curve-ellipse" fill="white" />
          </svg>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
export default {
  name: "StartPageEllipse",
  data() {
    return {};
  },
  methods: {
    isStartPageCalled() {
      return Boolean(this.$store.getters.isPageCalled);
    },
    enableOverflow() {
      return Boolean(this.$route.fullPath.includes("/chapters/chapter"));
    }
  }
};
</script>

<style>
.wrapper-ellipse {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 74.9vw;
  height: 32vw;
}

.fade-enter-active {
  transform-origin: 50% 30%;
  animation: bounce-in 1s;
}
.fade-leave-active {
  transform-origin: 0;
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@-webkit-keyframes bounce-in {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@-moz-keyframes bounce-in {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@-o-keyframes bounce-in {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
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