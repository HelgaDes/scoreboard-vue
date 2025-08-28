import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Scoreboard from '@/pages/Scoreboard.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/scoreboard', redirect: '/scoreboard?tab=Sales' },
    { path: '/scoreboard', component: Scoreboard },
  ],
})
