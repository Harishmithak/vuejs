import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CompositionView from '../views/CompositionView.vue'
import RefView from '../views/RefView.vue'
import Initialstate from '../views/InitialstateView.vue'
import CrudView from '../views/CrudView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/contact',
    name:'contact',
    component: ContactView
  },
  {
    path:'/composition',
    name:'composition',
    component: CompositionView
  },
  {
    path:'/ref',
    name:'ref',
    component: RefView
  },
  {
    path:'/initial',
    name:'initial',
    component: Initialstate
  },
  {
    path:'/crud',
    name:'crud',
    component: CrudView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
