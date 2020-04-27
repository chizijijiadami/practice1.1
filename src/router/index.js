import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import = file => () => import('@/pages/' + file + '.vue')

export default new Router({
    mode:'history',
    routes: [
        {
            path: '',
            redirect: '/index'
        },
        {
            path: '/index',
            component: _import('Index/index')
        },
        {
            path: '/products',
            component: _import('Products/index')
        }, {
            path: '/news',
            component: _import('News/index')
        }, {
            path: '/about',
            component: _import('About/index')
        }, {
            path: '/contact',
            component: _import('Contact/index')
        }, {
            path: '/recruit',
            component: _import('Recruit/index')
        },
        {
            path: '/404',
            component: _import('ErrorPages/404')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})