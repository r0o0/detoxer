<template lang="pug">
  .user-nav
    el-dropdown(@command="handleMenuItemClick")
      el-button(type="primary")
        router-link(:to="'/my'") {{ name }}
        i(class="el-icon-arrow-down el-icon--right")
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item(command="item1") My
        el-dropdown-item(command="item2") item 2
        el-dropdown-item(divided command="logout") 로그아웃
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('auth')

export default {
  props: {
    role: String,
    name: String
  },
  methods: {
    ...mapActions(['requestUserSignout']),
    handleMenuItemClick (command) {
      console.log('check command', command)
      if (command === 'logout') {
        this.requestUserSignout(true)
      }
    },
    navigateTo () {
      // this.$router.push({ path: 'my' }, () => {})
    }
  }
}
</script>
