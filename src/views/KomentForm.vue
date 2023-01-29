<template>
    <v-card
        class="overflow-hidden"
        color="white"
        dark
    >
      <v-toolbar
          flat
          color="white"
      >
        <v-icon>mdi-account</v-icon>
        <v-toolbar-tweet class="font-weight-light">
          つぶやこう！
        </v-toolbar-tweet>
        <v-spacer></v-spacer>
        <v-btn
            color="green"
            fab
            small
            @click="isEditing = !isEditing"
        >
          <v-icon v-if="isEditing">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-pencil
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-text-field
            :disabled="!isEditing"
            v-model='title'
            color="white"
            label="タイトル"
        ></v-text-field>
        <v-text-field
            :disabled="!isEditing"
            v-model='content'
            label="コメント"
        ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            :disabled="!isEditing"
            color="#339933"
            @click="save"
        >
          投稿する
        </v-btn>
      </v-card-actions>
      <v-snackbar
          v-model="hasSaved"
          :timeout="2000"
          absolute
          bottom
          left
      >
        Your profile has been updated
      </v-snackbar>
    </v-card>
</template>
<script>
export default {
  data () {
    return {
      hasSaved: false,
      isEditing: null,
      title: '',
      content: '',

    }
  },

  methods: {
    async save () {
      //console.log("aaa")
      this.isEditing = !this.isEditing
      this.hasSaved = true
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
      console.log(this.content,"abbjbj")
      console.log(this.title,"erere")
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

.font-weight-light{
  color: green;
  font-size: 20px;
}

</style>


