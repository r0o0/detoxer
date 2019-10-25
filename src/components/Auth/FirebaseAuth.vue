<template lang="pug">
  #firebaseui-auth-container
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('dialog')

export default {
  name: 'FirebaseAuth',
  methods: {
    ...mapActions(['setTrigger'])
  },
  mounted () {
    const uiConfig = {
      signInFlow: 'popup',
      // signInSuccessUrl: this.$router.history.current.path,
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          authMethod: 'https://accounts.google.com',
          clientId: process.env.VUE_APP_FIREBASE_CLIENT_ID
        },
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          if (authResult) this.setTrigger(false)
        },
        signInFailure: function (error) {
          // For merge conflicts, the error.code will be
          // 'firebaseui/anonymous-upgrade-merge-conflict'.
          console.log('signin error', error)
          if (error.code !== 'firebaseui/anonymous-upgrade-merge-conflict') {
            return Promise.resolve()
          }
          // The credential the user tried to sign in with.
          var cred = error.credential
          console.log('cred', cred)
        }
      }
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
