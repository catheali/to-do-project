<template>
	<v-dialog max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn outlined color="black" v-on="on" dark>Add a new project</v-btn>
		</template>
		<v-card>
			<v-card-title>
				<h3>Add a new project</h3>
				<v-card-text>
					<v-form class="px-3" ref="form">
						<v-text-field label="Title" v-model="title" :rules="rules" prepend-icon="mdi-folder"></v-text-field>
						<v-textarea label="Information" v-model="content" :rules="rules"
							prepend-icon="mdi-pencil"></v-textarea>
						<v-menu max-width="290">
							<template v-slot:activator="{ on }">
								<v-text-field 
								:rules="rules" 
								:value="formattedDate" 
								v-on="on" 
								label="Due date"
								prepend-icon="mdi-calendar-range" 
								slot="activator"></v-text-field>
							</template>
							<v-date-picker v-model="due"></v-date-picker>
						</v-menu>
						<v-select
					  v-model="status"
					  :items="statusChips"
					  item-text="name"
					  item-value="status"
					  label="Status"
					  prepend-icon="mdi-timer"
					  hint="Select the status of the project"
					  persistent-hint>
					  <template v-slot:selection="{ item }" >
							<v-chip :color="`${item.status}`" :class="`v-chip--active white--text caption my-2`">
							<span>{{ item.name }}</span>
							</v-chip>
						</template>
						</v-select>
						
						<v-btn text class="success mx-0 mt-4" @click="submitForm">Add Project</v-btn>
					</v-form>
				</v-card-text>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script >
import moment from 'moment'
export default {
	data() {
		return {
			title: '',
			content: '',
			due: null,
			role: '',
			status: '',
			statusChips: [ 
				{status:'overdue',
				name: "Overdue"},
				{status:'ongoing',
				 name: "On Going"},
				 {status:'complete', name:'Complete'}
				],
			rules: [
				v => v.length >= 3 || 'Minimum length is 3 characters',

			]
		}
	},
	computed: {
		formattedDate() {
			return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
		}
	},
	methods: {
		submitForm() {
			if (this.$refs.form.validate()) {
				console.log(this.title, this.content, this.due, this.status)
			}
		}
	}
}
</script>
<style>

.v-chip.complete {
	background: #3cd1c2;
}

.v-chip.ongoing {
	background: #ffa500;
}

.v-chip.overdue {
	background: #ff475f;
}

</style>
