<template>
    <div class="container">
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

        <div class="list">
            <van-tabs v-model="active" animated sticky swipeable>
                <van-tab title="全部">
                    <div class="searchNum">
                        <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/num_d4bd014.png" alt="">
                        找到<span>142133</span>条相关结果
                    </div>
                    <SearchGoodList :keywords="keywords"></SearchGoodList>
                    <SearchGoodPic :keywords="keywords"></SearchGoodPic>
                    <SearchAllWeb :keywords="keywords"></SearchAllWeb>
                    <SearchShaiwu :keywords="keywords"></SearchShaiwu>
                    <SearchNews :keywords="keywords"></SearchNews>
                </van-tab>
                <van-tab title="商品">
                    <SearchGood :keywords="keywords"></SearchGood>
                </van-tab>
                <van-tab title="优惠">
                    <SearchNews :keywords="keywords"></SearchNews>
                </van-tab>
                <van-tab title="晒物">
                    <ShaiwuList :keywords="keywords"></ShaiwuList>
                </van-tab>
            </van-tabs>            
        </div>
        <BackTop></BackTop>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
import SearchGoodList from '@/views/home/index/SearchListComp/SearchGoodList'
import SearchGoodPic from '@/views/home/index/SearchListComp/SearchGoodPic'
import SearchAllWeb from '@/views/home/index/SearchListComp/SearchAllWeb'
import SearchShaiwu from '@/views/home/index/SearchListComp/SearchShaiwu'
import SearchNews from '@/views/home/index/SearchListComp/SearchNews'
import SearchGood from '@/views/home/index/searchgoodcomp/SearchGood'
import ShaiwuList from '@/views/home/index/Shaiwu/ShaiwuList'
import BackTop from '@/components/BackTop'
export default {
    data(){
        return {
            active:0
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
            if(arr.indexOf(this.keywords) === -1) arr.push(this.keywords);
            localStorage.setItem('hisSearch', JSON.stringify(arr))
        }
    },
    components:{
        SearchGoodList,
        SearchGoodPic,
        SearchAllWeb,
        SearchShaiwu,
        SearchNews,
        BackTop,
        SearchGood,
        ShaiwuList
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
.container
    height 100%
    display flex
    flex-direction column
    .top_bar
        display flex
        height .48rem
        background-color #f7f7f7
        width: 100%;
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
        flex 1
        overflow-y scroll
        background-color #f7f7f7
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

<style lang="stylus">
@import '~@a/stylus/border.styl';
.van-tab--active
    color #FF4338
.van-tabs__line
    background-color #FF4338
    width 70px
    height 1px
.van-sticky--fixed 
    position fixed;
    top .48rem
    right 0
    left 0
    z-index 99
.van-tab__text
    display block
    width 100%
    text-align center
    border-left .02rem solid #f0f0f0
    border-right .02rem solid rgba(255,255,255,1)
.van-tab:first-child .van-tab__text
    border-left 0 
.van-tab
    border_1px(0 0 1px 0,#e6e6e6)
</style>