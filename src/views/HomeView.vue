<template>
  <div class="home"></div>
  <h1>タイトル</h1>
  <!--  {{titles[1].Title}}-->
  <div v-for=" title in titles" :key="title">{{ title.Title }}<br>
    <h1>コメント</h1>
    <br>{{ title.Content }}
  </div>


  <!--{{titles[1].Title}}{{titles[1].Content}}-->
  <!--  <button v-on:click="openMenu =!openMenu">-->
  <!--    <template v-if="openMenu === false">unko</template>-->
  <!--    <template v-else>manko</template>-->
  <!--  </button>-->
  <div>{{ button }}aaaa</div>
  <input type="text" v-model="message">
  <p v-if="toggle">noranoranora</p>
  <div v-show="isdispley">表示</div>
  <div v-if="singou === 'akka'">赤</div>
  <div v-else-if="singou === 'ao'">青</div>
  <div v-else-if="singou ==='ki'">黃</div>
  <div v-else>ありません</div>
  <ul>
    <li :v-for="(member, index) in members">{{ members }}:{{ number }}</li>
  </ul>


</template>

<style scoped>


</style>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      countunko: 0,
      titles: "unko",
      contents: "vvvv",
      isShow: false,
      openMenu: false,
      button: "unko",
      message: "mamamamamama",
      toggle: false,
      isdispley: true,
      singou: "ki",
      members: ['honda', 'samata', 'hatuhi'],
      book: {
        title: "aaaa",
        author: "bbbbb",
        url: 'https://google.com'
      },
    }
  },
  methods: {
    click_count: function () {
      console.log("ZZZZZZZZZZZZZZZZZZZZZZ")
      this.countunko++;
      console.log("sssssssss",this.countunko)
      this.button = "manko"

    },
  },


  async mounted() {
    //let title = "a"
    //this.button = title
    const data = await fetch("http://localhost:8080/hello")
    const json = await data.json()
    //const json = ["hoge", "fuga", "piyo"];
    this.titles = json.title
    //this.contents = json.content
    console.log("oooooooooooo", this.titles)
    console.log("oooooooooooo",)


  },


}

</script>