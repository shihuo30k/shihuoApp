<template>
  <div class="all-content">
      find
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="stylus">
.container
    height 100%
    display flex
    flex-direction column
    background-color #f7f7f7
    .all-content
        flex 1
        overflow-y auto
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
        main
            flex 1        
    footer 
        width 100%
        height .45rem
        bottom 0
        position relative
        box-shadow  0 0 0.10rem 0.01667rem rgba(0,0,0,.41);
        span 
            font-size .12rem
            line-height .12rem
</style>
