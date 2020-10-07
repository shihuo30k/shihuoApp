<template>
    <div class="inner topmenuSlide">
        <div class="top right" id="menuwrapper">
            <ul id="brandmenulist" v-if="innerType.type === 'brandmenu' && theInnerType.isActive" >
                <li 
                class=""
                v-for="(li,index) in brandmenulist"
                :key="index"
                :data-brand="li"
                @click="changeBrandHandler(li)"
                >
                    <a href="javascript:void(0);">{{ li }}</a>
                </li>
            </ul>

            <ul id="catemenulist" v-if="innerType.type === 'catemenu' && theInnerType.isActive">
                <li class=""
                v-for="(li,index) in catemenulist"
                :key="index"
                :data-cate="li" ><a href="javascript:void(0);"
                @click="changeCateHandler(li)"
                >{{ li }}</a></li>
            </ul>

            <ul id="ordermenulist" v-if="innerType.type === 'ordermenu' && theInnerType.isActive">
                <li 
                class=""
                v-for="(li,index) in ordermenulist"
                :key="index"
                :data-order="li.text" 
                @click="changeOrderHandler(li.req_param)"
                >
                    <a href="javascript:void(0);">{{ li.text }}</a>
                </li>
            </ul>

            <ul id="sexmenulist" v-if="innerType.type === 'sexmenu' && theInnerType.isActive">
                <li class=""
                v-for="(li,index) in sexmenulist"
                :key="index"
                :data-sex="li" ><a href="javascript:void(0);"
                @click="changeSexHandler(li)"
                >{{ li }}</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props:{
        innerType:{
            type:Object,
        },
    },
    updated(){
        // console.log(this.theInnerType)
    },
    data(){
        return {
            theInnerType:this.innerType,
            brandmenulist:['全部','Nike/耐克','Jordan Brand/乔丹','adidas/阿迪达斯','adidas Originals/三叶草','Li Ning/李宁','Anta/安踏','Peak/匹克','Converse/匡威','Reebok/锐步','Under Armour/安德玛','Asics/亚瑟士','Vans/万斯','Puma/彪马','New Balance/新百伦'],
            catemenulist:['全部'],
            ordermenulist:[
                {text:'综合',req_param:'rank'},
                {text:'人气',req_param:'hot'},
                {text:'折扣',req_param:'discount'},
                {text:'最新',req_param:'new'},
                {text:'即将结束',req_param:'end'},
                {text:'价格高到低',req_param:'price_d'},
                {text:'价格低到高',req_param:'price_a'}
            ],
            sexmenulist:['通用','男生','女生','儿童']
        }
    },
    components:{
        
    },
    methods:{
        ...mapActions(['changeBrand', 'changeCate', 'changeOrder', 'changeSex', 'changeComming']),
        changeBrandHandler(li){
            if(li === '全部') li = ''
            this.changeBrand(li)
            this.theInnerType.isActive = false
        },
        changeCateHandler(li){
            this.changeCate(li)
            this.theInnerType.isActive = false
        },
        changeOrderHandler(param){
            this.changeOrder(param)
            this.theInnerType.isActive = false
        },
        changeSexHandler(li){
            if(li === "通用") li = ''
            this.changeSex(li)
            this.theInnerType.isActive = false
        }
    },
    watch:{
        innerType:function(val){
            this.theInnerType = val
        }
    }
};
// this.$watch()
</script>
<style lang='stylus' scoped>
.topmenuSlide
    -webkit-transition: all .3s linear;
    position: fixed;
    // background-color: rgba(0,0,0,.6);
    z-index: 9;
    left: 0;
    top: 1.23rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
.inner 
    width: 100%;
    height: 100%;
    .top 
        width: 100%;
        background: #fff;
        z-index: 81;
        position: absolute;
        ul 
            li 
                width: 100%;
                height: 3em;
                line-height: 3em;
                border-bottom: 1px solid #e6e6e6;
                a
                    padding-left: 1em;
                    height: 100%;
                    font-size: 1.2em;
                    display: block;
                    color: #464646;
                &.on 
                    a 
                        color: #FF4338;

</style>