<!--  -->
<template>
  <div class="con">
      <TopBar :title="title"></TopBar>
      <ul>
          <van-list
            v-model="loading"
            @load="onLoad"
            >
            <li v-for="v in list" :key="v.id">
                
                <p>
                    <img :src="v.image" alt="">
                </p>
                <h2>
                    {{v.title}}
                </h2>
                <div>
                    <span class="t1">
                        使用数量：
                        <i>{{v.product_attr.num}}</i>
                    </span>
                    <span class="t2">
                        已申请人：
                        <i>{{v.apply_num}}</i>
                    </span>
                    <span class="t3">
                    {{v.user_condition}}
                    </span>
                </div>
                <b>{{v.condition}}</b>
            </li>
        </van-list>
      </ul>
      
  </div>
</template>
<script>
import TopBar from '@c/discover/TopBar'
import http from '@u/http'
import Vue from 'vue';
import { List } from 'vant';
import qs from 'querystringify'
Vue.use(List);
export default {
    data(){
        return{
            title:'众测-识货',
            list:[],
            page:1,
            loading:false
        }
    },
    components:{
        TopBar
    },
    mounted(){
        this.list=[]
        this.loadData()
    },
    methods: {
        async loadData(){
           let result = await http.post('/api/zhongce/AjaxList',qs.stringify({page: this.page}))
           console.log(result.zhongce_lists.lists);
           this.list=[
               ...this.list,
                ...result.zhongce_lists.lists
           ]
             this.loading = false;
        },
        onLoad(){
            this.page+=1
            this.loadData()
        }
    },
}
</script>
<style lang='stylus' scoped>
.con    
    width 100%
    height 100%
    ul 
        li 
            padding .125rem
            position relative
            p 
                height 2.15rem
                padding-bottom .05rem
            h2 
                margin-top .15rem
                font-size .2rem
                color #333
            div 
                display flex 
                justify-content space-between
                margin .15rem 0 0
                width 100%
                height .25rem
                line-height .25rem
                text-align center

                .t1,.t2
                    color #666
                    font-size .14rem
                    padding-top .02rem
                .t3 
                    font-size  .19rem
                    color #ff4338

            b 
                display block
                width .57rem
                height .23rem
                background-color #999
                color #fff 
                line-height .23rem
                text-align center
                border-radius .1rem
                font-size .14rem
                position absolute
                top .25rem
                left .125rem




    img 
        width 100%
        height 100%

</style>
