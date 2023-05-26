<template>
	<v-container>
		<v-row>
			<v-col justify="center" md="4" offset-md="4">
				<v-card elevation="4" outlined class="pa-5">
					<v-toolbar-title class="text-uppercase grey--text text-center">
						<span>Login</span>
					</v-toolbar-title>
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-row>
							<v-col cols="12">
								<v-alert v-show="getError.valid" border="right" colored-border type="error" elevation="2">
									{{ getError.message }}</v-alert>
							</v-col>
						</v-row>
						<v-text-field v-model="formLogin.email" :rules="emailRules" label="E-mail" required></v-text-field>
						<v-text-field v-model="formLogin.password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
							:rules="[rules.required, rules.min]" :type="show ? 'text' : 'password'" name="input-10-1"
							label="Password" hint="At least 7 characters" @click:append="show = !show"></v-text-field>
						<div class="mt-3 text-center">
							<v-btn :disabled="validado" color="success" class="mr-4" @click.prevent="validate">
								<span v-if="loading">
									<v-progress-circular indeterminate color="green"></v-progress-circular>
								</span>
								<span v-else>Entrar</span>
							</v-btn>
							<v-tooltip bottom>
								<template v-slot:activator="{ on, attrs }">
									<v-btn color="danger"  v-bind="attrs" v-on="on" outlined x-small class="mr-4">
									Esqueci minha Senha
									</v-btn>
								</template>
								<span>Em breve</span>
							</v-tooltip>
						</div>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
import store from '@/store/index.js';

export default {
	data: () => ({
		valid: true,
		loading: false,
		show: false,
		formLogin: {
			email: '',
			password: '',
		},
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
		],
		rules: {
			required: v => !!v || 'Required.',
			min: v => v.length >= 8 || 'Min 8 characters',
		},
	}),
	computed: {
		...mapGetters('auth', ['getError', 'getLogin']),
		validado() {
			return !this.valid
		},
		
	},
	methods: {
		...mapActions('auth', ['loginAuth']),
		validate: async function () {
			this.loading = true;
			if ((!this.formLogin.email) || (!this.formLogin.password) || (this.formLogin.password.length < 7)) {
				return;
			}
			await this.loginAuth(this.formLogin)
			if (this.getLogin) {
				this.$router.replace(this.$route.query.redirect || '/')
				store('auth').dispatch('auth/getUserInfo');
				
			}
			this.loading = false;
			this.cleanError()
		
		},
		cleanError(){
			setTimeout(()=>{
				store('auth').commit('auth/setError', {
					valid: false,
					message: ''
				})
			}, 5000)
		}
	}
}
</script>
  
<style></style>