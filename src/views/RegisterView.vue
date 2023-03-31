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
                    <h1 class="text-center">Register Now</h1>

                    <v-form  
                    v-model="valid" 
                    lazy-validation
                    >
                        <v-text-field
                        v-model="formRegister.name"
                        label="Name"
                        required
                        >
                        </v-text-field>

                        <v-select
                        :items="roles"
                        item-text="text"
                        v-model="formRegister.role"
                        label="What is your role?"
                        ></v-select>

                        <v-text-field 
                        v-model="formRegister.email" 
                        :rules="emailRules" 
                        label="E-mail"
                         required></v-text-field>
                        <v-text-field 
                        v-model="formRegister.password" 
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required]" 
                        :type="show ? 'text' : 'password'" 
                        name="input-10-1"
                        label="Password" 
                        hint="At least 8 characters" 
                        @click:append="show = !show"></v-text-field>

                        <v-text-field 
                        v-model="password2" 
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required]" 
                        :type="show ? 'text' : 'password'" 
                        name="input-10-1"
                        label="Please enter your password again" 
                        hint="At least 8 characters" 
                        @click:append="show1 = !show1"></v-text-field>

                        <v-layout class="mt-3  justify-center ">
                            <v-btn 
                            :disabled="valid" 
                            color="success" 
                            class="mr-4" 
                            @click.prevent="validateRegister">
                               Create account
                            </v-btn>

                            <v-btn 
                            color="primary"
                            outlined
                            x-small
                            :to="{name:'login'}"
                            class="mt-3 ">
                                Login in 
                            </v-btn>
                        </v-layout>

                    </v-form>
                </v-card>

            </v-col>

        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data: () => ({
        valid: false,
        show: false,
        show1:false,
        formRegister: {
            name:'',
            role:'',
            email: '',
            password:''
        },
        password2:'',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        roles: ['espero que nao saibam quem sou', 'seremos rapidos como um rio'],
       
        rules: {
            required: value => !value || 'Required.'
           
        },
    }),
    computed: {
       
    },
     methods: {
        validateRegister() {
            

            if(this.email == ''|| this.password == '' || !this.email || !this.password){
                return console.log(this.formRegister)
             }
            

            console.log('passou');
        }

    },
}
</script>
  
<style></style>