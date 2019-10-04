import Vue from 'vue'
import Router from 'vue-router'
import { home } from './_home'
import { mypage, write, list, auth } from './_my'
// import { write } from './_write'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // home
    home,
    // my
    mypage,
    write,
    list,
    auth
    // admin
    // write
  ]
})
