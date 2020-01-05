<template>
  <div style="position: absolute; width: 100%; height: 100%;">
    <div class="animHolder" id="intro">
      <lottie :options="inOptions" v-on:animCreated="handleAnimation" />
    </div>
    <div class="animHolder" id="const">
      <lottie :options="constOptions" v-on:animCreated="handleAnimationDelay" />
    </div>
    <div class="animHolder" id="outHolder">
      <lottie :options="outOptions" v-on:animCreated="handleAnimationHold" />
    </div>
  </div>
</template>

<script>
import Lottie from "./lottie.vue";
import * as inData from "../assets/animations/oneIn.json";
import * as constData from "../assets/animations/oneConst.json";
import * as outData from "../assets/animations/oneOut.json";

export default {
  name: "ChapterOne",
  components: {
    lottie: Lottie
  },
  data() {
    return {
      inOptions: { animationData: inData, loop: false, autoplay: false },
      constOptions: { animationData: constData, loop: true, autoplay: false },
      outOptions: { animationData: outData, loop: false, autoplay: false },
      animIn: null,
      animConst: null,
      animOut: null,
      divOpacity: 0,
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.animIn = anim;
      this.animIn.play();
    },

    handleAnimationDelay: function(anim) {
      this.animConst = anim;
      var holderConst = this.animConst;
      var holderIn = this.animIn;
      this.animIn.addEventListener("complete", function() {
        document.getElementById("const").style.opacity = "1";
        holderConst.play();
        holderIn.destroy();
      });
      // this.animConst.play();
      console.log(this.animIn, "check");
    },

    handleAnimationHold: function(anim) {
      this.animOut = anim;
    }
  },

  beforeRouteLeave(to, from, next) {
    var holderLeaving = this.$data.animConst;
    var holderOut = this.$data.animOut;
    this.$data.animConst.addEventListener("loopComplete", function() {
      document.getElementById("outHolder").style.opacity = "1";
      holderOut.play();
      holderLeaving.destroy();
    });
    this.$data.animOut.addEventListener("complete", function() {
      next();
    });

    if (to.name === "StartPage") {
      setTimeout(() => {
        this.$store.dispatch("changePageStatus", true);
      }, 3000);
    }
  }
};
</script>

<style>
h1 {
  color: white;
}

.animHolder {
  position: absolute;
  width: 100%;
  height: 100%;
}

#in,
#const,
#outHolder {
  opacity: 0;
}
</style>