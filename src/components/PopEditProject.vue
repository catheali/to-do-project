<template>
	<v-dialog v-model="dialog" max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="warning" v-on="on" dark>Edit</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h3>Update project</h3>
				<v-card-text>
					<v-alert v-show="errorProj.valid" border="right" colored-border type="error" elevation="2">
						{{ errorProj.message }}</v-alert>
					<v-alert v-show="getError.valid" border="right" colored-border type="error" elevation="2">
						{{ getError.message }}</v-alert>
					<v-form class="px-3" ref="form">
						<v-text-field label="Title" v-model="formEdit.title" :rules="rules"
							prepend-icon="mdi-folder"></v-text-field>
						<v-textarea label="Information" v-model="formEdit.content" :rules="rules"
							prepend-icon="mdi-pencil"></v-textarea>
						<v-menu max-width="290">
							<template v-slot:activator="{ on }">
								<v-text-field :rules="rules" :value="formattedDate" v-on="on" label="Due date"
									prepend-icon="mdi-calendar-range" slot="activator"></v-text-field>
							</template>
							<v-date-picker v-model="formEdit.due"></v-date-picker>
						</v-menu>
						<v-select v-model="formEdit.status" :items="statusChips" item-text="name" item-value="status"
							label="Status" prepend-icon="mdi-timer" hint="Select the status of the project" persistent-hint>
							<template v-slot:selection="{ item }">
								<v-chip :color="`${item.status}`" :class="`v-chip--active white--text caption my-2`">
									<span>{{ item.name }}</span>
								</v-chip>
							</template>
						</v-select>
						<div class="mt-5 d-flex justify-space-between ">
							<v-btn text class="success" @click.prevent="updateProjectId">Update Project</v-btn>
							<v-btn outlined color="danger" @click="closeModal">Cancel</v-btn>
						</div>
					</v-form>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >
import moment from 'moment';
import { mapActions, mapGetters } from 'vuex';
export default {
	props: {
		project: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			dialog: false,
			formEdit: {
				title: this.project.title,
				content: this.project.content,
				due: this.project.due,
				status: this.project.status,
				id: this.project.id
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
		...mapGetters('dashboard', ['getError']),
		formattedDate() {
			return this.formEdit.due ? moment(this.formEdit.due).format("Do MMMM YYYY") : "";
		},
		
	},
	methods: {
		...mapActions('dashboard', ['updateProject']),

		async updateProjectId() {
			await this.updateProject(this.formEdit);
			alert('Projeto editado com sucesso!');
			this.closeModal()
		},	
		closeModal(){
			this.dialog = !this.dialog;
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
