<template>
  <div style="overflow: hidden;">
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
  margin: auto auto;
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
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/pinatri.svg);
}

.item3 {
  width: 40px;
  height: 29.52px;
  margin-right: 68px;
  padding-left: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/book_icon.svg);
}

@media screen and (max-width: 768px) {

  .item1 {
    margin-left: 60px; 
  }
  .item2 {
    width: 224px;
    height: 38px;
  }
  .item3 {
    margin-right: 60px;
  }

}

@media screen and (max-width: 500px) {
  .item1 {
    margin-left: 50px;
  }
  .item2 {
    visibility: hidden;
  }
  .item3 {
    margin-right: 50px;
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