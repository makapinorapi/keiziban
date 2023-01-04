<template>
  <h2>つぶやこう！</h2>
  <div>ユーザー名<input type="text" v-model="title"></div>
  <div class="koment">コメント</div>
  <textarea v-model="content"></textarea>
  <div class="center">
    <button @click="save">投稿する</button>
  </div>
</template>

<script>
export default  {
  name: 'KomentForm',
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    save() {
      let koment = {
          title: this.title,
          content: this.content,
        }
        this.$store.commit('save',koment)
        this.$router.push('/')
      }
    }
  }
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