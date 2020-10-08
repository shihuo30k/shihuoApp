<template>
  <div class="container">
    <Top  />
  <main>
     <van-sticky>
        <van-tabs v-model="active">
          <van-tab title="精选" to="/preferential/selected"></van-tab>
          <van-tab title="鞋类" to="/preferential/shoe"></van-tab>
          <van-tab title="服饰" to="/preferential/clothes"></van-tab>
          <van-tab title="数码" to="/preferential/digital"></van-tab>
          <van-tab title="兴趣" to="/preferential/interest"></van-tab>
        </van-tabs>
        <div class="mock show-more" >
           <van-button type="primary" @click="show = true" />
           <van-overlay :show="show" @click="show = false">
             <div class="wrapper" @click.stop>
              <div class="block" >
               <div class="topTag">
                <div class="topTag-title"><span>热门分类</span></div>
                <!-- <div class="topTag-cate"> -->
                 <van-tabs v-model="active" class="topTag-cate"  @click="changeShow">
                  <van-tab title="精选" class="topTag-select" to="/preferential/selected"></van-tab>
                  <van-tab title="鞋类" class="topTag-select" to="/preferential/shoe" ></van-tab>
                  <van-tab title="服饰" class="topTag-select" to="/preferential/clothes"></van-tab>
                  <van-tab title="数码" class="topTag-select" to="/preferential/digital" ></van-tab>
                  <van-tab title="兴趣" class="topTag-select" to="/preferential/interest"></van-tab>
                </van-tabs>
                <!-- </div> -->
               </div>
               <div class="popularSearch">
                <div class="popularSearch-title">
                   <span>热门搜索</span>
                </div>
                <div class="popularSearch-cate">
                 <router-link tag="div" to="/hot-search/AJ">AJ</router-link>
                 <router-link tag="div" to="/hot-search/Nike">Nike</router-link>
                 <router-link tag="div" to="/hot-search/亚瑟士">亚瑟士</router-link>
                 <router-link tag="div" to="/hot-search/洗面奶">洗面奶</router-link>
                 <router-link tag="div" to="/hot-search/Dickies">Dickies</router-link>
                 <router-link tag="div" to="/hot-search/李维斯">李维斯</router-link>
                 <router-link tag="div" to="/hot-search/新百伦">新百伦</router-link>
                 <router-link tag="div" to="/hot-search/PUMA">PUMA</router-link>
                </div>
               </div>
              </div>
             </div>
            </van-overlay>
        </div>
     </van-sticky>
   
     <router-view ></router-view>
    
  </main>
  </div>
</template>

<script>

import Vue from 'vue';
import { Sticky,Tab, Tabs, DropdownMenu, DropdownItem, Overlay,Button} from 'vant';

Vue.use(Sticky);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Overlay);
Vue.use(Button)

import Top from '@c/brandSale/Top'


export default {
   data(){
    return{
      show: false,
      active: 0,
      list: [],

      switch1: false,
      switch2: false,
      option: [
        { text: '精选', value: 0 },
        { text: '鞋类', value: 1 },
        { text: '服饰', value: 2 },
        { text: '数码', value: 3 },
        { text: '兴趣', value: 4},
      ],
     
    }
   },
  
    components: {
    Top,
    
  },
   mounted() {
     // var bt = document.querySelector('.van-sticky')
     // var topN = bt.offsetTop
     // console.log(topN)
     console.log(0)
  },
   methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    changeShow(){
     this.show = false
    }
  },
  updated(){

  }
}


</script>

<style lang="stylus">
.container
  overflow scroll
  height 100%
  display flex
  flex-direction column
  
 
  main
   width 100%
   .van-sticky
    display flex
    .van-tabs
     width 100%
    .show-more

     display flex
     justify-content center
     align-items center
     width 14.285714285714286%
     height .44rem
     font-size .34rem
     color rgb(173,176,178)
     background: rgba(255,255,255,.8) url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png) no-repeat;
     background-size: 100% auto;
     .van-button--normal 
      width 100%
      height 100%
      opacity 0

      
     .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
  }
     
         

  .block {
    position:absolute
    width: 100%;
    height: 250px;
    background-color: #fff;
    top: 0px
    font-size :.16rem
  }
.topTag{
 padding .1rem
 height 1.4rem
}
.topTag-cate>.van-tabs__wrap>.van-tabs__nav>.van-tabs__line {
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    
    background-color: #fff;
    border-radius: 3px;
}
.topTag-title{
       font-size :.14rem
       color: #444
    }
.topTag-cate{
 
 display :flex
 width 100%
 height 1.1rem
 flex-wrap: wrap
}
.topTag-cate>.van-tabs__wrap{
 display :flex
 width 100%
 height 100%
 flex-wrap: wrap
}
.topTag-cate>.van-tabs__wrap>.van-tabs__nav{
 width 100%
 display flex
 flex-wrap wrap
 height 100%
}
.topTag-cate>.van-tabs__wrap>.van-tabs__nav>.van-tab{
 height .4rem
 display :flex
 margin-left  :.1rem
 margin-top .1rem
 justify-content center
 align-items center
 color: #444;
 width 0.7rem
 flex: initial
}

.popularSearch{
  padding .1rem
  height 1rem
}
.popularSearch-title{
       font-size :.14rem
       color: #999; 
       text-align center
}
.popularSearch-cate{
 display :flex
 justify-content :space-between
 flex-wrap: wrap
}
.popularSearch-cate>div{
  display :flex
  width .70rem
  margin-right :.1rem
  margin-top .1rem
  justify-content center
  align-items center
  color: #444;
}




    
     
</style>
