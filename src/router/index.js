import Vue from 'vue'
import Router from 'vue-router'
import { home } from './_home'
import { my } from './_my'
import { admin } from './_admin'
// import { write } from './_write'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // home
    home,
    // my
    admin,
    my
    // admin
    // write
  ]
})
