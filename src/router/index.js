import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVux from '@/views/HelloVux'
import Feedback from '@/views/Feedback'
import ParentFeedback from '@/views/ParentFeedback'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

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
    /*{
      path: '/parentFeedback',
      name: 'ParentFeedback',
      component: ParentFeedback
    },*/
    {
      path: '/',
      name: 'ParentFeedback',
      component: ParentFeedback
    },
  ]
})
