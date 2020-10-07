<template>
    <div>
        <ul class="tuangou-list">
            <li 
            v-for="good in goodsList"
            :key="good.id"
            >
                <div class="pic">
                    <img :src="good.img_path" alt="">
                </div>
                <div class="text">
                    <h2>{{ good.title }}</h2>
                    <div class="mid">
                        <p class="zhe">{{ good.discount }}折</p>
                        <div class="price">
                            <span class="pre-price">￥{{ good.original_price }}</span>
                            <i class="now-price">￥<b>{{ good.price }}</b></i>
                        </div>
                    </div>
                    <div class="num">已关注人数{{ good.attend_count }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import http from '@u/http'
export default {
    data(){
        return {
            goodsList:[]
        }
    },
    computed:{
        ...mapState({
            brand: state => state.brand,
            category: state => state.category,
            order: state => state.order,
            sex: state => state.sex,
            comming: state => state.coming,
            key: state => state.key,
        })
    },
    mounted(){
        this.getTuangouData()
    },
    updated(){
        // console.log(this.brand)
        // console.log(this.category)
    },
    methods:{
        async getTuangouData(){
            let result = await http.get(
                '/api/tuangou/getData',
                {
                    brand:this.brand,
                    category:this.category,
                    order:this.order,
                    sex:this.sex,
                    coming:this.comming,
                    key:this.key
                }
            )
            this.goodsList = result.data.dataInfo
        },
    },
    watch:{
        brand:function(oldval, newval){
            this.getTuangouData()
        },
        category:function(oldval, newval){
            this.getTuangouData()
        },
        order:function(oldval, newval){
            this.getTuangouData()
        },
        sex:function(oldval, newval){
            this.getTuangouData()
        },
        comming:function(oldval, newval){
            this.getTuangouData()
        },
    }
}
</script>
<style lang='stylus' scoped>
.tuangou-list
    width 100%
    display flex
    justify-content space-between
    flex-wrap wrap
    li
        width 48%
        background #fff
        padding 0 .1rem
        box-shadow: 0 .02rem .02rem rgba(0,0,0,.16)
        margin-bottom .05rem
        .pic
            width 100%
            img 
                width 100%
        .text
            h2
                width 100%
                height .38rem
                font-size .12rem
                font-weight normal
            .mid
                width 100%
                display flex
                justify-content space-between
                align-items center
                margin-bottom .12rem
                .zhe
                    height .18rem
                    width .4rem
                    font-size .1rem
                    line-height .18rem
                    text-align center
                    background #FF4338
                    color #fff
                    border-radius .18rem
                .price
                    .pre-price
                        font-size .1rem
                        color: #b4b4b4;
                        text-decoration: line-through;
                        margin-right: .1rem;
                    .now-price
                        font-size .1rem
                        color #FF4338
                        b
                            // font-weight normal
                            font-size .13rem
                            color #FF4338
            .num
                padding .09rem 0
                font-size .12rem
                border-top: .01rem solid #e6e6e6;
                color: #999;
                text-align: right
</style>