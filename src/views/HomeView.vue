<template>
  <div class="home"></div>
  <!--  {{titles[1].Title}}-->

  <div v-for=" title in titles" :key="title" class="title" >タイトル→{{ title.Title }}<br>
    <br>コメント→{{ title.Content }}<br>

  </div>

</template>

<style scoped>
.home {
  color: #42b983;
  text-align: center;
}

.title{
  border: solid #99CC99;
}
</style>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      titles: "unko",
      contents: "vvvv",
      button: "unko",
    }
  },
  /*methods: {
    click_count: function () {
      console.log("ZZZZZZZZZZZZZZZZZZZZZZ",this.messge)
      this.countunko++;
      console.log("sssssssss",this.countunko)
      this.button = "manko"

    },
  },
*/

  async mounted() {
    //let title = "a"
    //this.button = title
    const data = await fetch("http://localhost:8080/hello")
    const json = await data.json()
    //const json = ["hoge", "fuga", "piyo"];
    this.titles = json.title
    //this.contents = json.content
    console.log("oooooooooooo", this.titles)
    //console.log("oooooooooooo",)


  },


}

</script>







<v-row
    align="center"
    justify="space-around"
>
<v-btn
    tile
    color="success"
>
  <v-icon left>
    mdi-pencil
  </v-icon>
  Edit
</v-btn>
</v-row>
