<template>
        <div class="all-content">
            <header>
                <div class = 'carousel-wrap'>
                    <indexCarousel></indexCarousel>
                </div>
                
                <div class="search-left" @click="searchClickHandler">
                    <input type="text" placeholder="搜索商品，品牌">
                </div>
                
                <div class="search-right" @click="porfileHandler">
                    <svg t="1600782944916" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6456" ><path d="M 2.32727 1010.04 c -2.32727 -11.6364 -2.32727 -41.8909 0 -74.4727 c 6.98182 -58.1818 30.2545 -100.073 65.1636 -125.673 c 25.6 -18.6182 58.1818 -27.9273 86.1091 -34.9091 c 13.9636 -2.32727 27.9273 -6.98182 39.5636 -9.30909 c 69.8182 -16.2909 141.964 -32.5818 195.491 -102.4 c 4.65454 -4.65454 32.5818 -46.5455 -41.8909 -137.309 c -32.5818 -39.5636 -53.5273 -93.0909 -62.8364 -160.582 c -9.30909 -69.8182 -2.32727 -134.982 4.65454 -176.873 c 9.30909 -48.8727 37.2364 -93.0909 79.1273 -125.673 c 41.8909 -32.5818 93.0909 -48.8727 144.291 -48.8727 s 102.4 16.2909 144.291 48.8727 c 41.8909 32.5818 69.8182 76.8 79.1273 128 c 6.98182 41.8909 13.9636 107.055 4.65454 176.873 c -9.30909 65.1636 -30.2545 118.691 -62.8364 160.582 c -74.4727 90.7636 -44.2182 132.655 -41.8909 137.309 c 53.5273 72.1455 125.673 88.4364 195.491 102.4 c 13.9636 2.32727 27.9273 6.98182 41.8909 9.30909 c 25.6 6.98182 58.1818 16.2909 83.7818 34.9091 c 76.8 53.5273 69.8182 169.891 67.4909 197.818 H 2.32727 Z M 512 44.2182 c -44.2182 0 -88.4364 13.9636 -125.673 41.8909 c -18.6182 13.9636 -32.5818 30.2545 -44.2182 46.5455 c -11.6364 18.6182 -18.6182 39.5636 -23.2727 60.5091 c -6.98182 39.5636 -13.9636 102.4 -4.65455 167.564 c 9.30909 60.5091 27.9273 109.382 55.8545 144.291 c 34.9091 44.2182 55.8545 83.7818 55.8545 118.691 c 2.32727 30.2545 -9.30909 48.8727 -16.2909 55.8545 c -60.5091 81.4545 -141.964 97.7455 -214.109 114.036 c -13.9636 2.32727 -25.6 6.98182 -39.5636 9.30909 c -23.2727 6.98182 -51.2 16.2909 -74.4727 30.2545 c -16.2909 11.6364 -27.9273 25.6 -37.2364 46.5455 c -6.98182 16.2909 -13.9636 37.2364 -16.2909 58.1818 c -2.32727 9.30909 -2.32727 18.6182 -2.32727 30.2545 v 9.30909 h 961.164 v -9.30909 c 0 -11.6364 0 -20.9455 -2.32727 -32.5818 c -6.98182 -46.5455 -23.2727 -81.4545 -53.5273 -102.4 c -20.9455 -16.2909 -48.8727 -23.2727 -74.4727 -30.2545 c -13.9636 -2.32727 -25.6 -6.98182 -41.8909 -9.30909 c -72.1455 -16.2909 -153.6 -34.9091 -214.109 -114.036 c -4.65454 -6.98182 -16.2909 -25.6 -16.2909 -55.8545 c 2.32727 -34.9091 20.9455 -76.8 55.8545 -118.691 c 30.2545 -34.9091 48.8727 -83.7818 55.8545 -144.291 c 9.30909 -65.1636 2.32727 -125.673 -4.65454 -167.564 c -4.65454 -20.9455 -11.6364 -41.8909 -23.2727 -60.5091 s -25.6 -34.9091 -44.2182 -46.5455 c -23.2727 -25.6 -67.4909 -41.8909 -111.709 -41.8909 Z" fill="#fff" p-id="6457"></path></svg>
                </div>
            </header>
            <main>
                <IndexNav></IndexNav>
                <IndexMiddle></IndexMiddle>
                <MainNavList></MainNavList>
            </main>
        </div>
</template>

<script>
import {BackTop} from 'view-design'
import indexCarousel from '@c/indexCarousel'
import Footer from '@/components/Footer'
import IndexNav from './IndexNav'
import IndexMiddle from './IndexMiddle'
import MainNavList from '@/views/home/index/MainNavList'

export default {
  components:{
      indexCarousel,
      Footer,
      IndexNav,
      IndexMiddle,
      MainNavList,
      BackTop
  },
  methods:{
      searchClickHandler(){
          this.$router.push("/search")
      },
      porfileHandler(){
          this.$router.push("/more")
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl';
    .all-content
        // overflow-y auto
        // position relative
        // bottom .45rem
        header 
            position relative
            margin-bottom .1rem
            .carousel-wrap
                height 1.9rem
            .search-left 
                position absolute
                top .12rem
                left .1rem
                z-index 10
                input 
                    display block
                    // position absolute 
                    // z-index 10
                    width 3.1rem      
                    height .32rem
                    padding-left .22rem
                    background #EAEAEA url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png) .04rem center no-repeat
                    background-size .14rem
                    // top .12rem
                    // left .1rem
                    font-size .11rem
                    border 0
                    border-radius .03rem
            .search-right 
                position absolute
                z-index 10
                top .12rem
                right .15rem
                svg 
                    width .28rem 
                    height .28rem
        main
            flex 1        
    footer 
        width 100%
        height .45rem
        bottom 0
        position relative
        // box-shadow  0 0 0.10rem 0.01667rem rgba(0,0,0,.41);
        span 
            font-size .12rem
            line-height .12rem
</style>