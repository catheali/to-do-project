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
                        v-model="payload.email" 
                        :rules="emailRules" 
                        label="E-mail"
                         required></v-text-field>
                        <v-text-field 
                        v-model="payload.password" 
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]" 
                        :type="show ? 'text' : 'password'" 
                        name="input-10-1"
                        label="Password" 
                        hint="At least 8 characters" 
                        @click:append="show = !show"></v-text-field>
                        <div class="mt-3 text-center">
                            <v-btn 
                            :disabled="valid" 
                            color="success" 
                            class="mr-4" 
                            @click.prevent="getLogin(payload)">
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
import {  mapActions } from "vuex";
export default {
    data: () => ({
        valid: false,
        show: false,
        payload: {
        email: '',
        password: ''},
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        rules: {
            required: value => !value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
        },

    }),

    methods: {
        validate(payload) {
            if((!this.payload.email) || (!this.payload.password) || (this.payload.password.length < 8)){
                return;
            }
            console.log(this.payload)
            mapActions('auth',['getLogin'])
        },
       


    },
}
</script>
  
<style></style>