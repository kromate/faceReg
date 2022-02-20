import { createWebHistory, createRouter } from "vue-router";

const routes = [
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
  history: createWebHistory(),
  routes, 
})

export default router