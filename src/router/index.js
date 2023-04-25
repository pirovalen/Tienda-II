import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import LoginView from '../views/LoginView.vue'
import CoursesView from '../views/CoursesView.vue'

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
  {
    path: '/CoursesView',
    name: 'CoursesView',
    component: CoursesView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router