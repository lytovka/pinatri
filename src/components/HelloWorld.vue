<template>
  <div class="background-pattern">
    <Navigation />
    <StartPageEllipse />
  </div>
</template>

<script>
import Navigation from '../components/Navigation';
import MenuLink from "../components/MenuLink";
import StartPageEllipse from "../components/StartPageEllipse";


export default {
  name: "HelloWorld",
  components: {
    Navigation,
    MenuLink,
    StartPageEllipse
  },
  data() {
    return {
      // so: 0,
    };
  },
  methods: {
    // animateMenu() {
    //   requestAnimationFrame(animateMenu);
    //   const curve = this.$refs.curve;
    //   curve.setAttributeNS(null, "startOffset", this.so + "%");
    //   if (this.so >= 50) {
    //     this.so = 0;
    //   }
    //   this.so += 0.02;
    //   return this.so
    // }
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

.background-pattern {
  background-color: #212121;
}

@font-face {
  font-family: "lighthaus";
  src: url(~@/assets/fonts/lighthaus.otf);
}

.wrapper-menu {
  position: absolute;
  z-index: 2;
  left: 11.35%;
  right: 11.35%;
  top: 20.74%;
  bottom: 20.74%;
}

.wrapper-video {
  position: absolute;
  z-index: 1;
  left: 11.35%;
  right: 11.35%;
  top: 20.74%;
  bottom: 20.74%;
}

.menu-animation {
  transition: transformator 30s infinite;
}

@keyframes transformator {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(1000px);
  }
}

.container-video {
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
