import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/Accueil.vue'
import prog from '../views/prog.vue'
import Artistes from '../views/Artistes.vue'
import fest from '../views/fest.vue'
import contact from '../views/contact.vue'
import Concert from '../views/Concert.vue'
import MLegal from '../views/MLegal.vue'
import page404 from '../views/page404.vue'
import GDS from '../views/GDS.vue'
import ListeArtistes from '../views/ListeArtistes.vue'
import ListeParticipant from '../views/ListeParticipant.vue'
import CreateArtistView from '../views/CreateArtistView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/prog', name: 'prog', component: prog },
    { path: '/artistes', name: 'Artistes', component: Artistes },
    { path: '/fest', name: 'fest', component: fest },
    { path: '/contact', name: 'contact', component: contact },
    { path: '/concert', name: 'Concert', component: Concert },
    { path: '/GDS', name: 'GDS', component: GDS },
    { path: '/MLegal', name: 'MLegal', component: MLegal },
    { path: '/:pathMatch(.*)*', name: 'page404', component: page404 },
    { path: '/ListeParticipant', name: 'ListeParticipant', component: ListeParticipant },
    { path: '/CreateArtistView', name: 'CreateArtistView', component: CreateArtistView },
    { path: '/ListeArtistes', name: 'ListeArtistes', component: ListeArtistes },
  ]
})

export default router
