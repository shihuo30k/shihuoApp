<template>
<div>
    <div class="head">
        <back></back>
        <div class="title">热销排行</div>
        <righttop></righttop>
    </div>
    <div class="body">
        <div class="ulcon">
            <ul>
                <li>登录</li>
                <li>注册</li>
                <li>客户端</li>
                <li>电脑版</li>
            </ul>
        </div>
    </div>
</div>
    
</template>

<script>
import back from "./back.vue"
import righttop from "@c/righttop"
export default {
    data(){
        return{

        }
    },
    components:{
        back,
        righttop
    }
}
</script>

<style lang="stylus" scoped>
.head
    display  flex
    justify-content space-between
    align-items center
    background-color #F7F7F7
    .title
       font-size .18rem
       font-weight bolder
.body
   width 100%
.ulcon
   width 3rem
   height .2rem
   margin 2rem  auto   0   auto
   ul
    list-style none
    li
     float left
     width .66rem
     text-align center
</style>