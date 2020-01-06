<template>
  <div>
    <div class="wrapper-menu">
      <svg
        viewBox="0 0 1484 632"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <defs>
          <path
            id="curve"
            ref="curve"
            d="M 0 316 A 742 316 0 1 1 1484 316 A 742 316 0 1 1 0 316 Z M 0 316 A 742 316 0 1 1 1484 316 A 742 316 0 1 1 0 316 Z"
          />
        </defs>
        <use xlink:href="#curve" fill="none" />
        <text dy="30" font-size="1.84375rem" letter-spacing="1px" fill="white" textLength="302%">
          <textPath class="menu-animation" xlink:href="#curve">
            <router-link
              @click.native="clickMenuTab"
              to="/chapter-one"
              tag="a"
              fill="white"
            >бросающий камни или камни саваоф</router-link>
            <bullet-character />

            <menu-link menuLinkName="как я ем собаку" menuLinkEndpointName="/chapter-two" />
            <bullet-character />

            <menu-link menuLinkName="моё богатство — люди" menuLinkEndpointName="/chapter-three" />
            <bullet-character />

            <menu-link menuLinkName="герои быта" menuLinkEndpointName="/chapter-two" />
            <bullet-character />

            <menu-link menuLinkName="разный навсегда" menuLinkEndpointName="/chapter-five" />
            <bullet-character />

            <menu-link menuLinkName="на новенького" menuLinkEndpointName="/chapter-six" />
            <bullet-character />

            <menu-link
              menuLinkName="проделки путешественника"
              menuLinkEndpointName="/chapter-seven"
            />
            <bullet-character />

            <menu-link menuLinkName="масловка" menuLinkEndpointName="/chapter-eight" />
            <bullet-character />

            <menu-link menuLinkName="не про то" menuLinkEndpointName="/chapter-nine" />
            <tspan dy="20" font-size="100px">&#8226;</tspan>

            <animate
              v-if="this.$store.getters.isPageCalled"
              attributeName="startOffset"
              from="0%"
              to="50%"
              dur="70s"
              repeatCount="indefinite"
            />
            <animate v-else attributeName="startOffset" from="0" to="100" dur="1s" repeatCount="1" />
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
import MenuLink from "@/components/MenuLink";
import BulletCharacter from "@/components/BulletCharacter";

export default {
  name: "Navigation",
  components: {
    MenuLink,
    BulletCharacter
  },
  data() {
    return {};
  },
  methods: {
    clickMenuTab() {
      this.$store.dispatch("changePageStatus", false);
    }
  }
};
</script>

<style>
.wrapper-menu {
  position: absolute;
  z-index: 2;
  left: 11.35%;
  right: 11.35%;
  top: 20.74%;
  bottom: 20.74%;
}
</style>