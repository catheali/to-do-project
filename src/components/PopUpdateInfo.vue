<template>
	<v-dialog v-model="dialog" max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="warning" v-on="on">Edit</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h3 class="subheading grey--text">Update my info</h3>
				<v-card-text>
					<v-form class="px-3" ref="form">
						<v-text-field v-model="formEdit.name" label="Full Name">
						</v-text-field>
						<v-file-input accept="image/png, image/jpeg, image/bmp" placeholder="Send your avatar picture"
							prepend-icon="" append-icon="mdi-camera" label="Alterar Foto"
							v-model="formEdit.img"></v-file-input>
						<v-select :items="roles" item-text="text" v-model="formEdit.role"
							label="What is your role?"></v-select>
						<div class="mt-5 d-flex justify-space-between ">
							<v-btn text class="success" @click.prevent="updateInfoUser">Update User</v-btn>
							<v-btn outlined color="danger" @click="closeModal">Cancel</v-btn>
						</div>
					</v-form>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >

import { mapActions } from 'vuex';
export default {
	props: {
		user: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			dialog: false,
			roles: ['Bailarina', 'BodyBuilder', 'Bruxa', 'King', 'Modelo', 'Ruler', 'Soldier', 'Poet'],
			formEdit: {
				name: this.user.name,
				role: this.user.role,
				img: [],
				id: this.user.id
			},


		}
	},
	computed: {


	},
	methods: {
		...mapActions('auth', ['updateUser']),
		async updateInfoUser() {
			await this.updateUser(this.formEdit);
			alert('Atualizado com sucesso');
			this.closeModal()
		},
		closeModal() {
			this.dialog = !this.dialog;
		}
	}
}
</script>
<style></style>
