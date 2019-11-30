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
    title: String,
    classname: String,
    needBtn: Boolean,
    data: Array,
    fontColor: String,
    customHeight: String
  },
  data() {
    return {};
  },
  created() {
    const imgs = this.$el.querySelectorAll("img");
    imgs.forEach(img => {
      if (img.clientWidth > img.clientHeight) {
        img.className += "width-bigger";
      }
    });
  }
};
</script>

<style lang="scss" scope>
.list {
  margin-top: 40px;
  > h1 {
    color: #111;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
  }
  .cover {
    display: flex;
    > div {
      position: relative;
      overflow: hidden;
      margin-left: 5px;
      margin-right: 5px;
      &:first-of-type {
        margin-left: 0;
        margin-right: 10px;
      }
      &:last-of-type {
        margin-left: 10px;
        margin-right: 0;
      }
      > a {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: block;
      }
    }
    &.layout-2 {
      > div {
        width: calc(50% - 10px);
        figure {
          position: relative;
          figcaption {
            position: absolute;
            left: 48px;
            top: calc(66.66667% - 48px);
            display: flex;
            align-items: flex-end;
            width: 75%;
            height: 33.33333%;
            text-align: left;
            padding: 20px;
          }
        }
      }
    }
    &.layout-3 {
      > div {
        width: calc(33.33% - 10px);
        figure {
          img {
            max-height: 650px;
          }
        }
      }
    }
    &.layout-4 {
      > div {
        width: calc(25% - 10px);
      }
    }
    figure {
      img {
        width: 100%;
        height: auto;
        &.width-bigger {
          width: auto;
          height: 100%;
        }
      }
      figcaption {
        h1 {
          text-align: left;
          font-weight: bold;
          font-size: 24px;
          color: #111;
        }
        a {
          display: inline-block;
          margin-top: 10px;
          padding: 8px 28px;
          border-radius: 20px;
          background: #111;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
        &.w {
          h1 {
            color: #fff;
          }
          a {
            background: #fff;
            color: #111;
          }
        }
      }
    }
  }
}
</style>
