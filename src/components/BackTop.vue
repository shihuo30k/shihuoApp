<template>
    <div class="scroll-top" v-if="btnFlag" @click="backTop">
        <img src="http://sh1.hoopchina.com.cn/images/trademobile/daigou/top.png" alt="">
    </div>
</template>
<script>
    export default {
        data(){
            return {
                btnFlag:false,
                scrollTop:0
            }
        },
        mounted(){
            window.addEventListener('scroll', this.scrollToTop,true)
        },
        destroyed(){
            window.removeEventListener('scroll', this.scrollToTop,true)
        },
        methods: {
            backTop(){
                let ids = setInterval(() => {
                    let el = document.querySelector('.list')
                    let speed = Math.floor(-this.scrollTop / 7)
                    el.scrollTop =  this.scrollTop + speed
                    if(this.scrollTop === 0) clearInterval(ids)
                },16)
            },
            scrollToTop(){
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop || document.querySelector('.list').scrollTop
                if(this.scrollTop > 100){
                    this.btnFlag = true
                }else{
                    this.btnFlag = false
                }
                console.log(this.scrollTop)
            }
        },
    }
</script>
<style lang='stylus' scoped>
.scroll-top
    position: fixed;
    bottom: .5rem;
    right: 10px;
    // display: none;
    z-index: 10;
    img 
        width .4rem
</style>