import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        hasCrumbs: true,     //  是否需要面包屑导航
        indexPage: [   //  面包屑导航首页
            {
                path: '/index',
                meta: {
                    title: '首页',
                }
            }
        ],
        crumbsList: []   //面包屑导航数组
    },
    mutations: {
        SET_CRUMBS(state, list) {
            if (list.length == 1 && list[0].path == '/index') {
                state.crumbsList = []
            } else {
                state.crumbsList = state.indexPage.concat(list)
            }
        }
    },
    actions: {
        setCrumbs({ commit }, list) {
            commit("SET_CRUMBS", list)
        }
    }
})
export default store