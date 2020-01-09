<template>
  <div>
    <router-link :to="toLastVisitedChapterPage()" tag="div" id="table-of-contents-back-button"></router-link>
    <table-of-contents-page v-if="isPageActive()" :class="[isPageSemiActive() ? 'semiActive' : '']"></table-of-contents-page>
    <router-view></router-view>
  </div>
</template>

<script>
import TableOfContentsPage from "@/pages/TableOfContentsPage";
export default {
  name: "TableOfContents",
  components: {
    TableOfContentsPage
  },
  data() {
    return {
      op: 1
    };
  },
  methods: {
    toLastVisitedChapterPage() {
      return this.$store.getters.getLastRoute
        ? this.$store.getters.getLastRoute
        : "/";
    },
    isPageSemiActive() {
      return Boolean(this.$route.fullPath.includes("/chapters"));
    },
    isPageActive() {
      return Boolean(!this.$route.fullPath.includes("/chapters/chapter"));
    },
    getBack() {
      if (this.$route.fullPath === "/table-of-contents/chapters")
        this.$store.dispatch("updateTableOfContentsBack", "/table-of-contents");
    }
  },
  created() {
    this.getBack();
  },
  beforeUpdate() {
    this.getBack();
  }
};
</script>

<style scoped>
.semiActive {
  position: relative;
  opacity: 0.2;
  filter: blur(5px);
  color: rgba(255, 255, 255, 0.1);
}

#table-of-contents-back-button {
  position: absolute;
  z-index: 4;
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

@media screen and (max-width: 450px) {
  #table-of-contents-back-button {
    left: 5.56%;
    right: 87.78%;
    top: 3.12%;
    bottom: 93.12%;
  }
}
</style>