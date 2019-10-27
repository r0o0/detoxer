import Vue from 'vue'
import Vuex from 'vuex'
// auth
import auth from './modules/auth'
// common
import dialog from './modules/common/dialog'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // auth
    auth,
    // common
    dialog
  }
})

export default store
