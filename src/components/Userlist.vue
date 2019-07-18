<template>
    <div class="userlist">
       <mt-header fixed title="缘成">
         <router-link to="/" slot="left">
         <img src="static/img/iconm.png" width="25px" height="25px">
        </router-link>
         <router-link to="/" slot="right">
         <img src="static/img/iconx.png" width="40px" height="40px">
        </router-link>
        </mt-header>
        <!--图像区-->
        <div class="lazyload" >
          <div class="ha" >
        <p class="page-lazyload-listitem" v-for="item in list">
        <img v-lazy="item" class="image">
       </p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Userlist',
  data () {
    return {
      list: [
          'static/img/1.png',
          'static/img/2.png',
          'static/img/1.png',
          'static/img/2.png',
          'static/img/1.png',
          'static/img/2.png',
        ]
    }
  }
}
</script>

<style scoped>
.mint-header {
    background-color:#90CAF9;
   }
   .lazyload{
   overflow:hidden
   }
.image {
        display: block;
        width: 100%;
        height: 600px
      }
</style>
