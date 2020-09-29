<template>

<div class="recommand">
     
   <div class="top_bar">
      <div class="goback"><img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"></div>
      <span class="d-title">识货-栏目</span>
      <div class="ico_list">
      <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png">
      </div>
   </div>
   
   <div class="banner">
      <img get="true" data-original="http://shihuo.hupucdn.com/column/201705/3117/caf95db46a1387002292a40182657bac.jpg" class="lazy" src="http://shihuo.hupucdn.com/column/201705/3117/caf95db46a1387002292a40182657bac.jpg">
   </div>
   
   <div class="prolist_list clearfix">

      <h3 class="title">
      <span>识货每日荐</span>
      </h3>
       
    
      <ul data-columnid="130" class="shihuo-prolist prolist-css">
        <van-list
              v-model="loading"
              @load="onLoad"
            >
          <li v-for="(value) in selectedProducts" :key="value.id">
                  <!-- 国内优惠 -->
                  <a href="//m.shihuo.cn/youhui/589084.html#qk=youhui&amp;order=1" class="link-a" >
                  
                  <div class="imgs">
                      <span class="get_imgs">
                      <img get="true" data-original="http://shihuo.hupucdn.com/newsIndex11/202003/2009/919e94072774b1a683904861586dba7c.png?imageslim|imageView2/1/w/400/h/400" class="lazy"  :src="value.data.img_path">
                      </span>
                  </div>
                  <div class="details_box">
                      <h2>
                          {{value.data.title}}
                      </h2>
                      <p class="intro"><b>{{value.data.subtitle}}</b></p>
                      <div class="from"> <div class="guanzhu">{{value.data.praise}}</div>{{value.data.orginal_type}}</div>
                  </div>
              </a>
          </li>
             </van-list>
       </ul>
     
   </div>
 
 </div>
  
</template>

<script>
import Vue from 'vue';
import {List} from 'vant';

Vue.use(List);
import http from '@u/http'
// import { delete } from 'vue/types/umd';

export default {
    data(){
    return{
      selectedProducts:[],
      loading: false,
     
    }
   },
    components: {
    
  },
   created(){
     this.pageSize = 20
     this.offset = 1,
     this.page = 1
   },
   mounted(){
    // this.loadData()
    // console.log(this.selectedProducts)
  },
  computed:{

  // async changeOrder(){
  //   let result = await get({
  //            url: 'http://m.shihuo.cn/column/getList',
  //            params: {
  //              columnId:130,
  //              page: this.page,
  //              pageSize: this.pageSize
  //            }
  //          })
  //     return result
    
  // }
   
 },
  methods:{
  async loadData(){
     let result = await http.get(
      '/api/column/getList',
       {
        columnId:130,
        page: this.page,
        pageSize: this.pageSize
      }
    )
    // console.log(result)
    this.selectedProducts = [
       ...this.selectedProducts,
       ...result.data
    ]
    
   
    this.loading = false
    this.page += 1

   // result.reduce((item,value)=>{
   //      delete value.data.column_id
   //      delete value.data.createTimestamp
   //      delete value.data.create_time
   //      delete value.data.hits
   //      delete value.data.img_path
   //      delete value.data.intro
   //      delete value.data.is_daigou
   //      delete value.data.orginal_type
   //      delete value.data.is_site_jump
   //      delete value.data.is_site_jump
   //      delete value.data.is_site_jump
   //      delete value.data.is_site_jump








// point: "1"
// praise: "11"
// price: "0.00"
// product_id: "0"
// reply_count: "0"
// subtitle: "点击率爆表 不容错过"
// title: "【识货独家推荐】3.20优惠单品合集 10:00更新"
   // })
   //    console.log(result)
   },

   onLoad(){
       this.loadData()
   }
  }
}
</script>

<style lang='stylus' scoped>

.top_bar {
    
    background-color: #f7f7f7;
    height: .48rem;
    width: 100%;
    position: fixed;
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
    position: absolute;
    top: 53%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    color: #333;
    font-size: .19rem;
    display: inline-block;
    overflow: hidden;
    height: 30px;
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
.banner img {
    width: 100%;
    margin-top :.4rem
}

.prolist_list .title {
    text-align: center;
    font-size: 14px;
    margin: 20px 10px;
    position: relative;
}
.prolist_list .title:before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
}

.prolist_list .title span {
    display: inline-block;
    padding: 0 15px;
    background-color: #FFF;
    z-index: 10;
    position: relative;
}
.prolist-css .van-list{
 height 300px
}
.prolist-css li .link-a {
    padding: 10px 0;
    margin: 0 10px;
    border-bottom: 1px solid #e6e6e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    -moz-flex: 1;
    flex: 1;
    overflow: hidden;
    position: relative;
}
.prolist-css .imgs {
    width: 1.3rem;
    min-height: 1.3rem;
    text-align: center;
    overflow: hidden;
    position: relative;
    -webkit-box-flex: .6;
    flex: 1
}
.prolist-css .imgs img {
    max-width: 100%;
    max-height: 100%;
    display block
}
.prolist-css .details_box {
    margin-left: 10px;
    width 2.15rem
    height 1.3438rem
}
.prolist-css .details_box h2 {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    max-height: 48px;
    color: #333;
    overflow: hidden;
    display :inline-blockblock
    width 100%
    
}
.prolist-css .details_box .intro {
    font-size: 12px;
    line-height: 16px;
    height: 32px;
    overflow: hidden;
    color: #666;
    margin-top :.1rem
}
.prolist-css .details_box .from {
    font-size: 15px;
    width: 100%;
    line-height: 2em;
    height: 2em;
    color: #999;
    position: relative;
    margin-top :.15rem
}
.prolist-css .details_box .from .guanzhu {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: right;
    height: 100%;
    
}
.prolist-css .details_box .from .guanzhu:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    margin-right: 3px;
    background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/column/vote_icon_8caec38.png) no-repeat center left transparent;
    width: 10%;
    max-width: 15px;
    height: 100%;
    -webkit-background-size: contain;
    background-size: contain;
}
</style>