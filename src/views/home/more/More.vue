<template>
     <div class="body">
     <div class="more">
        <div>
         <div>
             <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png">
         </div>
         <div>
             <a>登录</a>
             <a>注册</a>
             <p>金币0</p>
         </div>
        </div>

        <div class="center">
           <div>
              <span>我的识货</span>
           </div>
           <div>
              <a>
                <img src="http://shihuo.hupucdn.com/ad/201901/0916/37a85ef303fd2b2319905b7ebf9263ad.png">
                <p>我的礼品</p>
              </a>
              
           </div>
        </div>

        <div class="bottom">
           <div>
              <span>识货必备</span>
           </div>
        </div>
     </div>
     </div>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
     return {
     }
  },

}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl';
.body
   height 100%
   background #f7f7f7
   .more
      width 100%
      > div:first-child
         width 100%
         height 1.5rem
         background-color #444
         display flex
         >div:first-child
               flex 1
               img 
                  width .4999rem
                  height .4999rem
                  margin-left .2rem
                  margin-top .7rem
                  flex 1
         >div:last-child
            width 100%
            height 100%
            padding-right .2rem
            padding-bottom .25rem
            padding-top .71rem
            margin-left .25rem
            >a
               color #FFF
               font-size .15rem
               padding-right .1rem
               margin-right .05rem
            >p
               color #FFF  
               font-size .12rem
               margin-top .0999975rem

      .center
         background #fff
         width 100%
         height 1.24rem
         color #444
         padding .075rem
         margin 0 0 .1rem
         >div:first-child
            width 100%
            height .21rem
            font-size .14rem
            color #333
            background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png) left center repeat-x
            background-size: .033325rem
            span
               background-color #FFF
               padding 0 .1rem

         >div:last-child
            width 100%
            height .88rem
            display flex
            align-items center
            >a
               color: #444
               width .9rem
               height .68rem
               text-align center
               >img
                  width .45rem
                  height .45rem
               >p 
                  color #444
      

      .bottom
         background #fff
         width 100%
         color #444
         padding .075rem
         margin 0 0 .1rem
         >div:first-child
            width 100%
            height .21rem
            font-size .14rem
            color #333
            background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png) left center repeat-x
            background-size: .033325rem
            span
               background-color #FFF
               padding 0 .1rem
    

</style>