<template>
  <div>123{{brand}}</div>
</template>

<script>
export default {
    data(){
    return{
     
     
    }
   },
  components: {
    
  },
  created(){
     
   },
   computed:{
     brand(){
      let { brand } = this.$route.params
      return brand
     }
     
   },
  mounted(){
  
  },
  
  methods:{
  
  }
}
</script>

<style lang='stylus' scoped>

</style>