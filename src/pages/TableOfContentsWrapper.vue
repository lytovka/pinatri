<template>
  <div>
    <router-link :to="toLastVisitedChapterPage()" tag="div" id="table-of-contents-back-button"></router-link>
    <table-of-contents-page :class="[isPageSemiActive() ? 'semiActive' : '', isPageInactive() ? 'inactive' : '']"></table-of-contents-page>
    <chapters></chapters>
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
      if (this.$route.fullPath.includes("/chapters")) {
        return true;
      } else return false;
    },
    isPageInactive(){
      if (this.$route.fullPath.includes("/chapters/chapter")) {
        return true;
      } else return false;
    }
  },
  beforeCreate() {
    console.log("last route", this.$store.getters.getLastRoute);
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

.inactive{
  opacity: 0;
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

</style>