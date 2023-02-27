import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from './modules/dashboard'
import navigationbar from './modules/navigationbar'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
 modules: {
  dashboard: dashboard,
  navbar: navigationbar,
 }
})
}

export default createStore
