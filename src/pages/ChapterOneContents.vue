<template>
  <div id="chapter-one-container">
    <div class="conainer-grid">
      <pre><span>01</span>Чьё ухо за перон</pre>
      <pre><span>02</span>Веретено</pre>
      <pre><span>03</span>Потомукаккакано</pre>
      <pre><span>04</span>Мешать злу, с добром бороться</pre>
      <pre><span>05</span>По результатам</pre>
      <pre><span>06</span>Оправдать обвинителей</pre>
      <pre><span>07</span>Брод в сухую</pre>
      <pre><span>08</span>Быть свободным</pre>
      <pre><span>09</span>Шытреверепонорок</pre>
      <pre><span>10</span>Недугом целители</pre>
      <pre><span>11</span>Маятник</pre>
      <pre><span>12</span>Мало по-малу</pre>
      <pre><span>13</span>Любовь, влюблённость. Когда в 17.</pre>
      <pre><span>14</span>Любовь, влюблённость. У них в 24.</pre>
      <pre><span>15</span>Любовь, влюблённость. Наверно в 32.</pre>
      <pre><span>16</span>Повтором заново</pre>
      <pre><span>17</span>О сказачниках</pre>
      <pre><span>18</span>Старатели</pre>
      <pre><span>19</span>Судья по блату</pre>
      <pre><span>20</span>Определение определенности</pre>
      <pre><span>21</span>К началу</pre>
      <pre><span>22</span>Точка невозврата</pre>
      <pre><span>23</span>К значему</pre>
      <pre><span>24</span>То, что на скрижалях сердца</pre>
      <pre><span>25</span>Короноперевертыш</pre>
      <pre><span>26</span>Тушится, не тушится</pre>
      <pre><span>27</span>Rашаz обезбашенность</pre>
      <pre><span>28</span>Сбудется</pre>
      <pre><span>29</span>Вещаю</pre>
      <pre><span>30</span>Стадия протеста</pre>
      <pre><span>31</span>Кусок от части</pre>
      <pre><span>32</span>ППСС</pre>
      <pre><span>33</span>Мирской</pre>
      <pre><span>34</span>Писака</pre>
      <pre><span>35</span>Доколе не будут разуметь</pre>
      <pre><span>36</span>Пятый океан</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterOneContents"
};
</script>

<style scoped>
#chapter-one-container {
  position: relative;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.conainer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-auto-flow: column;
  padding: 20px;
  height: 70vh;
  /* width: 80vw; */
}

.conainer-grid pre {
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 18px;
}

span{
    padding-right: 8%;
}
</style>