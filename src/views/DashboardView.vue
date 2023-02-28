<template>
    <div class="dashboard ">
        <h1 class="subheading grey--text">Dashboard</h1>   
        <v-container class="my-5 "> 
            <v-row class="mb-3 ">
                <v-tooltip top>
                <template 
                v-slot:activator="{ on, attrs }">
                <v-btn 
                small 
                outlined
                v-bind="attrs"
                v-on="on"
                class="mr-2"
                color="grey" 
                @click="sortBy('title')">
                    <v-icon 
                    left
                    small>
                    mdi-folder</v-icon>
                    <span class="caption text-lowercase">
                    By project Name</span>
                </v-btn>
                </template>
                <span>Ordenar por titulo </span>
                </v-tooltip>

                <v-tooltip top>
                <template 
                v-slot:activator="{ on, attrs }">
                <v-btn 
                small
                v-bind="attrs"
                v-on="on"
                class="mr-2"
                outlined
                color="grey" 
                @click="sortBy('person')">
                    <v-icon 
                    left 
                    small> 
                    mdi-account</v-icon>
                    <span class="caption text-lowercase">By person</span>
                </v-btn>
                </template>
                <span>Ordenar por usuario </span>
                </v-tooltip>
            </v-row>

          <v-card  
          v-for=" project in getProjects" 
          :key="project.title" 
          flat >
            <v-row 
            wrap 
            :class="` project ${project.status}`" >
                <v-col 
                cols="12" 
                md="6"  >
                    <div class="caption grey--text">Project Title</div>
                    <div>{{project.title}} </div>
                </v-col>
                <v-col 
                cols="6"
                sm="4" 
                md="2">
                    <div class="caption grey--text">Person</div>
                    <div>{{project.person}} </div>
                </v-col>
                <v-col 
                cols="6" 
                sm="4" 
                md="2">
                    <div class="caption grey--text">Due by</div>
                    <div> {{project.due}} </div>
                </v-col>
                <v-col 
                cols="2" 
                sm="4" 
                md="2">
                    <div>
                        <v-chip 
                        small 
                        :color="`${project.status}`" 
                        :class="`v-chip--active white--text caption my-2`">
                            {{ project.status }}
                        </v-chip>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-card> 
        </v-container>
     </div>
    </template>
    
<script>
   import { mapGetters } from 'vuex';
export default {
       
       computed: {
        ...mapGetters('dashboard',['getProjects'])
       },
       methods: {
        sortBy(prop) {
           this.getProjects.sort((a,b)=>a[prop] < b[prop] ? -1 : 1)
        }
       }
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
    border-left: 4px solid orange;
}
.project.overdue {
    border-left: 4px solid tomato;
}
.v-chip.complete {
    background:  #3cd1c2;
}
.v-chip.ongoing {
    background:  orange;
}
.v-chip.overdue {
    background: rgb(255, 71, 95);
}
</style>