import router from '@/router'
import store from '@/data/store'
router.afterEach(to => {
    store.dispatch('setCrumbs', to.matched)
    console.log(to);
    
})
