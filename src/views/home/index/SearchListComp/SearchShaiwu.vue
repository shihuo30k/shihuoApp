<template>
    <div class="search-shaiwu">
        <h3 class="shaiwu-title">
            {{ keywords }}的相关晒物
        </h3>
        <h2>{{ keywords }}</h2>
        <p class="content">
            {{ shaiwuData.intro }}
        </p>
        <ul class="img-list">
            <li
            v-for="(img, index) in shaiwuData.img_attr"
            :key="index"
            >
                <img :src="img" alt="">
            </li>
        </ul>
        <div class="btm">
            <p class="author">{{ shaiwuData.author_name }}</p>
            <span class="date">{{ shaiwuData.date }}</span>
        </div>
        <p class="linkMore" @click="moreHandler">
            <a href="javascript:void(0);">
                查看所有{{ nums }}条相关晒物
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
            shaiwuData:{},
            nums:0
        }
    },
    created(){
        this.page=1,
        this.page_size=1,
        this.type='shaiwu'
    },
    mounted(){
        this.getShaiwuData()
    },
    methods:{
        async getShaiwuData(){
            let result = await http.get(
                '/api/search',
                {
                    page:this.page,
                    page_size:this.page_size,
                    type:this.type,
                    keywords:this.keywords
                }
            )
            
            this.shaiwuData = result.data.list[0]
            this.nums = result.data.num
        },
         moreHandler(){
            Toast('更多精彩请下载APP');
        },
    }
}
</script>
<style lang='stylus'scoped>
@import '~@a/stylus/border.styl';
@import '~@a/stylus/ellipsis.styl';
.search-shaiwu
    width 100%
    background-color #fff
    margin-bottom .08rem   
    .shaiwu-title
        height .4rem
        line-height .4rem
        padding-left .1rem
        font-size .14rem
        font-weight normal
        color #333
        border_1px(0 0 1px 0,#e6e6e6)
    h2
        font-size .12rem
        height .38rem
        padding-left .1rem
        line-height .44rem
    .content
        font-size .12rem
        width 100%
        padding 0 .1rem
        ellipsis(100%,2)
        margin-bottom .06rem
        color #666
    .img-list
        width 100%
        padding 0 .1rem
        display flex
        justify-content space-between
        li
            width 1.12rem
            height 1.12rem
            img 
                width 100%
                height 100%
    .btm
        display flex
        width 100%
        height .34rem
        padding .1rem
        justify-content flex-start
        align-items center
        .author
            font-size .12rem
            color #666
            margin-right .1rem
        .date
            font-size .1rem
            color #999
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