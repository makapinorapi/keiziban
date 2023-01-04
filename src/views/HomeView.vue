<template>
  <div class="home"></div>
  <ul v-if ="hasKoments">
    <li v-for="koment in koments" :key="koment.id">
      ユーザー名→{{ koment.title}}<br>
      ↓つぶやき↓<br>
      {{ koment.content}}<br>
    </li>
  </ul>
  <p v-else>つぶやきはありません</p>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  border-bottom: 1px solid #ccc;
}
li  {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}

</style>

<script>
export default {
  name: 'HomeView',
  computed: {
    hasKoments() {
      return this.$store.getters.getCount
    },
    koments () {
      return this.$store.getters.getAll
    }
  }
}

</script>