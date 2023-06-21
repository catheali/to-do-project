<template>
	<nav>
		<v-app-bar flat app>
			<div v-show="getLogin">
				<v-app-bar-nav-icon @click="showDrawer"></v-app-bar-nav-icon>
			</div>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">TODO</span>
				<span>project</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<div v-show="!getLogin">
				<v-btn outlined color="accent" route :to="{ name: 'register' }">
					<span>New Account</span>
					<v-icon right>
						mdi-account-plus
					</v-icon>
				</v-btn>
			</div>
			<div v-if="getLogin">
				<v-menu offset-y>
					<template v-slot:activator="{ on }">
						<v-btn text v-on="on" color="grey">
							<v-icon left>mdi-menu-down</v-icon>
							<span>menu</span>
						</v-btn>
					</template>
					<v-list>
						<v-list-item v-for="link in getNavBar" :key="link.text" router :to="link.route">
							<v-list-item-action>
								<v-icon> {{ link.icon }}</v-icon>
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title> {{ link.text }}</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-btn text color="grey" @click="userLogout()">
					<span>Logout</span>
					<v-icon right>
						mdi-logout
					</v-icon>
				</v-btn>
			</div>
		</v-app-bar>
		<div v-show="getLogin">
			<v-navigation-drawer app v-model="drawer">
				<v-container>
					<v-col>
						<v-layout class="d-block">
							<v-avatar v-if="getUser.image !== null" size="200">
								<img :src="getUser.image" :alt="getUser.name">
							</v-avatar>
							<v-avatar v-else size="200" >
								<v-icon size="150" > mdi-account-circle</v-icon>
							</v-avatar>
							<div v-if="getUser && getUser !== null" class="text-center">
								<div class="text-subtitle-1"> {{ getUser.name }}</div>
								<div class="grey--text">{{ getUser.role }}</div>
							</div>
						</v-layout>
					</v-col>
				</v-container>
				<v-container>
					<v-col>
						<PopNewProject />
					</v-col>
				</v-container>
				<v-list>
					<v-list-item v-for="link in getNavBar" :key="link.text" router :to="link.route">
						<v-list-item-action>
							<v-icon> {{ link.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title> {{ link.text }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>
		</div>
	</nav>
</template>

<script >
import PopNewProject from './PopNewProject.vue';
import { mapActions, mapGetters } from 'vuex';


export default {
	components: {
		PopNewProject,
	},
	data() {
		return {
			drawer: false,

		}
	},

	computed: {
		...mapGetters('auth', ['getLogin', 'getUser']),
		...mapGetters('navbar', ['getNavBar']),
		...mapActions('auth', ['logoutUser'])
	},
	methods: {
		showDrawer() {
			this.drawer = !this.drawer
			setTimeout(() => {
				this.drawer = !this.drawer
			}, 6000);
		},
		isLogged() {
			return this.getLogin
		},
		userLogout() {
			try {
				this.logoutUser
			} catch (error) {
				alert(`Error: ${error}`);
			}
		}
	}
}
</script>

<style></style>