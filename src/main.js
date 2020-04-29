import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './data/store'
import MetaInfo from 'vue-meta-info'
Vue.config.productionTip = false
Vue.use(MetaInfo)
//样式
import './assets/styles/reset.css'
import './assets/styles/style.styl'
//导航守卫
import './common/guards'

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app')
