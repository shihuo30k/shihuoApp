<template>
  <van-list
        v-model="loading"
        @load="onLoad"
      >
  <SelectedList :productList="selectedProducts" />
  </van-list>
</template>

<script>
import Vue from 'vue';
import {List} from 'vant';

Vue.use(List);
import http from '@u/http'
import SelectedList from '@c/brandList/SelectedList'
export default {
    data(){
    return{
      selectedProducts:[],
     
      loading: false,
     
    }
   },
    components: {
    SelectedList
  },
   created(){
     this.page_size = 30
     this.offset = 1,
     this.page = 1
   },
  mounted(){
  },
  
  methods:{
  async loadData(){
     let result = await http.get(
      '/api/youhui/list',
       {
        r:999,
        page: this.page,
        page_size: this.page_size
      }
    )
    console.log(result)
    this.selectedProducts = [
       ...this.selectedProducts,
       ...result.data
    ]
    
   
    this.loading = false
    this.page += 1
   },

   onLoad(){
       this.loadData()
   }
  }
}
</script>

<style lang='stylus' scoped>

</style>