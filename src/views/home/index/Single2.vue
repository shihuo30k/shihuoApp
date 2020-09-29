<template>
    <div>
        <li v-if="good">
            <div class="icon">
                <img :src="good.data.img">
            </div>
            <div class="right">
                <p>{{ good.data.title }}</p>
                <div>
                    <i class="avatar">
                        <img :src="good.data.avatar" alt="">
                    </i>
                    <span>{{ good.data.author_name }}</span>
                </div>
                <div class="column_name" v-if="good.data.column_name">
                    <span>{{ good.data.column_name }}</span>
                </div>
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
    },
    mounted() {
    },

}
</script>


<style lang="stylus" scoped>
li
    display flex
    padding .1rem 0rem .1rem 0
    width 3.65rem
    min-height 1.33rem
    align-items center
    border_1px(0 0 1px 0,#e6e6e6)
    &:first-child
        border_1px(1px 0 1px 0,#e6e6e6)
    // &>div:first-child
    .icon
        img 
            width 1.07rem
    .right
        flex 1
        width 2.58rem
        height 1.2rem
        // height 100% !important
        padding 0.1rem 0.2rem 0 0.1rem
        font-size .14rem
        display flex
        flex-direction column
        justify-content space-between
        p
            font-size .14rem
            // line-height .14rem
        div > .avatar
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
        .column_name span 
            color #999;
            font-size .1rem;
            border 1px solid #a8a8a8;
            border-radius .04rem;
            padding 0 .05rem;
            display inline-block;
            max-width .52rem;
            overflow hidden;
            vertical-align middle;
            text-overflow ellipsis;
            white-space nowrap;
</style>