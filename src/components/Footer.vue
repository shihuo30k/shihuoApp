<template>
    <van-tabbar v-model="active" active-color='#FF4338' inactive-color='#444' class="footer">
        <van-tabbar-item v-for="li in footerList" :key="li.title" :to="li.router">
            <span>{{ li.title }}</span>
            <template #icon="props">
                <img :src="props.active ? li.active : li.inactive" />
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data() {
        return {
        active: 0,
        footerList:[
            {
                title:'首页',
                active:'http://sh1.hoopchina.com.cn/images/trademobile/common/index-on.png?201903111600',
                inactive:'http://sh1.hoopchina.com.cn/images/trademobile/common/index.png?201903111600',
                router:'/index'
            },
            {
                title:'优惠',
                active:'http://sh1.hoopchina.com.cn/images/trademobile/common/youhui-on.png?201903111600',
                inactive:'http://sh1.hoopchina.com.cn/images/trademobile/common/youhui.png?201903111600',
                router:'/preferential'
            },
            {
                title:'发现',
                active:'http://sh1.hoopchina.com.cn/images/trademobile/common/find-on.png?201903111600',
                inactive:'http://sh1.hoopchina.com.cn/images/trademobile/common/find.png?201903111600',
                router:'/discover'
            },
            {
                title:'装备',
                active:'http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei-on.png?201903111600',
                inactive:'http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei.png?201903111600',
                router:'/equip'
            },
            {
                title:'更多',
                active:'http://sh1.hoopchina.com.cn/images/trademobile/common/more-on.png?201903111600',
                inactive:'http://sh1.hoopchina.com.cn/images/trademobile/common/more.png?201903111600',
                router:'/more'
            },
        ]
    };
  },
};

</script>


<style lang="stylus">
.footer 
    width 100%
    height .45rem
    bottom 0
    left 0
    position relative
    z-index 999
    box-shadow  0 0 0.10rem 0.01667rem rgba(0,0,0,.41);
    background-color #fff
    span 
        font-size .12rem
        line-height .12rem
</style>