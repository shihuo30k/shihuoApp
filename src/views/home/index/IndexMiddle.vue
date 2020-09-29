<template>
    <ul class="middle-container">
        <router-link to="/youhui" tag="li">
            <p>今日优惠</p>
            <span>EQT 5折好价</span>
            <p>
                <img src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1" alt="">
            </p>
        </router-link>
        <router-link to="/tuangou" tag="li">
            <li>
                <p>限时团购</p>
                <span>春节不打烊</span>
                <p>
                    <img src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1" alt="">
                </p>
            </li>
        </router-link>
        <router-link to="/choujiang" tag="li">
            <li>
                <p>免费抽奖</p>
                <span>识货抽奖 天天免费</span>
                <p>
                    <img src="http://shihuo.hupucdn.com/kupload2018/2019715/15631798110000.jpeg?imageView2/2/w/120/h/120/interlace/1" alt="">
                </p>
            </li>
        </router-link>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.middle-container
    height 1.4rem
    padding .05rem
    display flex
    justify-content space-between
    li
        width 1.18rem
        height 100%
        background-color #ffffff
        display flex
        flex-direction column
        justify-content space-evenly
        align-items center
        p
            font-size .12rem
            color #333333
        span 
            font-size .10rem
            color #666666
        img 
            width .6rem
            height .6rem
</style>