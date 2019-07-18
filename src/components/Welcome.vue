<template>
  <div class="welcome">
    <h1 class="wy">{{welcome_yu}}</h1>
      <div class="lxq">
    <h2 class="lx">{{wolix}}</h2>
    <h3 class="lxnr">立志解救数千万单身人士！</h3>
    <h3 class="lxnr">以先天下之乐而乐,</h3>
    <h3 class="lxnr">后天下之忧而忧为己任！</h3>
      </div>
    <div class="smd">
    <h2 class="sm">我们的使命:</h2>
    <h3 class="lxnr">天下单身,</h3>
    <h3 class="lxnr">缘成有责!</h3>
    </div>
    <div>
    <img class="inx" v-bind:src="index_img" width="330px" height="200px">
   </div>
   <div class="bt">
    <mt-button type="primary"  @click="gotologn">缘成佳缘</mt-button>
   <p class="xy">点击缘成佳缘即同意<a href=''>{{xieyi}}</a>和<a href=''>{{mianz}}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      welcome_yu: '欢迎来到缘成',
      wolix: '我们的理想:',
      index_img: './static/img/index.png',
      xieyi: '<<用户协议与隐私条款>>',
      mianz: ' <<免责声明>>'
    }
  },
  methods: {
    gotologn () {
      this.$router.push('/Logn')
    }
  }
}
</script>

<style  scoped>
.lxq{
  /* background-color:deepskyblue*/
}
.smd{
 /* background-color:deepskyblue*/
}
.wy{
  color: #0A84E8
}
.lxnr{
  color:#E51C1C
}
.inx{
  margin-left: 30px,
}
.bt{
  margin-top: 50px
}
.xy{
  font-size: 12px
}
</style>
