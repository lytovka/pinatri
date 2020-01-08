<template>
  <div>
    <router-link to="/" id="arrow-left" tag="div"></router-link>

    <div id="chapters-container">
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-one" tag="div">
        <p>бросающий камни или камни саваоф</p>
      </router-link>
      <div class="chapters-item">
        <p>как я ем собаку</p>
      </div>
      <div class="chapters-item">
        <p>моё богатство — люди</p>
      </div>
      <div class="chapters-item">
        <p>герои быта</p>
      </div>
      <div class="chapters-item">
        <p>разный навсегда</p>
      </div>
      <div class="chapters-item">
        <p>на новенького</p>
      </div>
      <div class="chapters-item">
        <p>проделки путешественника</p>
      </div>
      <div class="chapters-item">
        <p>масловка</p>
      </div>
      <div class="chapters-item">
        <p>не про то</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Chapters",
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  beforeCreate() {
    console.log(this.$router);
  }
};
</script>

<style scoped>
#arrow-left {
  z-index: 4;
  position: absolute;
  left: 47.08%;
  right: 51.04%;
  top: 6.48%;
  bottom: 90.19%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/arrow-left.svg);
}

#chapters-container {
  position: absolute;
  left: 0%;
  top: 7.35%;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100vw;
  line-height: 0px;
}
.chapters-item {
  font-size: 32px;
  cursor: pointer;
  text-align: center;
}

.chapters-item:hover {
  cursor: pointer;
  background-position-y: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/crossed-line.svg);
}

p {
  color: white;
}

@media (max-width: 768px) {
  #table-of-contents-container {
    flex-wrap: wrap;
  }

  .chapters-item {
    font-size: 24px;
  }
}

@media (max-width: 375px) {
  .chapters-item {
    font-size: 20px;
  }
}
</style>