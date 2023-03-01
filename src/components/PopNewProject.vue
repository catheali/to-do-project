<template>
  <v-dialog 
  max-width="600px">
    <template 
    v-slot:activator="{on}">
      <v-btn 
      outlined
      color="black"
      v-on="on" 
      dark>Add a new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h3>Add a new project</h3>
       <v-card-text>
        <v-form class="px-3">
          <v-text-field class="" label="Title" v-model="title">
          </v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil">
          </v-textarea>
          <v-btn text class="success mx-0 mt-3" @click="submitForm">Add Project</v-btn>
        </v-form>
       </v-card-text>

      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script >
export default {
  data(){
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submitForm(){
      console.log(this.content)
    }
  }
}
</script>

<style>

</style>