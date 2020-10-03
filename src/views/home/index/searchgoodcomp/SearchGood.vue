<template> 
    <van-list
    v-model="loading"
    loading-text="加载数据中"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    >
        <ul class="good-list">
            <li
            v-for="good in goodsList"
            :key="good.id"
            >
                <div class="pic">
                    <img :src="good.pic" alt="">
                </div>
                <div class="detail-box">
                    <h2 class="title">{{ good.name }}</h2>
                    <p class="desc">{{ good.intro }}</p>
                    <div class="price">
                        <span>
                            <s>¥</s>
                            {{ good.price }}
                        </span>起
                    </div>
                </div>
            </li>
        </ul>
    </van-list>
</template>

<script>
import http from '@u/http'
export default {
    data(){
        return {
            goodsList:[],
            loading:false,
            finished:false
        }
    },
    props:{
        keywords:{
            type:String
        }
    },
    created(){
        this.page = 1
        this.page_size = 30
        this.type = 'goods'
    },
    mounted(){
        // this.getGoodsData()
    },
    methods:{
        async getGoodsData(){
            let result = await http.get(
                '/api/search',
                {
                    page:this.page,
                    page_size:this.page_size,
                    type:'goods',
                    keywords:this.keywords
                }
            )
            this.goodsList = [
                ...this.goodsList,
                ...result.data.list
            ]
            this.loading = false
            this.page++
        },
        onLoad(){
            this.getGoodsData()
        }
    }

}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/ellipsis.styl'
.good-list
    width 100%
    padding 0 .2rem
    background-color #fff
    display flex
    justify-content space-between
    flex-wrap wrap
    li
        width 46%
        .pic
            width 100%
            img 
                width 100%
        .detail-box
            display flex
            flex-direction column
            .title
                font-size .14rem
                margin-bottom .1rem
            .desc
                ellipsis()
                color #999
                font-size .12rem
                margin-bottom .1rem
            .price
                font-size .1rem
                color #999
                span 
                    font-size .11rem
                    color #FF4338
                s 
                    font-size .08rem
                    
                
</style>