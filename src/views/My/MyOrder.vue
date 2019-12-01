<template lang="pug">
  .mypage
    h1 주문 내역
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
