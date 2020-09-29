<template>
<van-list
      v-model="loading"
      :finished="finished"
      finished-text="人家也是有底线的"
      loading-text="正在努力加载中"
      @load="onLoad"
    >
      <ul>
         <li v-for="good in goodsList" :key="good.item_id">
            <template v-if="good.show_type==='single3'">
               <div>
                  <span>
                  <img :src="good.data.img" :alt="good.data.title">
                  </span>
               </div>
               <div class="test">
                  <h1>{{ good.data.title }}</h1>
                  <p>
                     <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_left.png">
                     {{ good.data.intro }}
                     <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png">
                  </p>
                  <div>{{ good.data.merchant }} &nbsp;<span>¥{{ good.data.price }}</span></div>
               </div>
            </template>
            <template v-else-if="good.show_type==='single2'">
               <div>
                  <Single2 :good="good"></Single2>
               </div>
            </template>
            <template v-else-if="good.show_type==='multi2'">
               <div>
                  <Multi2 :good="good"></Multi2>
               </div>
            </template>
         </li>        
      </ul>
   </van-list>
</template>



<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
import { mapState } from 'vuex'
import _ from 'lodash'
import http from '@u/http'
import Single2 from '@/views/home/index/Single2'
import Multi2 from '@/views/home/index/Multi2'
export default {
   data(){
      return{
         loading: false,
         finished: false,
         goodsList:[]
      }
   },
   components:{
      Single2,
      Multi2,
   },
   computed:{
      ...mapState(['cartType','channelType'])
   },
   created(){
      this.defaultApiIndex=0
      this.basketBallApiIndex=0
      this.runningApiIndex=0
      this.fitnessApiIndex=0
      this.freestyleApiIndex=0
      this.defaultApiParams=[
         '',         
         '1601081282:2:',
         '1600993442:3:',
         '1600912083:4:',
         '1600827842:5:',
         '1600741442:6:'
      ]
      this.basketBallApiParams=[
         '',         
      ]
      this.runningApiParams=[
         '',         
      ]
      this.fitnessApiParams=[
         '',         
      ]
      this.freestyleApiParams=[
         '',         
      ],
      this.defaultList = []
      this.basketball = []
   },
   mounted(){
      this.render()
   },
   methods:{
      async render(){
         let result = await http.get(
         '/api/homefis/getNews',
        {
            pageSize:20,
            param_str:'',
            type:this.cartType,
            channel_type:this.channelType,
         }
         )
         // this.goodsList = [
         //    ...this.goodsList,
         //    ...result
         //    ]

         // this.goodsList = _.filter(result,o => o.show_type !== 'single2')
         this.goodsList =result.data

         this.loading = false
         this.defaultApiIndex++
         if(this.defaultApiIndex > this.defaultApiParams.length -1) this.finished = true
      },
      onLoad(){
         this.render()
      },
   }
}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
ul
   margin-left .1rem
   li
      display flex
      padding .1rem .1rem .1rem 0
      width 3.65rem
      min-height 1.33rem
      border_1px(0 0 1px 0,#e6e6e6)
      &:first-child
         border_1px(1px 0 1px 0,#e6e6e6)
      &>div:first-child
         
         span
            width 1.07rem
            height 100%
         img
            width 1.07rem
      .test
         flex 1
         width 2.58rem
         height 1.12rem
         padding 0.1rem
         font-size .14rem
         display flex
         flex-direction column
         justify-content space-between
         h1
            color: #333;
            font-weight: 400;
            overflow: hidden;
            word-break: break-all;
            line-height: .56rem;
            line-height 1em
         p
            img
               width .09rem
               height .09rem
         div
            color #999
            span
               color #FF4338
  
</style>