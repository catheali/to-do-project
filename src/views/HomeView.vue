<template>
<div class="home">
    <h1>Mitski</h1>
    <v-btn 
    text 
    color="pink"
    >toss your dirty shoes in my washing machine
   </v-btn>
    <v-btn 
    depressed
    class="pink white--text">
      <v-icon 
      left >
      mdi-heart
    </v-icon>
      <span>heart</span>
      <v-icon 
      right>
      mdi-heart
    </v-icon>
    </v-btn>
    <v-btn 
    text
    color="pink">
    baby bring it up inside
  </v-btn>
    <v-btn 
    fab
    depressed
    small
    dark
    color="purple">
    <v-icon >mdi-music</v-icon>
    </v-btn>

    <v-alert 
  class="hidden-md-and-down"
  type="success"
> Eu apareço somente em telas grandes</v-alert>

<v-alert 
  class="hidden-sm-and-up"
  type="success"
> Eu apareço somente em telas pequenas </v-alert>
   <v-btn 
   class="hidden-sm-only">
   sera</v-btn>
 </div>
</template>

<script>

  export default {
    
  }
</script>
