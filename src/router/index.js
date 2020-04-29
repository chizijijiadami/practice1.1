import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import = file => () => import('@/pages/' + file + '.vue')

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/index'
        },
        {
            path: '/index',
            component: _import('Index/index'),
            meta: {
                title: "首页"
            }
        },
        {
            path: '/products',
            component: _import('Products/index'),
            meta: {
                title: "产品"
            }
        }, {
            path: '/news',
            component: _import('News/index'),
            meta: {
                title: "新闻动态"
            }
        }, {
            path: '/about',
            component: _import('About/index'),
            meta: {
                title: "关于我们"
            },
            children: [
                {
                    path: 'feature',
                    component: _import('About/Feature/index'),
                    meta: {
                        title: "特点"
                    }
                },
                {
                    path: 'team',
                    component: _import('About/Team/index'),
                    meta: {
                        title: "团队"
                    }
                }
            ]
        }, {
            path: '/contact',
            component: _import('Contact/index'),
            meta: {
                title: "联系我们"
            }
        }, {
            path: '/recruit',
            component: _import('Recruit/index'),
            meta: {
                title: "招贤纳士"
            }
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