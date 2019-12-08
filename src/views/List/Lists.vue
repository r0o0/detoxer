<template lang="pug">
  el-main.lists
    List(classname="layout-4" :data="lists" :needBtn="false" title="Trending" fontColor="" customHeight="400")
</template>

<script>
import List from '@/components/List/List.vue'

export default {
  name: 'Lists',
  data () {
    return {
      lists: [
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
      ]
    }
  },
  components: {
    List
  }
}
</script>

<style lang="scss">
.lists {
  background: rgba(red, 0.2);
}
</style>
