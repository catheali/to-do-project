import Vue from 'vue'
import VueRouter from 'vue-router'
import  store  from '@/store/index.js'; 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
   
  
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue'),
  
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      allowAnonymous: true
    }
   
  },
  {
    path:'/register',
    name:'register',
    component:() => import('../views/RegisterView.vue'),
    meta: {
      allowAnonymous: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( async (to, from, next)=>{
  let vamover = await authToken();
  if (to.name == 'login' && vamover) {
    next({ path: '/' })
}
else if (!to.meta.allowAnonymous && !vamover) {
    next({
        path: '/login',
       query: {redirect:to.fullPath }
    })
}
else {
    next()
}
})

  
async function authToken() {
  let session = store('auth').getters['auth/getLogin'];
  let tokenSession = await store('auth').dispatch('auth/getAuthToken');
  let tokenState = store('auth').getters['auth/getToken'];

  if ((!session || session === undefined) && (!tokenSession && !tokenState)) {
    return false;
  }
  if(session && (tokenSession === tokenState)){
  return true;
}
}

export default router
