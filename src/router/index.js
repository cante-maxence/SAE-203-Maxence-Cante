import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'
import prog from '../views/prog.vue'
import Artistes from '../views/Artistes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/prog', name: 'prog', component: prog },
    { path: '/Artistes', name: 'Artistes', component: Artistes },
  ]
})

export default router
