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
     })
     .catch(function (error) {
     return error.response
      
       
     });
   },

   isLogged() {
      let authToken = this.getAuthToken()
      return !!authToken
   },
   setAuthToken({commit}, token){
      commit(types.SET_TOKEN, token);
      Storage.setItem('AUTH_TOKEN_KEY', token);
   },
   getAuthToken(){

   },
   clearAuthToken(){

   },

}