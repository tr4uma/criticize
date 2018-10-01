import Vue from 'vue'
import Router from 'vue-router'
import Criticize from '@/components/Criticize'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/criticize/:id',
      name: 'Criticize!',
      component: Criticize
    }
  ]
})
