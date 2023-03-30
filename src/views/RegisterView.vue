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
                    ref="form" 
                    v-model="valid" 
                    lazy-validation
                    >
                        <v-text-field
                        v-model="name"
                        label="Name"
                        required
                        >
                        </v-text-field>

                        <v-text-field 
                        v-model="email" 
                        :rules="emailRules" 
                        label="E-mail"
                         required></v-text-field>
                        <v-text-field 
                        v-model="password" 
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]" 
                        :type="show ? 'text' : 'password'" 
                        name="input-10-1"
                        label="Password" 
                        hint="At least 8 characters" 
                        @click:append="show = !show"></v-text-field>

                        <v-text-field 
                        v-model="password2" 
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]" 
                        :type="show ? 'text' : 'password'" 
                        name="input-10-1"
                        label="Please enter your password again" 
                        hint="At least 8 characters" 
                        @click:append="show = !show"></v-text-field>

                        <v-layout class="mt-3  justify-center ">
                            <v-btn 
                            :disabled="valid" 
                            color="success" 
                            class="mr-4" 
                            @click.prevent="validate">
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
        name:'',
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        password2:'',
        rules: {
            required: value => !value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
        },

    }),

    methods: {
        validate() {
            

            if(this.email == ''|| this.password == '' || !this.email || !this.password){
                return;
            }
            

            console.log('passou');
        }

    },
}
</script>
  
<style></style>