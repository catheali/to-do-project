<template>
	<v-dialog v-model="dialog" max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="danger" small v-on="on">Reset Password</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h3 class="subheading grey--text">Reset Password</h3>
				<v-card-text>
					<v-alert v-show="getErrorRstPswd.valid" border="right" colored-border type="error" elevation="2">
						{{ getErrorRstPswd.message }}</v-alert>
					<v-alert v-show="errorRstPswd1.valid" border="right" colored-border type="error" elevation="2">
						{{ errorRstPswd1.message }}</v-alert>
					<v-form class="px-3" ref="form">
						<v-row>
							<v-col cols="12">
							<v-text-field v-model="formRst.oldPassword" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show2 ? 'text' : 'password'" @click:append="show2 = !show2" :rules="passwordRules"
								label="Sua senha antiga " required></v-text-field>
						</v-col>
						</v-row>
						<v-row>
							<v-col cols="6">
							<v-text-field v-model="formRst.password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show ? 'text' : 'password'" @click:append="show = !show" :rules="passwordRules"
								label="Password" required></v-text-field>
						</v-col>
						<v-col cols="6">
							<v-text-field v-model="formRst.password2" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
								:type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" :rules="passwordRules"
								label="Type password again" required></v-text-field>
						</v-col>
						</v-row>
		
						<div class="mt-5 d-flex justify-space-between" >
							<v-btn text class="success" @click.prevent="updatePasswordUser">Update Password</v-btn>
							<v-btn outlined color="danger" @click="closeModal">Cancel</v-btn>
						</div>
						
					</v-form>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >

import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			dialog: false,
			show1: false,
			show: false,
			show2:false,
			formRst: {
				oldPassword: '',
				password: '',
				password2: '',
			},
			errorRstPswd1: {
			valid: false,
			message: ''
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
		...mapActions('auth', ['resetPassword']),
		async updatePasswordUser() {
			if (this.formRst.password == '' && this.formRst.password2 == '' && this.formRst.password !== this.formRst.password2) {
				this.errorRstPswd1 = {
					valid: true,
					message: "Preencha corretamente os campos a serem alterados."
				}
				setTimeout(() => {
					this.errorRstPswd.valid = false;
				}, 5000)
				return;
			} 
				
				await this.resetPassword(this.formRst);
				this.closeModal();
		},
	
		closeModal() {
			this.dialog = !this.dialog;
		}
	}
}
</script>
<style></style>
