import Vue from 'vue'
import Router from 'vue-router'
import CompnentsList from '@/components/CompnentsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CompnentsList',
      component: CompnentsList
    }
  ]
})
