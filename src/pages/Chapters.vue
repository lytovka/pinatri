<template>
  <div>
    <div id="chapters-container">
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-one" tag="div">
        <p>бросающий камни или камни саваоф</p>
      </router-link>
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-two" tag="div">
        <p>как я ем собаку</p>
      </router-link>
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-three" tag="div">
        <p>моё богатство — люди</p>
      </router-link>
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-four" tag="div">
        <p>герои быта</p>
      </router-link>
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-five" tag="div">
        <p>разный навсегда</p>
      </router-link>
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-six" tag="div">
        <p>на новенького</p>
      </router-link>
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-seven" tag="div">
        <p>проделки путешественника</p>
      </router-link>
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-eight" tag="div">
        <p>масловка</p>
      </router-link>
      <router-link class="chapters-item" to="/table-of-contents/chapters/chapter-nine" tag="div">
        <p>не про то</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chapters",
  methods: {},
  beforeCreate() {
    document.body.style.overflowY = "auto";
  }
};
</script>

<style scoped>
#chapters-container {
  position: absolute;
  left: 0%;
  top: calc(5.93% + 72px);
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: auto;
  width: 100vw;
  line-height: 0px;
}
.chapters-item {
  font-size: 48px;
  cursor: pointer;
  text-align: center;
}

.chapters-item:hover {
  background-position-y: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/crossed-line.svg);
}

p {
  color: white;
}

@media (max-width: 1500px) {
  .chapters-item {
    font-size: 32px;
  }
}

@media (max-width: 768px) {
  .chapters-item {
    font-size: 24px;
  }
}

@media (max-width: 450px) {
  #chapters-container {
    top: calc(3.12% + 36px);
  }
}

@media (max-width: 568px) {
  .chapters-item {
    font-size: 20px;
  }
  #chapters-container {
    line-height: unset;
  }
}
</style>