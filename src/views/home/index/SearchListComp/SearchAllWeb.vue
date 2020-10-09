<template>
    <div class="allweb">
        <h2 class="allweb-title">
            全网搜索
            <span>
                （为您搜索{{ shopNum }}家店铺，共搜集{{ goodsNums }}条正品信息）
            </span>
        </h2>
        <ul class="web-list">
            <li
            v-for="res in allWebSearch"
            :key="res.id"
            >
                <div class="imgs">
                    <img :src="res.img" alt="">
                </div>
                <div class="detail">
                    <h3 class="title" v-html="res.title">
                        <!-- {{ res.title }} -->
                    </h3>
                    <p class="price">
                        ￥&nbsp;{{ res.price }}
                    </p>
                    <div class="btm">
                        {{ res.store }}
                    </div>
                </div>
            </li>           
        </ul>
        <p class="linkMore" @click="moreHandler">
            <a href="javascript:void(0);">
                查看更多全网相关正品
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png" alt="">
            </a>
        </p>
    </div>
</template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
import http from '@/utils/http'
export default {
    props:{
        keywords:{
            type:String
        }
    },
    data(){
        return {
            allWebSearch:[],
            goodsNums:0,
            shopNum:0
        }
    },
    created(){
        this.page = 1,
        this.page_size = 3
    },
    mounted(){
        this.getGoodPicData()
    },
    methods:{
        async getGoodPicData(){
            let result = await http.get(
                '/api/search/allweb',
                {
                    page:this.page,
                    page_size:this.page_size,
                    keywords:this.keywords
                }
            )
            this.allWebSearch = result.data.list
            this.shopNum = result.data.shop_num
            this.goodsNums = result.data.goods_num
        },
        moreHandler(){
            Toast('更多精彩请下载APP');
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
.allweb
    width 100%
    background-color #fff
    margin-bottom .08rem
    span 
        color #FF4338
    .allweb-title
        height .4rem
        line-height .4rem
        padding-left .1rem
        font-size .13rem
        font-weight normal
        color #333
        border_1px(0 0 1px 0,#e6e6e6)
    .web-list
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
                .title
                    font-size .13rem
                    font-weight normal
                    >>>span 
                        color #FF4338
                .price
                    font-size .12rem
                    color #FF4338
                .btm
                    color #999
                    font-size .12rem      
    .linkMore 
            text-align center;
            padding: .1rem 0;
            border_1px(0 0 1px 0,#e6e6e6)
            background #fff
            a
                font-size .12rem
                img
                    margin-left .04rem
                    width .05rem
</style>