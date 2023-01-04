import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToukouView from '../views/ToukouView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/toukou',
    name: 'toukou',
    component: ToukouView
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
