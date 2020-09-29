<template>
    <div>
        <button class="first" @click="change">点击我</button>
        <div class="second" v-if="second">
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
  .second{
      width 100px
      height 100px
      background-color red
  }
</style>