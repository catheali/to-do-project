<template>
   <div class="register" >
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
                 <span>Register now</span>
            </v-toolbar-title>
            <v-form 
            ref="form" 
            class="mx-2" 
            v-model="valid"
            lazy-validation>
            
            <v-row>
            <v-col cols="12">
                <v-text-field 
                v-model="formRegister.name"
                :rules="nameRules"
                label="Full Name">
                </v-text-field>
            </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" >
                    <v-select
                        :items="roles"
                        item-text="text"
                        v-model="formRegister.role"
                        label="What is your role?"
                        ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-file-input
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Send your avatar picture"
                    prepend-icon=""
                    v-model=" formRegister.image"
                    append-icon="mdi-camera"
                    label="Select Avatar"
                  ></v-file-input>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field 
                    v-model="formRegister.email" 
                    :rules="emailRules" 
                    label="Email" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                <v-alert 
                v-show="error.valid"
                border="right"
                colored-border
                 type="error"
                elevation="2">
                {{ error.message }}</v-alert>
                </v-col>
            </v-row>
            <v-row>   
            <v-col 
            cols="6">
                <v-text-field 
                v-model="formRegister.password" 
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
                :rules="passwordRules"
                label="Password" 
                required></v-text-field>
            </v-col>
            <v-col 
            cols="6">
                 <v-text-field 
                v-model="password2" 
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                :rules="passwordRules"
                label="Type password again" 
                required></v-text-field>
            </v-col>
            </v-row>
            <v-checkbox 
            v-model="firstcheckbox" 
            :rules="[v => !!v || 'You must agree to continue!']"
            label="I agree with Terms and Conditions" 
            required></v-checkbox>
            <v-layout class="mt-3  justify-center ">
                <v-btn 
                :disabled="validado" 
                 color="success" 
                 class="mr-4" 
                 @click.prevent="validateRegister">
                <span>Create Account</span>
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
   </div>
    
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data: () => ({
        valid: false,
       formRegister: {
        name: '',
        email: '',
        image: [],
        password: '',
        role:''
       },
       password2:"",
       error:{
       valid: false,
       message:""
       },
       show: false,
       show1: false,
       emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
        ],
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Name must be less than 10 characters',
        ],
        passwordRules: [
            v => !!v || 'Password is required',
			v => v.length >= 8 || 'Min 8 characters',
            v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
        ],
        firstcheckbox: false,
    }),
    computed: {
		...mapGetters('team',['getRoles']),
        validado() {
            return !this.valid
        },
		roles() {
			return this.getRoles
		}
    },
    methods: {
       ...mapActions('auth', ['newUser']),
       validateRegister: async function() {
        
             if( this.formRegister.password !== this.password2){
                this.error = {
                    valid: true,
                    message: "Passwords do not match, check and try again :v "
                }
                return this.error;
             }
             try{ 
                 await this.newUser(this.formRegister);
                 return this.$router.replace('/login');
             }catch(error){
              return  alert(`Error: ${error}`);
             }
        }
    },
}
</script>
  
<style></style>