<template lang="pug">
  el-container.c-container.mypage
    el-aside.c-aside(width="200px")
      c-mypage-menu
    el-main.c-main
</template>

<script>
import CMypageMenu from './../../components/Mypage/MyPageMenu'
export default {
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
  components: {
    CMypageMenu
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
.mypage {
  background: rgba(red, 0.2);
  .c-aside {
    background: rgba(green, 0.2);
  }
  .c-main {
    background: rgba(yellow, 0.2);
  }
}
</style>
