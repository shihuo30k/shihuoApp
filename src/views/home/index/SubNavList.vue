<template>
    <div class="list-wrap">
        <div class="list-submenu">
            <ul>
                <li :class="active === index ? 'on' : ''"
                v-for="(cv,key,index) in channelTypes"
                :key="key"
                @click="clickSubHandler(index,cv.channelType)"
                >{{ cv.title }}</li>
            </ul>
        </div>
        <ItemList ref="itemList"></ItemList>
    </div>
</template>

<script>
import ItemList from '@/views/home/index/ItemList'

export default {
    data() {
        return {
            channelTypes:{
                all:{title:'全部',channelType:''},
                simpl:{title:'单品推荐',channelType:'11'},
                orginal:{title:'原创精品',channelType:'12'},
                user:{title:'用户晒物',channelType:'7'}
            },
            active: 0,
            shotList:[]
        };
  },
  components:{
      ItemList,
  },

  methods:{
      clickSubHandler(index,channelType){
          this.active = index         
          this.$store.dispatch('changeChannelType',channelType)
        //   console.log(this.$store.state.cartType)
          this.$refs.itemList.render()
      },
      middleFun(){
          this.$refs.itemList.render()
      }
  }
  
}
</script>

<style lang="stylus">
.list-wrap
    background-color #fff
.list-submenu ul

    display flex
    justify-content space-evenly
    margin-bottom .12rem
    li
        width .76rem
        height .26rem
        font-size .12rem
        text-align center
        line-height .26rem
        background #f5f5f5
        border-radius .03rem
        &.on
            color: #FFF;
            background-color: #FF4338;
</style>