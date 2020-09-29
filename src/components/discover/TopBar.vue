<!--     -->
<template>
  <div class="container">
      <div class="top_bar">
          <div @click="handleLeftClick">
              <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" alt="">
          </div>
          <span>{{title}}</span>
          <div @click="handleRightClick">
              <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" alt="">
          </div>
          
      </div>
      <div class="inner" :style="{display : dis ? block : none }">
          <ul>
              <li class="imgs" @click="handleHome">
                  <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/homepage-icon_605ed60.png" alt="">
                  <span>首页</span>
              </li>
              <li class="imgs"  @click="handleProfile">
                  <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/user-center-icon_77dfd45.png" alt="">
                  <span>我的</span>
              </li>
          </ul>
      </div>
            
      <div></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            dis:false,
            none:'none',
            block:'block'
        }
    },
    props:["title"],
    methods:{
        handleLeftClick(){
            this.$router.push('/discover')
        },
        handleRightClick(){
            this.dis=!this.dis
        },
        handleHome(){
            this.$router.push('./')
        },
        handleProfile(){
            this.$router.push('./more')
        }
    },
    created(){
        this.dis=false
    },
    mounted() {
        
    

    },
}
</script>
<style lang='stylus' scoped>
@import "~@a/stylus/border.styl";
.container
    width 100%
    height .48rem
    position relative
    
.top_bar
    width 100%
    height .48rem
    display flex
    justify-content flex-start
    align-items center
    div
        width .48rem
        height 100%
        display flex
        justify-content center
        align-items center
        img         
            width 82% 
            height 82%
    span 
        display block
        flex 1
        height .3rem
        text-align center
        line-height .3rem
        font-size .19rem
        font-weight bolder
        color #333
.inner
    width 1.35rem
    height .9rem
    position absolute
    right .1rem
    top .44rem
    :before
        content ""
        position absolute
        top -.05rem
        right .06rem
        border-bottom: .045rem solid rgba(0,0,0,.7);
        border-left: .06rem solid transparent;
        border-right: .06rem solid transparent;
    ul
        width 100%
        height 100%
        li:nth-child(1)
            border_1px(0 0 1px 0, #5c5c5c)
        
       
        li
            background-color #444
            width 100%
            height 49%
            display flex
            justify-content center
            align-items center
            cursor pointer
            img 
                width .31rem
                height .21rem
                padding-right .1rem
            span 
                font-size .14rem
                color #fff
       

</style>
