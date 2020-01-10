<template>
  <div style="overflow: hidden;">
    <div id="footer-container">
      <div class="footer-item item1"></div>
      <div class="footer-item item2">
        <p id="footer-title">2019</p>
      </div>
      <router-link :to="NavigateToChapterPoems()" tag="div" class="footer-item item3"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    NavigateToChapterPoems() {
      const currentRouter = this.$route.fullPath;
      if (currentRouter.includes("/chapter-")) {
        const destinationRouter = `${currentRouter}-poems`;
        return destinationRouter;
      } else {
        return "/";
      }
    }
  }
};
</script>

<style scoped>
#footer-container {
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.footer-item {
  margin: auto 0;
  z-index: 3;
  position: relative;
}

.item1 {
  width: 23.54px;
  height: 34px;
  margin-left: 77px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/mask_icon.svg);
}

.item2 {
  width: 55px;
  height: 48px;
  line-height: 48px;
  text-align: center;
}

.item3 {
  width: 42.06px;
  height: 46px;
  margin-right: 67.94px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/arrow_icon.svg);
}

#footer-title {
  font-size: 12px;
  letter-spacing: 0.29em;
  margin-bottom: 68px;
  text-transform: uppercase;
  color: #ffffff;
}
</style>