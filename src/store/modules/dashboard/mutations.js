export default {
	setError(state, payload) {
		state.error = payload;
	},
	setProjects(state,payload){
		state.projects = payload;
	},
	setMyProjects(state,payload){
		state.myProjects = payload;
	}
}