<template>
    <div>
        <ul class = "search-list">
         <li 
         class="search-item" 
         v-for="li in searchGoodsList"
         :key="li.id"
         >
            <div class="icon">
                <img :src="li.pic" alt="">
            </div>
            <div class="content">
                <h2>{{ li.name }}</h2>
                <p class="desc">
                    {{ li.intro }}
                </p>
                <div class="btm">
                    <p class="pric">
                        <span>￥{{ li.goodsPrice }}</span>起
                    </p>
                    <p class="focus">已关注{{ li.hits }}次</p>
                </div>
            </div>
         </li>        
      </ul>
      <p class="linkMore">
          <a href="">
              查看所有{{result.num}}个符合条件的商品
              <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/search/linkmore_ef4e87b.png" alt="">
          </a>
      </p>
    </div>
</template>
<script>
import { get } from '@u/http.js'
    export default {
        data(){
            return{
                result:{},
                searchGoodsList:[]
            }
        },
        props:{
            keywords:{
                type:String
            }
        },
        created(){
            this.page = 1
            this.page_size = 3
        },
        mounted(){
            this.render()
        },
        methods:{
            async render(){
                let result = await get({
                    url:'/api/search',
                    params:{
                        page:this.page,
                        page_size:this.page_size,
                        type:'goods',
                        keywords:this.keywords
                    }
                })
                this.result = result
                this.searchGoodsList = [
                    ...this.searchGoodsList,
                    ...result.list
                ]
            },
        }
    }
</script>
<style lang='stylus'>
@import '~@a/stylus/border.styl';
.search-list
    padding-left .1rem
    .search-item
        height 1.32rem
        border_1px(0 0 1px 0,#e6e6e6)
        padding .15rem .15rem .15rem 0
        display flex
        .icon
            width 1.06rem
            height 100%
            img 
                width 1.06rem
                height 1.06rem
        .content
            flex 1
            display flex
            flex-direction column
            justify-content space-between
            h2
                color #333
                font-weight 700
                font-size .11rem
            .desc
                color #999
                font-size .1rem
            .btm
                display flex
                justify-content space-between
                .pric
                    color #999
                    font-size .11rem
                    span 
                        color: #FF4338;
                        font-size: .12rem;
                        padding-right: .06rem;
                .focus
                    font-size .11rem
                    color #999
.linkMore 

    text-align center;
    padding: .1rem 0;
    border_1px(0 0 1px 0,#e6e6e6)
    a
        font-size .12rem
        img
            margin-left .04rem;
            width .05rem;



</style>