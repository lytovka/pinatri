<template>
  <div>
    <div class="poem-chapter-container">
      <div class="svg-element" :class="`number${currentChapter.number}`"></div>
      <div id="asterisk" class="svg-element"></div>
    </div>
    <div class="main-svg" :class="`main-svg${currentChapter.number}`"></div>
    <div class="secondary-svg" :class="`secondary-svg${currentChapter.number}-1`"></div>
    <div class="secondary-svg" :class="`secondary-svg${currentChapter.number}-2`"></div>
    <p id="chapter-title" v-html="currentChapter.name"></p>
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
.poem-chapter-container {
  padding: 5% 0 0 0;
}

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
  background-image: url(~@/assets/images/chapter-six-title.svg);
  width: 180px;
  height: 82.3px;
}
.number7 {
  background-image: url(~@/assets/images/chapter-seven-title.svg);
  width: 180px;
  height: 92.34px;
}
.number8 {
  background-image: url(~@/assets/images/chapter-eight-title.svg);
  width: 180px;
  height: 93.02px;
}
.number9 {
  background-image: url(~@/assets/images/chapter-nine-title.svg);
  width: 180px;
  height: 86.1px;
}

.main-svg {
  position: absolute;
  z-index: 2;
  background-size: contain;
  background-repeat: no-repeat;
}

.secondary-svg {
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

  width: 51%;
  height: 60%;
  left: 27%;
  top: 35%;
}

.main-svg3 {
  background-image: url(~@/assets/images/main-svg-chapter-three.png);
  width: 18%;
  height: 60%;
  left: 50%;
  transform: translateX(-50%);
}

.main-svg4 {
  background-image: url(~@/assets/images/main-svg-chapter-4.png);
  width: 51%;
  height: 60%;
  left: 50%;
  transform: translateX(-50%);
}

.main-svg5 {
  background-image: url(~@/assets/images/main-svg-chapter-5.png);
  width: 51%;
  height: 60%;
  left: 50%;
  transform: translateX(-50%);
}

.main-svg6 {
  background-image: url(~@/assets/images/main-svg-chapter-six.svg);
  width: 22%;
  height: 60%;
  left: 40%;
  top: 41%;
}

.main-svg7 {
  background-image: url(~@/assets/images/main-svg-chapter-seven.svg);
  width: 51%;
  height: 60%;
  left: 27%;
  top: 35%;
}

.main-svg8 {
  background-image: url(~@/assets/images/main-svg-chapter-eight.svg);

  width: 51%;
  height: 33%;
  left: 35%;
  top: 29%;
}

.main-svg9 {
  background-image: url(~@/assets/images/main-svg-chapter-nine.svg);
  width: 40%;
  height: 33%;
  left: 41%;
  top: 25%;
}

.secondary-svg1-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-1-one.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vh);
  left: 0%;
  top: 70%;
}

.secondary-svg1-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-1-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vh);
  bottom: 40%;
  right: -3%;
}

.secondary-svg2-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-2-one.svg);
  width: calc(80px + 10vw);
  height: calc(200px + 15vh);
  left: 0%;
  top: 70%;
}

.secondary-svg2-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-2-two.svg);
  width: calc(80px + 10vw);
  height: calc(200px + 15vh);
  bottom: 40%;
  right: 0;
}

.secondary-svg3-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-3-one-two.svg);
  width: calc(80px + 10vw);
  height: calc(200px + 15vw);
  left: 0%;
  top: 70%;
}

.secondary-svg3-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-3-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  bottom: 40%;
  right: -3%;
}

.secondary-svg4-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-4-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  left: 0%;
  top: 70%;
}

.secondary-svg4-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-4-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  transform: scale(-1, 1);
  bottom: 40%;
  right: -3%;
}

.secondary-svg5-1 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-5-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  left: 0%;
  top: 70%;
}

.secondary-svg5-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-5-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  transform: scale(-1, 1);
  bottom: 40%;
  right: -3%;
}

.secondary-svg6-1 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-6-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  left: 0%;
  top: 70%;
}

.secondary-svg6-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-6-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  transform: scale(-1, 1);
  bottom: 40%;
  right: -3%;
}

.secondary-svg7-1 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-7-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  left: 0%;
  top: 70%;
}

.secondary-svg7-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-7-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  transform: scale(-1, 1);
  bottom: 40%;
  right: -3%;
}

.secondary-svg8-1 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-8-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  left: 0%;
  top: 70%;
}

.secondary-svg8-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-8-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  transform: scale(-1, 1);
  bottom: 40%;
  right: -3%;
}

.secondary-svg9-1 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-9-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  left: 0%;
  top: 70%;
}

.secondary-svg9-2 {
  z-index: -1;
  background-image: url(~@/assets/images/secondary-svg-chapter-9-one-two.svg);
  width: calc(200px + 15vw);
  height: calc(200px + 15vw);
  transform: scale(-1, 1);
  bottom: 40%;
  right: -3%;
}

#chapter-title {
  left: 0;
  top: 0;
  z-index: 1;
  font-size: 92px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 5% 5%;
  color: white;
}

@media screen and (max-width: 768px) {
  #chapter-title {
    font-size: 72px;
  }
}

@media screen and (max-width: 450px) {
  .main-svg1,
  .main-svg2,
  .main-svg3,
  .main-svg4,
  .main-svg5,
  .main-svg6,
  .main-svg6,
  .main-svg7,
  .main-svg8,
  .main-svg9 {
    display: none;
  }

  #chapter-title {
    font-size: 48px;
    padding: 100px 0;
  }

  .secondary-svg2-1 {
    top: 50%;
  }

  .secondary-svg2-2 {
    bottom: 30%;
  }
}

#asterisk {
  width: 40.89px;
  height: 40.7px;
  background-image: url(~@/assets/images/asterisk.svg);
}
</style>