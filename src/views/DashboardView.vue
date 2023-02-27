<template>
    <div class="dashboard">
        <h1 class="subheading grey--text">Dashboard</h1>   
        <v-container class="my-5 ">  
          <v-card v-for=" project in getProjects" :key="project.title" flat class="px-3">
            <v-row wrap>
                <v-col cols="12" md="6" :class="`pl-3 project ${project.status}`">
                    <div class="caption grey--text">Project Title</div>
                    <div>{{project.title}} </div>
                </v-col>
                <v-col cols="6" sm="4" md="2">
                    <div class="caption grey--text">Person</div>
                    <div>{{project.person}} </div>
                </v-col>
                <v-col cols="6" sm="4" md="2">
                    <div class="caption grey--text">Due by</div>
                    <div> {{project.due}} </div>
                </v-col>
                <v-col cols="4" sm="4" md="2">
                    <div class="caption grey--text">Status</div>
                    <div>{{project.status}}</div>
                </v-col>
            </v-row>
          </v-card> 
        </v-container>
     </div>
    </template>
    
<script>
   import { mapGetters } from 'vuex';
export default {
       computed: {
        ...mapGetters('dashboard',['getProjects'])
       }
    }
</script>
    