import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Projects from '/src/components/Projects.vue'
import Resume from '/src/components/Resume.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: Resume,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router