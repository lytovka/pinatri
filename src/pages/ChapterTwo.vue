<template>
  <div style="position: absolute; width: 100%; height: 100%; left: 0%; top: 0%">
    <div class="sideHolder left" id="leftIn">
      <lottie :options="sideInLOptions" v-on:animCreated="handleSideInLeft" />
    </div>
    <div class="sideHolder right" id="rightIn">
      <lottie :options="sideInROptions" v-on:animCreated="handleSideInRight" />
    </div>
    <div class="sideHolder left sideConst" id="leftConst">
      <lottie :options="sideConstLOptions" v-on:animCreated="handleSideConstLeft" />
    </div>
    <div class="sideHolder right sideConst" id="rightConst">
      <lottie :options="sideConstROptions" v-on:animCreated="handleSideConstRight" />
    </div>
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
import * as inData from "../assets/animations/twoIn.json";
import * as constData from "../assets/animations/twoConst.json";
import * as outData from "../assets/animations/twoOut.json";
import * as sideInLData from "../assets/animations/twoSideInLeft.json";
import * as sideConstLData from "../assets/animations/twoSideConstLeft.json";
import * as sideInRData from "../assets/animations/twoSideInRight.json";
import * as sideConstRData from "../assets/animations/twoSideConstRight.json";

export default {
  name: "ChapterTwo",
  components: {
    lottie: Lottie
  },
  data() {
    return {
      inOptions: { animationData: inData, loop: false, autoplay: false },
      constOptions: { animationData: constData, loop: true, autoplay: false },
      outOptions: { animationData: outData, loop: false, autoplay: false },
      sideInLOptions: { animationData: sideInLData, loop: false, autoplay: false },
      sideConstLOptions: { animationData: sideConstLData, loop: true, autoplay: false },
      sideInROptions: { animationData: sideInRData, loop: false, autoplay: false },
      sideConstROptions: { animationData: sideConstRData, loop: true, autoplay: false },
      animIn: null,
      animConst: null,
      animOut: null,
      sideInL: null,
      sideInR: null,
      sideConstL: null,
      sideConstR: null,
      divOpacity: 0,
      animationSpeed: 1
    };
  },
  methods: {
    handleSideInLeft: function(anim) {
      this.sideInL = anim;
      this.sideInL.play();
    },
    handleSideInRight: function(anim) {
      this.sideInR = anim;
      this.sideInR.play();
    },
    handleSideConstLeft: function(anim) {
      this.sideConstL = anim;
      var holderSideConstL = this.sideConstL;
      var holderSideInL = this.sideInL;
      this.sideInL.addEventListener("complete", function() {
        document.getElementById("leftConst").style.opacity = "1";
        holderSideConstL.play();
        holderSideInL.destroy();
      });
    },
    handleSideConstRight: function(anim) {
      this.sideConstR = anim;
      var holderSideConstR = this.sideConstR;
      var holderSideInR = this.sideInR;
      this.sideInR.addEventListener("complete", function() {
        document.getElementById("rightConst").style.opacity = "1";
        holderSideConstR.play();
        holderSideInR.destroy();
      });
    },

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
  beforeCreate() {
    document.body.style.overflow = "hidden";
  },
  beforeRouteLeave(to, from, next) {
    const self = this;

    if (to.name === "TableOfContentsPage") {
      this.$data.animConst.destroy();
      next();
    } else {
      this.$store.dispatch("changeAnimationStatus", true);

      var holderLeaving = this.$data.animConst;
      var holderOut = this.$data.animOut;
      if (this.$data.animConst !== null) {
        this.$data.animConst.addEventListener("loopComplete", function() {
          document.getElementById("outHolder").style.opacity = "1";
          document.getElementById("leftConst").classList.add("sideOut");
          document.getElementById("rightConst").classList.add("sideOut");
          holderOut.play();
          holderLeaving.destroy();
        });

        this.$data.animOut.addEventListener("complete", function() {
          self.$store.dispatch("changeAnimationStatus", false);
          next();
        });
      }
    }

    if (to.name === "StartPage") {
      this.$store.dispatch("changePageStatus", true);
    } else if (to.name === "TableOfContentsPage") {
      this.$store.dispatch("updateLastRoute", "/chapter-two");
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
#outHolder,
#leftConst,
#rightConst  {
  opacity: 0;
}

.sideHolder {
  z-index: 2;
  width: 8vw;
  height: 8vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.left {
  right: 75%;
}
.right {
  left: 75%;
}
.sideOut {
  width: 0vw;
  height: 0vw;
  transition: width 0.6s ease-in-out, height 0.6s ease-in-out;
}
</style>