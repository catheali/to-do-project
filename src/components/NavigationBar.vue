<template>
  <nav>
    <v-app-bar 
    flat
    app>
    <div v-show="isLogged()"> 
      <v-app-bar-nav-icon 
      @click="showDrawer"></v-app-bar-nav-icon>
    </div>
      <v-toolbar-title 
      class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>LIST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-show="!isLogged()">
      <v-btn 
      outlined
      color="accent"
      route
      :to="{name:'register'}"
       >
        <span>Nova Conta</span>
        <v-icon 
        right>
        mdi-account-plus
        </v-icon>
      </v-btn>
    </div>
    <div v-if="isLogged()" >
      <v-menu offset-y >
      <template v-slot:activator="{on}">
      <v-btn 
      text 
      v-on="on" 
      color="grey">
        <v-icon 
        left>mdi-menu-down</v-icon>
        <span>menu</span>
      </v-btn>
    </template>
      <v-list >
        <v-list-item 
        v-for="link in getNavBar" 
        :key="link.text" 
        router :to="link.route">
          <v-list-item-action>
            <v-icon> {{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
      <v-btn 
      text color="grey"
      @click="userLogout()"
      >
        <span>Logout</span>
        <v-icon 
        right>
          mdi-logout
        </v-icon>
      </v-btn>
    </div>
    </v-app-bar>
    <div v-show="isLogged()" >
      <v-navigation-drawer 
    app
    v-model="drawer">
      <v-container>
        <v-col>
          <v-avatar  size="200">
      <img src="http://4.bp.blogspot.com/-YZI_7MCsyXM/Ur4fi-0BulI/AAAAAAAABaw/ct-7GYHwzrk/s1600/bruxa.jpg" alt="bruxa">
    </v-avatar>
    <v-subheader class="justify-center">Bruxa das Terras Abandonadas</v-subheader>
        </v-col>
      </v-container>
      <v-container>
        <v-col>
          <PopNewProject/>
        </v-col>
        </v-container>
      <v-list >
        <v-list-item 
        v-for="link in getNavBar" 
        :key="link.text" 
        router :to="link.route">
          <v-list-item-action>
            <v-icon> {{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
  </nav>
</template>

<script >
import PopNewProject from './PopNewProject.vue';
import {  mapActions, mapGetters } from 'vuex';
export default {
  components: {
    PopNewProject,
  },
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapActions('auth',['clearAuthToken', 'loginAuth']),
    ...mapGetters('auth', ['getLogin']),
    ...mapGetters('navbar', ['getNavBar']),

  },
  methods: {
    showDrawer() {
      this.drawer = !this.drawer
    },
    isLogged(){
    return this.getLogin
    },
     userLogout(){
      try {
           this.clearAuthToken
           this.$router.push('/login')
            
          } catch (error) {
            alert(`Error: ${error}`);
          }
    }
  }
}
</script>

<style></style>