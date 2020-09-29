<template>
  <div class="container-one">
       <div class="top">
        <div class="search">
            <form class="searchInt">
              <i class="yo-ico">&#xe616;</i>
              <input class="int" type="text" placeholder="安踏 KT篮球系列">
            </form>
        </div>
        <div class="guide">
           <span>已收集0张优惠券</span>
           <router-link tag="div" to="/search-volume">搜卷指南 <i class="yo-ico"> &#xe648;</i></router-link>
        </div>
       </div>
       <div class="top-main">
          <BrandSale />
          <MoreProduct />
          <CenterImg />
       </div>
   </div>
</template>

<script>
import BrandSale from '@c/brandSale/BrandSale'
import MoreProduct from '@c/brandSale/MoreProduct'
import CenterImg from '@c/brandSale/CenterImg'


 export default {
 components: {
    BrandSale,
    MoreProduct,
    CenterImg,
   
  },
}
</script>

<style lang="stylus">
.container-one
   
   .top
    padding 0 .16rem 0 .16rem
    height .88rem
    width 100%
    background-color #f0f3f5
    display flex
    flex-direction column
    
    .search
     display flex
     margin-top 0.08rem
     border-radius 0.04rem ;
     text-align center
     width 3.4rem
     background-color #fff
     height .31rem
     align-items center
     justify-content left 
     margin-bottom .18rem
     .searchInt
      i
       font-size .16rem
       padding   0.04rem
       
      .int
       width 2.14rem
       border 1px solid #fff
       
    .guide
     display flex
     justify-content space-between
     span 
      font-size .12rem
     div
      display  flex
      justify-content center
      color #b5b9bc
      font-size .12rem
      width .75rem
      height .21rem
      border-radius .1rem
      border 1px solid #b5b9bc
    .top-main
      height 5.9rem
      background-color #d9d9d9
      width 100%
</style>
