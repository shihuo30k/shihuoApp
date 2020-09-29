<!--     -->
<template>
  <div class="con">
    <TopBar :title="title" />
    <div class="img">
      <img src="http://shihuo.hupucdn.com/zhongce/202002/2923/6d70a4c05e93c691ec63c078b88806f3.jpg" alt="">
    </div>
    <div class="title">
      
      敢做例外！锐步 Zig Kinetica邀你一起高能迸发

    </div>
    <div class="dec">
      <div>
        <span>
          数量
          <i>10</i>
        </span>
        <span>
          已申请
          <i>5507</i>
        </span>
      </div>
      <div>
        查看详情
      </div>
    </div>
    <div class="hoteva">
      <div>
        <h2>热门众测</h2>
        <a href="#">更多众测></a>
      </div>

        <EvaluationGrid></EvaluationGrid>


    </div>
    <div class="report">
      <div>
        <h2>众测报告</h2>
        <a href="#">更多报告></a>

      </div>


       <EvaluationList/>

    </div>
    <div class="bottom">
      <EvaluationBottom/>
    </div>
  </div>
</template>
<script>
import TopBar from '@c/discover/TopBar'
import EvaluationGrid from './EvaluationGrid'
import EvaluationList from './EvaluationList'
import EvaluationBottom from './EvaluationBottom'
export default {
    data(){
        return{
            title:'众测-识货',
        }
    },
    components:{
        TopBar,
        EvaluationGrid,
        EvaluationList,
        EvaluationBottom
    },
    methods:{},
       
    created(){

    },
    mounted() {
        
    

    },
}
</script>
<style lang='stylus' scoped>
@import "~@a/stylus/border.styl"
.con
  width 100%
  height 100%
  overflow-y scroll
  .img
    width 100%
    height 2.38rem
  .title
    width 100%
    height .42rem
    font-size .15rem
    padding .1rem .12rem
  .dec
    width 100%
    height .44rem
    padding .05rem .12rem .12rem
    display flex
    justify-content space-between
    border_1px(0 0 1px 0,#e6e6e6)
    div:nth-child(1)
      display flex
      span 
        display block
        width .68rem
        font-size .12rem
        color #999
        line-height .18rem
        text-align center
        display flex
        i 
          color #ff4338
          margin-left .025rem
    div:nth-child(2)
      width .8rem
      height .4rem
      text-align center
      line-height .4rem
      background-color #ff4338
      color #fff
      font-size .12rem
      margin-top -.1rem
  .hoteva
    width 100%
    height 2.91rem
    border_1px(0 0 1px 0,#e6e6e6)
    div:nth-child(1)
      width 100%
      height .41rem
      display flex
      justify-content space-between
      padding .1rem .15rem
      h2 
        font-size .14rem
        color #444
      a 
        color #278ccf
        font-size .12rem
  .report
    width 100%
    div:nth-child(1)
      width 100%
      height .41rem
      display flex
      justify-content space-between
      padding .1rem .15rem
      h2 
        font-size .14rem
        color #444
      a 
        color #278ccf
        font-size .12rem
    
  .bottom
    width 100%
    height .5rem  
    position absolute
    bottom 0
    left 0
    z-index 999


    
</style>
