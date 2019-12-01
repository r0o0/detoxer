<template lang="pug">
  #app-layout
    el-container
      el-aside(width="200px")
        CSideMenu(:menuList="menuList" :parentPath="parentPath")
      el-main
        router-view
</template>

<script>
import CSideMenu from './SideMenu'
export default {
  props: {
    parentPath: String,
    menuList: Array
  },
  components: {
    CSideMenu
  }
}
</script>

<style>

</style>
