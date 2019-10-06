import Vue from 'vue'
import Vuex from 'vuex'
// common
import dialog from './modules/common/dialog'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // common
    dialog
  }
})

export default store
