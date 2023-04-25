<template>
	<v-dialog max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="black" v-on="on" dark>Add a new project</v-btn>
		</template>
		<v-card >
			<v-card-title>
				<h3>Add a new project</h3>
				<v-card-text>
					<v-alert v-show="errorProj.valid" border="right" colored-border type="error" elevation="2">
						{{ errorProj.message }}</v-alert>
						<v-alert v-show="getError.valid" border="right" colored-border type="error" elevation="2">
						{{ getError.message }}</v-alert>
					<v-form class="px-3" ref="form">
						<v-text-field label="Title" v-model="formProj.title" :rules="rules" prepend-icon="mdi-folder"></v-text-field>
						<v-textarea label="Information" v-model="formProj.content" :rules="rules"
							prepend-icon="mdi-pencil"></v-textarea>
						<v-menu max-width="290">
							<template v-slot:activator="{ on }">
								<v-text-field :rules="rules" :value="formattedDate" v-on="on" label="Due date"
									prepend-icon="mdi-calendar-range" slot="activator"></v-text-field>
							</template>
							<v-date-picker v-model="formProj.due"></v-date-picker>
						</v-menu>
						<v-select v-model="formProj.status" :items="statusChips" item-text="name" item-value="status" label="Status"
							prepend-icon="mdi-timer" hint="Select the status of the project" persistent-hint>
							<template v-slot:selection="{ item }">
								<v-chip :color="`${item.status}`" :class="`v-chip--active white--text caption my-2`">
									<span>{{ item.name }}</span>
								</v-chip>
							</template>
						</v-select>

						<v-btn text class="success mx-0 mt-4" @click="createProject">Add Project</v-btn>
					</v-form>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >
import moment from 'moment';
import { mapActions,mapGetters } from 'vuex';
export default {
	data() {
		return {
			formProj:{
				title: '',
				content: '',
				due: null,
				status: '',
			},
			statusChips: [
				{
					status: 'overdue',
					name: "Overdue"
				},
				{
					status: 'ongoing',
					name: "On Going"
				},
				{
					status: 'complete',
					name: 'Complete'
				}
			],
			rules: [
				v => v.length >= 3 || 'Minimum length is 3 characters',
			],
			errorProj: {
				valid: false,
				message: ''
			}
		}
	},
	computed: {
		...mapGetters('dashboard',['getError']),
		formattedDate() {
			return this.formProj.due ? moment(this.formProj.due).format("Do MMMM YYYY") : "";
		},
	},
	methods: {
		...mapActions('dashboard', ['createNewProject']),

		async createProject() {
			if (!this.$refs.form.validate() || !this.formProj.status || this.formProj.due === null) {
				return this.errorProj = {
					valid: true,
					message: "Preencha corretamente os campos do projeto."
				}
			}
			this.cleanError()
			await this.createNewProject(this.formProj);
			alert('Projeto criado com sucesso!');
			
		},
		cleanError(){
			setTimeout(()=>{
					this.errorProj = {
					valid: false,
					message: ""
				}},5000)
		}
	}
}
</script>
<style>
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
