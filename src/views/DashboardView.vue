<template>
	<div class="dashboard ">
		<h1 class="subheading grey--text text-center">Dashboard</h1>
		<v-container v-if="getAllProjects" class="my-5 ">
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
					<span>Ordenar por título </span>
				</v-tooltip>
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small v-bind="attrs" v-on="on" class="mr-2" outlined color="grey" @click="sortBy('name')">
							<v-icon left small>
								mdi-account</v-icon>
							<span class="caption text-lowercase">By person</span>
						</v-btn>
					</template>
					<span>Ordenar por usuário </span>
				</v-tooltip>
			</v-row>
			<v-card v-for=" project in getProjects" :key="project.title" flat>
				<v-row wrap :class="` project ${project.status}`">
					<v-col cols="12" md="6">
						<div class="caption grey--text">Project Title</div>
						<div>{{ project.title }} </div>
					</v-col>
					<v-col cols="6" sm="4" md="2">
						<div class="caption grey--text">Person</div>
						<div>{{ project.name }} </div>
					</v-col>
					<v-col cols="6" sm="4" md="2">
						<div class="caption grey--text">Due by</div>
						<div> <span>{{ project.due }}</span> </div>
					</v-col>
					<v-col cols="2" sm="4" md="2">
						<div>
							<v-chip small :color="`${project.status}`" :class="`v-chip--active white--text caption my-2`">
								{{ project.status }}
							</v-chip>
						</div>
					</v-col>
				</v-row>

				<v-divider></v-divider>
			</v-card>
		</v-container>
		<v-container v-else>
			<v-alert border="right" colored-border type="error" elevation="2"> Parece que ninguém criou nenhum projeto...
			</v-alert>
		</v-container>
		<v-alert v-show="getError.valid" border="right" colored-border type="error" elevation="2">
			{{ getError.message }}</v-alert>
	</div>
</template>
    
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	created() {

	},
	computed: {
		...mapGetters('dashboard', ['getProjects', 'getError']),
		...mapActions('dashboard', ['getAllProjects']),

	},
	methods: {
		sortBy(prop) {
			this.getProjects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
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
	background: #3cd1c2;
}

.v-chip.ongoing {
	background: #ffa500;
}

.v-chip.overdue {
	background: #ff475f;
}
</style>