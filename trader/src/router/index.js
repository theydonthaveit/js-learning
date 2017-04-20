import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stocks from '@/components/stocks/Stocks'
import Portfolio from '@/components/portfolio/Portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/stocks',
      component: Stocks
    }
  ]
})
