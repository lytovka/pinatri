<template>
  <div class="background-pattern">

    <div class="wrapper-menu">
      <svg
        viewBox="0 0 1484 632"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            id="curve"
            d="M 0 316 A 742 316 0 1 1 1484 316 A 742 316 0 1 1 0 316 Z M 0 316 A 742 316 0 1 1 1484 316 A 742 316 0 1 1 0 316 Z"
          />
        </defs>
        <use xlink:href="#curve" fill="none" />
        <text
          font-size="1.84375rem"
          letter-spacing="1px"
          fill="white"
          dy="1.28rem"
          textLength="302%"
        >
          <textPath dominant-baseline="hanging" xlink:href="#curve">
            <a class="menu-link" href="#1">
              герои быта
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>
            <a class="menu-link" href="#2">
              разный навсегда
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>
            <a class="menu-link" href="#3">
              на новенького
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>
            <a class="menu-link" href="#4">
              проделки путешественника
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>
            <a class="menu-link" href="#5">
              масловка
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>
            <a class="menu-link" href="#6">
              не про то
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>
            <a class="menu-link" href="#7">
              бросающий камни или камни саваоф
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>
            <a class="menu-link" href="#8">
              как я ем собак
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>
            <a class="menu-link" href="#9">
              моё богатство — люди
              <tspan dominant-baseline="mathematical" font-size="100px">&#8226;</tspan>
            </a>

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
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  overflow: hidden;
  background-color: #212121;
  font-family: 'lighthaus';
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
