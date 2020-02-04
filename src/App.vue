<template>
  <div style="overflow:hidden;">
    <div class="disclaimer" id="discl" v-on:click="closeDisclaimer()">
      <div class="discText">
        Книгу, которую ты, уважаемый читатель, держишь в руках, с трудом можно отнести к сборнику классических стихотворений. Скорее, она являет собой полную противоположность, как по форме, так и по своему содержанию, поскольку в основном эта книга является не восторженным гимном "вечной и неземной любви", а изучением мира людей, его закономерностей и связей.Те строчки, с которыми ты соприкоснешься, создавались автором вне академических стандартов, в атмосфере рэп-вечеринок и ежедневной борьбы за эскиз мечты, старательно созданный в детском воображении.<br><br>
Мы видим в лирике автора пронзительный (не побоюсь этого эпитета) анализ происходящих событий. Ни одна мельчайшая деталь в поведении героев его сюжетов не ускользает от взыскательного взора творца. Подлость, предательство, обман, умение "правдой лгать", верность слову и делу, любовь и самопожертвование - все это под пристальным вниманием Пинатри, хорошо знающего цену миру людей.<br><br>
Представляется, что этот " психологический" уклон в творчестве нашего визави во многом обусловлен атмосферой, в которой рос автор. Российская действительность начала девяностых, когда миллионы людей труда стали жертвами красноречивых, но беспринципных и жестоких дельцов, безусловно повлияла на стиль произведений Пинатри, где внимательность к происходящим событиям и их последующий анализ являются основными методами поэтического исследования мира.
В заключении, необходимо отметить, что эта книга будет полезна для личностей, в первую очередь, сбалансированных, активных, реализующих принцип "слово и дело" и уже потом для всех остальных категорий читателей.<br>
<p class="somename">Алмаз Борцов</p>
      </div>
    </div>
    <div v-if="HomePage()">
      <Header />
      <div v-if="displayNavigation()" class="content">
        <Navigation />
      </div>
      <Footer v-if="displayNavigation()" />
      <hover-element v-if="displayHover()"></hover-element>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navigation,
    Header,
    Footer
  },
  methods: {
    HomePage() {
      return Boolean(!this.$route.fullPath.includes("/table-of-contents"));
    },
    displayNavigation() {
      return Boolean(!this.$route.fullPath.includes("poems"));
    },
    displayHover() {
      return Boolean(
        this.$route.fullPath.includes("/chapter") &&
          !this.$route.fullPath.includes("poems")
      );
    },
    enableOverflow() {
      return Boolean(this.$route.fullPath.includes("/chapters/chapter"));
    },
    closeDisclaimer() {
      document.getElementById("discl").classList.add("removed");
    }
  },
  created(){
    if (this.$route.fullPath.includes("chapter")) {
      this.$store.dispatch("changePageStatus", false);
    }
    else{
      this.$store.dispatch("changePageStatus", false);

    }
  }
};
</script>

<style>
body {
  background: #212121;
  background-image: url(~@/assets/images/backgroundimg.png);
  font-family: "lighthaus";
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.content {
  min-height: calc(100vh - 200px);
}

.disclaimer {
  position:absolute;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background-color: rgba(33, 33, 33, 0.9);
  cursor: url(~@/assets/images/cursorClose-01.svg), not-allowed;
}
/*.disclaimer:hover {
  cursor: url(~@/assets/images/cursor-01.svg);
}*/

.discText {
  font-family: "wremena";
  position: absolute;
  color: white;
  font-size: calc(0.8vw + 0.8vh + 0.8vmin);
  width: 80vw;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/*.discText:hover {
  cursor: url(~@/assets/images/cursor-01.svg);
}*/


.somename {
  float: right;
  font-family: "lighthaus"
}

.removed {
  display: none;
}

@font-face {
  font-family: "lighthaus";
  src: url(~@/assets/fonts/lighthaus.otf);
}

@font-face {
  font-family: "wremena";
  src: url(~@/assets/fonts/wremena_regular.otf);
}

@font-face {
  font-family: "wremena_light";
  src: url(~@/assets/fonts/wremena_light.otf);
}
</style>