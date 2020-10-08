<!--  -->
<template>
  <div class="con">
     
      <TopBar :title="title"></TopBar>
      <div class="top">
          <div class="img">
          <img :src="head.img" alt="">
      </div>
      <div class="intro">
          
        {{head.intro}}
      </div>
      
        <div class="clickmore" @click="show = true">

                <span>___</span>
                查看详情 More
                <span>___</span>
               

        </div>
        <div class="bgc"></div>
      </div>
      
        <van-action-sheet 
        v-model="show" 
        title="活动详情"
         cancel-text="确定"
        >

            <div class="content">
                翻开今年的球鞋日历，谁是你的年度爱鞋？<br>
                如果用球鞋告别2018，你会pick哪双？<br>
                晒照赢新年康扣！<br>
                <br>
                活动时间：<br>
                2018.12.29-2019.1.4<br>
                活动要求：<br>
                1、照片原创，照片必须加上商品TAG（标签）<br>
                2、说说为什么是你的年度爱鞋？<br>
                3、创意、全身穿搭照片加分<br>
                活动已结束，获奖名单请点击<a href="http://www.shihuo.cn/article/detail/25342.html" class="md-opjjpmhoiojifppkkcdabiobhakljdgm_doc">“晒照赢新年康扣”</a>“晒照赢新年康扣”
            </div>
        </van-action-sheet>
        <div class="hoteva">
            <h3>热门动态</h3>

        </div>
         <van-list
    v-model="loading"
    @load="onLoad">
        <HotTalkList
        :list="list"
        />
     </van-list>
  </div>
</template>
<script>
import HotTalkList from './HotTalkList'
import TopBar from "@c/discover/TopBar.vue"
import http from '@u/http'
import Vue from 'vue';
import { ActionSheet } from 'vant';
import { List } from "vant"

Vue.use(List)

Vue.use(ActionSheet);
export default {
    data() {
        return {
            title:" ",
            show:false,
            finished:false,
            loading:false,
            list:[ ],
            page:1,
            pageSize:20,
            head:[],
            id:0
        }
    },
    components:{
        TopBar,
        HotTalkList
    },
    mounted(){
        this.id=this.$route.params.id
    },
    methods: {
       async loadDate(){
             let result =await http.get(
            'api/topic/detailList',
            {
                page:this.page,
                sort: 'new',
                page_size: this.pageSize,
                id: this.id


            }
            )
            this.head=result.data.head
            this.title = result.data.head.name
            this.list =[
                ... this.list,
                ... result.data.list
            ]
            this.loading=false
            this.page = this.page+1
            console.log(result.data.list);
            console.log(this.list);
            
        },

        onLoad(){
            this.loadDate()
        }
    },
}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/ellipsis';
.con 
    width 100%
    height 100%
    .top 
        height 3.4rem
        width 100%

        .img 
            width 100%
            height 1.9rem
        
        .intro 
            
            height .5rem
            margin .15rem
            word-wrap break-word
            ellipsis()
            
        .clickmore 
            width 100%
            height .42rem
            line-height .42rem
            text-align center
            font-size .18rem
            color #9c9c9c
            padding 0 0 .15rem
            span 
                color #e3e3e3
        .bgc 
            width 100%
            height .1rem
            background-color #f7f7f7

     .content 
        font-size .18rem
        padding 0 .1rem .15rem
        color #333
        height 2.5rem
        overflow-y scroll
    .hoteva 
        width 100%
        height .44rem 
        padding  0 .1rem 0 
        h3 
            font-size .19rem 
            color #333
            font-weight normal
            

  

    img 
        width 100%
        height 100%
        font-size .12rem
        color #999
</style>
<style lang="stylus">
    .van-popup 
        button 
            background-color red
            color #fff
</style>