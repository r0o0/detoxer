<template lang="pug">
  #app-layout
    el-container
      el-aside(width="200px")
        CMypageMenu
      el-main
        router-view
</template>

<script>
import CMypageMenu from './Mypage/MyPageMenu'
export default {
  components: {
    CMypageMenu
  }
}
</script>

<style>

</style>
