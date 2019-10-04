<template lang="pug">
  div
    div#firebaseui-auth-container
</template>

<script>
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'AuthForm',
  mounted () {
    const uiConfig = {
      signInOptions: [{
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        authMethod: 'https://accounts.google.com',
        clientId: process.env.VUE_APP_FIREBASE_CLIENT_ID
      }]
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
