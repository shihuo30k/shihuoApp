<template>
 <div>123</div>
</template>

<script>
import http from '@u/http'
export default {
    data(){
    return{
      details:[],
      loading: false,
     
    }
   },
    components: {
   
  },
   created(){
     this.page_size = 30
     this.offset = 1,
     this.page = 1
   },
  mounted(){
     this.loadData()
  },
  
  methods:{
  async loadData(){
     let result = await http.post(
      '/api/comment/getComment',
      {
        page: 1,
        pageSize: 6,
        productId: 590815,
        typeId: 1,
        light: true,
        replyPage: 1,
        replySize: 5,
        msgCommentId: 0,
        msgReplyId: 0,
      }
   )

    console.log(result)
   },

 
  }
}
</script>

<style lang='stylus' scoped>

</style>