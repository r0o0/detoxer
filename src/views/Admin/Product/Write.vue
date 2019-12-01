<template lang="pug">
  .write
    h1 물품 등록 페이지
    el-row(:gutter="10")
      ul.w-list
        li
          strong 번호:
          .cover {{ lists.item_no }}
        li
          strong 상품명:
          .cover
            el-input(
              placeholder="상품명을 입력하세요."
              v-model="`lists`.title"
              clearable)
        li
          strong 대표 설명:
          .cover
            el-input(
              placeholder="상품의 대표 설명을 입력하세요."
              v-model="lists.content"
              clearable)
        li
          strong 설명:
          .cover
            ul
              li
                el-input(
                  placeholder="상품의 설명을 입력하세요."
                  v-model="lists.content"
                  clearable)
                div(v-if="!image")
                  input(type="file" @change="onFileChange")
                div(v-else)
                  img(:src="image")
                  el-button(@click="removeImage") 삭제
            //- el-button 추가
        li
          strong 리뷰:
          .cover
            ul
              li
              strong 리뷰수: {{ lists.review.total }}
              li
              strong 리뷰의 총 평가: {{ lists.review.total_stars }}
        li
          strong 좋아요 수:
          .cover {{ lists.like }}
        li
          strong 태그:
          .cover
            el-tag(
              v-for="(tag, index) in lists.tags"
              v-bind:key="`tag+${index}`"
              closable
              v-bind:disable-transitions="false"
              @close="handleClose(tag)")
              | {{tag}}
            el-input.input-new-tag(
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="mini"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm")
            el-button(v-else class="button-new-tag" size="small" @click="showInput") + New Tag
        li
          strong 대표이미지:
          .cover
            div(v-if="!image")
              input(type="file" @change="onFileChange")
            div(v-else)
              .c-img
                img(:src="image")
              el-button(@click="removeImage") 삭제
        li
          strong 등록일:
          .cover {{ lists.updated_at }}
        li
          strong 가격:
          .cover
            ul
              li
                strong 가격:
                .c-w200
                  el-input(
                    placeholder="Please input"
                    v-model="lists.price.original_price")
                | 원
              li
                strong 세일 유무:
                span(v-if="lists.price.sale_status") 유
                span(v-else) 무
              li
                strong 세일 %:
                .c-w200
                  el-input(
                    placeholder="Please input"
                    v-model="lists.price.sale.percent")
                | %
              li
                strong 세일 후 금액 :
                .c-w200
                  el-input(
                    placeholder="Please input"
                    v-model="lists.price.sale.sale_price")
                | 원
        li
          strong 재고:
          .cover
            .c-w200
              el-input(
                placeholder="Please input"
                v-model="lists.stock")
            | 개
        li
          strong md:
          .cover
            span(v-if="lists.md") 유
            span(v-else) 무
        li
          strong like:
          .cover
            .c-w200 {{ lists.like }}
</template>

<script>
export default {
  data () {
    return {
      inputVisible: false,
      inputValue: '',
      image: '',
      lists: {
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
      }
    }
  },
  methods: {
    // 이미지 관련
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
    },
    createImage (file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage () {
      this.image = ''
    },
    // 태그 관련
    handleClose (tag) {
      this.lists.tags.splice(this.lists.tags.indexOf(tag), 1)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.lists.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss">
  $text-width: 100px;
  .c-w200 {
    width: 200px;
  }
  .write{
    text-align: left;
    .w-list{
      border-top: 1px solid #ccc;
      >li {
        display: flex;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        >strong {
          font-weight: bold;
          width: 100px;
          // background: rgba(#c9c, .4);
        }
        .cover {
          width: calc( 100% - 100px );
          // background: rgba(#9cc, .4);
        }
      }
    }
  }
</style>
