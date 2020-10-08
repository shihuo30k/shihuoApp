<!--  -->
<template>
  <div class="con">
      
      <ul>
          <li v-for="(v,i) in list" :key="i">
              <div class="img">
                  <img :src="v.data.img" alt="">
              </div>
              <div class="right">
                  <h2>{{v.data.name}}</h2>
                  <p>{{v.data.intro}}</p>
              </div>
          </li>
          
      </ul>
      
  </div>
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
        // this.loadData(this.param_str)
    },
   


}
</script>
<style lang='stylus' scoped>
.con 
    width 100%
    height 100%
    ul 
        width 100%
        padding .1rem 0 0 .1rem
        li 
            display flex
            padding .1rem .1rem .1rem 0
            .img 
                width .6rem
                height .6rem
            .right 
                margin-left .1rem
                display flex
                flex-direction column 
                justify-content space-between
                h2 
                    width 100%
                    font-size .14rem
                    color #333 
                p 
                    width 100%
                    font-size .13rem
                    color #999
                    





    img  
        width 100%
        height 100%
</style>
