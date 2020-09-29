<template>
  <nav>
    <ul>
      <li>
        <div>
          <p>篮球</p>
          <span>纯白系列秒杀</span>
        </div>
        <div>
          <img
            src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
            alt
          />
        </div>
      </li>
      <li>
        <div>
          <p>跑步</p>
          <span>女王节秒杀</span>
        </div>
        <div>
          <img
            src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1"
            alt
          />
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <div>
          <p>健身</p>
          <span>布瑞特装备秒杀</span>
        </div>
        <div>
          <img
            src="http://shihuo.hupucdn.com/def/20170915/bb68abb51c246b30022b59e2a1321c7c1505460747.jpg?imageView2/0/w/160/h/160/interlace/1"
            alt
          />
        </div>
      </li>
      <li>
        <div>
          <p>足球</p>
          <span>其实是在吹总裁</span>
        </div>
        <div>
          <img
            src="http://shihuo.hupucdn.com/trade/reposition/2017-10-04/27812ca1b16a075e15f56a17686cbe95.png?imageView2/0/w/160/h/160/interlace/1"
            alt
          />
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <div>
          <p>潮流</p>
          <span>78元短袖秒杀</span>
        </div>
        <div>
          <img
            src="http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzL1RCMVVoVUtSVlhYWFhhTVhwWFhYWFhYWFhYWF8hITItaXRlbV9waWMucG5n?imageView2/0/w/160/h/160/interlace/1"
            alt
          />
        </div>
      </li>
      <li>
        <div>
          <p>数码</p>
          <span>2020年小强几岁了</span>
        </div>
        <div>
          <img
            src="http://shihuo.hupucdn.com/def/20180108/d46c35eb43ed513783e8db72e97e06a71515391268.jpg?imageView2/0/w/160/h/160/interlace/1"
            alt
          />
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {

};
</script>

<style lang="stylus" scoped>
nav 
    display flex
    flex-direction column
    height 1.9rem
    background-color #fff
    ul
        display flex
        height 33.333%
    
        li
            display flex
            width 50%
            height 100%
            padding .15rem
            border_1px(0 0 1px 1px,#f0f3f5)
            justify-content space-between
            align-items center
            div:nth-child(1)
                display flex
                flex-direction column
                p
                    font-size .14rem
                    color #333
                span 
                    font-size .11rem
                    color #666
            div:nth-child(2)
                width .525rem
                height .525rem
                img 
                    width 100%
                    height 100%
    & ul:nth-child(3)
        li
            border_1px(0 0 0 1px,#f0f3f5)
</style>