import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', 
    name:"Home",
   component: () => import("@/views/home.vue") },
  { path: '/register', 
    name:"Register",
   component: () => import("@/views/register.vue") },
  { path: '/detect', 
    name:"Detect",
   component: () => import("@/views/detect.vue") },
  { path: '/about', 
    name:"About",
   component: () => import("@/views/about.vue") },
  { path: '/database', 
    name:"Database",
   component: () => import("@/views/database.vue") },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
 