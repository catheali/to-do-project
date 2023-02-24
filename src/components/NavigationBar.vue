<template>
  <nav>
   <v-app-bar 
   flat 
   app>
   <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    <v-toolbar-title 
    class="text-uppercase grey--text">
      <span 
      class="font-weight-light">Todo</span>
      <span>Ninja</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn 
    text 
    color="grey"> 
      <span>Sign out</span>
      <v-icon
      right>
      mdi-logout
    </v-icon>
    </v-btn>
   </v-app-bar>
   <v-navigation-drawer v-model="drawer" app class="success">
    <p>aquela coisa</p>
   </v-navigation-drawer>
  </nav>
</template>

<script >
export default {
  data(){
    return{
      drawer: false,
    }
  }
}
</script>

<style>

</style>