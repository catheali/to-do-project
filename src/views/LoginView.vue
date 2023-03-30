<template>
    <v-container>
        <v-row>
            <v-col 
            justify="center" 
            md="4" 
            offset-md="4">
                <v-card 
                elevation="4" 
                outlined 
                class="pa-5">
                    <h1 class="text-center">Login</h1>                    
                    <v-form 
                    ref="form" 
                    v-model="valid" 
                    lazy-validation
                    >                   
                        <v-text-field 
                        v-model="formLogin.email" 
                        :rules="emailRules" 
                        label="E-mail"
                         required></v-text-field>
                        <v-text-field 
                        v-model="formLogin.password" 
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]" 
                        :type="show ? 'text' : 'password'" 
                        name="input-10-1"
                        label="Password" 
                        hint="At least 7 characters" 
                        @click:append="show = !show"></v-text-field>
                        <div class="mt-3 text-center">
                            <v-btn 
                            :disabled="valid" 
                            color="success" 
                            class="mr-4" 
                            @click.prevent="validate">
                                Entrar
                            </v-btn>
                            <v-btn 
                            color="danger"
                            outlined
                            x-small
                            class="mr-4">
                                Esqueci minha Senha
                            </v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>

import { mapActions } from 'vuex';


export default {
    data: () => ({
        valid: false,
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
            min: v => v.length > 8 || 'Min 6 characters',
        },
    }),
   
    methods: {
        ...mapActions('auth',['loginAuth']),
       async validate() {
            if((!this.formLogin.email) || (!this.formLogin.password) || (this.formLogin.password.length < 7)){
                return;
            }          
            try {
                 await this.loginAuth(this.formLogin)
                 this.$router.push('/')
            
            } catch (error) {
                alert(`Error: ${error}`);
            }
    }
}
}
</script>
  
<style></style>