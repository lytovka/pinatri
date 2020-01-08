<template>
  <router-link @click.native="clickMenuTab" :to="menuLinkEndpointName" tag="a" fill="white">
    <tspan dy="-20">{{menuLinkName}}</tspan>
  </router-link>
</template>

<script>
export default {
  name: "MenuLink",
  props: {
    menuLinkName: String,
    menuLinkEndpointName: String
  },
  methods: {
    clickMenuTab() {
      this.$store.dispatch("changePageStatus", false);
    }
  }
};
</script>

<style scoped>
</style>