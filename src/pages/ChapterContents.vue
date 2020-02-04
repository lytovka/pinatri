<template>
  <div>
    <div class="title">
      <p v-html="currentChapter.name"></p>
    </div>
    <div class="chapter-one-container">
      <div class="container-grid">
        <pre class="poem-item" v-for="(poem, index) in currentChapter.poems" v-bind:key="index"><span id="poemNum">{{++index}}</span><span class="poemName">{{poem}}</span></pre>
      </div>
    </div>
    <div class="button-wrapper">
      <router-link
        :to="this.toPoems"
        style="text-align: center"
        class="read-button"
        tag="button"
      >Читать всю главу</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterContents",
  data() {
    return {
      toPoems: "/",
      caption: "",
      currentChapter: null
    };
  },
  methods: {
    generatePathToPoems() {
      const parts = this.$route.fullPath.split("/");
      this.toPoems = `/${parts.pop()}-poems`;
      console.log(this.toPoems);

      this.caption = this.$store.getters.getChapters.find(
        c => c.id === "/" + this.toPoem
      );
      console.log(this.caption);
    },
    setCurrentChapter() {
      this.currentChapter = this.$store.getters.getChapters.find(c =>
        this.$route.fullPath.includes(c.id)
      );
      console.log("current chapter", this.currentChapter);
    }
  },

  beforeCreate() {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
  },
  created() {
    this.setCurrentChapter();
    this.generatePathToPoems();
  }
};
</script>

<style scoped>
.title p {
  padding-top: 48px;
  padding-bottom: 24px;
}

.title {
  font-size: 48px;
  color: white;
  text-align: center;
}

.poemName:hover {
  background-image: url(~@/assets/images/vector-poem.svg);
  background-position: center top;
  background-size: 100% 20px;
  background-repeat: no-repeat;
  cursor: pointer;
}
button {
  cursor: pointer;
}
.button-wrapper {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 60px;
  width: 180px;
}
.button-wrapper:hover {
  cursor: pointer;
}
.read-button {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  background: none;
  padding: 10px 30px;
  color: white;
}

.chapter-one-container {
  position: relative;
  color: white;
  height: 45vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

.container-grid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-template-rows: repeat(9, auto);
  grid-auto-flow: column;
}

.container-grid pre {
  display: flex;
  align-items: center;
  margin-left: 2vw;
  margin-right: 2vw;
  font-size: calc(0.5em + 0.5vw);
}

#poemNum {
  padding-right: 2vw;
  font-family: lighthaus;
}

@media screen and (max-width: 1200px) {
  .chapter-one-container {
    padding-top: 25px;
  }

  .button-wrapper {
    margin-top: 100px;
  }
  .container-grid {
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: repeat(12, 1fr);
  }
}

@media screen and (max-width: 1000px) {
  .title p {
    padding-top: 56px;
    font-size: 40px;
  }
}

@media screen and (max-width: 768px) {
  .button-wrapper {
    margin-top: 0px;
  }
  .title p {
    padding-bottom: 0px;
  }
  .chapter-one-container {
    height: auto;
    padding-top: 0px;
  }

  .container-grid {
    /*margin-top: 60px;*/
    height: auto;
    grid-template-columns: repeat(1, min-content);
    grid-template-rows: repeat(36, 1fr);
    justify-items: center;
  }

  .container-grid pre {
    font-size: calc(0.8em + 0.5vw);
  }

  #poemNum {
    color: #828282;
  }
}
</style>