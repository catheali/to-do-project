<template>
  <div class="projects">
    <h1 class="subheading grey--text text-center">Projects</h1>
    <v-container class="my-5">
  <v-expansion-panels v-if="myProjects" focusable>
     <v-expansion-panel 
      v-for="project in myProjects"
      :key="project.title">
      <v-expansion-panel-header>{{ project.title }} <span class="text-end">
        {{ project.person }}
      </span> 
    </v-expansion-panel-header>
      <v-expansion-panel-content >
        <div class="d-flex justify-space-between " > 
          <div>
            <span class="caption grey--text "> Due by {{ project.due }}</span> 
          </div>
          <div>
            <v-chip 
              small 
              :color="`${project.status}`" 
              :class="`v-chip--active white--text caption my-2 `">
               {{ project.status }}
            </v-chip>
          </div>
        </div>
        <div>
          {{ project.content }}
        </div>
        
      </v-expansion-panel-content>
    </v-expansion-panel> 
  </v-expansion-panels>
  <v-alert v-else
      border="bottom"
      colored-border
      type="warning"
      elevation="2"
    >
      Não há projetos ainda, tente criar um novo.
  </v-alert>
    </v-container>
  </div>
</template>

<script >
import { mapGetters } from 'vuex';
export default {
computed: {
  ...mapGetters('auth',['getUser']),
  ...mapGetters('dashboard',['getProjects']),
  myProjects(){
  let myProjects = this.getProjects.filter(project=>{ 
       return project.person === this.getUser.name
    });
    if (myProjects.length > 0){
      return myProjects
    }else {
      return false
    }
  }
},
}
</script>

<style scoped>

.row {
    margin: 0;
}
.project.complete {
    border-left: 4px solid #3cd1c2;
}
.project.ongoing {
    border-left: 4px solid #ffa500;
}
.project.overdue {
    border-left: 4px solid #ff6347;
}
.v-chip.complete {
    background:  #3cd1c2;
}
.v-chip.ongoing {
    background:  #ffa500;
}
.v-chip.overdue {
    background: #ff475f;
}
</style>