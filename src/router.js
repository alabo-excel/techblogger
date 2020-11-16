import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/home'
import About from './pages/about'
import Login from './pages/login'
import Signup from './pages/signup'
import Blogs from './pages/blogs'
import WriteBlog from './pages/write-blog'
import {
    fb,
    // db
} from './firebase'

// const User = {
//     template: `<div>hello</div>`
// }

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/signup', component: Signup },
    {
        path: '/blogs',
        component: Blogs,
        meta: { requiresAuth: true },

    },
    {
        path: '/write-blog',
        component: WriteBlog,
        meta: { requiresAuth: true },
    },

    // { path: '/users/:1', component: User },

];


const router = createRouter({
    history: createWebHistory(),
    routes,

});

router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth().currentUser


    if (requiresAuth && !currentUser) {
        next({ name: 'Login' })
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;