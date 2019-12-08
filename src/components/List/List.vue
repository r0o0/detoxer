<template lang="pug">
  .list
    .title
      h1 {{title}}
      a more
    ul.cover(v-bind:class="classname" :isInside="true")
      li(v-for="(list, index) in data" v-bind:key="index")
        ProductItem(:list="list" type="event" :isInside="isInside" :fontColor="fontColor" :customHeight="customHeight" :needBtn="needBtn")
</template>

<script>
import ProductItem from './ProductItem'
export default {
  name: 'List',
  props: {
    title: String,
    classname: String,
    needBtn: Boolean,
    data: Array,
    fontColor: String,
    customHeight: String,
    isInside: Boolean
  },
  components: {
    ProductItem
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scope>
.list {
  margin-top: 40px;
  .title{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    h1 {
      color: #111;
      font-size: 24px;
      font-weight: bold;
      text-align: left;
      line-height: 1;
    }
    a {
      text-decoration: underline;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: -.06px;
      &:hover {
        color: #14a866;
      }
    }
  }
  .cover {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 10px);
    margin-left: -5px;
    li {
      padding: 0 5px;
      margin-bottom: 10px;
    }
    &.layout-2 li {
      width: calc(50% - 10px);
    }
    &.layout-3 li {
      width: calc(33.33% - 10px);
    }
    &.layout-4 li {
      width: calc(25% - 10px);
    }
  }
}
</style>
