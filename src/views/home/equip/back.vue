<template>
    <div class="div1" @click="back">
        <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        back(){
            console.log("aaa");
            history.back();
        }
    }
}
</script>

<style lang="stylus" scoped>
  .div1
     width .4rem
     height .4rem
     img 
       width .4rem
       height .4rem
</style>