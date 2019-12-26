<template>
  <router-link v-bind:to="menuLinkEndpointName" tag="a" fill="white">
    <tspan dy="-20">{{menuLinkName}}</tspan>
  </router-link>
</template>

<script>
export default {
    name:"MenuLink",
    props:{
        menuLinkName: String,
        menuLinkEndpointName: String
    }
};
</script>

<style scoped>

</style>