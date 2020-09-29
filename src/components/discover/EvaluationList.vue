<template>
    <ul class="container">
        <li
        v-for = "(v,i) in arr"
        :key="i"
    
        >
            <p>
                <img :src="v.data.avatar" alt="">
            </p>
            <div>
                <a href="#">
                    <p>{{v.data.author_name}}</p>
                    <h6>{{v.data.date}}</h6>
                    <i>{{v.data.title}}</i>
                    <b>
                        <img :src="v.data.img" alt="">
                    </b>
                    <em>
                        <p class="like"></p>
                        <span>{{v.data.praise}}</span>
                        <i class="say"></i>
                        <b>{{v.data.reply_count}}</b>
                    </em>
            </a>
            </div>
            
        </li> 
        
    </ul>

</template>


<script>
export default {
      props:{
        arr:{
            type:Array,
            required:true,
        },
        
        
    },
}
</script>

<style lang="stylus" scoped>

     .container
      
        height 100%
        li
            width 100%
            height 3.15rem
            display flex
            padding-right .1rem
            padding-left  .11rem
            >p
                width .34rem
                height .34rem
                
                >img 
                    width .34rem
                    height .34rem
            >div
                padding-left .1rem
                width calc(100% - .35rem)
                >a
                    >p
                        font-size .18rem
                        line-height .28rem
                        color #444444
                    >h6
                        font-size .17rem
                        line-height .26rem
                        color #999999
                    >i 
                        font-size .15rem
                        color #444444
                        // line-height .45rem
                    >b
                        display block
                        width 100%
                        height 1.4rem
                        padding .1rem 0 .16rem 0
                        >img 
                            width 100%
                            height 100%
                    >em
                        display flex
                        >p
                            width .16rem
                            height .16rem
                            margin-top .09rem

                            
                        >span
                            color #a4a4a4
                            font-size .15rem
                            padding-left .04rem
                            margin-top .05rem
                        >i 
                            width .21rem
                            height .21rem
                            margin-left .12rem 
                            margin-top .05rem
                        >b
                            font-size .19rem
                            color #333
                            padding-left .05rem 


                                


.like
    background url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png') left bottom  no-repeat;
    background-size 100% 100%
    
.say 
    background url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png') left center no-repeat
    background-size 100% 100%
    
</style>