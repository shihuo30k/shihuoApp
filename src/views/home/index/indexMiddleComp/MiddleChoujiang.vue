<template>
    <div class="choujiang list">
        <div class="banner">
            <img src="//sh1.hoopchina.com.cn/app/assets/lucky_draw_new/1.0.0/static/img/banner.b63d5d0.png" alt="">
        </div>
        <van-list
        v-model="loading"
        loading-text="加载数据中"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
            <ul class="choujiang-list">
                <li
                v-for="item in luckyList"
                :key="item.id"
                >
                    <div class="good-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="title">
                        <div class="name">
                            {{ item.title }}
                        </div>
                        <div class="title-img">
                            <img src="data:image/png;base64,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" alt="">
                        </div>
                    </div>
                    <div class="btm">
                        <div class="desc">
                            {{ item.act_desc }}
                        </div>
                        <div class="price">
                            ￥{{ item.original_price }}
                        </div>
                    </div>
                </li>
            </ul>
        </van-list>
        <BackTop></BackTop>
    </div>
</template>
<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
import http from '@u/http'
import BackTop from '@/components/BackTop'
export default {
    data(){
        return {
            luckyList:[],
            loading:false,
            finished:false
        }
    },
    mounted(){
        
    },
    created(){
        this.page = 1
        this.page_size = 10
    },
    components:{
        BackTop
    },
    methods:{
        async getluckyData(){
            let result = await http.get(
                '/api/lucky_draw_two/ajaxList',
                {
                    page:this.page,
                    page_size:this.page_size,
                    id:'',
                    resource:''
                }
            )
            this.luckyList = [
                ...this.luckyList,
                ...result.data.list
            ]
            this.page++
            this.loading = false
        },
        onLoad(){
            this.getluckyData()
        }
    }
}
</script>
<style lang='stylus' scoped>
.choujiang
    height 100%
    padding 0 .25rem
    overflow-y scroll
    .banner
        width 100%
        margin-bottom .15rem
        img 
            width 100%
    .choujiang-list
        width 100%
        li
            width 100%
            margin-bottom .28rem
            .good-img
                width 100%
                margin-bottom .12rem
                img 
                    width 100%
            .title
                width 100%
                height .14rem
                display flex
                justify-content space-between
                margin-bottom .07rem
                .name
                    font-size .14rem
                    line-height .14rem
                .title-img
                    height 100%
                    img 
                        height 100%
                        display block
            .btm
                width 100%
                font-size .14rem
                display flex
                justify-content space-between
                .desc
                    color #bcbcbc
                .price
                    text-decoration: line-through;
                    color: #282828;
                    font-family: HelveticaNeue-CondensedBold;
                    font-weight: 700;

            
</style>