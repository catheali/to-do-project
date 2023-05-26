import API from "../api";
import axios from 'axios';
import store from '@/store/index.js';

export default {
	async createNewProject({ commit, dispatch }, payload) {
		let user = store('auth').getters['auth/getUser'];
		await axios.post(API + '/projects', {
			title: payload.title,
			content: payload.content,
			status: payload.status,
			due_time: payload.due,
			user_id: user.id,
		})
			.then(async function () {
				await dispatch('getAllProjects');
				await dispatch('getMyProjects', user.id);
			})
			.catch(function (error) {
				commit('setError', {
					valid: true,
					message: error.response.data.error
				})
			})
	},
	async getAllProjects({ commit }) {
		await axios.get(API + '/projects')
			.then(function (res) {
				let project = res.data;
				let projects = [];
				project.forEach(element => {
					projects.push({
						id: element.id,
						userId: element.user_id,
						name: element.name,
						title: element.title,
						content: element.content,
						due: element.due_time,
						status: element.status
					})
				});

				return commit('setProjects', projects);

			})
			.catch(function (error) {
				commit(
					'setError', {
					valid: true,
					message: 'Aconteceu algum problema ao buscar seus Projetos, verifique o erro e entre em contato: ' + error.data.message
				})

				return error
			})
	},
	async getMyProjects({ commit, dispatch }, payload) {
		await axios.get(API + '/projects/' + payload)
			.then(async function (res) {
				let myProject = res.data;
				if(myProject.length > 0){
					let myProjects = [];
					myProject.forEach(element => {
						myProjects.push({
							id: element.id,
							userId: element.user_id,
							name: element.name,
							title: element.title,
							content: element.content,
							due: element.due_time,
							status: element.status
						})
					});
					await dispatch('getAllProjects');
					return commit('setMyProjects', myProjects);
				}
				return commit('setMyProjects', myProject);
			})
			// .catch(function (error) {
			// 	alert(error.message);
			// })
	},
	async updateProject({ dispatch }, payload) {
		let id = payload.id;
		await axios.put(API + '/project/' + id, {
			title: payload.title ? payload.title : null,
			content: payload.content ? payload.content : null,
			status: payload.status ? payload.status : null,
			due_time: payload.due ? payload.due : null,
		}).then(async function () {
			let user = store('auth').getters['auth/getUser'];
			await dispatch('getMyProjects', user.id);
			await dispatch('getAllProjects');
		})
			.catch(function (error) {
				alert('Deu ruim: ' + error.response.data.error);
			})
	},
	async deleteProject({ dispatch}, payload) {
		let user = store('auth').getters['auth/getUser'];
		await axios.delete(API + '/project/' + payload)
			.then(async function () {
				await dispatch('getAllProjects');
				await dispatch('getMyProjects', user.id);
				
			})
			.catch(function (error) {
				
				alert('Deu ruim: ' + error.response.data.error);
			})
	}

}