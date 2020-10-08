<!--     -->
<template>
  <div class="container">
    <TopBar :title="title" />
    <ul>
      <router-link tag="li" to="/column/0">
        <div>
          <img src="http://shihuo.hupucdn.com/column/201901/2910/bfc3b5eb60a709c3dbdc225f031408ef.png" alt="">
        </div>
        <div>
          <p>潮鞋志</p>
          <h2>SOAR开箱丨Shox Gravity “Atmosphere Grey”</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column/1">
        <div>
          <img src="http://shihuo.hupucdn.com/column/201904/3019/194e422f3f7f559e3ec3f97f5db77d02.png" alt="">
        </div>
        <div>
          <p>球鞋SHOW</p>
          <h2>SOAR开箱丨Shox Gravity “Atmosphere Grey”</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column/2">
        <div>
          <img src="http://shihuo.hupucdn.com/column/201809/2010/873ceba27026dc8694990027db1876e3.jpg" alt="">
        </div>
        <div>
          <p>一日一双</p>
          <h2>SOAR开箱丨Shox Gravity “Atmosphere Grey”</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column/3">
        <div>
          <img src="http://shihuo.hupucdn.com/column/201809/2009/0cae8ba7dc245a4c8ffd2ed325167c87.jpg" alt="">
        </div>
        <div>
          <p>今天穿这样</p>
          <h2>SOAR开箱丨Shox Gravity “Atmosphere Grey”</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column/4">
        <div class="flower">
          <img  class="img" src="http://shihuo.hupucdn.com/column/201901/2911/d63f83823237e822f2cfd3e207774dc9.png" alt="">
        </div>
        <div>
          <p>潮流穿搭</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column/5">
        <div class="flower">
          <img  class="img" src="http://shihuo.hupucdn.com/column/201811/2914/9a039556f46b13108f38403df171bc52.jpg" alt="">
        </div>
        <div>
          <p>球鞋90秒</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column/6">
        <div class="flower">
          <img  class="img" src="http://shihuo.hupucdn.com/column/201901/2911/b1a7a07263f622df41f93a2b84c0ad1a.png" alt="">
        </div>
        <div>
          <p>跑步评测室</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column/7">
        <div class="flower">
          <img  class="img" src="http://shihuo.hupucdn.com/column/201905/1218/b11f2b9d6f4b8fca45ea16a533354ead.jpg" alt="">
        </div>
        <div>
          <p>视频</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
      <router-link tag="li" to="/column/8">
        <div class="flower">
          <img  class="img" src="http://shihuo.hupucdn.com/column/201901/2910/f62a55481c19c7f591efbf846e922dc6.png" alt="">
        </div>
        <div>
          <p>装备党</p>
          <h2>好事达金属三层收纳车HT-GJ-P-7851</h2>
        </div>
      </router-link >
    </ul>
   <router-view 
    :img = "img"
    :list = "list"
    ></router-view>
  </div>
</template>
<script>
import TopBar from '@c/discover/TopBar'
import http from '@u/http.js'
export default {
    data(){
        return{
         
            title:'识货栏目',
           

            list:[],
            img:'',
           
            columnId:0,
            
            arr:[285,8,5,238,13,135,137,280,6],
            imgs:['http://shihuo.hupucdn.com/column/201901/2910/bfc3b5eb60a709c3dbdc225f031408ef.png','http://shihuo.hupucdn.com/column/201904/3019/194e422f3f7f559e3ec3f97f5db77d02.png','http://shihuo.hupucdn.com/column/201809/2010/873ceba27026dc8694990027db1876e3.jpg','http://shihuo.hupucdn.com/column/201809/2009/0cae8ba7dc245a4c8ffd2ed325167c87.jpg','http://shihuo.hupucdn.com/column/201901/2911/d63f83823237e822f2cfd3e207774dc9.png','http://shihuo.hupucdn.com/column/201811/2914/9a039556f46b13108f38403df171bc52.jpg','http://shihuo.hupucdn.com/column/201901/2911/b1a7a07263f622df41f93a2b84c0ad1a.png','http://shihuo.hupucdn.com/column/201905/1218/b11f2b9d6f4b8fca45ea16a533354ead.jpg','http://shihuo.hupucdn.com/column/201901/2910/f62a55481c19c7f591efbf846e922dc6.png']
        }
    },
    components:{
        TopBar
    },
   
       
    created(){

    },
    mounted() {
      this.list=[]
      this.loadData(this.arr[0])
      this.img=this.imgs[0]
    },
    beforeRouterUpdate(to, from, next) {
      console.log(to)
      this.loadData(this.arr[to.params.id])
      this.img=this.imgs[to.params.id]
      console.log(to.params.id)
      next()
    },
   
    methods:{
      
      async loadData(a){

        let result = await http.get('/api/column/getList',{
          columnId: a,
          pageSize: 20,
          page:1 ,
          createTimestamp:''
        })
        console.log(result.data);
        this.list=[
          ...this.list,
          ...result.data
        ]
      }
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
        width 100%   
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
