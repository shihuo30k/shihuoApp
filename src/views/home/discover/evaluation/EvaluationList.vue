<template>


    <van-list
    v-model="loading"
    @load="onLoad">
        <ul class="container">
            <li
            v-for = "(v,i) in list"
            :key="i"
        
            >
                <p>
                    <img :src="v.avatar" alt="">
                </p>
                <div>
                    <a href="#">
                        <p>{{v.author_name}}</p>
                        <h6>{{v.publish_time}}</h6>
                        <i>{{v.title}}</i>
                        <b>
                            <img :src="v.img_long" alt="">
                        </b>
                        <em>
                            <p class="like"></p>
                            <span>{{v.praise}}</span>
                            <i class="say"></i>
                            <b>{{v.reply_count}}</b>
                        </em>
                </a>
                </div>
                
            </li> 
            
        </ul>

    </van-list>
</template>
<script>

import http from '@u/http'
import Vue from "vue"
import { List } from "vant"

Vue.use(List)


export default {
    data(){
        return{
            finished:false,
            loading:false,
            list:[ ],
            page:1,
            pageSize:10

        }
    },
    props:{
        // arr:{
        //     type:Array,
        //     required:true,
        // },
        
        
    },
    mounted(){
        // this.loadDate()
    },
    methods: {
       async loadDate(){
             let result =await http.get(
            'api/zhongce/getArticleList',
            {
                page:this.page,
                pageSize:this.pageSize

            }
            )
            this.list =[
                ... this.list,
                ... result.data
            ]
            this.loading=false
            this.page = this.page+1
            console.log(result.data);
            console.log(this.list);
        
        },

        onLoad(){
            this.loadDate()
        }
    },
}
</script>
<style lang="stylus" scoped>

     .container
      
        // height 100%
        // overflow-y scroll
        li
            width 100%
            // height 3.15rem
            display flex
            padding-right .1rem
            padding-left  .11rem
            margin-bottom .24rem
            >p
                width .34rem
                height .34rem
                
                >img 
                    width .34rem
                    height .34rem
            >div
                padding-left .1rem
                width calc(100% - .35rem)
                >a
                    >p
                        font-size .18rem
                        line-height .28rem
                        color #444444
                    >h6
                        font-size .17rem
                        line-height .26rem
                        color #999999
                        font-weight normal
                    >i 
                        font-size .2rem
                        color #444444
                        margin .075rem 0
                    >b
                        display block
                        width 100%
                        height 1.45rem
                        // padding .1rem 0 .16rem 0
                        padding-bottom .075rem
                        >img 
                            width 100%
                            height 100%
                    >em
                        display flex
                        
                        >p
                            width .16rem
                            height .15rem
                            margin-top .05rem
                            
                        >span
                            color #a4a4a4
                            font-size .18rem
                            padding-left .04rem
                        

                         
                        >i 
                            width .17rem
                            height .17rem
                            margin-left .12rem 
                            margin-top .05rem
                      
                        >b
                            font-size .18rem
                            color #a4a4a4
                            padding-left .05rem 
                            font-weight normal



                                


.like
    background url('//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png') left bottom  no-repeat;
    background-size 100% 100%
    
.say 
    background url('//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png') left center no-repeat
    background-size 100% 100%
    
</style>



