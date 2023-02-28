<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="project in getProjects"
      :key="project.title">
      <v-expansion-panel-header>{{ project.title }} <span class="text-end">
        {{ project.person }}
      </span></v-expansion-panel-header>
      <v-expansion-panel-content >
        <div> <span class="caption grey--text "> Due by {{ project.due }}</span> </div>
        <div>
          {{ project.content }}
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

    </v-container>
  </div>
</template>

<script >
import { mapGetters } from 'vuex';
export default {
computed: {
  ...mapGetters('dashboard',['getProjects'])
},

}
</script>

<style>

</style>