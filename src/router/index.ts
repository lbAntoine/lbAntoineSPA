import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Projects from '/src/components/Projects.vue'
import Resume from '/src/components/Resume.vue'
import Contact from '/src/components/Contact.vue'

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
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router