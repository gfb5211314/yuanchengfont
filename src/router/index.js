import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/Welcome'
import Logn from '@/components/Logn'
import Userlist from '@/components/Userlist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Logn',
      name: 'Logn',
      component: Logn
    },
    {
      path: '/Userlist',
      name: 'Userlist',
      component: Userlist
    }
  ]
})
