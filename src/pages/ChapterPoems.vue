<template>
  <div>
    <div class="svg-element" :class="`number${currentChapter.number}`"></div>
    <div id="asterisk" class="svg-element"></div>
    <div class="main-svg" :class="`main-svg${currentChapter.number}`"></div>

    <p id="chapter-title">{{currentChapter.name}}</p>
  </div>
</template>

<script>
export default {
  name: "ChapterPoems",
  data() {
    return {
      currentChapter: null
    };
  },
  created() {
    this.currentChapter = this.$store.getters.getChapters.find(c =>
      this.$route.fullPath.startsWith(c.id)
    );
    console.log("current chapter", this.currentChapter);
  }
};
</script>

<style scoped>
.svg-element {
  display: block;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
}

.number1 {
  background-image: url(~@/assets/images/chapter-one-title.svg);
  width: 180px;
  height: 79.61px;
}
.number2 {
  background-image: url(~@/assets/images/chapter-two-title.svg);
  width: 180px;
  height: 79.39px;
}
.number3 {
  background-image: url(~@/assets/images/chapter-three-title.svg);
  width: 180px;
  height: 76.69px;
}
.number4 {
  background-image: url(~@/assets/images/chapter-four-title.svg);
  width: 180px;
  height: 99.89px;
}
.number5 {
  background-image: url(~@/assets/images/chapter-five-title.svg);
  width: 180px;
  height: 72.64px;
}
.number6 {
  /* need to download svg file  */
  background-image: url(~@/assets/images/chapter-five-title.svg);
  width: 180px;
  height: 82.3px;
}
.number7 {
  /* need to download svg file  */
  background-image: url(~@/assets/images/chapter-five-title.svg);
  width: 180px;
  height: 92.34px;
}
.number8 {
  /* need to download svg file  */
  background-image: url(~@/assets/images/chapter-five-title.svg);
  width: 180px;
  height: 93.02px;
}
.number9 {
  /* need to download svg file  */
  background-image: url(~@/assets/images/chapter-five-title.svg);
  width: 180px;
  height: 86.1px;
}

.main-svg {
  position: absolute;
  z-index: 2;
  background-size: contain;
  background-repeat: no-repeat;
}

.main-svg1 {
  background-image: url(~@/assets/images/main-svg-chapter-one.svg);

  /* Align every svg element individually. START HERE*/
  width: 40%;
  height: 60%;
  left: 40%;
  top: 40%;
}

.main-svg2 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);

  /* Align every svg element individually. START HERE*/
}

.main-svg3 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);

  /* Align every svg element individually. START HERE*/
}

.main-svg4 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);

  /* Align every svg element individually. START HERE*/
}

.main-svg5 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);

  /* Align every svg element individually. START HERE*/
}

.main-svg6 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);

  /* Align every svg element individually. START HERE*/
}

.main-svg7 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);

  /* Align every svg element individually. START HERE*/
}

.main-svg8 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);

  /* Align every svg element individually. START HERE*/
}

.main-svg9 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);

  /* Align every svg element individually. START HERE*/
}

#chapter-title {
  left: 0;
  top: 0;
  z-index: 1;
  font-size: 96px;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding: 5% 5%;
  color: white;
}

#asterisk {
  width: 40.89px;
  height: 40.7px;
  background-image: url(~@/assets/images/asterisk.svg);
}
h1 {
  color: white;
}
</style>