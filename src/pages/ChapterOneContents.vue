<template>
  <div>
    <div class="title">
      <p>Бросающий камни или камни саваоф</p>
    </div>
    <div class="chapter-one-container">
      <div class="container-grid">
        <pre class="poem-item"><span>01</span>Чьё ухо за перон</pre>
        <pre class="poem-item"><span>02</span>Веретено</pre>
        <pre class="poem-item"><span>03</span>Потомукаккакано</pre>
        <pre class="poem-item"><span>04</span>Мешать злу, с добром бороться</pre>
        <pre class="poem-item"><span>05</span>По результатам</pre>
        <pre class="poem-item"><span>06</span>Оправдать обвинителей</pre>
        <pre class="poem-item"><span>07</span>Брод в сухую</pre>
        <pre class="poem-item"><span>08</span>Быть свободным</pre>
        <pre class="poem-item"><span>09</span>Шытреверепонорок</pre>
        <pre class="poem-item"><span>10</span>Недугом целители</pre>
        <pre class="poem-item"><span>11</span>Маятник</pre>
        <pre class="poem-item"><span>12</span>Мало по-малу</pre>
        <pre class="poem-item"><span>13</span>Любовь, влюблённость. Когда в 17.</pre>
        <pre class="poem-item"><span>14</span>Любовь, влюблённость. У них в 24.</pre>
        <pre class="poem-item"><span>15</span>Любовь, влюблённость. Наверно в 32.</pre>
        <pre class="poem-item"><span>16</span>Повтором заново</pre>
        <pre class="poem-item"><span>17</span>О сказачниках</pre>
        <pre class="poem-item"><span>18</span>Старатели</pre>
        <pre class="poem-item"><span>19</span>Судья по блату</pre>
        <pre class="poem-item"><span>20</span>Определение определенности</pre>
        <pre class="poem-item"><span>21</span>К началу</pre>
        <pre class="poem-item"><span>22</span>Точка невозврата</pre>
        <pre class="poem-item"><span>23</span>К значему</pre>
        <pre class="poem-item"><span>24</span>То, что на скрижалях сердца</pre>
        <pre class="poem-item"><span>25</span>Короноперевертыш</pre>
        <pre class="poem-item"><span>26</span>Тушится, не тушится</pre>
        <pre class="poem-item"><span>27</span>Rашаz обезбашенность</pre>
        <pre class="poem-item"><span>28</span>Сбудется</pre>
        <pre class="poem-item"><span>29</span>Вещаю</pre>
        <pre class="poem-item"><span>30</span>Стадия протеста</pre>
        <pre class="poem-item"><span>31</span>Кусок от части</pre>
        <pre class="poem-item"><span>32</span>ППСС</pre>
        <pre class="poem-item"><span>33</span>Мирской</pre>
        <pre class="poem-item"><span>34</span>Писака</pre>
        <pre class="poem-item"><span>35</span>Доколе не будут разуметь</pre>
        <pre class="poem-item"><span>36</span>Пятый океан</pre>
      </div>
    </div>
    <div class="button-wrapper">
      <router-link
        :to="this.toPoems"
        style="text-align: center"
        class="read-button"
        tag="button"
      >Читать всю главу</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterOneContents",
  data() {
    return {
      toPoems: "/",
      caption: ""
    };
  },
  beforeCreate() {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
  },
  created() {
    const parts = this.$route.fullPath.split("/");
    this.toPoems = `/${parts.pop()}-poems`;
    console.log(this.toPoems);

    this.caption = this.$store.getters.getChapters.find(c => c.id === "/"+this.toPoem);
    console.log(this.caption);
  }
};
</script>

<style scoped>
p {
  padding: 5% 0 0 2%;
}

.title {
  font-size: 48px;
  color: white;
  text-align: center;
}

.poem-item:hover {
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(~@/assets/images/vector-poem.svg);
}

.button-wrapper {
  margin: 0 auto;
  width: 180px;
  padding: 5% 0;
}

.read-button {
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 25px;
  background: none;
  padding: 10px 30px;
  color: white;
  margin: 0 auto;
}

.chapter-one-container {
  position: relative;
  color: white;
  height: 45vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

.container-grid {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-template-rows: repeat(9, auto);
  grid-auto-flow: column;
}

.container-grid pre {
  display: flex;
  align-items: center;
  margin-left: 2vw;
  margin-right: 2vw;
  font-size: calc(0.5em + 0.5vw);
}

span {
  padding-right: 2vw;
}

@media screen and (max-width: 1200px) {
  .container-grid {
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: repeat(12, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .chapter-one-container {
    height: auto;
  }

  .container-grid {
    margin-top: 60px;
    height: auto;
    grid-template-columns: repeat(1, min-content);
    grid-template-rows: repeat(36, 1fr);
    justify-items: center;
  }

  .container-grid pre {
    font-size: calc(0.8em + 0.5vw);
  }

  span {
    color: #828282;
  }
}
</style>