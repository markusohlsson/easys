import { createApp } from 'vue'
import './assets/style/main.css'
import App from './App.vue'
import router from './router'



router.afterEach((to) => {
  const baseTitle = "Easy's Redovisning"
  if (to.meta.title) {
    document.title = `${to.meta.title} | ${baseTitle}`
  } else if (to.name) {
    document.title = `${to.name} | ${baseTitle}`
  } else {
    document.title = baseTitle
  }
})
createApp(App).use(router).mount('#app')