<template>
<div>
    <div class="rtcon">
        <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" alt="" @click="change">
    </div>
    <div class="second" v-show="second">
            <ul>
                <li>首页</li>
                <li>我的</li>
            </ul>
    </div>
</div>
</template>
<script>
export default {
    data:function(){
        return {
            second:false
        }
    },
  methods:{
     change:function(){
         this.second=!this.second
     }
  }
}
</script>

<style lang="stylus" scoped>
.rtcon
  position relative
  img 
    width .4rem
    height .4rem
.second
   position absolute
   width 100%
   background-color red
   ul
    display block
    width 200%
    li
     
     display block
     width 5rem
</style>