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
          <textPath
            :style="this.$store.getters.isAnimationActive ? 'pointer-events: none;' : ''"
            xlink:href="#curve"
          >
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

            <menu-link menuLinkName="герои быта" menuLinkEndpointName="/chapter-four" />
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

            <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
              <animate
                v-if="this.$store.getters.isPageCalled"
                attributeName="x1"
                from="0%"
                to="50%"
                dur="50s"
                repeatCount="indefinite"
              />
            </transition>
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
    return {
      isActive: false
    };
  },
  methods: {
    clickMenuTab() {
      this.isActive = true;
      this.$store.dispatch("changePageStatus", false);
    },
    enter: function(el, done) {
      console.log("enter the transition", el);
      done();
    },

    leave: function(el, done) {
      console.log("setAttribute", el.getAttribute("from"));
      el.setAttribute("dur", "3s");
      el.setAttribute("repeatCount", "indefinite");
      console.log("leaving the transition", el);
      setTimeout(() => {
        done();
      }, 2000);
    }
  },
  updated() {
    console.log("start page", this.$store.getters.isPageCalled);
  },
  beforeRouteUpdate(to, from, next){
    console.log(to, from);
    next();
  }
};
</script>

<style>
.wrapper-menu {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 74.9vw;
  height: 32vw;
}

</style>