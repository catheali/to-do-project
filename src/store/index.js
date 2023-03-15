import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import dashboard from './modules/dashboard'
import navigationbar from './modules/navigationbar'
import team from './modules/team'


Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
 modules: {
  dashboard: dashboard,
  navbar: navigationbar,
  team: team,
  auth: auth
 }
})
}

export default createStore
