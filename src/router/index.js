import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVux from '@/views/HelloVux'
import Feedback from '@/views/Feedback'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      //path: '/vux/:id',
      path: '/vux',
      name: 'HelloVux',
      component: HelloVux
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
  ]
})
