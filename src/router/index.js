import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/Dashboard.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () =>
            import ('../views/Projects.vue')
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () =>
            import ('../views/Setting.vue')
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: () =>
            import ('../components/Schedule.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () =>
            import ('../components/Contacts.vue')
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () =>
            import ('../components/Orders.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router