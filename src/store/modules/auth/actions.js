import API from "../api";
export default {
   loginAuth(payload){

    console.log(payload)
    fetch(API +'/login',{
        method: 'POST',
        headers: {
         'Content-Type':'application/json',
         'Accept':'application/json',
        },
        body: JSON.stringify(payload)
     })
     .then(response=>response.json())
     .then(res => {
       console.log(res)
     });
   }
}