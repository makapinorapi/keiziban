<template>
  <body>
  <div class="home"></div>
  <!--  {{titles[1].Title}}-->

  <div v-for=" title in titles" :key="title" class="title" >タイトル→{{ title.Title }}<br>
    <br>コメント→{{ title.Content }}<br>
    <v-col
        cols="12"
        sm="3"
    >
      <v-btn
          icon

      >
        <v-icon class="good" color="pink">
        mdi-thumb-up</v-icon>
      </v-btn>

      <v-btn @click="countUp">{{ count }}</v-btn>
    </v-col>

  </div>
  </body>

</template>

<style scoped>
.home {
  color: #42b983;
  text-align: center;
}


.title {
  border: 1px solid rgba(0,0,0,0.3);
}

.good {
  : center;
}
</style>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      titles: "aaa",
      contents: "vvvv",
      count: 0,
    }
  },
  methods: {
    countUp : function () {
      this.count++;

      console.log("nnknk")

    }
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
