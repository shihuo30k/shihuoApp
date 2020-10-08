<!--     -->
<template>
  <div class="container">
    <TopBar :title="title" />
    <van-list
    v-model="loading"
    @load="onLoad">
      <HotList
        :list="list"
      />
    </van-list>
  </div>
</template>
<script>
import TopBar from '@c/discover/TopBar'
import HotList from './HotList'
import http from '@u/http'
import Vue from "vue"
import { List } from "vant"
Vue.use(List)
export default {
    data(){
        return{
            title:'识货最热文章',
            
            list:[],
             param_str:'1593676626_6',
             finished:false,
            loading:false,
        }
    },
    components:{
        TopBar,
        HotList
    },
    mounted(){
      console.log(this.$route);
      if(this.$route.params.id === 1){
              
              this.title = '热门活动'
      }
    },
     methods:{
        async loadData(param_str){
            let result = await http.get('/api/column/ColumnList',
            {
                key:'activity_list',
                val:' ',
                page_size:20,
                param_str:param_str
            })
            this.list=[
                ...this.list,
                ...result.data.list
                ]
            // console.log(result.data.list);
            
            this.param_str=result.data.list[0].data.param_str
            // console.log(this.param_str);
            this.loading=false
        },
        onLoad(){
            this.loadData(this.param_str)
        }
    },
       
    created(){

    },
    mounted() {
        
    

    },
}
</script>
<style lang='stylus' scoped>
</style>
