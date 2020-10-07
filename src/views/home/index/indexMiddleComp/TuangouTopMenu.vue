<template>
    <div>
        <ul class="top-menu">
            <li 
            v-for="(tp,index) in topMenuData"
            :key="index"
            :data-type="tp.type" 
            :class="[tp.type,'menu',{on:(Active === index) && tp.isActive}]"
            @click="activeHandler(index,$event)"
            >
                <a href="javascript:void(0)">{{ tp.title }}
                    <span></span>
                </a>
                <span></span>
            </li>
            <li class="next" data-type="next"><s>下期预告</s><a href="javascript:void(0);" :class="['yg', {on:ygStyle}]" @click="ygHandler"></a></li>
        </ul>
        <TuangouInner :innerType="innerType"></TuangouInner>
    </div>
</template>
<script>
import { mapActions } from "vuex"
import TuangouInner from '@/views/home/index/indexMiddleComp/TuangouInner'
export default {
    data(){
        return {
            Active:-1,           
            ygStyle:false,
            innerType:{},
            topMenuData:[
                {type:'brandmenu', title:'品牌', isActive:false},
                {type:'catemenu', title:'分类', isActive:false},
                {type:'ordermenu', title:'排序', isActive:false},
                {type:'sexmenu', title:'适用人群', isActive:false},
            ]
            
        }
    },
    components:{
        TuangouInner,
    },
    methods:{
        ...mapActions(['changeComming']),
        activeHandler(index){
            this.Active = index
            this.topMenuData[index].isActive = !this.topMenuData[index].isActive
            this.innerType = this.topMenuData[index]
            for(let i = 0; i < this.topMenuData.length;i++){
                if(i !== index){
                    this.topMenuData[i].isActive = false
                }
            }
        },
        ygHandler(){
            this.ygStyle = !this.ygStyle
            this.changeComming(Number(this.ygStyle))
        }
    }
}
</script>
<style lang='stylus' scoped>
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