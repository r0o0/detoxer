<template lang="pug">
    .product-item(
      :class="isInside ? 'isInside' : ''"
    )
        a(v-bind:to="list.link")
        figure
          span.tag(v-show="list.price.sale_status") {{list.price.sale.percent}}%
          div(v-bind:style="customHeight ? `height: ${customHeight}px;`: 'height: 600px;'")
            img(v-bind:alt="list.title" v-bind:src="list.img")
          figcaption(v-bind:class="fontColor")
            div
              h1 {{list.title}}

              p(v-show="list.price.sale_status")
                span(v-show="list.price.sale_status") {{list.price.original_price}} 원
                strong {{list.price.sale.sale_price}} 원

              p(v-show="!list.price.sale_status")
                strong {{list.price.original_price}} 원

              a(v-bind:to="list.link" v-show="needBtn") more
</template>

<script>
export default {
  props: {
    type: String,
    list: Object,
    isInside: Boolean,
    customHeight: String,
    fontColor: String,
    needBtn: Boolean
  },
  mounted () {
    const imgs = this.$el.querySelectorAll('img')
    imgs.forEach(img => {
      if (img.naturalWidth > img.naturalHeight) {
        img.className += 'width-bigger'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .product-item {
    position: relative;
    overflow: hidden;
    text-align: left;
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
  .isInside{
    figure {
      position: relative;
      div {
        overflow: hidden;
      }
      figcaption {
        position: absolute;
        display: flex;
        align-items: flex-end;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 20px;
      }
    }
  }
  figure {
    position: relative;
    span.tag {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      padding: 10px;
      background: #14a866;
      color: #fff;
      letter-spacing: -.6;
      font-weight: bold;
    }
    >div {
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 110%;
        height: auto;
        &.width-bigger {
          width: auto;
          height: 110%;
        }
      }
    }
    figcaption {
      h1 {
        text-align: left;
        font-weight: bold;
        font-size: 24px;
        color: #111;
      }
      p {
        span {
          position: relative;
          margin-right: 25px;
          &::before {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            content: '';
            width: 100%;
            height: 1px;
            background: #000;
          }
          &::after {
            position: absolute;
            right: -20px;
            content: '→';
          }
        }
        strong{
          font-weight: bold;
        }
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
        h1, p {
          color: #fff;
        }

        p {
          span {
            &::before {
              background: #fff;
            }
          }
          strong{
            font-weight: bold;
          }
        }
        a {
          background: #fff;
          color: #111;
        }
      }
    }
  }
</style>
