<template>
  <div class="main-box">
    <div class="top_bar">
        <div class="goback">
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
    <div class="content-box">
        <div class="titpic">
            <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/titpic_5b9093a.png" alt="">
        </div>
        <ul class="top-menu">
            <li class="menu brandmenu on" data-type="brandmenu">
                <a href="javascript:void(0)">品牌
                    <span></span>
                </a>
                <span></span>
            </li>
            <li class="menu catemenu" data-type="catemenu"><a href="javascript:void(0)">分类
                <span></span></a><span></span></li>
            <li class="menu ordermenu" data-type="ordermenu"><a href="javascript:void(0)">排序
                <span></span></a><span></span></li>
            <li class="menu sexmenu" data-type="sexmenu"><a href="javascript:void(0)">适用人群
                <span></span></a><span></span></li>
            <li class="next" data-type="next"><s>下期预告</s><a href="javascript:void(0);" class="yg on" id="nextYg"></a></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang='stylus' scoped>
@import '~@a/stylus/border.styl';
.main-box
    height 100%
    color: #444;
    background: #f7f7f7;
    display flex
    flex-direction column
    .top_bar
        width 100%
        height .48rem
        border_1px(0 0 1px 0,#e6e6e6)
        display flex
        justify-content space-between
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
    .content-box
        width 100%
        flex 1
        overflow-y scroll
        .titpic
            width 100%
            height .27rem
            border_1px(0 0 1px 0,#e6e6e6)
            img 
                width 100%
                height .27rem
        .top-menu
            width 100%
            height .48rem
            background-color #fff
            .menu
                width 15%
                height 100%
                border_1px(0 0 1px 0,#e6e6e6)
                line-height .48rem
                overflow hidden
                position relative
                float left
                a
                    display: block;
                    font-size: .12rem;
                    text-align: center;
                    text-decoration: none;
                    width: 100%;
                    height: 100%;
                    color: #222;
                    overflow: hidden;
                    span 
                        transition: all .3s;
                        transform: rotate(0deg);
                        -moz-transform: rotate(0deg);
                        -webkit-transform: rotate(0deg);
                        -o-transform: rotate(0deg);
                        display: inline-block;
                        background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/menu_up_616fa17.png) center center no-repeat;
                        background-size: 100% auto;
                        width: .08rem;
                        vertical-align: middle;
                        height: .05rem;
            .sexmenu
                width 25%
            li.on 
                a 
                    color: #FF4338;
                    span
                        transform: rotate(180deg);
                        -moz-transform: rotate(180deg);
                        -webkit-transform: rotate(180deg);
                        -o-transform: rotate(180deg);
                        background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/menu_on_9312692.png) center center no-repeat;
                        background-size: 8px auto;
            .next
                height 100%
                width 30%
                float left 
                text-align right
                border_1px(0 0 1px 0,#e6e6e6)
                line-height .48rem
                overflow hidden
                position relative
                .yg 
                    display: inline-block;
                    background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/yg_b1e971d.png) center no-repeat;
                    background-size: 70% auto;
                    width: 50px;
                    height: 100%;
                    float: right;
                    &.on
                        background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/tuangou/index/yg_on_95829cb.png) center no-repeat;
                        background-size: 70% auto;

                    

        
</style>