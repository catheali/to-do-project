import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
   icons: {
      iconfont: 'mdi',
   },
   theme: {
      themes: {
         light: {
          primary: '#84ada0',
          success: '#51c94d',
          info: '#face69',
          error: '#f7604f',
          danger: '#E57373',
         
         }
      }
   }
}
      )