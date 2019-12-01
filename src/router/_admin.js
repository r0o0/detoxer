import Layout from './../components/Layout'
import AdminPage from '../views/Admin/AdminPage'
import Write from '../views/Admin/Product/Write'
import List from '../views/Admin/Product/List'
import Auth from '../views/Admin/Product/Auth'

export const admin = {
  path: '/admin',
  name: 'adminpage',
  component: Layout,
  props: {
    parentPath: 'admin',
    menuList: [
      {
        name: '관리자 페이지',
        children: [
          {
            name: '물품 리스트',
            path: 'list'
          },
          {
            name: '권한설정',
            path: 'auth'
          }
        ]
      },
      {
        name: '주문내역',
        path: 'write'
      },
      {
        name: '상품 후기',
        path: ''
      },
      {
        name: '쿠폰',
        path: ''
      },
      {
        name: '개인 정보 수정',
        path: ''
      }
    ]
  },
  children: [
    {
      path: '',
      component: AdminPage
    },
    {
      path: 'list',
      component: List
    },
    {
      path: 'write',
      component: Write
    },
    {
      path: 'auth',
      component: Auth
    }
  ]
}
