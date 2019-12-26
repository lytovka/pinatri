<template>
  <div>
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

@font-face {
  font-family: "lighthaus";
  src: url(~@/assets/fonts/lighthaus.otf);
}
</style>
