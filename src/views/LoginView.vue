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
                <v-toolbar-title 
                class="text-uppercase grey--text text-center">
                 <span>Login</span>
                </v-toolbar-title>                    
                    <v-form 
                    ref="form" 
                    v-model="valid" 
                    lazy-validation
                    >  
                    <v-row>
                    <v-col cols="6">
                     <v-alert 
                    v-show="error.valid"
                    border="right"
                     colored-border
                     type="error"
                     elevation="2">
                        {{ error.message }}</v-alert>
                        </v-col>
                    </v-row>
                    
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
                            :disabled="validado" 
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
        valid: true,
        show: false,
        formLogin: {
        email: '',
        password: '',
      },
      error:{
       valid: false,
       message:""
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
    computed: {
        validado(){
            return !this.valid
        } 
    },   
    methods: {
        ...mapActions('auth',['loginAuth']),
       validate: async function() {
            if((!this.formLogin.email) || (!this.formLogin.password) || (this.formLogin.password.length < 7)){
                return;
            }          
            try {
                await this.loginAuth(this.formLogin)
                  this.$router.replace(this.$route.query.redirect || '/')     
            } catch (er) {
                return this.error = {
                    valid: true,
                    message: er.response 
                }
            }
    }
}
}
</script>
  
<style></style>