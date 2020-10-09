<template>
  <div class="moreProducts">
   <div class="top_bar">
      <div class="goback" @click="goback"><img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"></div>
      <span class="d-title">超值9块9</span>
      <div class="ico_list">
      <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png">
      </div>
   </div>
   <div id="listView">
     <div class="list-view-top">    
        <div class="list-menu">  
            <ul><li class="on">白菜价</li></ul> 
        </div>
        <div class="list-submenu">
          <ul class="clearfix">
           <router-link tag="li" to="/more-products/products-switch/1" active-class="changeColor">全部</router-link>
           <router-link tag="li" to="/more-products/products-switch/2" active-class="changeColor">男装服饰</router-link>
           <router-link tag="li" to="/more-products/products-switch/3" active-class="changeColor">袜子内裤</router-link>
           <router-link tag="li" to="/more-products/products-switch/4" active-class="changeColor">3C配件</router-link>
           <router-link tag="li" to="/more-products/products-switch/5" active-class="changeColor">食品营养</router-link>
           <router-link tag="li" to="/more-products/products-switch/6" active-class="changeColor">日用百货</router-link>
           <router-link tag="li" to="/more-products/products-switch/7" active-class="changeColor">运动户外</router-link>
           <router-link tag="li" to="/more-products/products-switch/8" active-class="changeColor">成人用品</router-link>
           <router-link tag="li" to="/more-products/products-switch/9" active-class="changeColor">美妆个护</router-link>
           <router-link tag="li" to="/more-products/products-switch/10" active-class="changeColor">鞋包配饰</router-link>
           <router-link tag="li" to="/more-products/products-switch/11" active-class="changeColor">网红小物</router-link>
           <router-link tag="li" to="/more-products/products-switch/12" active-class="changeColor">其他分类</router-link>
          </ul>    
        </div> 
        
      </div>
      
   </div> 
         <router-view></router-view> 
  </div>
</template>

<script>
import http from '@u/http'
export default {
   methods:{
    goback(){
      this.$router.replace({name:'preferential'})
    }
   }
}
</script>

<style lang='stylus' scoped>
.moreProducts{
  height 100%
  background-color #f7f7f7
}
.top_bar {
    
    background-color: #f7f7f7;
    height: .48rem;
    width: 100%;
    // position: fixed;
    top: 0;
    text-align: center;
    z-index: 90;
    border-bottom: 1px solid #e6e6e6;
    display flex
    align-items center
}
.top_bar .goback img {
    display: block;
    height: .48rem;
    width :.48rem;
}
.top_bar .d-title {
  
    margin-left :.48rem
    color: #333;
    font-size: .19rem;
    display: inline-block;
    overflow: hidden;
    height: .48rem;
    line-height :.48rem
    font-weight: 700 ;
    width: 50%;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.top_bar .ico_list {
    position: absolute;
    right: 0;
    top: 0;
    width: .48rem;
    height: .48rem;
    align-items: center;
    justify-content: center;
    display: flex;
}
.top_bar .ico_list img {
    height: 82%;
}

#listView .list-view-top {
    border: 0;
    padding-bottom: .1rem;
    top: 4em;
    z-index: 10;
 
}
.list-view-top {
    background-color: #FFF;
    border-bottom: 1px solid #eee;
    width: 100%;
    overflow: scroll;
}
#listView .list-view-top .list-menu {
    display: none;
}
.list-view-top .list-menu {
    height: 1.06667rem;
    line-height: 1.06667rem;
    padding: 0 .66667rem;
}
#listView .list-view-top .list-submenu {
    padding: .1rem 0 0 .1rem;
    overflow-y: hidden;
}
.list-view-top .list-submenu {
    overflow-x: auto;
    padding: 0 0 .32rem .4rem;
    -webkit-overflow-scrolling: touch;
}
.list-view-top .list-submenu ul {
    white-space: nowrap;
}
[data-dpr="2"] .list-view-top .list-submenu li {
    font-size: 24px;
}
.list-view-top .list-submenu li {
    display: inline-block;
    height: .26rem;
    line-height: .26rem;
    width: .75rem;
    margin-right: .1rem;
    color: #333;
    background-color: #f5f5f5;
    border-radius: .04rem;
    font-size: 12px;
    text-align: center;
}
.list-view-top .list-submenu .changeColor{
   color: #ffffff
   background-color red
   
}
</style>