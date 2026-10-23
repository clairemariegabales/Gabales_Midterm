import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const router = createRouter({
history: createWebHistory(),

scrollBehavior(to, from, savedPosition) {
if (to.hash) {
return { el: to.hash, behavior: 'smooth' }
}
return savedPosition || { top: 0 }
},
routes: [
{
path: '/',
name: 'home',
component: MainPage
}
]
})

export default router