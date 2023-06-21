<template>
	<div>
		<h1 class="subheading grey--text text-center">My Account</h1>
		<v-card class="mx-auto my-5" max-width="800" outlined>
			<v-container >
				<v-row class="justify-center ma-2">
					<v-avatar v-if="getUser.image !== null" size="200">
						<img :src="getUser.image" :alt="getUser.name">
					</v-avatar>
					<v-avatar v-else size="200">
						<v-icon size="150"> mdi-account-circle</v-icon>
					</v-avatar>
				</v-row>
				<v-row>
					<v-card >
						<v-toolbar flat width="800">
							<v-toolbar-title class="flex text-center"> {{ getUser.name }}</v-toolbar-title>
						</v-toolbar>
						<v-tabs vertical>
							<v-tab class="d-flex justify-start">
								<v-icon left>
									mdi-account
								</v-icon>
								<span class="text-right">Account</span>
							</v-tab>
							<v-tab class="d-flex justify-start">
								<v-icon left>
									mdi-gavel
								</v-icon>
								<span class="text-right">Admin options</span>
							</v-tab>
							<v-tab class="d-flex justify-start">
								<v-icon left>
									mdi-lock
								</v-icon>
								<span class="text-right">Security</span>
							</v-tab>
							<v-tab class="d-flex justify-start mb-5">
								<v-icon left>
									mdi-access-point
								</v-icon>
								<span class="text-right">Advanced options</span>
							</v-tab>
							<v-tab-item v-if="getUser" class="mb-5">
								<v-card  flat>
									<v-card-text>
										<v-row>
											<v-col cols="11">
												<v-text-field :value="getUser.name" label="Full Name" readonly>
												</v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col cols="11">
												<v-text-field  item-text="text" :value="getUser.role" readonly
													label="What is your role?"></v-text-field>
											</v-col>
										</v-row>
										<v-row>
											<v-col cols="11" class="d-flex justify-space-between ">
											<span>Change personal information and avatar:</span>
											<PopUpdateInfo :user="getUser"/>
										</v-col>
										</v-row>
									</v-card-text>
								</v-card>
							</v-tab-item>
							<v-tab-item></v-tab-item>
							<v-tab-item class="mb-5">
								<v-card flat>
									<v-card-text>
										<v-col cols="11" class="d-flex justify-space-between ">
											<span>Change Password:</span>
											<PopResetPassword/>
										</v-col>
										<v-divider width="94%"></v-divider>
									</v-card-text>
								</v-card>
							</v-tab-item>
							<v-tab-item class="mb-5">
								<v-card flat>
									<v-card-text>
									<v-col cols="11" class="d-flex justify-space-between">
										<span>Delete account</span>
										<PopDeleteUser/>
									</v-col>		
									<v-divider width="94%"></v-divider>
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
import PopUpdateInfo from '@/components/PopUpdateInfo.vue';
import PopResetPassword from '@/components/PopResetPassword.vue';
import PopDeleteUser from '@/components/PopDeleteUser.vue';
export default {
	components:{
		PopUpdateInfo,
		PopResetPassword,
		PopDeleteUser
	},
	computed: {
		...mapGetters('auth', ['getUser']),
		
	},
	
}
</script>

<style></style>