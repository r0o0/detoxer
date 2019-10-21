<template lang="pug">
  .nav
    template(v-if="screenWidth < 768")
      i.i-menu(@click="trigger=true")
        span.a11y-hidden 메뉴
        each i in [0, 1, 2]
          span(key=`${i}`)
      el-drawer(
        v-bind:visible.sync="trigger"
        v-bind:direction="'ttb'"
        v-bind:title="'Detoxer'"
      )
        nav
          CNavList(:handleClose="handleClose")
        //- el-button(plain @click="triggerDialog") 회원가입
    nav(v-else)
      CNavList
</template>

<script>
import CNavList from './NavList'
export default {
  name: 'CNav',
  props: ['screenWidth'],
  components: {
    CNavList
  },
  data () {
    return {
      trigger: false
    }
  },
  methods: {
    handleClose () {
      this.trigger = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/partials/base';
@import '../../assets/sass/partials/mixin';
.nav {
  padding-left: 32px;
  @include mobile {
    padding-left: 20px;
  }
  i.i-menu {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 18px;
    height: 14px;
    span {
      display: block;
      width: 18px;
      height: 1px;
      background: #000;
    }
  }
}
</style>
