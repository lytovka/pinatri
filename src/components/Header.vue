<template>
  <div>
    <div id="header-container">
      <div class="header-item item1"></div>
      <router-link to="/" tag="div" class="header-item item2"></router-link>
      <router-link to="/table-of-contents" tag="div" class="header-item item3"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#header-container {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
}

.header-item {
  position: relative;
  z-index: 3;
  margin: auto 0;
  cursor: pointer;
}

.item1 {
  width: 50px;
  height: 27.63px;
  margin-left: 68px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/key_icon.svg);
}

.item2 {
  width: 283px;
  height: 48px;
  line-height: 48px;

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/pinatri.svg);
}

.item3 {
  width: 40px;
  height: 29.52px;
  margin-right: 68px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/book_icon.svg);
}

@media screen and (max-width: 500px) {
  .item2 {
    display: none;
  }
  .item1{
    margin-left: 5px;
  }
  .item3{
    margin-right: 5px;
  }
}

#header-title {
  position: relative;
  z-index: 3;
  text-align: center;
  font-size: 32px;
  letter-spacing: 0.29em;
  text-transform: uppercase;

  color: #ffffff;
}
</style>