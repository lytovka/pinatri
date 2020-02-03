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
  }
  .number5 {
    background-image: url(~@/assets/images/chapter-five-title.svg);
  }
  .number6 {
    background-image: url(~@/assets/images/chapter-six-title.svg);
  }
  .number7 {
    background-image: url(~@/assets/images/chapter-seven-title.svg);
  }
  .number8 {
    background-image: url(~@/assets/images/chapter-eight-title.svg);
  }
  .number9 {
    background-image: url(~@/assets/images/chapter-nine-title.svg);
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
    z-index: 2;
  }
        .main-svg1 {
          background-image: url(~@/assets/images/main-svg-chapter-one.svg);
          width: 16vw;
          height: 25vw;
        }

        .main-svg2 {
          background-image: url(~@/assets/images/main-svg-chapter-two.svg);
          width: 51%;
          height: 60%;
        }

        .main-svg3 {
          background-image: url(~@/assets/images/main-svg-chapter-three.png);
          width: 18%;
          height: 60%;
        }

        .main-svg4 {
          background-image: url(~@/assets/images/main-svg-chapter-4.png);
          width: 51%;
          height: 60%;
        }

        .main-svg5 {
          background-image: url(~@/assets/images/main-svg-chapter-5.png);
          width: 51%;
          height: 60%;
        }

        .main-svg6 {
          background-image: url(~@/assets/images/main-svg-chapter-six.svg);
          width: 22%;
          height: 60%;
        }

        .main-svg7 {
          background-image: url(~@/assets/images/main-svg-chapter-seven.svg);
          width: 51%;
          height: 60%;
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
        }
        .secondary-svg3-1 {
          background-image: url(~@/assets/images/secondary-svg-chapter-3-one-two.svg);
        }
        .secondary-svg3-2 {
          background-image: url(~@/assets/images/secondary-svg-chapter-3-one-two.svg);
        }
        .secondary-svg4-1 {
          background-image: url(~@/assets/images/secondary-svg-chapter-4-one-two.svg);
        }
        .secondary-svg4-2 {
          background-image: url(~@/assets/images/secondary-svg-chapter-4-one-two.svg);
        }
        .secondary-svg5-1 {
          background-image: url(~@/assets/images/secondary-svg-chapter-5-one-two.svg);
        }
        .secondary-svg5-2 {
          background-image: url(~@/assets/images/secondary-svg-chapter-5-one-two.svg);
        }
        .secondary-svg6-1 {
          background-image: url(~@/assets/images/secondary-svg-chapter-6-one-two.svg);
        }
        .secondary-svg6-2 {
          background-image: url(~@/assets/images/secondary-svg-chapter-6-one-two.svg);
        }
        .secondary-svg7-1 {
          background-image: url(~@/assets/images/secondary-svg-chapter-7-one-two.svg);
        }
        .secondary-svg7-2 {
          background-image: url(~@/assets/images/secondary-svg-chapter-7-one-two.svg);
        }
        .secondary-svg8-1 {
          background-image: url(~@/assets/images/secondary-svg-chapter-8-one-two.svg);
        }
        .secondary-svg8-2 {
          background-image: url(~@/assets/images/secondary-svg-chapter-8-one-two.svg);
        }
        .secondary-svg9-1 {
          background-image: url(~@/assets/images/secondary-svg-chapter-9-one-two.svg);
        }
        .secondary-svg9-2 {
          background-image: url(~@/assets/images/secondary-svg-chapter-9-one-two.svg);
        }

@media screen and (max-width: 1200px) {
  #chapter-title {
    font-size: 8vw;
  }
  .main-svg1 {
    width: 19.2vw;
    height: 30vw;
  }
}

@media screen and (max-width: 1000px) {
}

@media screen and (max-width: 768px) {
  #chapter-title {
    font-size: 9vw;
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