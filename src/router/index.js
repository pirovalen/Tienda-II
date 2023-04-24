import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: "/",
    name: "LoginView",
    component:LoginView
  },
  {
    path: '/HomeView',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/AdminView',
    name: 'AdminView',
    component: AdminView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router