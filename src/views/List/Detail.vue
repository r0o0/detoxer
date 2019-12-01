<template lang="pug">
  el-main.detail 상세페이지
</template>

<script>
export default {
  name: 'Detail',
  props: {
    id: String
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scope>
.detail {
  background: pink;
}
</style>
