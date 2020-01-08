<template>
  <div>
    <div id="table-of-contents-container">
      <div class="table-of-contents-item">
        <router-link to="/table-of-contents/chapters" tag="p">Оглавление</router-link>
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
import Chapters from "@/pages/Chapters";

export default {
  name: "TableOfContentsPage",
  components: {
    Chapters
  },
};
</script>

<style scoped>

#table-of-contents-container {
  position: relative;
  z-index: 1;
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
  text-align: center;
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