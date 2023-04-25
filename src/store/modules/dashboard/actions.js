import API from "../api";
import axios from 'axios';
import store from '@/store/index.js';

export default {
	async createNewProject({ commit }, payload) {
		let user = store('auth').getters['auth/getUser'];
		await axios.post(API + '/projects', {
			title: payload.title,
			content: payload.content,
			status: payload.status,
			due_time: payload.due,
			user_id: user.id,
		}).catch(function (error) {
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
	}

}