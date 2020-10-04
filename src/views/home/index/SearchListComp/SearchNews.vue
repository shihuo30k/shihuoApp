<template>
    <div class="search-news">
        <h2 class="title">{{ keywords }}的相关信息</h2>
        <van-list
        v-model="loading"
        loading-text="加载数据中"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
            <ul class="news-list">
                <li 
                v-for="news in newsList"
                :key="news.id + news.business"
                >
                    <div class="imgs">
                        <img :src="news.img_url" alt="">
                    </div>
                    <div class="detail">
                        <h3 class="detail-title">
                            {{ news.title[0] }}
                        </h3>
                        <p class="price">
                            {{ news.subtitle }}
                        </p>
                        <div class="btm">
                            {{ news.business }}
                        </div>
                    </div>
                </li>
            </ul>
        </van-list>
    </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
import http from '@/utils/http'
export default {
    props:{
        keywords:{
            type:String
        }
    },
    data(){
        return {
            newsList:[],
            loading: false,
            finished: false,
        }
    },
    created(){
        this.page=1,
        this.page_size=30,
        this.type='news'
    },
    mounted(){
        // this.getNewsData()
    },
    methods:{
        async getNewsData(){
            let result = await http.get(
                '/api/search',
                {
                    page:this.page,
                    page_size:this.page_size,
                    type:this.type,
                    keywords:this.keywords
                }
            )
            this.newsList = [
                ...this.newsList,
                ...result.data.list
            ]
            this.loading = false
            this.page++
            if(result.data.list.length === 0) this.finished === true
        },
        onLoad(){
            this.getNewsData()
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
.search-news
    width 100%
    background #fff
    .title
        height .4rem
        line-height .4rem
        padding-left .1rem
        font-size .14rem
        font-weight normal
        color #333
        border_1px(0 0 1px 0,#e6e6e6)
    .news-list
        width 100%
        padding-left .1rem
        li
            display flex
            padding .1rem 0
            border_1px(0 0 1px 0,#e6e6e6)
            .imgs
                width 1.07rem
                height 1.07rem
                margin-right .1rem
                img 
                    width 100%
                    height 100%
            .detail
                flex 1
                display flex
                flex-direction column
                justify-content space-between
                padding-right .2rem
                .detail-title
                    font-size .13rem
                    font-weight normal
                .price
                    font-size .12rem
                    color #FF4338
                .btm
                    color #999
                    font-size .12rem
</style>