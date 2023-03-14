<template>
  <div >
    
      <v-app class="vamover" >
      <NavigationBar />
      <v-main class="mx-4 mb-4">
        <div v-if="!getLogin">
          <LoginView/>
        </div>
        <div v-else>
          <router-view></router-view>
        </div>
      </v-main>
    </v-app> 
  </div>
</template>

<script>
 import NavigationBar from './components/NavigationBar.vue';
 import LoginView from './views/LoginView.vue';
 import { mapGetters } from 'vuex';
export default {
  components: {
    NavigationBar,
    LoginView,
    
  },
  name: 'App',
  data: () => ({

  }),
  computed: {
    ...mapGetters('auth', ['getLogin'] )
  }
};
</script>

<style scoped>
.theme--light.v-application {
  background-color: #f5f5f5;
}
</style>