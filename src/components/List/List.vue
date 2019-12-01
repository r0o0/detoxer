<template lang="pug">
  .list
    h1 {{title}}
    .cover(v-bind:class="classname")
      div(v-for="(list, index) in data" v-bind:key="index")
        a(v-bind:to="list.link")
        figure(v-bind:style="customHeight ? `height: ${customHeight}px;`: 'height: 600px;'")
          img(v-bind:alt="list.title" v-bind:src="list.url")
          figcaption(v-bind:class="fontColor")
            div
              h1 {{customHeight}} {{list.title}}
              a(v-bind:to="list.link" v-show="needBtn") more
</template>

<script>
export default {
  name: 'List',
  props: {
    title: String,
    classname: String,
    needBtn: Boolean,
    data: Array,
    fontColor: String,
    customHeight: String
  },
  data () {
    return {}
  },
  mounted () {
    const imgs = this.$el.querySelectorAll('img')
    imgs.forEach(img => {
      // console.log(img, img.naturalWidth, img.naturalHeight)
      if (img.naturalWidth > img.naturalHeight) {
        img.className += 'width-bigger'
      }
    })
  }
}
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
    &.layout-2,
    &.layout-3{
      > div {
        figure {
          position: relative;
          figcaption {
            position: absolute;
            display: flex;
            align-items: flex-end;
            text-align: left;
          }
        }
      }
    }
    &.layout-2 {
      > div {
        width: calc(50% - 10px);
        figure {
          figcaption {
            left: 48px;
            top: calc(66.66667% - 48px);
            width: 75%;
            height: 33.33333%;
            padding: 20px;
          }
        }
      }
    }
    &.layout-3 {
      > div {
        width: calc(33.33% - 10px);
        figure {
          box-sizing: border-box;
          padding-bottom: 53px;
          figcaption {
            left: 0;
            right: 0;
            bottom: 0;
            box-sizing: border-box;
            min-height: 53px;
            padding: 10px 20px;
            background: rgba($color: #fff, $alpha: 1);
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
        &.white {
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
