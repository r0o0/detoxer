<template lang="pug">
  .banner
    .cover
      a(v-bind:to="data.link")
      figure
        img(v-bind:alt="data.title" v-bind:src="data.url")
        figcaption.w
          div
            h1 {{data.title}}
            p {{data.text}}
            a(v-bind:to="data.link") more
</template>

<script>
export default {
  name: "Banner",
  props: {
    data: Object
  },
  data() {
    return {};
  }
  // created () {
  //   const imgs = this.$el.querySelectorAll('img')
  //   imgs.forEach(img => {
  //     if (img.clientWidth > img.clientHeight) {
  //       img.className += 'width-bigger'
  //     }
  //   })
  // }
};
</script>

<style lang="scss" scope>
.banner {
  margin-top: 40px;
  > h1 {
    color: #111;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
  }
}

.banner:first-of-type {
  margin-top: 0;
}

.banner {
  position: relative;
  overflow: hidden;
  height: 240px;
  .cover {
    > a {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 1;
      display: block;
    }
    figure {
      position: relative;
      img {
        width: auto;
        height: 100%;
        &.width-bigger {
          width: 100%;
          height: auto;
        }
      }
      figcaption {
        position: absolute;
        left: 48px;
        top: 48px;
        display: flex;
        align-items: flex-start;
        width: 100%;
        text-align: left;
        padding: 20px;
        h1 {
          text-align: left;
          font-weight: bold;
          font-size: 48px;
          color: #111;
          text-transform: uppercase;
          line-height: 1;
        }
        p {
          margin: 10px 0;
          color: #111;
          font-size: 16px;
          font-weight: bold;
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
          p {
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
