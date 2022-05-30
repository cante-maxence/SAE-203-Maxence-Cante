import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'
import prog from '../views/prog.vue'
import Artistes from '../views/Artistes.vue'
import fest from '../views/fest.vue'
import contact from '../views/contact.vue'
import Concert from '../views/Concert.vue'
import MLegal from '../views/MLegal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/prog', name: 'prog', component: prog },
    { path: '/Artistes', name: 'Artistes', component: Artistes },
    { path: '/fest', name: 'fest', component: fest },
    { path: '/contact', name: 'contact', component: contact },
    { path: '/Concert', name: 'Concert', component: Concert },
    { path: '/MLegal', name: 'MLegal', component: MLegal },
  ]
})

export default router
