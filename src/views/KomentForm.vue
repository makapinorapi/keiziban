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
      console.log("aaaaa")
      this.$router.push('/')
      console.log("bbbbb")
      let response = await fetch('http://localhost:8080/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": this.title,
          "content": this.content
        }),

      });
      return response.json();
    },
  },
}

/*async function postdata(url = 'http://localhost:8080/post',data = {}) {
  const response = await fetch(url, {
    method: 'POST',
   // mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

postdata('http://localhost:8080/post',{title:"a",content:"aa"})
    .then((data) =>{
      console.log(data,"wewew")
    })*/


</script>

<style scoped>
div {
  margin-bottom: 10px;
}

input[type=text] {
  width: 40%;
}

textarea {
  width: 50%;
  height: 30em;
}

button {
  width: 10em;
  margin: 3px;
}

.center {
  text-align: center;
}

</style>


