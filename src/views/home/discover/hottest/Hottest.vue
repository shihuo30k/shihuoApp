<!--     -->
<template>
  <div class="container">
    <TopBar :title="title" />
  </div>
</template>
<script>
import TopBar from '@c/discover/TopBar'
export default {
    data(){
        return{
            title:'识货最热文章',
        }
    },
    components:{
        TopBar
    },
    methods:{},
       
    created(){

    },
    mounted() {
        
    

    },
}
</script>
<style lang='stylus' scoped>
</style>
