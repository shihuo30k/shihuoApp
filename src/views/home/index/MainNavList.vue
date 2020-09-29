<template>
    
    <div>
      <div class="list-menu">
        <ul>         
            <li 
            :class="active === index ? 'on' : ''"
            v-for="(good,index) in goodTypeList"
            :key="good.type"
            @click="clickMainHandler(index,good.type)"
            >{{ good.title }}</li>          
        </ul>
      </div>
      <SubNavList ref="sublist"></SubNavList>
    </div>
    
    
</template>

<script>
import Vue from 'vue';
import { List } from 'vant';

Vue.use(List);
import SubNavList from '@/views/home/index/SubNavList'

export default {
  data() {
    return {
      active: 0,
      goodTypeList:[
        {
          title:'推荐',
          type:''
        },
        {
          title:'篮球',
          type:'basketball'
        },
        {
          title:'跑步',
          type:'running'
        },
        {
          title:'健身',
          type:'fitness'
        },
        {
          title:'潮流',
          type:'freestyle'
        },
        ],
    };
  },
  components:{
    SubNavList
  },
  methods:{
    clickMainHandler(index,type){
      this.active = index
      this.$store.dispatch('changeCartType',type)
      this.$refs.sublist.middleFun()
    }
  }
  
};
</script>

<style lang="stylus">
.list-menu
  display flex
  background-color #fff
  ul
    display flex
    margin auto
    width 3.26rem
    height .4rem
    justify-content space-between
    li
      font-weight 700;
      color #333;
      line-height .4rem
      position relative
      &.on
        color #FF4338
        &::after
          content: "";
          width: .18rem;
          display: block;
          position: absolute;
          bottom: .06rem;
          left: 50%;
          margin-left: -.09rem;
          border-radius: .04rem;
          height: .03rem;
          background-color: #FF4338;
</style>