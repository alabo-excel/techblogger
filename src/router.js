import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/home'
import About from './pages/about'
import Login from './pages/login'
import Signup from './pages/signup'
import Blogs from './pages/blogs'
import WriteBlog from './pages/write-blog'
// import { fb } from './firebase'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    {
        path: '/blogs',
        component: Blogs,
        // meta: { requiresAuth: true },

    },
    { path: '/write-blog', component: WriteBlog },


];

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes,

});

// router.beforeEach((to) => {
//     if (to.meta.requiresAuth && fb.auth.isLoggedIn()) {
//         return {
//             path: '/login',
//             query: { redirect: to.fullPath },
//         }
//     }
// })

export default router;