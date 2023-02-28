<template>
  <nav>
    <v-app-bar 
    flat
    app>
      <v-app-bar-nav-icon 
      @click="showDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title 
      class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>LIST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
      text color="grey">
        <span>Sign out</span>
        <v-icon right>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer 
    app
    v-model="drawer">
      <v-container>
        <v-col>
          <v-avatar  size="200">
      <img src="http://4.bp.blogspot.com/-YZI_7MCsyXM/Ur4fi-0BulI/AAAAAAAABaw/ct-7GYHwzrk/s1600/bruxa.jpg" alt="bruxa">
    </v-avatar>
    <v-subheader class="justify-center">Admin User</v-subheader>
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
  </nav>
</template>

<script >
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapGetters('navbar', ['getNavBar'] )
  },
  methods: {
    showDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style></style>