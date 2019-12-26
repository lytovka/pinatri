<template>
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
</template>

<script>
export default {
  name: "StartPageEllipse"
};
</script>

<style>

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