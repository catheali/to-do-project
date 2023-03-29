import Vue from 'vue'
import VueRouter from 'vue-router'
import  store  from '@/store/index.js'; 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: {
      needsAuth: true
    }
  
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue'),
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      needsAuth: true
    }
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/LoginView.vue'),
   
   
  },
  {
    path:'/register',
    name:'register',
    component:() => import('../views/RegisterView.vue'),
   
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  let needsAuthentication = to.meta.needsAuth
  if(to.name == 'login'){   
    if(authToken() && needsAuthentication){
      next({path: '/'})
    }else {
      next()
    }
  }else{
    if(authToken()){
      next()
    }else{
      next({
        path:'/login',
        query: { redirect: to.fullPath}
    })
    }
  }
})

function authToken() {
  let session = store('auth/isLogged').getters['auth/getLogin']

  if (session.token === '' || session.token === undefined) {
    return false
  }
  return true
}

export default router
