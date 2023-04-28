<template>
	<v-dialog v-model="dialog" max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="warning" v-on="on">Edit</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h3 class="subheading grey--text">Reset Password</h3>
				<v-card-text>
					<v-alert v-show="errorRstPswd.valid" border="right" colored-border type="error" elevation="2">
						{{ errorRstPswd.message }}</v-alert>
					<v-form class="px-3" ref="form">
						<v-col cols="6">
							<v-text-field 
							v-model="formRst.password" 
							:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
							:type="show ? 'text' : 'password'"
							@click:append="show = !show"
							:rules="passwordRules"
							label="Password" 
							required></v-text-field>
						</v-col>
						<v-col cols="6">
							<v-text-field 
							v-model="formRst.password2" 
							:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
							:type="show1 ? 'text' : 'password'"
							@click:append="show1 = !show1"
							:rules="passwordRules"
							label="Type password again" 
							required></v-text-field>
						</v-col>

						<div class="mt-5 d-flex justify-space-between ">
							<v-btn text class="success" @click.prevent="alert('uepa')">Update User</v-btn>
							<v-btn outlined color="danger" @click="closeModal">Cancel</v-btn>
						</div>
					</v-form>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >

//import { mapActions } from 'vuex';
export default {
	data() {
		return {
			dialog: false,
			
			formRst: {
				password:'',
				password2: '',
			},
			errorRstPswd: {
				valid: false,
				message: ''
			}
		}
	},
	computed: {


	},
	methods: {
		// ...mapActions('auth', ['updateUser']),
		// async updateInfoUser() {
		// 	if (this.formEdit.name == this.user.name && this.formEdit.role == this.user.role && this.formEdit.img.length === 0) {
		// 		this.errorRstPswd = {
		// 			valid: true,
		// 			message: "Preencha corretamente os campos a serem alterados."
		// 		}
		// 		setTimeout(()=>{
		// 			this.errorRstPswd.valid = false;
		// 		}, 5000)
		// 		return;
		// 	}
		// 	await this.updateUser(this.formEdit);
		// 	this.formEdit = {
		// 		name: this.user.name,
		// 		role: this.user.role,
		// 		img: [],
		// 		id: this.user.id
		// 		};	
		// 	this.closeModal()
		// },
		closeModal() {
			this.dialog = !this.dialog;
		}
	}
}
</script>
<style></style>
