<template>
  <div>
    <div style="position: absolute; width: 100%; height: 100%; left: 0%; top: 0%">
      <div class="animHolder" id="addIntro">
        <lottie :options="addInOptions" v-on:animCreated="handleAnimationAdd" />
      </div>
      <div class="animHolder" id="addConst">
        <lottie :options="addConstOptions" v-on:animCreated="handleAnimationAddC" />
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
  </div>
</template>

<script>
import Lottie from "./lottie.vue";
import * as inData from "../assets/animations/oneIn.json";
import * as constData from "../assets/animations/oneConst.json";
import * as outData from "../assets/animations/oneOut.json";
import * as additionInData from "../assets/animations/oneAddIn.json";
import * as additionConstData from "../assets/animations/oneAddConst.json";


export default {
  name: "ChapterOne",
  components: {
    lottie: Lottie
  },
  data() {
    return {
      inOptions: { animationData: inData, loop: false, autoplay: false },
      addInOptions: { animationData: additionInData, loop: false, autoplay: false },
      constOptions: { animationData: constData, loop: true, autoplay: false },
      addConstOptions: { animationData: additionConstData, loop: true, autoplay: false },
      outOptions: { animationData: outData, loop: false, autoplay: false },
      animIn: null,
      animConst: null,
      animOut: null,
      animAddIn: null,
      animAddConst: null,
      divOpacity: 0,
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimationAdd: function(anim) {
      this.animAddIn = anim;
      this.animAddIn.play();
    },

    handleAnimationAddC: function(anim) {
      this.animAddConst = anim;
      var holderAddConst = this.animAddConst;
      var holderAddIn = this.animAddIn;
      this.animAddIn.addEventListener("complete", function() {
        document.getElementById("addConst").style.opacity = "1";
        holderAddConst.play();
        holderAddIn.destroy();
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
      // console.log(this.animIn, "check");
    },

    handleAnimationHold: function(anim) {
      this.animOut = anim;
    }
  },

  beforeDestroy() {},
  destroyed() {},
  beforeCreate() {
    document.body.style.overflow = "hidden";
  },
  beforeRouteLeave(to, from, next) {
    const self = this;

    console.log("animation", this.$data.animOut);
    console.log("animation", this.$data.animConst);
    
    if (to.name === "TableOfContentsPage" || to.name === "ChapterPoems") {
      this.$data.animConst.destroy();
      next();
    } else {
      this.$store.dispatch("changeAnimationStatus", true);

      var holderLeaving = this.$data.animConst;
      var holderOut = this.$data.animOut;
      holderLeaving.playSpeed = 10;
      holderOut.playSpeed = 0.5;
      this.$data.animConst.addEventListener("loopComplete", function() {
        document.getElementById("addConst").classList.add("addOut");
        document.getElementById("outHolder").style.opacity = "1";
        holderOut.play();
        holderLeaving.destroy();
      });
    }

    this.$data.animOut.addEventListener("complete", function() {
      self.$store.dispatch("changeAnimationStatus", false);
      next();
    });

    if (to.name === "StartPage") {
      this.$store.dispatch("changePageStatus", true);
    } else if (to.name === "TableOfContentsPage") {
      this.$store.dispatch("updateLastRoute", "/chapter-one");
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
#addConst {
  opacity: 0;
}

.addOut {
  margin-top: 100vh;
  -ms-transform: rotate(210deg);
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg);
  -webkit-transition: -webkit-transform 1s ease-in-out, margin-top 1s ease-in-out;
  -ms-transition: -ms-transform 1s ease-in-out, margin-top 1s ease-in-out;
  transition: transform 1s ease-in-out, margin-top 1s ease-in-out;
}
</style>