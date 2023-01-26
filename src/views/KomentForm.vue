<template>
  <h2>つぶやこう！</h2>
  <div>タイトル<input type="text" v-model="title"></div>
  <div class="comment">コメント</div>
  <textarea v-model="content"></textarea>
  <div class="center">
    <button @click="save">投稿する</button>
  </div>

</template>

<script>
export default {
  name: 'KomentForm',
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    async save() {
      const response = await fetch('http://localhost:8080/post', {
        method: 'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": this.title,
          "content": this.content
        }),
      });
      this.$router.push('/')
      return response.json()
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:kkkkkkkkkk', data);
          })
          .catch((error) => {
            console.error('Error:pppppppp', error);
          });

    },
  },
}



</script>

<style scoped>
div {
  margin-bottom: 10px;
  color: #42b983;
}

input[type=text] {
  width: 40%;


}

textarea {
  width: 50%;
  height: 30em;
  color: blue;

}

button {
  width: 10em;
  margin: 3px;
}

.center {
  text-align: center;

}

</style>


