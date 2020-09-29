<!--     -->
<template>
  <div class="container">
    <TopBar :title="title" />
    <ul>
      <router-link tag="li" to="/column/1">
        <div>
          <img src="http://shihuo.hupucdn.com/ucditor/20191202/640x480_6b2cd8e3108789010c1585610eb3cbe0.jpeg?imageView2/0/w/300/h/300/interlace/1" alt="">
        </div>
        <div>
          <p>潮鞋志</p>
          <h2>SOAR开箱丨Shox Gravity “Atmosphere Grey”</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column">
        <div>
          <img src="http://shihuo.hupucdn.com/ucditor/20191202/640x480_6b2cd8e3108789010c1585610eb3cbe0.jpeg?imageView2/0/w/300/h/300/interlace/1" alt="">
        </div>
        <div>
          <p>球鞋SHOW</p>
          <h2>SOAR开箱丨Shox Gravity “Atmosphere Grey”</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column">
        <div>
          <img src="http://shihuo.hupucdn.com/ucditor/20191202/640x480_6b2cd8e3108789010c1585610eb3cbe0.jpeg?imageView2/0/w/300/h/300/interlace/1" alt="">
        </div>
        <div>
          <p>一日一双</p>
          <h2>SOAR开箱丨Shox Gravity “Atmosphere Grey”</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column">
        <div>
          <img src="http://shihuo.hupucdn.com/ucditor/20191202/640x480_6b2cd8e3108789010c1585610eb3cbe0.jpeg?imageView2/0/w/300/h/300/interlace/1" alt="">
        </div>
        <div>
          <p>今天穿这样</p>
          <h2>SOAR开箱丨Shox Gravity “Atmosphere Grey”</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column">
        <div class="flower">
          <img  class="img" src="http://c1.hoopchina.com.cn/uploads/star/event/images/130923/thumbnail-3e18d68cbd79e6b52c4ba047722a4f57626e2f39.jpg" alt="">
        </div>
        <div>
          <p>潮流穿搭</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column">
        <div class="flower">
          <img  class="img" src="http://c1.hoopchina.com.cn/uploads/star/event/images/130923/thumbnail-3e18d68cbd79e6b52c4ba047722a4f57626e2f39.jpg" alt="">
        </div>
        <div>
          <p>球鞋90秒</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column">
        <div class="flower">
          <img  class="img" src="http://c1.hoopchina.com.cn/uploads/star/event/images/130923/thumbnail-3e18d68cbd79e6b52c4ba047722a4f57626e2f39.jpg" alt="">
        </div>
        <div>
          <p>跑步评测室</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column">
        <div class="flower">
          <img  class="img" src="http://c1.hoopchina.com.cn/uploads/star/event/images/130923/thumbnail-3e18d68cbd79e6b52c4ba047722a4f57626e2f39.jpg" alt="">
        </div>
        <div>
          <p>视频</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column">
        <div class="flower">
          <img  class="img" src="http://c1.hoopchina.com.cn/uploads/star/event/images/130923/thumbnail-3e18d68cbd79e6b52c4ba047722a4f57626e2f39.jpg" alt="">
        </div>
        <div>
          <p>装备党</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import TopBar from '@c/discover/TopBar'
export default {
    data(){
        return{
            title:'识货栏目',
        }
    },
    components:{
        TopBar
    },
    methods:{},
       
    created(){

    },
    mounted() {
        
    

    },
}
</script>
<style lang='stylus' scoped>
ul
  width 100%
  height 100%
  padding .1rem 0 0 .1rem
  li
    width 100%
    height .8rem
    padding .1rem .1rem .1rem 0
    display flex
    div:nth-child(1)
      width .6rem
      height .6rem
      img   
        height 80%
    div:nth-child(2)
      flex 1
      height .6rem
      padding-left .1rem
      display flex
      flex-direction column
      justify-content space-around
      p
        width 100%
        height .2rem
        font-size .14rem
        color #333
      h2
       
        width 100%
        height .2rem
        font-size .12rem
        color #999
        padding 0
        font-weight normal
   .flower .img 
      width 100%
      height 100%

</style>
