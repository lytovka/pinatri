<template>
  <div>
    <router-link to="/" tag="div" id="table-of-contents-back-button"></router-link>
    <div id="table-of-contents-container">
      <div class="table-of-contents-item">
        <p>Оглавлениe</p>
      </div>
      <div class="table-of-contents-item">
        <p>Приобрести книгу</p>
      </div>
      <div class="table-of-contents-item">
        <p>Описание</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableOfContents"
};
</script>

<style scoped>
#table-of-contents-back-button {
  position: absolute;
  left: 3.33%;
  right: 94.79%;
  top: 5.93%;
  bottom: 90.74%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/menu.svg);
}

#table-of-contents-container {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
  line-height: 0px;
}
.table-of-contents-item {
  font-size: 7vw;
  cursor: pointer;
}

.table-of-contents-item:hover {
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
    line-height: 100px;
  }

  .table-of-contents-item {
    font-size: 8vw;
  }
}
</style>