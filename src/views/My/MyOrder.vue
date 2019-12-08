<template lang="pug">
  .mypage
    h1 주문 내역
    OrderCard
</template>

<script>
import OrderCard from '@/components/Product/OrderCard'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('auth')

export default {
  components: {
    OrderCard
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  }
}
</script>
