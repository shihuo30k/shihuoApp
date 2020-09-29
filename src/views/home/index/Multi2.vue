<template>
    <div>
        <li class = "multi2">
            <div class="title">{{ good.data.title }}</div>
            <ul class="img-list">
                <li v-for="(img,index) in good.data.img_attr"
                :key="index"
                >
                    <img :src="img" alt="">
                </li>
                
            </ul>
            <div class="author">
                <i>
                    <img :src="good.data.avatar" alt="">
                </i>
                <span>{{ good.data.author_name }}</span>
            </div>
        </li>
    </div>
</template>
<script>
    export default {
        props:{
            good:{
                type:Object
            }
        }
    }
</script>
<style lang='stylus' scoped>
.multi2
    display flex
    flex-direction column
    padding .24rem .16rem .1rem 0
    width 3.65rem
    min-height 2.02rem
    justify-content space-between

    border_1px(0 0 1px 0,#e6e6e6)
    &:first-child
        border_1px(1px 0 1px 0,#e6e6e6)
    .title
        font-size .12rem
        color #333
    .img-list
        width 100%
        display flex
        justify-content space-between
        li
            display flex
            width 1.1rem
            justify-content space-evenly
            img 
                width 1.1rem
                height 100%
    .author
        i 
            display inline-block
            border-radius .1rem
            width .2rem
            height .2rem
            overflow hidden
            text-align center
            vertical-align middle
            margin-right .06rem
            &>img 
                width .2rem
                height .2rem
                display block
                margin: 0
        span 
            font-size .14rem
            color #999
</style>