<template>
    <div id="swiper-wrapper">
        <swiper ref="mySwiper" :options="swiperOption">
            <swiper-slide class="banner-item">
                <img src="http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1"  class="recommend-img" />
            </swiper-slide>
            <swiper-slide class="banner-item">
                <img src="http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1"  class="recommend-img" />        
            </swiper-slide>
            <swiper-slide class="banner-item">
                <img src="http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1"  class="recommend-img" />        
            </swiper-slide>
            <swiper-slide class="banner-item">
                <img src="http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1"  class="recommend-img" />       
            </swiper-slide>
            <swiper-slide class="banner-item">
                <img src="http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1"  class="recommend-img" />
            </swiper-slide>
            <div class="swiper-pagination" v-for="(item,index) in slots" :key="index+'new date().getTime()'" slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    components:{
        Swiper,
        SwiperSlide
    },
    data(){
        return {
            slots:[1,2,3,4,5],
            swiperOption:{
                loop: true,
                initialSlide: 0,
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },               
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            }
        }
    }
}
</script>

<style lang="stylus">
#swiper-wrapper
    height 1.9rem
.banner-item
    width 100%
    height 100%
    img 
        width 100%
        width 100% 

.swiper-pagination
    text-align right 
.swiper-pagination-bullet       
    outline none
    opacity 0.1
.swiper-pagination-bullet-active 
    background #ffffff
    opacity 0.6


</style>