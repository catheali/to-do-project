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
      commit(types.SET_USER, payload)
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

   clearAuthToken(){ 
   localStorage.removeItem('AUTH_TOKEN_KEY')
   },

   getUserInfo({dispatch}) {
      if ( !dispatch('isLoggedIn')) {
          return this.getAuthToken()
      }
      },

  logoutUser() {
   this.clearAuthToken()
   }
}