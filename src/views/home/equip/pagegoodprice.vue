<template>
<div class="body" ref="body">
    <div class="headercon">
        <back></back>
    <div class="inputcon">
        <input type="text" placeholder="请输入产品名或商品名" class="input">
    </div>
    <div>
    <div class="changestyle" @click="change" v-if="column"></div>
    </div>
    <righttop></righttop>
    </div>
    <div class="headercon1"></div>
    <div class="xialacon1"></div>
    <div class="imgbacktop" v-show="imgshow" @click="backtop">
        <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/top_11d5d37.png" alt="">
    </div>
    <div class="xialacon">
        <van-dropdown-menu>
         <van-dropdown-item v-model="value1" :options="option1">
         </van-dropdown-item>
         <van-dropdown-item v-model="value2" :options="option2"></van-dropdown-item>
         <van-dropdown-item v-model="value3" :options="option3"></van-dropdown-item>
        </van-dropdown-menu>
    </div>
    <div class="rowlist1"></div>
    <div class="rowlist">
         <div class="content" v-for="(item,id) in rowlist" :key="item.id" @click="handler(id)">
             <p>{{item.title}}</p>
             <p>{{item.desc}}</p>
         </div>
    </div>
  
    <!-- <van-cell is-link @click="showPopup" get-container=".list">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup> -->
    <!-- <div class="list" v-show="show">
        <div>
            <ul @click="handler1">
               <li>篮球鞋</li>
               <li>篮球鞋</li>
            </ul>
        </div>
    </div> -->
    <div class="rowlist1"></div>
    <van-list
     v-model="loading"
     :finished="finished"
     finished-text="没有更多了"
     @load="onload"
    >
    <div class="goodlist">
      <a :href="item.href" v-for="item in goodslist" :key="item.id" class="aa" v-show="!listshow">
        <div class="listcon">
           <div class="imgcon">
               <img :src="item.pic" alt="">
           </div>
           <div class="desccon">
               <div>
                 <span>{{item.name}}</span>
               </div>
               <div class="intro">
                  {{item.intro}}
               </div>
               <div class="pricehitcon">
                 <div class="pricecon">￥{{item.price}}</div>
                 <div class="hitcon">热度：{{item.hits}}</div>
               </div>
           </div>
        </div>
      </a>

      <a :href="item.href" v-show="listshow" v-for="item in goodslist" :key="item.index" class="a2">
          <div class="outcon">
               <div class="secondimgcon">
                  <img :src="item.pic" alt="">
               </div>
               <div class="secondname">{{item.name}}</div>
               <div class="secondintro">{{item.intro}}</div>
               <div class="secondprice">￥{{item.price}}起</div>
          </div>
      </a>
    </div>
    </van-list>
</div>
</template>

<script>
import searchinput from "@c/searchinput"
import back from "./back.vue"
import righttop from "@c/righttop.vue"
import http from "@u/http.js"
import Vue from "vue"
import { List } from 'vant';
import { Popup } from 'vant'
import { DropdownMenu,DropdownItem } from 'vant'
import {Button} from 'vant'
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Popup);
Vue.use(List)
export default {
    data(){
        return{
            column:true,
            listshow:true,
            imgshow:false,
            show:false,
            goodslist:[],
            loading:false,
            finished:false,
            page:2,
            rowlist:[
                {id:1,title:"选择品牌",desc:"无"},
                {id:2,title:"分类筛选",desc:"无"},
                {id:3,title:"篮球鞋分类",desc:"无"},
                {id:4,title:"篮球鞋全掌配置",desc:"无"},
                {id:5,title:"篮球鞋中底足弓",desc:"无"},
                {id:6,title:"跑鞋功能性分类",desc:"无"},
                {id:7,title:"球星代言",desc:"无"},
            ],
            rowsortlist:[
                {id:1,sort:['Nike/耐克','LiNing/李宁','Anta/安踏'],seen:false},
                {id:2,sort:['篮球鞋','休闲鞋','跑鞋','拖鞋'],seen:false},
                {id:3,sort:['实战','潮流'],seen:false},
                {id:4,sort:['李宁云','Bounce+','React'],seen:false},
                {id:5,sort:['TPU','碳板'],seen:false},
                {id:6,sort:['城市慢跑','潮流休闲'],seen:false},
                {id:7,sort:['CJ麦科勒姆','韦德','欧文','乔丹','汤普森'],seen:false}
            ],
            value1:0,
            value2:'a',
            value3:1,
            option1:[
                {text:'特价优惠',value:0},
                {text:'低价运动装备限时抢购，每日更新',value:1},
                {text:'选择识货包邮链接商家可获得免费包邮服务',value:2}
            ],
            option2:[
                {text:'人气最高',value:'a'},
                {text:'新品上架',value:'b'},
                {text:'价格从低到高',value:'c'},
                {text:"价格从高到低",value:'d'}
            ],
            option3:[
               {text:"全部价格",value:1},
               {text:"0-100",value:2},
               {text:"100-300",value:3},
               {text:"300-500",value:4},
               {text:"500-1000",value:5},
               {text:"1000-10000",value:6},
               {text:"10000以上",value:7},
            ],
        }
    },
    methods:{
       change(){
         this.listshow=!this.listshow
       },
       backtop(){
         this.$refs.body.scrollTop=0
       },
       handler1(){
           this.show=!this.show;
       },
       handler(id){
           console.log(id);
           this.show=!this.show
       },
       showPopup() {
         this.show = true;
       },
       getContainer() {
        return document.querySelector('.list');
      },
      handlerscroll(){
        if(this.$refs.body.scrollTop>400){
          this.imgshow=true
        }else{
          this.imgshow=false
        }
      },
      async onload(){
        let result=await http.get("/api//sports/search?page="+this.page+"&page_size=20&range=篮球鞋,紧身衣,球衣,T恤,运动内衣,运动短裤,运动短裙,运动长裤,紧身裤,袜子,运动护具,篮球,背包,跑鞋,训练鞋,紧身衣,运动内衣,T恤,紧身裤,运动长裤,运动短裤,运动短裙,手环,运动耳机,腰包,手套,运动饮料,能量胶,能量棒,蛋白粉,泡腾片,胶囊,片剂,休闲鞋,靴子,皮鞋,拖鞋,篮球鞋,运动内衣,紧身衣,T恤,连帽衫/套头衫,夹克,马甲,羽绒服,球衣,手表,首饰,钱包,双肩包,男包,女包,旅行箱")
        this.goodslist=this.goodslist.concat(result.data.info);
        this.page++;
        this.loading=false;
        if(this.goodslist.length>200){
          this.finished=true;
        }
      },
    },
    async mounted(){
      var body=document.querySelector(".body")
      body.addEventListener("scroll",this.handlerscroll,true)
      let result=await http.get("/api//sports/search?page=1&page_size=20&range=篮球鞋,紧身衣,球衣,T恤,运动内衣,运动短裤,运动短裙,运动长裤,紧身裤,袜子,运动护具,篮球,背包,跑鞋,训练鞋,紧身衣,运动内衣,T恤,紧身裤,运动长裤,运动短裤,运动短裙,手环,运动耳机,腰包,手套,运动饮料,能量胶,能量棒,蛋白粉,泡腾片,胶囊,片剂,休闲鞋,靴子,皮鞋,拖鞋,篮球鞋,运动内衣,紧身衣,T恤,连帽衫/套头衫,夹克,马甲,羽绒服,球衣,手表,首饰,钱包,双肩包,男包,女包,旅行箱")
      this.goodslist=result.data.info
      console.log(this.goodslist)
      this.listshow=false
    },
    components:{
       back,
       righttop
    },
}
</script>

<style lang="stylus" scoped>
.secondname
  width 1.76rem
.secondprice
   color red
   width 100%
.secondintro
  width 1.76rem
  overflow hidden
  white-space nowrap
  text-overflow ellipsis
  color #999999
.a2
  display inline-block
  width 46.4%
  color black 
  margin-left .1rem
.outcon
  width 46.4%
  height 2.48rem
.secondimgcon
  
  img  
    width 1.6rem
    height 1.6rem
.aa
  color black
  padding 0
  margin 0
.imgbacktop
  position fixed
  z-index 999
  top 5.66rem
  right .1rem
  img 
    width .38rem
    height .38rem
.body
  overflow-y scroll
  height 100%
.headercon
   position fixed 
   display flex
   width 100%
   height .48rem
   align-items center
   background-color #F7F7F7
.headercon1
   width 100%
   height .48rem
.xialacon1
   width 100%
.xialacon
   position fixed
   z-index 999
   width 100%
   top .4rem
.inputcon
   width 64.53%
.input 
  background #EAEAEA  url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/search_0b8e800.png") left no-repeat
  background-size .18rem .18rem
  background-position-x .08rem
  padding-left .3rem
  width 100%
  height .32rem
  border none
.changestyle
  width .24rem
  height .24rem
  background   url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/list/model-2_c134d07.png") center no-repeat
  background-size contain
  background-color transparent
  margin-left 3.73%
  margin-right 3.73%
.three
  display flex
.rowlist1
  width 100%
  height .5rem
.rowlist
  position fixed
  top .88rem
  height .5rem
  width 100%
  background-color #F0F3F5
  overflow-x scroll
  white-space nowrap
.content
  display inline-block
  width .76rem
  text-align center
  overflow hidden
  white-space nowrap
  
  background-color white
  margin-right .1rem
  margin-left .1rem
  p
   font-size .16rem
.list
  position absolute
  background-color yellow
  height .5rem
  width 100%
.goodlist
  overflow-y scroll
  width 100%
.listcon
  width 100%
  height 1.2rem
  display flex
.imgcon
   img 
     width 1rem
     height 1rem
     margin-left .1rem
.desccon
  margin-left .1rem
  width 2.42rem
.pricehitcon
  display flex
  justify-content space-between
  width 2.42rem
.pricecon
  color red
.hitcon
  color  #999
.intro
   margin .3rem 0 .1rem 0
   color #999999
</style>