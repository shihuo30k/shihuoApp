<template>
  <div class="container">
        <div class="content">
            <router-view></router-view>
            <BackTop></BackTop>
        </div>
        <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import BackTop from '@/components/BackTop'
export default {
  components:{
    Footer,
    BackTop
  }
}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl';
.container
    height 100%
    display flex
    flex-direction column
    background-color #f7f7f7
    overflow-y auto
    .content
        height 100%
        overflow auto
            header
                position relative
                margin-bottom .1rem
                .carousel-wrap
                    height 1.9rem
                .search-left input 
                    display block
                    position absolute 
                    z-index 10
                    width 3.1rem      
                    height .32rem
                    top .12rem
                    left .1rem
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
            // main
            //     flex 1        
    
</style>
