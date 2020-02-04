<template>
  <div class="holder" style="width=100vw">
    <div class="poem-chapter-container">
      <div class="svg-element ch-num" :class="`number${currentChapter.number}`"></div>
      <div class="svg-element" id="asterisk"></div>
    </div>
    <div class="main-svg" :class="`main-svg${currentChapter.number}`"></div>
    <div class="secondary-svg svg-left" :class="`secondary-svg${currentChapter.number}-1`"></div>
    <div class="secondary-svg svg-right" :class="`secondary-svg${currentChapter.number}-2`"></div>
    <p id="chapter-title" v-html="currentChapter.nameGrand"></p>

    <div
      class="chapter-poem-wrapper"
      v-for="(poemContent, index) in currentChapter.poemsContent"
      v-bind:key="index"
    >
      <p class="chapter-poem-number">/0{{++index}}</p>
      <p class="chapter-poem-title" v-html="poemContent.title"></p>
      <p class="chapter-poem-body" v-html="poemContent.body"></p>
      <p class="chapter-poem-date">29.01.2001</p>
    </div>
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
  beforeCreate() {
    document.body.style.overflowY = "auto";
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
pre {
  color: red;
}

.chapter-poem-body {
}

.chapter-poem-wrapper {
  width: 300px;
  margin: 0 auto;
  margin-top: 10%;
}

.chapter-poem-number {
  color: #828282;
}

.chapter-poem-title {
  margin: 30px 0;
}

.chapter-poem-wrapper p {
  color: white;
}

.chapter-poem-date {
  font-size: 10px;
  color: #828282;
}

/* CHAPTER NUM AND ASTERISK*/
.poem-chapter-container {
  margin-top: 50px;
  margin-bottom: 50px;
}
.svg-element {
  display: block;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
}
.ch-num {
  width: 140px;
  height: 61.88px;
}
#asterisk {
  width: 32px;
  height: 32px;
  transform: translateY(-8px);
  background-image: url(~@/assets/images/asterisk.svg);
}
/* separate chapter num svg for each of the chpaters */
.number1 {
  background-image: url(~@/assets/images/chapter-one-title.svg);
}
.number2 {
  background-image: url(~@/assets/images/chapter-two-title.svg);
}
.number3 {
  background-image: url(~@/assets/images/chapter-three-title.svg);
}
.number4 {
  background-image: url(~@/assets/images/chapter-four-title.svg);
  height: 77.77px;
}
.number5 {
  background-image: url(~@/assets/images/chapter-five-title.svg);
}
.number6 {
  background-image: url(~@/assets/images/chapter-six-title.svg);
  height: 64.55px;
}
.number7 {
  background-image: url(~@/assets/images/chapter-seven-title.svg);
  height: 72.33px;
}
.number8 {
  background-image: url(~@/assets/images/chapter-eight-title.svg);
  height: 73.1px;
}
.number9 {
  background-image: url(~@/assets/images/chapter-nine-title.svg);
  height: 67.66px;
}

/* CHAPTER TITLE */
#chapter-title {
  font-size: 7vw;
  color: white;
  margin: 0 auto;
  width: 80vw;
  text-align: center;
  z-index: 1;
}

/* CHAPTER SIGNATURE MAIN AND SIDE SVGS */

/* MAIN SVG SET */
.main-svg {
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
.main-svg1 {
  background-image: url(~@/assets/images/main-svg-chapter-one.svg);
  width: 16vw;
  height: 25vw;
}
.main-svg2 {
  background-image: url(~@/assets/images/main-svg-chapter-two.svg);
  width: 35.29vw;
  height: 21.55vw;
}
.main-svg3 {
  background-image: url(~@/assets/images/main-svg-chapter-three.svg);
  width: 15vw;
  height: 17.33vw;
  margin-top: 5vw;
}
.main-svg4 {
  background-image: url(~@/assets/images/main-svg-chapter-four.svg);
  width: 15vw;
  height: 16.625vw;
  margin-top: 5vw;
}
.main-svg5 {
  background-image: url(~@/assets/images/main-svg-chapter-five.svg);
  width: 20vw;
  height: 16.76vw;
  margin-top: 6vw;
}

.main-svg6 {
  background-image: url(~@/assets/images/main-svg-chapter-six.svg);
  width: 19vw;
  height: 20.75vw;
  margin-top: 5vw;
}

.main-svg7 {
  background-image: url(~@/assets/images/main-svg-chapter-seven.svg);
}

.main-svg8 {
  background-image: url(~@/assets/images/main-svg-chapter-eight.svg);
  width: 51%;
  height: 33%;
}

.main-svg9 {
  background-image: url(~@/assets/images/main-svg-chapter-nine.svg);
  width: 40%;
  height: 33%;
}

/* SECONDARY SVG SET */
.secondary-svg {
  position: absolute;
  z-index: 2;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.svg-left {
  width: 13.28vw;
  height: 20vw;
  left: 0px;
  top: 50%;
}
.svg-right {
  width: 26.28vw;
  height: 28vw;
  right: 0px;
  top: 15%;
}
.secondary-svg1-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-1-one.svg);
}
.secondary-svg1-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-1-two.svg);
}
.secondary-svg2-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-2-one.svg);
}
.secondary-svg2-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-2-two.svg);
  right: -5vw;
}
.secondary-svg3-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-3-one-two.svg);
}
.secondary-svg3-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-3-one-two.svg);
  right: -5vw;
}
.secondary-svg4-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-4-one.svg);
}
.secondary-svg4-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-4-two.svg);
  right: -3vw;
}
.secondary-svg5-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-5-one.svg);
}
.secondary-svg5-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-5-two.svg);
  right: -3vw;
}
.secondary-svg6-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-6-one.svg);
}
.secondary-svg6-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-6-two.svg);
  right: -3vw;
}
.secondary-svg7-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-7-one.svg);
}
.secondary-svg7-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-7-two.svg);
  right: -5vw;
}
.secondary-svg8-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-8-one.svg);
}
.secondary-svg8-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-8-two.svg);
  right: -3vw;
}
.secondary-svg9-1 {
  background-image: url(~@/assets/images/secondary-svg-chapter-9-one.svg);
}
.secondary-svg9-2 {
  background-image: url(~@/assets/images/secondary-svg-chapter-9-two.svg);
  right: -3vw;
}

@media screen and (max-width: 1200px) {
  #chapter-title {
    font-size: 8vw;
  }
  .main-svg1 {
    width: 19.2vw;
    height: 30vw;
  }
  .main-svg3 {
    width: 20vw;
    height: 23.1vw;
  }
  .main-svg5 {
    width: 24vw;
    height: 20.12vw;
    margin-top: 8vw;
  }
  .main-svg6 {
    margin-top: 7vw;
  }
}

@media screen and (max-width: 1000px) {
}

@media screen and (max-width: 768px) {
  #chapter-title {
    font-size: 9vw;
  }
  .main-svg3 {
    width: 22vw;
    height: 25.42vw;
  }
  .main-svg4 {
    width: 21vw;
    height: 23.275vw;
  }
  .main-svg6 {
    width: 22vw;
    height: 24.03vw;
    margin-top: 9vw;
  }
}

@media screen and (max-width: 590px) {
  #chapter-title {
    font-size: 11vw;
  }
  .main-svg1 {
    width: 32vw;
    height: 50vw;
  }
  .main-svg2 {
    width: 50vw;
    height: 30.53vw;
  }
  .main-svg3 {
    width: 24vw;
    height: 27.73vw;
  }
  .main-svg4 {
    margin-top: 6.5vw;
  }
  .main-svg5 {
    width: 32vw;
    height: 26.82vw;
    margin-top: 14vw;
  }
  .main-svg6 {
    width: 24vw;
    height: 26.21vw;
    margin-top: 9vw;
  }
}

@media screen and (max-width: 500px) {
  .poem-chapter-container {
    margin-top: 0px;
  }
  .holder {
    transform: translateY(-62px);
  }
}
</style>