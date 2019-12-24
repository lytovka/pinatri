<template>
  <div class="background-pattern">
    <div class="wrapper-menu">
      <svg
        viewBox="0 0 1484 632"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <defs>
          <path
            id="curve"
            ref="curve"
            d="M 0 316 A 742 316 0 1 1 1484 316 A 742 316 0 1 1 0 316 Z M 0 316 A 742 316 0 1 1 1484 316 A 742 316 0 1 1 0 316 Z"
          />
        </defs>
        <use xlink:href="#curve" fill="none" />
        <text dy="30" font-size="1.84375rem" letter-spacing="1px" fill="white" textLength="302%">
          <textPath class="menu-animation" xlink:href="#curve">
            <a class="menu-link" href="#1">герои быта</a>
            <tspan dy="20" class="menu-dot" font-size="100px">&#8226;</tspan>

            <a class="menu-link" href="#2">
              <tspan dy="-20">p</tspan>азный навсегда
            </a>
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <a class="menu-link" href="#3">
              <tspan dy="-20">н</tspan>а новенького
            </a>
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <a class="menu-link" href="#4">
              <tspan dy="-20">п</tspan>роделки путешественника
            </a>
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <a class="menu-link" href="#5">
              <tspan dy="-20">м</tspan>асловка
            </a>
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <!-- <a class="menu-link" href="#6"> -->
            <router-link to="/page-one" tag="a">
              <tspan dy="-20">н</tspan>е про то
            </router-link>
            <!-- </a> -->
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <a class="menu-link" href="#7">
              <tspan dy="-20">б</tspan>росающий камни или камни саваоф
            </a>
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <a class="menu-link" href="#8">
              <tspan dy="-20">к</tspan>ак я ем собак
            </a>
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <a class="menu-link" href="#9">
              <tspan dy="-20">м</tspan>оё богатство — люди
            </a>
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <animate
              attributeName="startOffset"
              from="0%"
              to="50%"
              begin="0s"
              dur="90s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>
    </div>

    <div class="wrapper-video">
      <svg
        class="container-video"
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
        <use xlink:href="#curve-video" fill="white" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
