<template lang="pug">
  .list
    h1 등록된 물품 리스트
    el-table(
      v-bind:data="lists"
      empty-text="리스트가 없습니다.")
      el-table-column(type="expand")
        template(slot-scope="props")
          ul
            li 번호: {{ props.row.item_no }}
            li 상품명: {{ props.row.title }}
            li 설명: {{ props.row.content }}
            li 설명:
              .content(
                v-for="(item, index) in props.row.content_item"
                v-bind:key="`content+${index}`"
              )
                strong(v-show="item.title") {{item.title}}
                p(v-show="item.content") {{item.content}}
                .c-img(v-show="item.img")
                  img(
                    v-bind:src="item.img"
                  )
            li 리뷰:
              ul
                li 리뷰수: {{ props.row.review.total }}
                li 리뷰의 총 평가: {{ props.row.review.total_stars }}
            li 좋아요 수: {{ props.row.like }}
            li 태그:
              el-tag(
                v-for="(tag, index) in props.row.tags"
                v-bind:key="`tag+${index}`"
              ) {{ tag }}
            li 대표이미지:
              .c-img
                img(
                  v-bind:src="props.row.img"
                )
            li 등록일: {{ props.row.updated_at }}
            li 가격:
              ul
                li 가격: {{ props.row.price.original_price }} 원
                li 세일 유무:
                  span(v-if="props.row.price.sale_status") 유
                  span(v-else) 무
                li 세일 유무: {{ props.row.price.sale.percent }} %
                li 세일 유무: {{ props.row.price.sale.sale_price }} 원
            li 재고: {{ props.row.stock }} 개
            li md:
              span(v-if="props.row.md") 유
              span(v-else) 무
            li like: {{ props.row.like }}
      el-table-column(
        prop="item_no"
        label="상품 번호"
        width="100")
      el-table-column(
        prop="img"
        label="상품이미지"
        width="140")
        template(slot-scope="scope")
          .c-img(slot="reference")
            img(
              v-bind:src="scope.row.img"
            )
      el-table-column(
        prop="title"
        label="상품명"
        width="200")
      el-table-column(
        prop="price"
        label="가격")
        template(slot-scope="scope")
          ul(slot="reference")
            li 가격: {{scope.row.price.original_price}} 원
            li 세일 유무:
              span(v-if="scope.row.price.sale_status === true") 세일 중
              span(v-else) 세일 안함
            li 세일 퍼센트: {{scope.row.price.sale.percent}} %
            li 세일 된 가격: {{scope.row.price.sale.sale_price}} 원
      el-table-column(
        prop="stock"
        label="재고"
        width="100")
      el-table-column(
        label="추천 유무"
        width="100")
        template(slot-scope="scope")
          el-switch(
            style="display: block"
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949")
          span(v-if="value2") 유
          span(v-else) 무
      el-table-column(
        label=""
        width="200")
        template(slot-scope="scope")
          el-button(icon="el-icon-edit" circle)
          el-button(icon="el-icon-delete" circle)
    el-button 상품 등록
</template>

<script>
export default {
  data () {
    return {
      value2: true,
      lists: [
        {
          product_id: 'a1234',
          item_no: '상품 번호',
          title: '물건에 대한 타이틀',
          description: '소제목',
          content: '물건 설명',
          info: [
            '물건에 대한 기본 정보',
            '물건에 대한 기본 정보',
            '물건에 대한 기본 정보'
          ],
          review: {
            total: 0,
            total_stars: 0,
            data: [
              {
                user_id: '리플 타이틀',
                content: '리플 내용',
                stars: 0,
                created_at: '2019-10-1',
                updated_at: '2019-10-1',
                imgs: [
                  '//img-cf.kurly.com/shop/data/goodsview/20190514/gv10000050160_1.jpg',
                  '//img-cf.kurly.com/shop/data/goodsview/20190514/gv10000050160_1.jpg',
                  '//img-cf.kurly.com/shop/data/goodsview/20190514/gv10000050160_1.jpg',
                  '//img-cf.kurly.com/shop/data/goodsview/20190514/gv10000050160_1.jpg'
                ]
              }
            ]
          },
          like: 0,
          tags: ['사과', '주스'],
          img: '//img-cf.kurly.com/shop/data/goodsview/20190514/gv00000050170_1.jpg',
          category: '과일',
          updated_at: '2019-10-1',
          price: {
            original_price: 5000,
            sale_status: true,
            sale: {
              percent: 10,
              sale_price: 4500
            }
          },
          stock: 100,
          md: true,
          content_item: [
            {
              title: '아이템 타이틀',
              content: '아이템 설명',
              img: '//img-cf.kurly.com/shop/data/goodsview/20190514/gv00000050170_1.jpg'
            }
          ]
        },
        {
          product_id: 'a1234',
          item_no: '상품 번호',
          title: '물건에 대한 타이틀',
          description: '소제목',
          content: '물건 설명',
          info: [
            '물건에 대한 기본 정보',
            '물건에 대한 기본 정보',
            '물건에 대한 기본 정보'
          ],
          review: {
            total: 0,
            total_stars: 0,
            data: [
              {
                user_id: '리플 타이틀',
                content: '리플 내용',
                stars: 0,
                created_at: '2019-10-1',
                updated_at: '2019-10-1',
                imgs: [
                  '//img-cf.kurly.com/shop/data/goodsview/20190514/gv10000050160_1.jpg',
                  '//img-cf.kurly.com/shop/data/goodsview/20190514/gv10000050160_1.jpg',
                  '//img-cf.kurly.com/shop/data/goodsview/20190514/gv10000050160_1.jpg',
                  '//img-cf.kurly.com/shop/data/goodsview/20190514/gv10000050160_1.jpg'
                ]
              }
            ]
          },
          like: 0,
          tags: ['사과', '주스'],
          img:
            '//img-cf.kurly.com/shop/data/goodsview/20190514/gv00000050170_1.jpg',
          category: '과일',
          updated_at: '2019-10-1',
          price: {
            original_price: 5000,
            sale_status: true,
            sale: {
              percent: 10,
              sale_price: 4500
            }
          },
          stock: 100,
          md: true,
          content_item: [
            {
              title: '아이템 타이틀',
              content: '아이템 설명',
              img: '//img-cf.kurly.com/shop/data/goodsview/20190514/gv00000050170_1.jpg'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.list {
  background: #fff;
  .c-img {
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 100px;
    background: #ccc;
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      height: 100%;
    }
  }
}
</style>
