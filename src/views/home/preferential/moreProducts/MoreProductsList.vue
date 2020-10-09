<template>
 <div class="moreProducts-container">
  <ul>
   <li v-for="value in moreProductsList"  :key="value.expose_key">
    <a :href="value.href">
    <div class="right"><img :src="value.img" alt="图片加载中"></div>
    <div class="left">
      <span>{{value.category.name}}</span>
      <span>{{value.category.subtitle}}</span>
      <span>{{value.business}}</span>
    </div>   
    </a> 
   </li>
   
  </ul>
  
 </div>
</template>

<script>
import http from '@u/http'
export default {
  data(){
    return{
      moreProductsList:[],
      r:''
    }
   },
   computed:{
    
   },
   
  mounted(){
       this.moreProductsList=[]
      // this.loadData()
      let { r } = this.$route.params
      this.r = r
      this.loadData(r)
      console.log(this.r)
  },
  watch:{
     $route(){
      console.log('2')
      this.loadData(this.$route.params.r)
      window.location.reload()
     }
     
  },
  methods:{
  async loadData(r){
   console.log('q')
     let result = await http.get(
       '/api/youhui/list',
       {
        type:"cabbage",
        r:r,
        page:1 ,
        page_size: 30
      }
    )
    this.moreProductsList = [
       ...this.moreProductsList,
       ...result.data
    ]
    console.log(result);
    console.log(this.moreProductsList);

    // window.location.reload()
    
   },

  }
}
</script>

<style lang='stylus' scoped>
.moreProducts-container ul li{
 padding  .1rem
 height 1.2rem
 display flex
}
.moreProducts-container ul li a{
 display flex
}
.moreProducts-container ul li a .right{
 height 1rem
 width 1rem
 line-height 1.2rem
}
.moreProducts-container ul li a .right img{
 height 1rem
}
.moreProducts-container ul li a .left{
flex 1
}
</style>