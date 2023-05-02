import API from "../api";
import axios from 'axios';


export default {

	async getAllTeam({ commit }) {
		await axios.get(API + '/users')
			.then(function (res) {
				let users = res.data;
				let team = [];
				users.forEach(element => {
					team.push({
						id: element.id,
						img:  element.image == null ? null : 'http://127.0.0.1:8000/storage/' + element.image,
						name: element.name,
						role: element.role,
						email: element.email
					})
				});
				return commit('newTeamUser', team);
			})
			.catch(function (error) {
				commit(
					'setError', {
					valid: true,
					message: 'Aconteceu algum problema ao buscar seu Team, verifique o erro e entre em contato: ' + error
				})
				return error
			})
	}
}