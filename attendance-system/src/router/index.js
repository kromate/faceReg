import Home from "@/views/home.vue";

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', 
    name:"Home",
   component: Home },
  { path: '/register', 
    name:"Register",
   component: () => import("@/views/register.vue") },
  { path: '/detect', 
    name:"Detect",
   component: () => import("@/views/detect.vue") },
  { path: '/detect', 
    name:"Detect",
   component: () => import("@/views/detect.vue") },
]


 const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router