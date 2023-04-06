export default {
   getLogin(state){
    return state.isLogged
   },
   getToken(state){
      return state.token
   },
   getUser(state){
      return state.user
   }
}