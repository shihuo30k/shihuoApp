<template>
    <div>
        <van-list
        v-model="loading"
        loading-text="加载数据中"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
            <div class="search-shaiwu" v-for="res in shaiwuDataList" :key="res.id + res.author_id">
                <h2>{{ keywords }}</h2>
                <p class="content">
                    {{ res.intro }}
                </p>
                <ul class="img-list">
                    <li
                    v-for="(img, index) in res.img_attr"
                    :key="index"
                    >
                        <img :src="img" alt="">
                    </li>
                </ul>
                <div class="btm">
                    <p class="author">{{ res.author_name }}</p>
                    <span class="date">{{ res.date }}</span>
                </div>
            </div>
        </van-list>
    </div>
</template>
<script>
import http from '@/utils/http'
export default {
    props:{
        keywords:{
            type:String
        }
    },
    data(){
        return {
            shaiwuDataList:[],
            loading:false,
            finished:false
        }
    },
    created(){
        this.page=1,
        this.page_size=30,
        this.type='shaiwu'
    },
    mounted(){
        // this.getShaiwuData()
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
            console.log(result)
            this.shaiwuDataList = [
                ...this.shaiwuDataList,
                ...result.data.list
            ]
            this.page++
            this.loading = false
        },
        onLoad(){
            this.getShaiwuData()
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
@import '~@a/stylus/ellipsis.styl';
.search-shaiwu
    width 100%
    background-color #fff
    margin-bottom .08rem 
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
</style>