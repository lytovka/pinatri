<template>
  <div>
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
  </div>
</template>

<script>
document.body.style.overflow = "auto";
export default {
  name: "Chapters",
  methods: {}
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