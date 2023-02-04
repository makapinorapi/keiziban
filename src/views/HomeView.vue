<template>
  <body>
  <div class="home"></div>

  <div v-for="comment in comments " :key="comment">
    <v-card elevation="2" shaped color="#ffffff3f" class="comment-card">
      <v-card-title>
        <v-list-item-avatar color="grey darken-3" class="comment-avator">
          <v-avatar
              size="100">
            <v-img
                class="elevation-6"
                alt=""
                src="../assets/anonymouse.jpg"
                width="100px"
            ></v-img>
          </v-avatar>
          <div class="comment-avator-name" > {{ comment.User }}</div>
        </v-list-item-avatar>
        <div>
          <v-card-text class="comment-text">
            {{ comment.Content }}
          </v-card-text>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-row align="center" justify="end">
          <v-btn v-if="true" icon>
            <v-icon color="pink">mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn v-else icon disalbed>
            <v-icon color="pink">mdi-heart</v-icon>
          </v-btn>
          <span>256</span>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
  </body>
</template>

<style scoped>
.home {
  color: #42b983;
  text-align: center;
}

.comment-card {
  margin: 20px 200px;
  padding: 30px 50px;
}

.comment-avator {
  float: left
}

.comment-text {
  font-size: 20px;
  color: dimgrey;
  text-align: left;
  margin-left: 100px;
}

.comment-avator-name {
  font-size: 18px;
  color: dimgrey;

}


</style>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      comments: {},
      users:{},

    }
  },
  methods: {
  },
  async mounted() {
    const data = await fetch("http://localhost:8080/comments")
    this.comments = await data.json()
    // 新しいメッセージを上に出す
    this.comments.reverse()
  },
}
</script>
