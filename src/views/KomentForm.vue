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
        <v-toolbar-title class="font-weight-light">
          User Profile
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            color="purple darken-3"
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
            color="white"
            label="Name"
        ></v-text-field>
        <v-autocomplete
            :disabled="!isEditing"
            :items="states"
            :filter="customFilter"
            color="white"
            item-text="name"
            label="State"
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            :disabled="!isEditing"
            color="success"
            @click="save"
        >
          Save
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


