import Layout from './../components/Layout'
import MyPage from '../views/My/MyPage'
import MyOrder from '../views/My/MyOrder'

export const my = {
  path: '/my',
  name: 'mypage',
  component: Layout,
  props: {
    parentPath: 'my',
    menuList: [
      { name: '주문 내역', path: 'order' },
      { name: 'Favorites', path: 'favourites' },
      { name: '사용후기', path: 'review' },
      { name: '적립/쿠폰', path: 'membership' }
    ]
  },
  beforeEnter (to, from, next) {
    next()
  },
  children: [
    {
      path: '',
      component: MyPage
    },
    {
      path: 'order',
      component: MyOrder
    },
    {
      path: 'favourites',
      component: MyOrder
    },
    {
      path: '',
      component: MyOrder
    }
  ]
}
