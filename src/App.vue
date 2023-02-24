<template>
  <v-app class="grey ">
    <NavigationBar/>
    <v-main>
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
