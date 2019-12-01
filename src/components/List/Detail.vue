<template lang="pug">
  .list
    h1 {{title}}
    .cover(v-bind:class="classname")
      div(v-for="(list, index) in data" v-bind:key="index")
        a(v-bind:to="list.link")
        figure(v-bind:style="`height: ${customHeight}px;`")
          img(v-bind:alt="list.title" v-bind:src="list.url" )
          figcaption(v-bind:class="fontColor")
            div
              h1 {{list.title}}
              a(v-bind:to="list.link" v-show="needBtn") more
</template>

<script>
export default {
  name: "List",
  props: {
    id: String
  },
  data() {
    return {};
  },
  created() {
  }
};
</script>

<style lang="scss" scope>

</style>
