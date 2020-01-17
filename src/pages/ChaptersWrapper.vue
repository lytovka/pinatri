<template>
  <div>
    <router-link id="arrow-left" :to="this.$store.getters.getTableOfContentsBack" tag="div">
      <p>Назад</p>
    </router-link>
    <chapters :class="[isPageSemiActive() ? 'semiActive' : '']"></chapters>
    <router-view></router-view>
  </div>
</template>

<script>
import Chapters from "@/pages/Chapters";

export default {
  name: "ChaptersWrapper",
  components: {
    Chapters
  },
  data() {
    return {};
  },
  methods: {
    isPageSemiActive() {
      return Boolean(this.$route.fullPath.includes("/chapters/chapter"));
    },
    getBack() {
      if (this.$route.fullPath.includes("/table-of-contents/chapters/chapter"))
        this.$store.dispatch(
          "updateTableOfContentsBack",
          "/table-of-contents/chapters"
        );
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
  pointer-events: none;
  opacity: 0.2;
  filter: blur(5px);
  color: rgba(255, 255, 255, 0.1);
}

.inactive {
  display: none;
}

#arrow-left {
  z-index: 4;
  position: absolute;
  top: 5.93%;
  left: 50%;
  padding-right: 72px;
  transform: translateX(-50%);
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/arrow-left.svg);
}

p {
  position: absolute;
  line-height: 2px;
  margin-left: 36px;
  color:white;
  font-size: 18px;
}

@media screen and (max-width: 450px) {
  p {
    display: none;
  }

  #arrow-left {
    padding-right: 0;
    right: 5.56%;
    left: 87.78%;
    top: 3.12%;
    bottom: 93.12%;
  }
}
</style>