import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Faq from '../views/Faq.vue'
import ServiceModal from '../views/ServiceModal.vue'
import Privacy from '../views/Privacy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Hem' } },
  { 
    path: '/tjanster', 
    name: 'Services', 
    component: Services,
    meta: { title: 'Tjänster' },
    children: [
      { path: ':id', name: 'SelectedService', component: ServiceModal }
    ]
  },
  { path: '/kontakt', name: 'Contact', component: Contact, meta: { title: 'Kontakt' }},
  { path: '/om', name: 'About', component: About, meta: { title: 'Om' }},
  { path: '/faq', name: 'Faq', component: Faq, meta: { title: 'FAQ' }},
  { path: '/integritetspolicy', name: 'Privacy', component: Privacy, meta: { title: 'Integritetspolicy'}}
]

const router = createRouter({
  history: createWebHistory(),
scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.path === "/tjanster") {
    if (from.path.startsWith("/tjanster/")) {
      return false;
    }
    return { top: 0 };
  }

  if (to.path.startsWith("/tjanster/") && from.path === "/tjanster") {
    return false;
  }

  return { top: 0 };
},
  routes,
})

export default router
