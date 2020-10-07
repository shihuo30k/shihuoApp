<template>
  <div class="main-box">
    <div class="top-wrap">
        <div class="top_bar">
            <div class="goback" @click="goBackHandler">
                <img
                src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
                />
            </div>
            <span class="d-title">识货-团购</span>
            <div class="ico_list">
                <img
                src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
                />
            </div>
        </div>
        <div class="titpic">
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/titpic_5b9093a.png" alt="">
        </div>
        <TuangouTopMenu></TuangouTopMenu>
    </div>
    <div class="list-box">
        <TuangouList ref="tuangouList"></TuangouList>
    </div>
  </div>
</template>
<script>
import TuangouTopMenu from '@/views/home/index/indexMiddleComp/TuangouTopMenu'
import TuangouList from '@/views/home/index/indexMiddleComp/TuangouList'

export default {
    components:{
        TuangouTopMenu,
        TuangouList
    },
    methods:{
        goBackHandler(){
            this.$router.go(-1)
        }
    }

};
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
.main-box
    height 100%
    color: #444;
    background: #f7f7f7;
    display flex
    flex-direction column
    .top-wrap
        position fixed
        z-index 100
        background-color #fff
        .top_bar
            width 100%
            height .48rem
            border_1px(0 0 1px 0,#e6e6e6)
            display flex
            justify-content space-between
            background-color #f7f7f7
            .goback
                width .48rem
                height .48rem
                display flex
                justify-content center
                align-items center
                img 
                    width 80%
                    display block
            .d-title
                color: #333
                font-size .18rem
                font-weight bolder
                line-height .48rem
            .ico_list
                width .48rem
                height .48rem
                display flex
                justify-content center
                align-items center
                img 
                    width 80%
                    display block
        .titpic
            width 100%
            height .27rem
            border_1px(0 0 1px 0,#e6e6e6)
            position relative
            img 
                width 100%
                height .27rem  
    .list-box
        margin-top 1.23rem
        width 100%
        padding .15rem .1rem 0 .1rem
        flex 1
        // overflow auto
            
</style>