<template lang="pug">
  .mypage-menu
    el-menu(
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      v-for="( item, index ) in menuList"
      v-bind:key="`menu-${index}`"
    )
      el-menu-item(
          v-bind:index="`${index}`"
          v-if="!item.children"
        )
          router-link(:to="`/${parentPath}/${item.path}`") {{ item.name }}
      //- 서브 메뉴
      el-submenu(index="1" v-if="item.children")
        template(slot="title") {{ item.name }}
        el-menu-item(
          v-bind:index="`${index}`"
          v-for="( child, index ) in item.children"
          v-bind:key="`menu-sub-${index}`"
        )
          router-link(:to="`/${parentPath}/${child.path}`") {{ child.name }}
</template>

<script>
export default {
  props: {
    parentPath: String,
    menuList: Array
  },
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log('key ::: ', key)
      console.log('keyPath ::: ', keyPath)
    },
    handleClose (key, keyPath) {
      console.log('key ::: ', key)
      console.log('keyPath ::: ', keyPath)
    }
  }
}
</script>

<style lang="scss">
.mypage-menu {
  background: pink;
}
</style>
