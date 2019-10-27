<template lang="pug">
  .header
    router-link(:to="'/'")
      h1.logo Detoxer
    template(v-if="width < 768")
      div.header-right
        CNav(:screenWidth="width")
        CSearch(:screenWidth="width")
        i.el-icon-shopping-cart-2.i-cart
    template(v-else)
      CNav(:screenWidth="width")
      div.header-right
        CSearch
        i.el-icon-shopping-cart-2.i-cart
        el-button(v-if="!isUser" plain @click="triggerDialog") 회원가입
        CUserNav(v-else v-bind:role="isUser.role" v-bind:name="isUser.name")
</template>

<script>
import CNav from './Nav'
import CSearch from './Search'
import CAuthForm from '@/components/Auth/AuthForm'
import CUserNav from '@/components/User/UserNav'
import { isCookieExist, getCookie } from '@/utils/cookies'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('auth')
const { mapActions } = createNamespacedHelpers('dialog')

export default {
  name: 'CHeader',
  components: {
    CNav,
    CSearch,
    CAuthForm,
    CUserNav
  },
  data () {
    return {
      input: '',
      width: 0,
      user: null
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    isUser () {
      const userExist = isCookieExist('user')
      const name = decodeURIComponent(getCookie('user'))
      if (userExist) this.user = { name }
      if (this.getUser) {
        this.user = {
          ...this.getUser
        }
      }
      return this.user
    }
  },
  watch: {
    getUser () {
      if (!this.getUser) this.user = null
    }
  },
  methods: {
    ...mapActions(['setTrigger']),
    screenWidth: function () {
      window.addEventListener('resize', () => {
        this.width = window.innerWidth
      })
    },
    triggerDialog: function () {
      this.setTrigger(true)
    }
  },
  created () {
    this.screenWidth()
  },
  destroyed () {
    this.screenWidth()
  },
  mounted () {
    this.width = window.innerWidth
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/partials/fonts';
@import '../../assets/sass/partials/mixin';
@import '../../assets/sass/partials/color';

  .header {
    padding: 8px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 56px;
    @include tablet {
      padding: 16px 0;
    }
    @include desktop {
      padding: 16px 0;
    }
    .logo {
      font-size: $font-xl;
      font-weight: 700;
      color: $color-point;
    }
    .header-right {
      display: flex;
      align-content: flex-end;
      align-items: center;
      margin-left: auto;
      & > *:not(.nav) {
        margin-left: 20px;
        color: $color-light;
      }
      @include mobile {
        flex-direction: row-reverse;
        i.i-search {
          order: 2;
        }
        i.i-cart {
          order: 1;
        }
        .category {
          display: flex;
          align-items: center;
          margin-left: 24px;
          font-size: 15px;
          color: $color-lighter;
          i.i-menu {
            order: -1;
            padding-right: 5px;
            font-size: 21px;
            color: $color-point;
          }
        }
      }
      @include desktop {
        flex-flow: row nowrap;
      }
      .i-search {
        font-size: 18px;
      }
      .i-cart {
        font-size: $font-l;
      }
    }
  }
</style>
