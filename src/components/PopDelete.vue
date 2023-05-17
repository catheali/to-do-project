<template>
	<v-dialog v-model="dialog" max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="danger" small v-on="on">Excluir</v-btn>
		</template>
		<v-card >
			<v-card-title>
				<h3 class="subheading grey--text">Are you sure you wanna delete this project?</h3>
				<v-card-text>
						<div class="mt-5 d-flex justify-space-between ">
						<v-btn  color="danger" dark @click="deleteProjectById">Delete Project</v-btn>
						<v-btn  outlined color="warning" @click="closeModal">Cancel</v-btn>
						</div>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >
import { mapActions } from 'vuex'

export default {
	props: {
		id: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			dialog: false,
		
		}
	},
	methods: {
		...mapActions('dashboard', ['deleteProject']),

		async deleteProjectById() {
			await this.deleteProject(this.id);
			alert('Projeto excluido com sucesso!');
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
