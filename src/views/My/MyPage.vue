<template lang="pug">
  .mypage
    h1 마이페이지
    p
      span {{ getUser ? getUser.name : '' }}
      | 님 어서오세요.
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('auth')

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>
