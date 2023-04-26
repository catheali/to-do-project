import API from "../api";
import axios from 'axios';
import store from '@/store/index.js';

export default {
	async createNewProject({ commit,dispatch }, payload) {
		let user = store('auth').getters['auth/getUser'];
		await axios.post(API + '/projects', {
			title: payload.title,
			content: payload.content,
			status: payload.status,
			due_time: payload.due,
			user_id: user.id,
		})
		.then(async function(){
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
	async getMyProjects({commit}, payload){
		await axios.get(API + '/projects/'+ payload)
			.then(function (res) {
				let myProject = res.data;
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
				return commit('setMyProjects', myProjects);
			})
			.catch(function (error) {
				return console.log(error.message);
			})
	},
	async updateProject({ dispatch }, payload) {
		let id = payload.id;
		await axios.post(API + '/projects/'+ id, {
			title: payload.title ? payload.title : null ,
			content: payload.content ? payload.content : null,
			status: payload.status ? payload.status : null,
			due_time: payload.due ? payload.due : null,
		}).then( async function(){
			let user = store('auth').getters['auth/getUser'];
			await dispatch('getMyProjects', user.id);
			await dispatch('getAllProjects');
		})
		.catch(function (error) {
					console.log('Deu ruim: '+ error.response.data.error)
				
			})
	},
	async 




}