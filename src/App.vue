<template>
  <div>
      <v-app class="vamover" >
      <NavigationBar />
      <v-main class="mx-4 mb-4">
        <router-view />
      </v-main>
    </v-app> 
  </div>
</template>

<script>
 import NavigationBar from './components/NavigationBar.vue';
import LoginView from './views/LoginView.vue';
export default {
  components: {
    NavigationBar,
    LoginView
  },
  name: 'App',
  data: () => ({
    logged:true,
  }),
};
</script>

<style scoped>
.theme--light.v-application {
  background-color: #f5f5f5;
}
</style>