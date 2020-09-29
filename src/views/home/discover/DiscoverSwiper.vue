<template>
    <div class="container">
        <van-swipe :autoplay="3000" :show-indicators="false">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import Vue from 'vue'
import {Swipe, SwipeItem ,Lazyload,} from 'vant'

Vue.use(Swipe)
Vue.use(Lazyload)
Vue.use(SwipeItem)
export default {
    data(){
        return{
            images: [
                    '  http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1',

                    'http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1',

                    'http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1',

                    'http://shihuo.hupucdn.com/appHome/201812/1023/736a64832b272c088c9fe01837b0ac4e.jpg?imageView2/2/w/750/h/268/interlace/1',

                    'http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1',
             ],
        
        }
    }
}
</script>
<style lang="stylus" scoped>
    .container
        width 100%
        height 1.34rem
</style>