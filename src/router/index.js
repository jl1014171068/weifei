import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Main,
      children:[{
        path: '/hello',
        name: '首页',
        component: Main,
      }]
    }
  ]
})