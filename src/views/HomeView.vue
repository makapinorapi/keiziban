<template>
  <div class="home"></div>
  <div v-on:click="click_count">qqq</div>


<!--  <button v-on:click="openMenu =!openMenu">-->
<!--    <template v-if="openMenu === false">unko</template>-->
<!--    <template v-else>manko</template>-->
<!--  </button>-->
  <div>{{button}}</div>


</template>

<style scoped>


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
  },
  data(){
    return{
      countunko: 0,
      title:"unko",
      isShow: false,
      openMenu:false,
      button: "unko",
    }
  },
  methods:{
    click_count: function(){
      this.countunko++;
      console.log(this.countunko)
      this.button = "manko"
      },
    },




  async mounted(){
    let title = "aaaaaa"
    this.button = title
 },



}

</script>