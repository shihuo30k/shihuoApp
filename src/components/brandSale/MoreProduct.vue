<template>
   <div class="superValue">
     <div class="superValue-left">
       <span class="title">超值9块9</span>
       <span class="title-v">24小时淘不停</span>
     </div>
     <router-link tag="span" class="superValue-right" to="/more-products">
       更多商品<i class="yo-ico"> &#xe648;</i>
     </router-link>
   </div>
</template>

<script>
 export default {
 
}
</script>

<style lang="stylus">
.superValue
 width 100%
 padding .15rem
 display flex
 justify-content space-between
 height 1.035rem
 .superValue-left
  .title
   font-size .14rem
   font-weight bold
  .title-v
   font-size .12rem
   color #b5b9bc
   margin-left .1rem
 .superValue-right
  font-size .12rem
  color #b5b9bc
</style>
