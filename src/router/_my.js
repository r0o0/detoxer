import Mypage from '../views/Mypage/Mypage.vue'
import Write from '../views/Mypage/Product/Write.vue'
import List from '../views/Mypage/Product/List.vue'
import Auth from '../views/Mypage/Product/Auth.vue'

export const mypage = {
  path: '/my',
  name: 'mypage',
  component: Mypage
}

export const write = {
  path: '/my/write',
  name: 'write',
  component: Write
}

export const list = {
  path: '/my/list',
  name: 'list',
  component: List
}

export const auth = {
  path: '/my/auth',
  name: 'auth',
  component: Auth
}
