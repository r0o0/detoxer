<template lang="pug">
  el-main.home
    .carousel carousel 들어갈 예정
    Banner(:data="lists.banner")
    List(classname="layout-2" :isInside="true" :data="lists.best" :needBtn="true" title="Best" fontColor="white" customHeight="400")
    List(classname="layout-2" :data="lists.trending" :needBtn="true" title="Trending" customHeight="400")
    List(classname="layout-3" :isInside="true" :data="lists.event" :needBtn="false" title="Event" fontColor="white" customHeight="400")
    List(classname="layout-3" :data="lists.event" :needBtn="false" title="Event" customHeight="400")
    List(classname="layout-4" :isInside="true" :data="lists.event2" :needBtn="false" title="Event2" fontColor="white" customHeight="400")
    List(classname="layout-4" :data="lists.event2" :needBtn="false" title="Event2" customHeight="400")
</template>

<script>
import List from '@/components/List/List.vue'
import Banner from '@/components/List/Banner.vue'
export default {
  name: 'home',
  data () {
    return {
      lists: {
        banner: {
          link: '',
          url: 'https://images.unsplash.com/photo-1498603911539-01ce6c9ad8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          title: 'The Latest Bras and Tights',
          text: 'ZoomX Vaporfly NEXT%—now in ‘Pink Blast.‘'
        },
        best: [
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: '//images.unsplash.com/photo-1534336810865-0beae4c81278?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          },
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1560526860-1f0e56046c85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          }
        ],
        trending: [
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1498603911539-01ce6c9ad8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          },
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1551040078-5a2f375f9549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          }
        ],
        event: [
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1551040078-5a2f375f9549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          },
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          },
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          }
        ],
        event2: [
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1551040078-5a2f375f9549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: false,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          },
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          },
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          },
          {
            product_id: 'a1234',
            item_no: '상품 번호',
            title: '물건에 대한 타이틀',
            img: 'https://images.unsplash.com/photo-1551040078-5a2f375f9549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
            category: '과일',
            price: {
              original_price: 5000,
              sale_status: true,
              sale: {
                percent: 10,
                sale_price: 4500
              }
            }
          }
        ]
      }
    }
  },
  components: {
    List,
    Banner
  }
}
</script>

<style lang="scss" scope>
.carousel {
  height: 700px;
  background: pink;
}
</style>