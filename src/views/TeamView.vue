<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>
        <v-container class="my-5">
            <v-row>
                <v-col 
                 cols="12" 
                 sm="6" 
                 md="4" 
                 lg="3"
                 v-for="person in getTeam"
                 :key="person.name">
                    <v-card
                    text
                    class="text-center ma-3">
                    <v-responsive class="pt-4">
                        <v-img :src="person.img"/>
                    </v-responsive>
                    <v-card-text>
                        <div class="text-subtitle-1"> {{ person.name }}</div>
                        <div class="grey--text">{{ person.role }}</div>
                    </v-card-text>
                     <v-card-actions>
                        <v-btn 
                        small
                        depressed
                        color="grey--text">
                        <v-icon   small left> mdi-message-text</v-icon>
                        <span> message</span>
                    </v-btn>
                     </v-card-actions>
                    </v-card>                
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('team',['getTeam'])
    }    
}
</script>

<style>


</style>