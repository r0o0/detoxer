import Vue from 'vue'
import Router from 'vue-router'
import { home } from './_home'
import { my, user } from './_my'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // home
    home,
    // my
    my,
    user
  ]
})
