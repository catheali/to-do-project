<template>
	<div class="team">
		<h1 class="subheading grey--text text-center">Team</h1>
		<v-container class="my-5">
			<v-row>
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small outlined v-bind="attrs" v-on="on" class="mr-2" color="grey" @click="sortBy('role')">
							<v-icon left small>
								mdi-script-text-outline</v-icon>
							<span class="caption text-lowercase">
								By project Role</span>
						</v-btn>
					</template>
					<span>Ordenar por cargo </span>
				</v-tooltip>
				<v-tooltip top>
					<template v-slot:activator="{ on, attrs }">
						<v-btn small v-bind="attrs" v-on="on" class="mr-2" outlined color="grey" @click="sortBy('name')">
							<v-icon left small>
								mdi-account</v-icon>
							<span class="caption text-lowercase">By name</span>
						</v-btn>
					</template>
					<span>Ordenar por usuário </span>
				</v-tooltip>
				
			</v-row>
			<v-row v-if="getAllTeam">
	
				
				<v-col cols="12" sm="6" md="4" lg="3" v-for="person in getTeam" :key="person.id">
					<v-card text class="text-center ma-3">
						<v-responsive  class="pt-4">
								<v-img v-if="person.img !== null" :src="person.img" />
							<v-avatar v-else class="profile" tile size="200">
								<v-icon size="150" > mdi-account-circle</v-icon>
							</v-avatar>
						</v-responsive>
						<v-card-text>
							<div class="text-subtitle-1"> {{ person.name }}</div>
							<div class="grey--text">{{ person.role }}</div>
						</v-card-text>
						<v-card-actions class="justify-center">
							<v-btn small depressed color="grey--text"  :href="`mailto:${person.email}`">
								<v-icon small left> mdi-message-text</v-icon>
								<span>Message </span>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
			<v-row v-else>
				<v-col cols="12">
					<v-alert v-show="getError.valid" border="right" colored-border type="error" elevation="2">
						{{ getError.message }}</v-alert>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {

	computed: {
		...mapGetters('team', ['getError']),
		...mapActions('team',['getAllTeam']),
		...mapGetters('team', ['getTeam'])
	},
	methods: {
		sortBy(prop) {
			this.getTeam.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
		}
	}
	
}
</script>

<style></style>