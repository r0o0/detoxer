import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
// Firebase
import * as firebase from 'firebase'
import { firebaseConfig } from './firebase.config'
// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  created () {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
  },
  render: h => h(App)
}).$mount('#app')
