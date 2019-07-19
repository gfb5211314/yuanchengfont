<template>
    <div class="logn">
        <!--头部固定-->
        <mt-header fixed title="登录">
         <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        </router-link>
        </mt-header>
         <!-- 图片-->
        <img src="static/img/zhuce.png" with="400" height="200">
       <div class="page-part">
      <mt-field label="手机号" placeholder="输入手机号">
        <button class="bt2" style="color : white">发送验证码</button>
      </mt-field>
       <mt-field label="验证码" placeholder="输入验证码">
      </mt-field>
    </div>
    <div class="bt1" style="">
       <mt-button type="primary"  @click="gotologn">缘成佳缘</mt-button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'logn',
  data () {
    return {
      mas: 'nihao'
    }
  },
  methods: {
    gotologn () {
      this.$router.push('/userlist')
    }
  }
}
</script>

<style scoped>
.bt1{
  margin-top: 180px
}
.bt2{
  background-color: red
}
</style>
