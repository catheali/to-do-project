import API from "../api";
import axios from 'axios';


export default {
  async newUser( payload){
      await axios.post(API+'/users', {
        email: payload.email,
        password: payload.password,
        role: payload.role
      })
     .then(function (res) {
      console.log('usuario criado com sucesso');
      alert('usuario criado com sucesso');
     })
     .catch(function (error) {
     return alert( 'Deu erro:', error.response)       
     });
   },

  

}