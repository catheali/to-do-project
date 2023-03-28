import API from "../api";
import axios from 'axios';
import * as types from './mutations-types'

export default {
  async loginAuth({commit}, payload){
      await axios.post(API+'/login', {
        email: payload.email,
        password: payload.password
      })
     .then(function (response) {
       this.setAuthToken(response.data.token)
       commit(types.SET_USER, payload)
       commit(types.SET_LOGIN, true)
       this.$router.push('/')
     })
     .catch(function (error) {
     return error.response       
     });
   },

   isLoggedIn() {
      let authToken = this.get
      return !~authToken;
   },

   setAuthToken({commit}, token){
      commit(types.SET_TOKEN, token)
      localStorage.setItem('AUTH_TOKEN_KEY', token)
   },

   getAuthToken() {
      return localStorage.getItem('AUTH_TOKEN_KEY')
   },

   clearAuthToken(){ 
   localStorage.removeItem('AUTH_TOKEN_KEY')
   },

   getUserInfo() {
      if (this.isLoggedIn()) {
          return this.getAuthToken()
      }
      },

  logoutUser() {
   this.clearAuthToken()
   }


}