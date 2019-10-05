<template lang="pug">
  el-dialog(
    title="회원가입"
    :visible.sync="showDialog"
  )
    div.email-auth
      el-form
        el-form-item(label="이메일")
          el-input(placeholder="gildong@detoxer.com")
        el-form-item(label="비밀번호" prop="pass")
          el-input(type="password" autocomplete="off")
        el-form-item
          el-button(type="primary") 회원가입
          el-button(plain) 취소
      span 이미 회원이신가요? 로그인
    FirebaseAuth
</template>

<script>
import FirebaseAuth from './FirebaseAuth'

export default {
  name: 'AuthForm',
  data () {
    return {
      showDialog: true
    }
  },
  components: {
    FirebaseAuth
  }
}
</script>
