<template>
  <div style="overflow: hidden;">
    <div id="footer-container" :style="this.$store.getters.isAnimationActive ? 'pointer-events: none;' : ''">
      <div class="footer-item item1"></div>
      <div class="item2">
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
  position: relative;
  z-index: 10;
  cursor: pointer;
}

.item1 {
  width: 23.54px;
  height: 34px;
  margin-left: 77px;
  padding-right: 18.52px;
  margin-top: 12px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/mask_icon.svg);
}

.item2 {
  width: 55px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  z-index: 10;
}

.item3 {
  width: 42.06px;
  height: 46px;
  margin-right: 77px;
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
  z-index: 3;
}

@media screen and (max-width: 768px) {
  #footer-container {
    margin-top: 24px;
  }
  .item1 {
    margin-left: 30px;
  }
  .item3 {
    margin-right: 30px;
  }

}

@media screen and (max-width: 500px) {
  #footer-container {
    margin-top: 48px;
  }
  .item1 {
    margin-left: 20px;
  }
  .item3 {
    margin-right: 20px;
  }
}
</style>