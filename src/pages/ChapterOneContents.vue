<template>
  <div id="chapter-one-container">
    <div class="chapter-one-item">1</div>
    <div class="chapter-one-item">2</div>
    <div class="chapter-one-item">3</div>
    <div class="chapter-one-item">4</div>
  </div>
</template>

<script>
export default {
  name: "ChapterOneContents"
};
</script>

<style scoped>
#chapter-one-container {
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto auto auto auto auto;
}
.chapter-one-item {
}
</style>