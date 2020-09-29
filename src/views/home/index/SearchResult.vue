<template>
    <div class="container">
        <header>
            <div class="top_bar">
                <div class="goback" @click="gobackHandler">
                    <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png">
                </div>
                <div class="searchBox">
                    <input type="search" class="input" name="search" placeholder="请输入产品名或商品名" id="searchVal" :value="keywords">
                </div>
                <div class="ico_list">
                    <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png">
                </div>
            </div>
            <ul class="search-select">
                <li class="on">全部</li>
                <li>商品</li>
                <li>优惠</li>
                <li>晒物</li>
            </ul>
        </header>
        <div class="list">
            <div class="searchNum">
                <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/num_d4bd014.png" alt="">
                找到<span>142133</span>条相关结果
            </div>
            <SearchList :keywords="keywords"></SearchList>
        </div>

    </div>
</template>
<script>
import SearchList from '@/views/home/index/SearchList'
export default {
    data(){
        return {
            
        }
    },
    computed:{
        keywords(){
            return this.$route.query.keywords
        }
    },
    mounted(){
        let preLocalData = localStorage.getItem('hisSearch')
        if(preLocalData===null) {
            preLocalData = []
            preLocalData.push(this.keywords)               
            localStorage.setItem('hisSearch', JSON.stringify(preLocalData))
        }else{
            let arr = JSON.parse(preLocalData)
            arr.push(this.keywords)
            localStorage.setItem('hisSearch', JSON.stringify(arr))
        }
        // let preLocalData = localStorage.getItem('hisSearch') ? localStorage.getItem('hisSearch') : ','
        // localStorage.setItem('hisSearch', preLocalData + ',' + this.keywords)
        // console.log(this.keywords)
    },
    components:{
        SearchList
    },
    methods:{
        gobackHandler(){
            this.$router.push('/')
        }
    }
};
</script>
<style lang='stylus'>
@import '~@a/stylus/border.styl';
    
    header 
        width 100%
        position fixed
        top 0
        background #fff
        z-index 300
        .top_bar
            display flex
            height .48rem
            background-color #f7f7f7
            width: 100%;
            // position: fixed;
            // top: 0;
            // z-index: 200;
            border_1px(0 0 1px 0,#e6e6e6)
            justify-content space-between
            align-items center
            .goback
                width .48rem
                height .48rem
                display flex
                img 
                    width .4rem
                    height .4rem
                    margin auto
            .searchBox
                input 
                    width 2.76rem
                    height .32rem
                    background: #e8e8e8 url(//sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) 9px center no-repeat
                    background-size .17rem;
                    padding-left .36rem 
                    color: #666
                    border 0
                    border-radius .05rem
            .ico_list
                width .48rem
                height .48rem
                display flex
                img 
                    width .4rem
                    height .4rem
                    margin auto
        .search-select
            height .45rem
            display flex
            background-color #fff
            li
                display flex
                height 100%
                font-size .12rem
                line-height .45rem
                flex 1
                justify-content center
                &.on
                    color #FF4338
                    border-bottom 1px solid #ff4338
    .list
        position relative
        top .93rem
        .searchNum
            background: #f0f3f5;
            height: .36rem;
            line-height: .36rem;
            font-size: .12rem;
            color: #333;
            padding: 0 .1rem;
            img 
                width: .12rem;
                height: .12rem;
                display: inline-block;
                vertical-align: middle;
                margin-right: .1rem;
</style>