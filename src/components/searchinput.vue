<template>
    <div id="header">
         <div class="header_input">
            <input type="text" placeholder="安踏KT篮球系列" class="input">
            <div class="imgcon">
               <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png" alt="">
            </div>
         </div>
    </div>
</template>

<script>
  export default{
     props:{

     },

  }
</script>

<style lang="stylus" scoped>
#header
  width 100%
  height .44rem
  display inline-block
  position relative
.header_input
  width 90%
.input
   background #EAEAEA  url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/search_0b8e800.png") left no-repeat
   background-size .13rem .13rem
   background-color #EAEAEA
   padding-left .18rem
   width 3.22rem
   height .26rem
   border none 
   font-size .09rem
   color #A8A8A8
   position absolute
   left .1rem
   top .1rem
.imgcon
   position absolute
   right 0
   top .05rem
  img 
    width .4rem
    height .4rem
</style>