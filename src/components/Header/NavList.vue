<template lang="pug">
  ul.nav-container
    li.nav-item(v-for="item in menu" :key="`menu-${item.category}`")
      router-link(:to="`/shop/${item.category}`") {{ item.name }}
</template>

<script>
export default {
  name: 'CNavList',
  props: ['handleClose'],
  data () {
    return {
      menu: [
        {
          category: 'juice',
          name: '쥬스'
        },
        {
          category: 'smoothie',
          name: '스무디'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/partials/mixin';

  .nav-container {
    display: flex;
    flex-flow: row wrap;
    @include mobile {
      flex-flow: column wrap;
      padding-left: 24px;
    }
    .nav-item {
      margin-right: 24px;
      list-style: none;
      @include mobile {
        margin-bottom: 16px;
        font-size: 20px;
      }
    }
  }
</style>
