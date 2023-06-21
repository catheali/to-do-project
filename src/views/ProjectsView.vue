<template>
  <div class="projects">
    <h1 class="subheading grey--text text-center">Projects</h1>
    <v-container class="my-5">
		<v-alert v-if="!myProjects"
      border="bottom"
      colored-border
      type="warning"
      elevation="2"
    >
      Não há projetos ainda, tente criar um novo.
  </v-alert>
  <div v-else>
  <v-expansion-panels  focusable>
	<v-row class="mb-3 ">
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small outlined v-bind="attrs" v-on="on" class="mr-2" color="grey" @click="sortBy('title')">
							<v-icon left small>
								mdi-folder</v-icon>
							<span class="caption text-lowercase">
								By project Title</span>
						</v-btn>
					</template>
					<span>order by Title</span>
				</v-tooltip>
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small v-bind="attrs" v-on="on" class="mr-2" outlined color="grey" @click="sortBy('status')">
							<v-icon left small>
								mdi-timelapse</v-icon>
							<span class="caption text-lowercase">By status</span>
						</v-btn>
					</template>
					<span>order by Status</span>
				</v-tooltip>
			</v-row>
     <v-expansion-panel 
      v-for="project in myProjects"
      :key="project.title">
      <v-expansion-panel-header>{{ project.title }} <span class="text-end">
        <v-chip 
              small 
              :color="`${project.status}`" 
              :class="`v-chip--active white--text caption my-2 `">
               {{ project.status }}
            </v-chip>
      </span> 
    </v-expansion-panel-header>
      <v-expansion-panel-content >
        <div class="d-flex justify-space-between " > 
          <div>
            <span class="caption grey--text "> Due by {{ formatData(project.due) }}</span> 
          </div>
          <div>
           <span> Author: {{ project.name }} </span>
          </div>
        </div>
        <div>
          {{ project.content }}
        </div>
		<v-divider class="mt-5"></v-divider>
		<div class="mt-5 d-flex justify-space-between ">
		<PopEditProject :project="project"/>
		<PopDelete :id="project.id"/>
		</div>
      </v-expansion-panel-content>
    </v-expansion-panel> 
  </v-expansion-panels>
</div>
    </v-container>
  </div>
</template>

<script >
import { mapGetters, mapActions } from 'vuex';
import PopEditProject from '@/components/PopEditProject.vue';
import PopDelete from '@/components/PopDelete.vue';
export default {
	components:{
		PopEditProject,
		PopDelete
	},
	created(){
		this.getProjects()
	},
	computed: {
  ...mapGetters('auth',['getUser']),
  ...mapGetters('dashboard',['getAllMyProjects']),
  myProjects(){
    let myProjects = this.getAllMyProjects;
    if (myProjects.length > 0){
			myProjects.forEach(project => {
				project.title = project.title.charAt(0).toUpperCase() + project.title.slice(1);
			});
      return myProjects
    }else {
      return false
    }
  }
},
methods:{
	...mapActions('dashboard', ['getMyProjects']),
	getProjects(){
		let user = this.getUser.id
		this.getMyProjects(user)
	},
	sortBy(prop) {
			this.myProjects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
	},
	formatData(data) {
				let str = data;
				let ano = str.substring(0, 4)
				let mes = str.substring(5, 7)
				let dia = str.substring(8,10)
				return dia+ '/'+ mes+'/'+ano;
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