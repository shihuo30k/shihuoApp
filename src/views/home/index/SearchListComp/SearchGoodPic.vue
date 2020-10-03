<template>
    <div class="search-pic">
        <h2 class="title">{{ keywords }}的相关图片</h2>
        <ul class="pic-list">
            <li
            v-for="(pic,index) in goodPics"
            :key="index"
            >
                <img :src="pic.pic" alt="">
            </li>
            
        </ul>
        <p class="linkMore">
            <a href="">
                查看所有{{nums}}个符合条件的商品
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png" alt="">
            </a>
        </p>
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
            goodPics:[],
            nums:0
        }
    },
    created(){
        this.page=1,
        this.page_size=3,
        this.type='pic'
    },
    mounted(){
        this.getGoodPicData()
    },
    methods:{
        async getGoodPicData(){
            let result = await http.get(
                '/api/search',
                {
                    page:this.page,
                    page_size:this.page_size,
                    type:this.type,
                    keywords:this.keywords
                }
            )
            this.goodPics = result.data.list
            this.nums = result.data.num
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
.search-pic
    display flex
    flex-direction column
    width 100%
    background-color #fff
    margin-bottom .08rem
    .title
        height .4rem
        line-height .4rem
        padding-left .1rem
        font-size .14rem
        font-weight normal
        color #333
        border_1px(0 0 1px 0,#e6e6e6)
    .pic-list
        width 100%
        display flex
        padding .1rem .1rem .1rem .14rem
        justify-content space-between
        border_1px(0 0 1px 0,#e6e6e6)
        img 
            width 1.12rem
            height 1.12rem

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