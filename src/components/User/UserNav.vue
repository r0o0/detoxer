<template lang="pug">
  .user-nav
    el-dropdown(@command="handleClick")
      el-button(type="primary") {{ name }}
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item(command="item1") item 1
        el-dropdown-item(command="item2") item 2
        el-dropdown-item(divided command="logout") 로그아웃
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { request } from 'http'
const { mapActions } = createNamespacedHelpers('auth')

export default {
  props: {
    role: String,
    name: String
  },
  methods: {
    ...mapActions(['requestUserSignout']),
    handleClick (command) {
      if (command === 'logout') {
        this.requestUserSignout(true)
      }
    }
  }
}
</script>
