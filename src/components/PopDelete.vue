<template>
	<v-dialog v-model="dialog" max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="danger" v-on="on">Excluir</v-btn>
		</template>
		<v-card >
			<v-card-title>
				<h3>Are you sure ?</h3>
				<v-card-text>
						<div class="mt-5 d-flex justify-space-between ">
						<v-btn  color="danger" dark @click="deleteProject">Delete Project</v-btn>
						<v-btn  outlined color="warning" @click="dialog = false">Cancel</v-btn>
						</div>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >
import { mapActions } from 'vuex'

export default {
	data() {
		return {
			dialog: false,
			errorProj: {
				valid: false,
				message: ''
			}
		}
	},
	computed: {
	},
	methods: {
		...mapActions('dashboard', ['updateProject']),

		async deleteProject() {
			if (!this.$refs.form.validate() || !this.formEdit.status || this.formEdit.due === null) {
				return this.errorProj = {
					valid: true,
					message: "Preencha corretamente os campos do projeto."
				}
			}
			this.cleanError()
			// await this.createNewProject(this.formEdit);
			alert('Projeto editado com sucesso!');
			
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
