<template lang="pug">
  div.mypage-menu
    el-menu(
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      v-for="( item, index ) in mypageMenu"
      v-bind:key="`menu-${index}`"
    )
      el-submenu(index="1" v-if="item.children")
        template(slot="title") {{ item.title }}
        el-menu-item(
          v-bind:index="`${index}`"
          v-for="( child, index ) in item.children"
          v-bind:key="`menu-sub-${index}`"
        )
          router-link(:to="`/my/${child.link}`") {{ child.title }}
      el-menu-item(
        v-bind:index="`${index}`"
        v-if="!item.children"
      )
        router-link(:to="`/my/${item.link}`") {{ item.title }}
</template>

<script>
export default {
  // name: "CMypageMenu",
  data () {
    return {
      mypageMenu: [
        {
          title: '관리자 페이지',
          children: [
            {
              title: '물품 리스트',
              link: 'list'
            },
            {
              title: '권한설정',
              link: 'auth'
            }
          ]
        },
        {
          title: '주문내역',
          link: ''
        },
        {
          title: '상품 후기',
          link: ''
        },
        {
          title: '쿠폰',
          link: ''
        },
        {
          title: '개인 정보 수정',
          link: ''
        }
      ]
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
