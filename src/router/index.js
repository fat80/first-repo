import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Projects from '../views/Projects'
import Setting from '../views/Setting'
import AboutMe from '../components/AboutMe'
import RecentAct from '../components/RecentAct'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
        children: [{
                path: 'about',
                name: 'AboutMe',
                component: AboutMe,
            },
            {
                path: 'recent',
                name: 'RecentAct',
                component: RecentAct,
            }
        ]
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting
    }
    /*,
       {
           path: '/schedule',
           name: 'Schedule',
           component: Schedule,
           children: [{
                   path: '/about',
                   name: 'AboutMe',
                   component: AboutMe,
               },
               {
                   path: '/recent',
                   name: 'RecentAct',
                   component: RecentAct,
               }
           ]
       },*/
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router