<!--  -->
<template>
  <div>
    <TopBar :title="title" />
    <div class="img">
        <img :src="img" alt="">
    </div>
    <div class="list">
        <h3>{{toptxt}}</h3>
        <ul>
            <li v-for = "(v,i) in list " :key="i">
               
                <div>
                    <img :src="v.data.img_path" alt="">
                </div>
                <div>   
                    <h4>
                        {{v.data.title}}
                    </h4>
                    <p>
                        {{v.data.subtitle}}
                    </p>
                    <div>
                        <h5>
                             <i>
                            <img :src="v.data.avatar">
                            </i>
                            <span>
                                   {{v.data.author_name}}
                            </span>
                        </h5>
                       
                        <h6>
                            <b>
                                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/column/vote_icon_8caec38.png" alt="">
                            </b>
                            <em>{{v.data.praise}}</em>
                        </h6>
 
                    </div>
                </div>
          
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import http from '@u/http.js'
import TopBar from '@c/discover/TopBar'
export default {
     data(){
        return{
            title:'识货-栏目',
           

            list:[],
            img:'',
            toptxt:'',
           
            columnId:0,
            
            arr:[285,8,5,238,13,135,137,280,6,21],
            imgs:['http://shihuo.hupucdn.com/column/201901/2910/bfc3b5eb60a709c3dbdc225f031408ef.png','http://shihuo.hupucdn.com/column/201904/3019/194e422f3f7f559e3ec3f97f5db77d02.png','http://shihuo.hupucdn.com/column/201809/2010/873ceba27026dc8694990027db1876e3.jpg','http://shihuo.hupucdn.com/column/201809/2009/0cae8ba7dc245a4c8ffd2ed325167c87.jpg','http://shihuo.hupucdn.com/column/201901/2911/d63f83823237e822f2cfd3e207774dc9.png','http://shihuo.hupucdn.com/column/201901/2911/b1a7a07263f622df41f93a2b84c0ad1a.png','http://shihuo.hupucdn.com/column/201905/1218/b11f2b9d6f4b8fca45ea16a533354ead.jpg','http://shihuo.hupucdn.com/column/201901/2910/f62a55481c19c7f591efbf846e922dc6.png',,'http://shihuo.hupucdn.com/column/201811/2914/2fae17909b423fae045e9d8f50df4b78.jpg'],
             txt:['潮鞋志','球鞋SHOW','一日一双','今天穿这样','潮流穿搭','球鞋90秒','跑步评测室','视频','装备党'],
        }
    },
    components:{
        TopBar
    },
   
       
    created(){

    },
    mounted() {
    //   this.list=[]
    //   console.log(this.$route.params.id);
      this.loadData(this.arr[this.$route.params.id])
      this.img=this.imgs[this.$route.params.id]
      this.toptxt = this.txt[this.$route.params.id]
    //   this.loadData(this.arr[0])
    //   this.img=this.imgs[0]
    },
   
    methods:{
      
      async loadData(a){

        let result = await http.get('/api/column/getList',{
          columnId: a,
          pageSize: 20,
          page:1 ,
          createTimestamp:''
        })
        console.log(result.data);
        this.list = result.data
        // this.list=[
        //   ...this.list,
        //   ...result.data
        // ]
      }
    },
}

</script>
<style lang='stylus' scoped>
@import '~@a/stylus/ellipsis.styl'
    .img
        width 100%
        height 1.65rem
        padding-bottom .05rem
        img 
            width 100%
            height 100%
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

                
        img     
            width 100%
            height 100%
       
</style>
