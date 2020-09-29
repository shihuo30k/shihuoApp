<!--  -->
<template>
  <div>
    <TopBar :title="title" />
    <div class="img">
        <img src="http://shihuo.hupucdn.com/column/201901/2910/bfc3b5eb60a709c3dbdc225f031408ef.png" alt="">
    </div>
    <div class="list">
        <h3>潮鞋志</h3>
        <ul>
            <li>
               
                <div>
                    <img src="http://shihuo.hupucdn.com/ucditor/20200710/1064x1890_23b8fe42a973ab8f79d25bbc77dd5aca.jpeg?imageslim|imageView2/1/w/400/h/400" alt="">
                </div>
                <div>   
                    <h4>
                        XH55开箱丨NIKE SB DUNK LOW "ACG" 
                    </h4>
                    <p>
                        DUNK开箱
                    </p>
                    <div>
                        <h5>
                             <i>
                            <img src="https://i1.hoopchina.com.cn/user/header/20181024/154037276230426_big_2.jpg">
                            </i>
                            <span>
                                    XH55
                            </span>
                        </h5>
                       
                        <h6>
                            <b>
                                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/column/vote_icon_8caec38.png" alt="">
                            </b>
                            <em>10</em>
                        </h6>
                        
                        
                    </div>
                </div>
          
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import TopBar from '@c/discover/TopBar'
export default {
    data(){
        return{
            title:'识货-栏目',
        }
    },
    components:{
        TopBar
    },
}
</script>
<style lang='stylus' scoped>
    .img
        width 100%
        height 1.65rem
        padding-bottom .05rem
    .list
        width 100%
        height 100%
        h3
            
            height .21rem
            line-height .21rem
            text-align center
            margin .2rem .1rem
            font-size .14rem
            color #444
            position relative
        h3:before 
            content ""
            width 100%
            height 1px
            background-color #e6e6e6
            position absolute
            top: 50%
            left: 0
            z-index 1
        ul
            margin 0 .1rem
            padding .1rem 0
            li  
                width 100%
                height 100%
                display flex
                div:nth-child(1)
                    width 1.3rem
                    height 1.3rem
                    margin-bottom .05rem
                div:nth-child(2)
                    flex 1
                    padding-left .1rem
                    display flex
                    flex-direction column 
                    justify-content space-around
                    h4 
                        width 100%
                        height .48rem
                        font-size .15rem
                        color #333
                    p 
                        width 100%
                        height .32rem
                        font-size .12rem
                        color #666
                    div 
                        width 100%
                        height .3rem
                        display flex
                        justify-content space-between
                        h5 
                            display flex

                            i 
                                display block
                                width .3rem
                                height .3rem
                                border-radius 50%
                                overflow hidden
                            span
                                font-size .14rem
                                color #999
                                padding-left .05rem
                                word-wrap word-break
                        h6 
                            display flex    
                            b
                                display block
                                width .15rem
                                height .15rem
                                
                                

                            em 
                                font-size .14rem
                                color #999
                                padding-left .05rem 

                

       
</style>
