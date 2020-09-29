<template>
    <div class="main-box">
        <div class="search-bar">
            <div class="search">
                <input type="text" name="" placeholder="搜索商品，品牌" @keyup.enter="searchHandler" v-focus v-model="value" >
            </div>
            <div class="cancel">
                <span @click="cancleClickHandler">取消</span>
            </div>
        </div>
        <div class="inner">
            <p>热门搜索</p>
            <ul class="hot">
                <li 
                v-for="(li,index) in hotSearch"
                :key="index"
                >{{ li.name }}</li>
                
            </ul>
            <p>历史搜索</p>
            <ul class="history">
                <li 
                v-for="(search, index) in hisSearch"
                :key="index+'sear'"
                >
                    <span>{{ search }}</span><i @click="delHisSearchHandler(index)"></i>
                </li>
            </ul>
            <div class="clear_history" v-if="hisSearch.length > 0">
                <p @click="clearHandler">清除历史记录</p>
            </div>
        </div>
    </div>
</template>
<script>
import { get } from '@u/http.js'
    export default {
        data(){
            return {
                hotSearch:[],
                value:'',
                hisSearch:JSON.parse(localStorage.getItem('hisSearch')) === null ? [] :JSON.parse(localStorage.getItem('hisSearch'))
            }
        },
        computed:{
            // hisSearch(){
            //     return localStorage.getItem('hisSearch').split(',').splice(1)
            // }
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        mounted(){
            this.render()
        },
        methods:{
            searchHandler(){
                this.$router.push(`/search_result?keywords=${this.value}`)
            },
            cancleClickHandler(){
                this.$router.go(-1)
            },
            async render(){
                let result = await get({
                    url:'/api/search/hotSearch',
                })
                this.hotSearch = result
            },
            delHisSearchHandler(index){
               this.hisSearch.splice(index, 1)
               localStorage.setItem('hisSearch',JSON.stringify(this.hisSearch))
            },
            clearHandler(){
                this.hisSearch.splice(0,this.hisSearch.length)
                localStorage.setItem('hisSearch',JSON.stringify(this.hisSearch))
            }
        },
    }
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl'
.search-bar
    height .46rem
    background rgb(247, 247, 247)
    display flex
    padding .07rem .15rem .07rem .09rem
    justify-content space-between
    align-items center
    .search 
        input 
            display block
            box-sizing border-box
            width 3.1rem      
            height .32rem
            padding-left .22rem
            background #EAEAEA url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png) .04rem center no-repeat
            background-size .14rem
            font-size .11rem
            border 1px solid #EAEAEA
            border-radius .03rem
            &:focus
                outline none 
                border 1px solid #be9857
    .cancel
        span 
            display flex
            font-size .12rem
            color #666
            padding .1rem 0
.inner
    padding .1rem
    p
        height .4rem
        line-height .4rem
        color #999
    .hot
        li
            font-size: .12rem;
            display: inline-block;
            margin-right: .05rem;
            margin-bottom: .1rem;
            border: 1px solid #aeaeae;
            color: #444;
            padding: .08rem .05rem;
            border-radius: .03rem;
    .history
        li
            display flex
            justify-content space-between
            align-items center
            border_1px(0 0 1px 0, #e6e6e6)
            span 
                font-size .16rem
                display inline-block
                height .42rem
                line-height .42rem
                
            i 
                display inline-block
                width .1rem
                height .1rem
                background url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/delete_a43fdc1.png) center no-repeat
                background-size .1rem
    .clear_history
        margin-top .1rem
        height .42rem
        p
            margin 0 auto
            box-sizing border-box
            width 2rem
            text-align center
            font-size: .13rem;
            color: #FF4338;
            border-radius: .04rem;
            height: .42rem;
            line-height: .42rem;
            text-align: center;
            border_1px(1px,#ECECEC)
            background: #fff;

</style>