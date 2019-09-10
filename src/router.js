import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pricing from './views/Pricing'
import Telephone from './components/Telephone'
import Forms from './views/Forms'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms,
    },
  ]
})
