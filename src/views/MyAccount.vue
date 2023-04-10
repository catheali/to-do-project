<template>
<div>
  <h1 class="subheading grey--text text-center">Minha conta</h1>
  <v-card class="mx-auto my-5"
    max-width="800"
    outlined >
    <v-container >
      <v-row class="justify-center ma-2">
          <v-avatar  
          size="150"
          left>
            <img src="http://4.bp.blogspot.com/-YZI_7MCsyXM/Ur4fi-0BulI/AAAAAAAABaw/ct-7GYHwzrk/s1600/bruxa.jpg" alt="bruxa">
          </v-avatar>
      </v-row>
      <v-row>
        <v-card>
    <v-toolbar
      flat
      width="800"
    >
      <v-toolbar-title class="flex text-center"> {{ getUser.name }}</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        Option 1
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        Option 2
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-access-point
        </v-icon>
        Option 3
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-row>
            <v-col cols="11">
                <v-text-field 
               :value="getUser.name"
                label="Full Name">
                </v-text-field>
            </v-col>
            </v-row>
            <p> Talvez implementar um apelido ?</p>
            <v-row>
                <v-col cols="11">
                    <v-file-input
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Send your avatar picture"
                    prepend-icon=""
                    append-icon="mdi-camera"
                    label="Alterar Foto"
                  ></v-file-input>
                </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Implementar um input de alterar a senha
            </p>
            <p>
              Implementar um select de alterar o role (a carreira)
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Talvez um excluir conta 
            </p>
            <p>
            i never wanna miss u again
            </p>

            <p class="mb-0">
              nothing
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
      </v-row>
    </v-container>
  </v-card>

</div>
  

</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
  
}),
computed: {
    ...mapGetters('auth', ['getUser']),

  },
}
</script>

<style>



</style>