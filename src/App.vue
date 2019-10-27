<template lang="pug">
  #app
    el-header(height="inherit")
      CHeader
    CAuthForm
    main
      router-view
    el-footer Footer
</template>

<script>
import CHeader from '@/components/Header/Header'
import CAuthForm from '@/components/Auth/AuthForm'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('dialog')

export default {
  components: {
    CHeader,
    CAuthForm
  },
  computed: {
    ...mapGetters(['getTrigger'])
  }
}
</script>

<style lang="scss">
@import "./assets/sass/App";
@import "./assets/sass/els/common";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  main {
    margin: 0 auto;
    padding: 0 16px;
    @include desktop {
      max-width: 1920px;
      padding: 0 80px;
    }
    @include tablet {
      padding: 0 40px;
    }
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.c-container {
  background: rgba(pink, 0.5);
}

</style>
