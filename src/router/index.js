import { createRouter, createWebHistory } from 'vue-router'
import TheHomePage from '../views/TheHomePage.vue'
import TheAboutPage from '../views/TheAboutPage.vue'

const routes = [
    {
        path: '/',
        component: TheHomePage,
    },
    {
        path: '/about',
        component: TheAboutPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router