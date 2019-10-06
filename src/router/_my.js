import Layout from './../components/Layout'
import Mypage from '../views/Mypage/Mypage'
import Write from '../views/Mypage/Product/Write'
import List from '../views/Mypage/Product/List'
import Auth from '../views/Mypage/Product/Auth'

export const mypage = {
  path: '/my',
  name: 'mypage',
  component: Layout,
  children: [
    {
      path: '',
      component: Mypage
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
