<template>
    <div class="container">
        <van-swipe-cell>
            <div class="swiper-slide " >
                <router-link to="/hottalk/312">
                <div class="imgs">
                    <img src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg" alt="" >
                </div>
                <div class="blackbg">
                    <p># 晒穿搭，AJ11 CONCORD 领回家！！ #</p>
                </div>
                </router-link>
            </div>

            <div class="swiper-slide " >

                <div class="imgs">
                    <img src="//sh1.hoopchina.com.cn/images/trademobile/no_pic.png" alt="" >
                </div>
                <div class="blackbg">
                    <p># 限时下单 全场返利 #</p>
                </div>

            </div>

            <div class="swiper-slide" >

                <div class="imgs">
                    <img src="http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png" alt="" >
                </div>
                <div class="blackbg">
                    <router-link to="/hottalk/322">
                        <p># 晒照赢新年康扣 #</p>
                    
                    </router-link>
                </div>
            </div>

            <template #right>
                    <router-link to='/hottest/1'>
                <div class="look-more">
                    
                    查看更多
                </div>
                    </router-link>
            </template>

        </van-swipe-cell>
    </div>

</template>


<script>
import Vue from 'vue';
import { Grid, GridItem,SwipeCell } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(SwipeCell);
export default {
    
}
</script>

<style lang="stylus" scoped>
.container
    height 100%
    height .62rem
    overflow-y hidden
.swiper-slide {
    flex-shrink: 0;
    height: 100%;
    position: relative;
    width 1.28rem
    text-align: center;
    margin-right: .04rem;
    flex 1
}
.swiper-slide .imgs {
    width: 100%;
    overflow: hidden;
    position: relative;
}
.swiper-slide img {
    width: 100%;
    display: block;
}
 .swiper-slide .blackbg {
    position: absolute;
    width: 100%;
    height: .62rem;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.2);
}
.swiper-slide p {
    width: 100%;
    font-size: .13rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 10;
    color: #FFF;
    word-wrap: break-word;
    padding .13rem
}
.look-more {
    width: .7rem;
    padding: .06rem .18rem 0;
    color: #999;
    text-align: center;
    display: block;
    word-wrap: break-word;
    font-size: .13rem;
}
.look-more:after {
    content: "";
    display: block;
    background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-arrow_7dcc7b2.png) no-repeat scroll center center transparent;
    width: .13rem;
    height: .13rem;
    margin: .03rem auto 0;
}
    // .van-grid-item__content .van-grid-item__content--horizontal .van-grid-item__content--center .van-hairline
    //     width 100%
    //     height 100%
    // .van-grid-item
    //     // position absolute
    // .van-grid-item__text
    //     display block
    //     position absolute
    //     top: 50%;
    //     left: 0;
    //     font-size 0.1rem
    //     background-color rgba(0,0,0,.2)
    //     color #FFF
    //     word-wrap break-word
    //     text-align center
    //     height 1rem
    // .van-grid-item__icon
    //     font-size 1rem

    // .van-grid 
    //    position absolute
    //    top -.56rem
    // .van-icon__image 

        // object-fit none

</style>
<style lang="stylus">
    .van-swipe-cell__wrapper
        display flex
</style>