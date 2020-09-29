<template>
   <ul class="main">
     <li v-for="value in productList" :key="value.expose_key" class="main-li" >
        <a  :href="value.href" class="aaa">
        <div  class="left-img">
            <img :src="value.img" alt="">
        </div>
        <div class="right-content">
          <div class="right-content-one">{{value.title}}</div>
          <div class="right-content-two">{{value.subtitle}}</div>
          <div class="right-content-three">
           <span class="shoppingName">{{value.business}}</span>
           <span class="undate">{{value.date}}</span>
          </div>
        </div>
        </a>
     </li>
   </ul>
</template>

<script>

export default {
  props: {
    productList: {
      type: Array,
     
    }
  },
  mounted(){
   // console.log(this.productList)
  },
  methods:{
     
  }
}
</script>

<style lang="stylus">
.main
 padding .075rem 0 0 .075rem
 width 100%
 .main-li
  display flex
  height 1.28rem
  padding  .075rem .075rem .075rem 0
  a
   display flex
   width 100%
   height 100%
   .left-img
    width 1.08rem
    img
     width 1.08rem
     height 0.8761rem
   .right-content
    width 100%
    padding-left .1rem
    display flex
    flex-direction column
    justify-content space-between
    .right-content-one
     font-size .14rem
    .right-content-two
     font-size .14rem
     color rgb(255,67,56)
    .right-content-three
     color #999
     display  flex
     justify-content space-between
     font-size .12rem

  
  
</style>
