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
    save() {
      this.$router.push('/')
    }
  }
}

async function postdata(url = 'http://localhost:8080/post',data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

postdata('http://localhost:8080/post',{title:"",content:""})
    .then((data) =>{
      console.log(data,"wewew")
    })


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


/* const response = await fetch ("http://localhost:8080/hello")
.then (response => response.json())
console.log(response.title,"aaaaaaaaaaaa")
this.title = response.title
this.$store.commit('save', comment)
this.$router.push('/')


async function postData(url = '', data = {}) {
// Default options are marked with *
const response = await fetch(url, {
method: 'POST', // *GET, POST, PUT, DELETE, etc.
mode: 'cors', // no-cors, *cors, same-origin
cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
credentials: 'same-origin', // include, *same-origin, omit
headers: {
'Content-Type': 'application/json'
// 'Content-Type': 'application/x-www-form-urlencoded',
},
redirect: 'follow', // manual, *follow, error
referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
.then((data) => {
console.log(data); // JSON data parsed by `data.json()` call
});





postdata('http://localhost:8080/post',{title:"aa",content:"ss"})
.then((data) => {
console.log(data)
})
