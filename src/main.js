import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import plugin from '@/utils/plugin'

//elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.use(plugin)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
