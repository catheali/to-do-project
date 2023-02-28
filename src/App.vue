<template>
  <v-app class="vamover">
    <NavigationBar/>
    <v-main class="mx-4 mb-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
export default {
  components: { NavigationBar },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.theme--light.v-application{
  background-color: #f5f5f5;
}

</style>