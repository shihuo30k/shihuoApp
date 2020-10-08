<template>
    <div class="container">
        <header>
            <div>
                
                <DiscoverSwiper></DiscoverSwiper>
            </div>
        </header>
        
         <main>
             
            <DiscoverGrid></DiscoverGrid>
            <div>
                <h2>热门话题</h2>
                <div>
                    <DiscoverHottalk></DiscoverHottalk> 
                </div>
            </div>
            
             
                <div class="list">
                <van-sticky>
 
                    <van-tabs v-model="active" title-active-color="#FF4338" title-inactive-color="#000" duration=0  sticky>
                        <van-tab title="今日推荐" replace to="/discover/recommend">
                        </van-tab>
                           
                        <van-tab title="篮球" replace to="/discover/baskball"></van-tab>
                        
                        <van-tab title="视频" replace to="/discover/video"></van-tab>
                        <van-tab title="最新资讯" replace to="/discover/news"></van-tab>
                        <van-tab title="潮流风向" replace to="/discover/wind"></van-tab>
                        <van-tab title="3c新奇特" replace  to="/discover/3c"></van-tab>
                        <van-tab title="潮鞋志" replace to="/discover/fashion"></van-tab>
                        <van-tab title="球鞋90秒" replace to="/discover/90s"></van-tab>
                    </van-tabs>

                </van-sticky>
                 
                <van-list
                v-model="loading"
                @load="onLoad"
                :immediate-check=imcheck
                :finished = fin


                >

                    <router-view
                    :arr="list"
                    ></router-view>
                    
                </van-list>
                </div>
                <!-- <router-view :arr="list"></router-view> -->
        </main>



    </div>
</template>
<script>
import Vue from 'vue'
import { Tab,Tabs,Swipe, SwipeItem ,Lazyload,Sticky,List} from 'vant'
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Swipe)
Vue.use(Sticky)
Vue.use(Lazyload)
Vue.use(SwipeItem)

import _ from 'lodash'
import http from '@u/http'

import DiscoverSwiper from '@v/home/discover/DiscoverSwiper'
import DiscoverHottalk from '@v/home/discover/DiscoverHottalk'
import Footer from '@c/Footer'
import DiscoverGrid from '@v/home/discover/DiscoverGrid'
export default {
    data(){
        
        return{
            list:[],
            active:0,
            name:0,
            path:'',
            loading:false,
            id:0,
            arr:[],
            index:0,
            imcheck:false,
            fin:false,
            db:[
                {
                    nm:"recommend",
                    id:283,
                    param_str:['2020-04-11','2020-03-31','2020-03-22'],
                    
                },
                {
                    nm:"3c",
                    id:273,
                    param_str:['2019-06-24','2019-06-14','2019-04-29']
                },
                {
                     nm:"90s",
                     id:136,
                    param_str:['2018-08-31','2018-03-16']
                },
                {
                     nm:"baskball",
                     id:347,
                     param_str:['2020-07-07','2020-07-02','2020-06-29']
                },
                {
                     nm:"fashion",
                     id:285,
                    param_str:['2020-06-11','2020-05-22']
                },
                {
                     nm:"wind",
                     id:318,
                    param_str:['2019-09-09','2019-08-12']
                },
                {
                     nm:"news",
                     id:270,
                    param_str:['2019-08-18','2019-08-13']
                },
                {
                     nm:"video",
                     id:281,
                    param_str:['2020-04-02','2019-11-29']
                },
            ]
             

        }
    },
    created(){

    },
    components:{
        DiscoverSwiper,
        DiscoverHottalk,
        Footer,
        DiscoverGrid
    },

     mounted() {
        //  console.log(this.$route.params.id);
        //  console.log(this.$route.name);
         let name = this.$route.params.id
         let obj = _.find(this.db,o=>(o.nm===name))

        this.id=obj.id
        this.arr=obj.param_str
        console.log(this.$route);
        //  console.log(obj.id,obj.param_str);
        // console.log(this.id,this.arr);
        this.loadDate(this.id,'')
        // console.log("mounted");
        
    
        
    },  
    beforeRouteUpdate(to, from, next) {
        // console.log("uuuuuu");
        // console.log(to.params.id);
        

            this.list=[]
            // this.path = to.name
             let obj1 = _.find(this.db,o=>(o.nm=== to.params.id))
            //  console.log(obj1);
            if(obj1){

                this.id=obj1.id
                this.arr=obj1.param_str
                 console.log(this.id,this.arr);
                //  console.log(obj1.id,obj1.param_str);
                this.loadDate(this.id,'')
                // console.log("bbb");
            }else{
                next()
            }
        

        next()
    },
    methods:{
       
        async loadDate(a,b){
            // console.log("aaaa");
             let result =await http.get(
            'api/find/mobileList',
            {
                tag_id:a,
                param_str:b

            }
            )
            // console.log(result);
            this.list =[
                ... this.list,
                ... result.data
            ]
            this.loading=false
            // console.log(result);
            // console.log(this.list);
        },
         onLoad(){
            //  console.log("onload");
             this.index +=1
             this.loadDate(this.id,this.arr[this.index])
        }

    }
}
</script>
<style lang="stylus" scoped>
.container
    height 100%
 header 
    div
        width 100%
        height 1.34rem
        // background-color pink
        overflow hidden
main 
    width 100%
    height 100%
    >div:nth-child(1)
        padding-left  .11rem
        height: .7rem;
        margin-bottom: .2rem;
    >div:nth-child(2)
        padding-left  .11rem
        h2  
            
            font-size .14rem
            color #222222
            font-weight normal
            line-height .41rem
        div
            width 100%
            height .64rem
            position relative
            overflow hidden

  
    >div:nth-child(3)
        height: .56rem;
        padding-left 0
        >div:nth-child(1)
            margin-bottom .1rem
            padding-left 0
    img 
        width 100%
        height 100%    
.list
    height 100%       
  
    
        
</style>
<style lang="stylus">
    // .van-tabs__line
    //     transition-duration: 0s !important 
 .van-tabs__nav--complete 
    
    padding-left 0

.van-tabs__line
    width 30px
.van-swipe-item img 
    width 100%
    height 1.34rem
</style>