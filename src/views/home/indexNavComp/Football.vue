<template>
    <div class="container">
        <div class="top_bar">
            <div class="goback" @click="goBackHandler">
                <img
                src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
                />
            </div>
            <span class="d-title">足球专区</span>
            <div class="ico_list">
                <img
                src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
                />
            </div>
        </div>
        <div class="content">

        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goBackHandler(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
.container
    height 100%
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
</style>