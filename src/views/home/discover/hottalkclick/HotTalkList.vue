<template>


    
        <ul class="container">
            <li
            v-for = "(v,i) in list"
            :key="i"
        
            >
                <p  
               >
 
                    <img :src="v.data.avatar" alt="">
                </p>
                <div>
                    <a href="#">
                        <p>{{v.data.author_name}}</p>
                        <h6>{{v.data.date}}</h6>
                        <i>{{v.data.intro}}</i>
                        <b v-if='v.data.img_attr.length'>
                            <img  v-for="(img,i) in v.data.img_attr" :key="i"
                            :src="img" alt="">
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
    data(){
        return{
            
        }
    },
    props:{
        list:{
            type:Array
        }
        
        
    },
    mounted(){
        // this.loadDate()
    },
    methods: {
    //    async loadDate(){
    //          let result =await http.get(
    //         'api/topic/detailList',
    //         {
    //             page:this.page,
    //             sort: 'new',
    //             page_size: this.pageSize,
    //             id: this.id


    //         }
    //         )
    //         this.head=result.data.head
    //         this.list =[
    //             ... this.list,
    //             ... result.data.list
    //         ]
    //         this.loading=false
    //         this.page = this.page+1
    //         console.log(result.data.list);
    //         console.log(this.list);
            
        // },

        onLoad(){
            this.loadDate()
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~@a/stylus/ellipsis'

     .container
      
        // height 100%
        // overflow-y scroll
        li
            width 100%
            // height 3.15rem
            display flex
            padding-right .1rem
            padding-left  .11rem
            margin-bottom .24rem
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
                        font-weight normal
                    >i 
                        font-size .13rem
                        color #444444
                        margin .075rem 0
                        ellipsis()
                    >b
                        display block
                        width 100%
                        // height 1.45rem
                        // padding .1rem 0 .16rem 0
                        padding-bottom .075rem
                        display flex 
                        // justify-content space-between
                        flex-wrap wrap

                        >img 
                            width 33.33%
                            height 1rem
                    >em
                        display flex
                        
                        >p
                            width .16rem
                            height .15rem
                            margin-top .05rem
                            
                        >span
                            color #a4a4a4
                            font-size .18rem
                            padding-left .04rem
                        

                         
                        >i 
                            width .17rem
                            height .17rem
                            margin-left .12rem 
                            margin-top .05rem
                      
                        >b
                            font-size .18rem
                            color #a4a4a4
                            padding-left .05rem 
                            font-weight normal
        img 
            width 100%
            height 100%   


                                


.like
    background url('//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png') left bottom  no-repeat;
    background-size 100% 100%
    
.say 
    background url('//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png') left center no-repeat
    background-size 100% 100%
    
</style>



