<template lang="pug">
  el-dialog(
    title="회원가입"
    :visible.sync="showDialog"
  )
    div
      el-form(:model="emailAuth" :rules="rules" ref="emailAuth")
        el-form-item(label="이메일" prop="email")
          el-input(placeholder="gildong@detoxer.com" v-model="emailAuth.email")
        el-form-item(label="비밀번호" prop="password")
          el-input(type="password" autocomplete="off" v-model="emailAuth.password")
        el-form-item
          el-button(type="primary" @click="authenticate('emailAuth')") 회원가입
          el-button(plain @click="showDialog=false") 취소
      span 이미 회원이신가요? 로그인
    FirebaseAuth
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseAuth from './FirebaseAuth'

export default {
  name: 'AuthForm',
  data () {
    const isEmailValid = (rule, value, callback) => {
      const validateEmail = (value) => {
        /* eslint-disable no-useless-escape */
        const checkEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return checkEmailRegex.test(value)
      }
      if (!validateEmail(value)) callback(new Error('올바른 이메일 주소를 입력해주세요.'))
      callback()
    }

    const isPasswordValid = (rule, value, callback) => {
      /* eslint-disable no-useless-escape */
      const isLowercase = /^(?=.*[a-z])/ // 문자열에 소문자가 한개라고 들어가야 함
      const isUppercase = /^(?=.*[A-Z])/ // 문자열에 대문자가 한개라도 들어가야 함
      const isNumber = /^(?=.*[0-9])/ // 문자열에 숫자가 한개라도 들어가야함
      const isSpecial = /^(?=.*[!@#\$%\^&\*])/ // 문자열에 특수기호 !,@,#,$,%,&,중 한개라도 들어가야함
      const baseMsg = (type) => {
        return `비밀번호에 ${type} 넣어 더욱 강력한 비밀번호를 만들어보세요.`
      }
      if (!isLowercase.test(value)) callback(new Error(baseMsg('소문자')))
      if (!isUppercase.test(value)) callback(new Error(baseMsg('대문자')))
      if (!isNumber.test(value)) callback(new Error(baseMsg('숫자')))
      if (!isSpecial.test(value)) callback(new Error(baseMsg('특수 기호 !@#$%&')))
      if (value.length < 8) callback(new Error('비밀번호는 8자 이상이어야 합니다.'))
      callback()
    }
    return {
      showDialog: true,
      emailAuth: {
        email: null,
        password: null
      },
      rules: {
        email: [
          { required: true, message: '올바른 이메일 주소를 입력해주세요', trigger: 'blur' },
          { validator: isEmailValid, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '비밀번호를 입력해주세요', trigger: 'blur' },
          { validator: isPasswordValid, trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  components: {
    FirebaseAuth
  },
  methods: {
    authenticate (formName) {
      console.log('click authenticate')
      this.$refs[formName].validate((valid) => {
        const email = this.emailAuth.email
        const password = this.emailAuth.password
        console.log('check', valid)
        if (valid) {
          console.log('valid', valid)
          firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
            console.log(error)
          })
        } else {
          console.log('Something went wrong!')
          return false
        }
      })
    }
  },
  computed: {
    emailValue: {
      set (value) {
        this.email = value
      },
      get () {
        return this.email
      }
    },
    passwordValue: {
      set (value) {
        this.password = value
      },
      get () {
        return this.password
      }
    }
  }
}
</script>
