import API from "../api";
import axios from 'axios';
import * as types from './mutations-types'

export default {
  async loginAuth({commit, dispatch}, payload){
      await axios.post(API+'/login', {
        email: payload.email,
        password: payload.password
      })
     .then(function (res) {
      commit(types.SET_USER, res.data.user)
      dispatch('setAuthToken', res.data.token)
      commit(types.SET_LOGIN, true) 
     })
     .catch(function (error) {
     return error.response       
     });
   },

   isLoggedIn({getters}) {
      let authToken = this.getAuthToken()
      let tokenValid = getters.getLogin
      if( authToken && tokenValid ){
         return true;
      }else{
         return false;
      }
   },

   setAuthToken({commit},token){
      localStorage.setItem('AUTH_TOKEN_KEY', token)
      commit(types.SET_TOKEN, token);
   },

   getAuthToken() {
      return localStorage.getItem('AUTH_TOKEN_KEY')
   },

   clearAuthToken({commit}){ 
   localStorage.removeItem('AUTH_TOKEN_KEY')
   commit(types.SET_TOKEN, '')
   commit(types.SET_LOGIN, false)
   commit(types.SET_USER, null)
   },

   getUserInfo({dispatch}) {
      if ( !dispatch('isLoggedIn')) {
          return this.getAuthToken()
      }




      },
   async newUser( {commit}, payload){
            await axios.post(API+'/users', {
               name:payload.name,
               email: payload.email,
               password: payload.password,
               role: payload.role
            })
            .then(function (res) {
             commit('team/newTeamUser',{
               name: payload.name,
               role:payload.email ,
             }, {root:true});
            alert('usuario criado com sucesso', res);
            })
            .catch(function (error) {
            return alert( 'Deu erro:', error.response)       
            });
         },



}