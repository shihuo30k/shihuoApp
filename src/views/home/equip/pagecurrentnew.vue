<template>
  <div class="out" ref="out">
    <div class="top">
      <div>
        <back></back>
      </div>
      <div class="center">
        <span>发售日历</span>
      </div>
      <div class="right">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
          alt=""
        />
      </div>
      <div class="tanchuang">
        <ul>
          <li>首页</li>
          <li>我的</li>
        </ul>
      </div>
    </div>
    <div class="top1"></div>
    <div class="monthcon">
    <div class="manth">
      <div class="row1">
        <span>2020年</span>
      </div>
      <div
        class="row"
        v-for="(item, index) in rowlist"
        :key="index"
        @click="changeTypeColor(index)"
        :class="{ active: index == typeActive }"
      >
        <span>{{ item.title }}</span
        >月
        <P>{{ item.eng }}</P>
      </div>
    </div>
    </div>
    <div class="monthcon2"></div>
    <div class="part"></div>
    <div class="imgbacktop" v-show="imgshow" @click="backtop">
        <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/top_11d5d37.png" alt="">
    </div>
    <div class="goodlist">
        <div class="con" v-for="item in goodlist" :key="item.id">
            <div class="monthcon1">{{item.month}}月</div>
            <div v-for="item in item.data" :key="item.id">
            <a :href="item.href" class="aa">
            <div class="listshow">
                <div class="imgcon">
                    <img :src="item.img" alt="">
                </div>
                <div class="desccon">
                    <div>{{item.title}}</div>
                    <div class="colorprice">
                        <div class="colorcon">{{item.color}}</div>
                        <div>
                          <div class="pricecon" v-if="item.price==0">暂无</div> 
                          <div class="pricecon" v-else>￥{{item.price}}</div>
                        </div>
                    </div>
                    <div class="datecon">发布日期{{item.release_date}}</div>
                </div>
            </div>
            </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import back from "./back.vue";
import http from "@u/http.js"
export default {
  data() {
    return {
      imgshow:false,
      scrolltop:0,
      btnflag:'',
      typeActive: 4,
      rowlist: [
        { id: 1, title: "8", eng: "APR" },
        { id: 2, title: "7", eng: "JUL" },
        { id: 3, title: "6", eng: "JUN" },
        { id: 4, title: "5", eng: "MAY" },
        { id: 5, title: "4", eng: "APR" },
      ],
      goodlist: [],
    };
  },
  methods: {
    changeTypeColor: function (index) {
      this.typeActive = index;
      this.$refs.out.scrollTop=0
    },
    handlerscroll(){
      if(this.$refs.out.scrollTop>400){
          this.imgshow=true
        }else{
          this.imgshow=false
        }
    },
    backtop(){
         this.$refs.out.scrollTop=0
    },
  },
  components: {
    back,
  },
  async mounted() {
      var out=document.querySelector(".out")
      out.addEventListener("scroll",this.handlerscroll,true);
      let result=await http.post('/api/zhuangbei/listSeasonNew');
      this.goodlist=result.dataList;
      console.log(result.dataList);
  },
};
</script>

<style lang="stylus" scoped>
.aa
  color black 
.imgbacktop
  position fixed
  z-index 999
  top 5.66rem
  right .1rem
  img 
    width .38rem
    height .38rem
.out
  overflow-y scroll
  height 100%
.top {
  display: flex;
  width 100%
  position fixed
  top 0
  z-index 999
  justify-content: space-between;
  align-items: center;
  height: 0.5rem;
  background-color: #F7F7F7;
}
.top1
  height: 0.5rem;
  background-color: #F7F7F7;
.center {
  span {
    font-size: 0.18rem;
    font-weight: bolder;
  }
}

.right {
  img {
    width: 0.4rem;
    height: 0.4rem;
  }
}

.tanchuang
  position: absolute
  display: none
  right: 0.1rem
  top: 0.32rem
.monthcon2
  width: 100%;
  height: .42rem;
.monthcon
  width: 100%;
  height: .42rem;
  position: fixed;
  background-color white
  z-index 999
  top .5rem
.manth {
  overflow-x: scroll;
  white-space: nowrap;
  z-index 997
  width: 100%;
  height: 0.42rem;
}

.row1 {
  display: inline-block;
  height: 0.42rem;

  span {
    font-size: 0.2rem;
    color: red;
    position: relative;
    top: -0.08rem;
  }
}

.row {
  display: inline-block;
  width: 0.84rem;
  height: 0.42rem;
  margin-left: 0.1rem;

  span {
    margin-left: 36%;
    font-size: 0.16rem;
  }

  p {
    margin-left: 32%;
  }
}

.active {
  color: white;
  background-color: red;

  span {
    color: white;
  }

  p {
    color: white;
  }
}
.part
  width 100%
  height .04rem
  background-color #F7F7F7
.con
  position relative
  z-index 11
.monthcon1
  position absolute
  top .1rem
  width .36rem
  height .16rem
  margin-left .1rem
  text-align center
  line-height .16rem
  border-left .02rem solid #FF4338
  background-color white
.listshow
  display flex
  padding .1rem .1rem .1rem .54rem
.goodlist
  height auto
.imgcon
  display inline-block
  margin-right .1rem
  img 
   width .86rem
   height .86rem
.desccon
  display inline-block
  height 1.08rem
  width 68%
  position relative
.colorcon
  color #999999
  font-size .12rem
.pricecon
  width 30%
  float right
  color red
  text-align right
.datecon
  position absolute
  bottom 0
  font-size .12rem
  heihgt .2rem
</style>