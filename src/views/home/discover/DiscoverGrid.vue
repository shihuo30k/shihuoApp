<template>
    <div>
        <van-grid>
            <van-grid-item icon="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png" text="众测" to="/eva" />
            <van-grid-item icon="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png" text="栏目" to="/column"/>
            <van-grid-item icon="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png" text="最新" to="/newest"/>
            <van-grid-item icon="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png" text="最热" to="/hottest" />
        </van-grid>
    </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
export default {
    
}
</script>
<style lang="stylus">
    .van-grid
        height .7rem
    .van-icon__image
        width .36rem
        height 0.31rem
    .van-grid-item__text
        font-size .13rem
</style>