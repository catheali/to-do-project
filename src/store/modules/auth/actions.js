import API from "../api";
import axios from 'axios';
import * as types from './mutations-types';
import router from "@/router";
import store from '@/store/index.js';

export default {
	async loginAuth({ commit, dispatch }, payload) {
		await axios.post(API + '/login', {
			email: payload.email,
			password: payload.password
		})
			.then(function (res) {
				dispatch('setAuthToken', res.data.token)
				commit(types.SET_LOGIN, true)
			})
			.catch(function (error) {
				return commit('setError', {
					valid: true,
					message: error.response.data.error
				})
			});
	},

	async isLoggedIn({ getters, dispatch }) {
		let authToken = await dispatch('getAuthToken')
		let tokenValid = getters.getLogin
		if (authToken && tokenValid) {
			return true;
		} else {
			return false;
		}
	},

	setAuthToken({ commit }, token) {
		localStorage.setItem('AUTH_TOKEN_KEY', token)
		commit(types.SET_TOKEN, token);
	},

	getAuthToken() {
		return localStorage.getItem('AUTH_TOKEN_KEY')
	},

	clearAuthToken({ commit }) {
		localStorage.removeItem('AUTH_TOKEN_KEY')
		commit(types.SET_TOKEN, '')
		commit(types.SET_LOGIN, false)
		commit(types.SET_USER, '')
	},

	async getUserInfo({ dispatch, commit }) {
		let token = await dispatch('getAuthToken');
		await axios.get(API + '/me', {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		}).then(function (res) {

			commit(types.SET_USER, {
				id: res.data.id,
				name: res.data.name,
				role: res.data.role,
				email: res.data.email,
				image: res.data.image == null ? null : 'http://127.0.0.1:8000/storage/' + res.data.image,
			})
			commit(types.SET_LOGIN, true)
			dispatch('setAuthToken', token)

		}).catch( async function(error){
			alert("Faça login novamente :" + error)
			await dispatch('clearAuthToken')
			router.push('/login')
		})

	},

	async newUser({ dispatch }, payload) {
		await axios.post(API + '/users', {
			name: payload.name,
			image: payload.image,
			email: payload.email,
			password: payload.password,
			role: payload.role
		}, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then( async function (res) {
			await dispatch('team/getAllTeam', { root: true });
				alert('usuario criado com sucesso', res);
			})
			.catch(function (error) {
				return alert('Deu erro:', error.response)
			});
	},

	async updateUser({dispatch}, payload) {
		let id = payload.id;
		await axios.post(API + '/user/' + id, {
			name: payload.name,
			image: payload.img === [] ? null : payload.img ,
			role: payload.role,
		}, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}})
			.then(async function () {
				//await dispatch('team/getAllTeam', { root: true});
				await dispatch('getUserInfo');
				alert('Atualizado com sucesso');
			})
			.catch(function (error){
				return alert('Deu erro:', error.response);
			})
	},
	
	async resetPassword({commit,dispatch}, payload){
		let token = await dispatch('getAuthToken');
		let user = store('auth').getters['auth/getUser'];
		let id = user.id;
		await axios.post(API + '/user/resetpassword/'+ id,{
			email: user.email,
			password: payload.oldPassword,
			newPassword: payload.password
		}, {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		}).then(function (res) {
			alert('Senha alterada com sucesso!')
			console.log(res);
		})
		.catch(function(error){
			commit('setPswError', {
				valid: true,
				message: error.response.data.error
			});
			return setTimeout(() => {
				commit('setPswError', {
					valid: false,
					message: ''
				})
			}, 5000)
			
		})
	}

}