<template>
	<v-dialog v-model="dialog" max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="danger" small v-on="on">Excluir</v-btn>
		</template>
		<v-card >
			<v-card-title>
				<h4 class=" grey--text"> Tem certeza que gostaria de excluir seu usuário permanentemente? </h4>
				<v-card-text>
					<v-alert v-show="getErrorRstPswd.valid" border="right" colored-border type="error" elevation="2">
						{{ getErrorRstPswd.message }}</v-alert>
						<v-row>
							<v-col cols="12">
							<v-text-field v-model="validate.password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show ? 'text' : 'password'" @click:append="show = !show" :rules="passwordRules"
								label="Confirme sua senha" required></v-text-field>
						</v-col>
						</v-row>
						<div class="mt-5 d-flex justify-space-between ">
						<v-btn  color="danger" dark @click="deleteUserById">Sim</v-btn>
						<v-btn  outlined color="warning" @click="closeModal">Cancel</v-btn>
						</div>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >
import { mapActions, mapGetters } from 'vuex'

export default {
	
	data() {
		return {
			show: false,
			dialog: false,
			validate: {
				password: ''
			},
			passwordRules: [
				v => !!v || 'Required.',
				v => v.length > 8 || 'Min 8 characters',
			]
		
		}
	},
	computed: {
		...mapGetters('auth', ['getErrorRstPswd'])
	},
	methods: {
		...mapActions('auth', ['deleteUser']),

		async deleteUserById() {

			await this.deleteUser(this.validate);
			
		},	
		closeModal(){
			this.dialog = !this.dialog;
		}
	}
}
</script>
<style>

</style>
