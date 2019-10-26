import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// Firebase
import * as firebase from 'firebase'
import { firebaseConfig } from './firebase.config'
// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Utils
import { isCookieExist, setCookie } from './utils/cookies'
// Vuex
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('auth')

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  methods: {
    ...mapActions(['setUser'])
  },
  created () {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const {
          displayName,
          email,
          emailVerified,
          uid,
          isAnonymous
        } = user

        user.getIdToken().then(accessToken => {
          let name = displayName
          if (!name) name = '고객님'

          const user = isCookieExist('user')
          if (!user) setCookie('user', name, 30)

          let userPayload = {
            role: 'user',
            name,
            email,
            emailVerified,
            uid,
            isAnonymous,
            accessToken
          }

          if (isAnonymous) userPayload = { ...userPayload, role: 'guest' }

          this.setUser(userPayload)
        }, null, ' ')
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
