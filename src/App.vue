<template>
  <nav>
    <router-link to="/">
      <v-btn color="#F0C8CB">HOME</v-btn>
    </router-link>
    <router-link to="/toukou">
      <v-btn
          class="mx-2"
          fab
          dark
          large
          color="#FDD9C0"
      >
        <v-icon dark>
          mdi-pencil
        </v-icon>
      </v-btn>
    </router-link>

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
