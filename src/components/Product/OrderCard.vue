<template lang="pug">
  .order-card
    .order-card__header
      dl.order-card__header--order-no
        dt 주문번호
        dd 923900349
      h1 [하겐다즈] 멀티바 쿠키엔크림
      dl
        dt.a11y-hidden 수량
        dd 1개
    .order-card__desc
      dl
        dt.a11y-hidden 결제금액
        dd 4,000원
      dl
        dt.a11y-hidden 주문상태
        dd 배송완료
      .thumbnail
</template>

<script>
export default {
  name: 'OrderCard',
  props: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.order-card {
  display: flex;
  width:100%;
  padding: 20px;
  border: 1px solid #ccc;
  &__header {
    // display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
    &--order-no {
      font-size: 13px;
      dd {
        font-weight: bold;
        color: #444;
      }
    }
    dl {
      align-self: flex-end;
      margin-left: 6px;
    }
  }

  &__desc {
  }

  h1 {
    font-size: 22px;
    font-weight: bold;
    line-height: 1;
  }
  dl {
    display: flex;
    // > * + * {
    //   margin: 0 6px;
    // }
  }
}
</style>
