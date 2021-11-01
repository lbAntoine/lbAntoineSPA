import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Projects from '/src/components/Projects.vue'
import Resume from '/src/components/Resume.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: Projects,
        meta: {
            title: 'Projects'
        }
    },
    {
        path: '/Resume',
        name: 'Resume',
        component: Resume,
        meta: {
            title: 'Resume'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to, from) => {
    console.log(from, to);
    document.title = `lbAntoine | ${to.meta.title}`;
})

export default router;