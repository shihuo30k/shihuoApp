<!--     -->
<template>
  <div class="container">
    <TopBar :title="title" />
    <div>

    
      <van-list
        v-model="loading"
        @load="onLoad"
        :immediate-check=imcheck
        >
        <ul>
          <a v-for="(v,index) in list" :key="index" :href="v.data.href" >
            <li >
                <div>
                  <img :src="v.data.img" alt="">
                </div>
                <div>
                  <h2>{{v.data.title}}</h2>
                  <p>{{v.data.intro}}</p>
                  <div>
                    <p>

                      <img :src="v.data.avatar" alt="">
                    </p>
                    <span>{{v.data.author_name}}</span>
                  </div>
                </div>
            </li>
          </a>
        </ul>
      </van-list>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { List} from 'vant'
Vue.use(List)
import TopBar from '@c/discover/TopBar'
import http from "@u/http"
export default {
    data(){
        return{
            title:'识货最新文章',
            loading:false,
            list:[],
            index:0,
            imcheck:false,
        }
    },
    components:{
        TopBar
    },
    methods:{
      async loadData(b){
       let result = await http.get('api/column/ColumnList',{
            key: 'collect_article',
            val: 'sort_new',
            page_size: 20,
            param_str: b
        })
        // console.log(result.data.list);
        this.list=[
          ...this.list,
          ...result.data.list
        ],
        console.log(this.list);
        this.loading = false
        this.index++
      } ,
      onLoad(){
        if(this.index>=2) return
        this.loadData("1560864564_3")
      }

    },
       
    created(){

    },
    mounted() {
        this.index =0
        this.loadData('')
        

    },
}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/ellipsis.styl'
ul
  width 100%
  height 100%
  padding .1rem 0 0 .1rem
  li
    display block
    width 100%
    height 1.33rem
    padding .1rem .1rem .1rem 0
    display flex
    div:nth-child(1)
      width 1.07rem
      height 1.13rem
      padding-bottom .1rem
    div:nth-child(2)
      flex 1
      display flex
      flex-direction column
      justify-content space-between
      padding-left .13rem
      h2 
        height .42rem
        font-size .14rem
        color #333
        ellipsis()
        
      p
        height .39rem
        font-size .13rem
        color #999
        ellipsis()
      div
        width 100%
        height .2rem
        display flex
        p
          width .2rem
          height .2rem
          border-radius 50%
          overflow hidden
          img 
            width .2rem
            height .2rem
        span 
          font-size .13rem
          color #666
          padding-left .1rem

      
        

</style>
