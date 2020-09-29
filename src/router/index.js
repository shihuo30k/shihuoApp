import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@v/home/Home'

const routes = [
    {
        path:'/',
        name:'home',
        component:Home,
        redirect:'/index',
        children:[
            {
                path:'index',
                name:'index',
                component:() => import(/*webpackChunkName:"index"*/'@v/home/index/Index.vue'),
            },
            

            {
                path:'coupon',
                name:'coupon',
                component:() => import(/*webpackChunkName:"coupon"*/'@v/home/coupon/Coupon.vue')
            },
            {
                path:'find',
                name:'find',
                component:() => import(/*webpackChunkName:"find"*/'@v/home/find/Find.vue')
            },
            {
                path:'equip',
                name:'equip',
                component:() => import(/*webpackChunkName:"equip"*/'@v/home/equip/Equip.vue')
            },
            {
                path:'more',
                name:'more',
                component:() => import(/*webpackChunkName:"more"*/'@v/home/more/More.vue')
            },
        ]
    },
    {
        path:'/search',
        name:'search',
        component:() => import(/*webpackChunkName:"MiddleLeft"*/'@v/home/index/Search.vue'),
    },
    {
        path:'/search_result',
        name:'search_result',
        component:() => import(/*webpackChunkName:"MiddleLeft"*/'@v/home/index/SearchResult.vue'),
        props:route => ({query:route.query.keywords})
    },
    {
        path:'/youhui',
        name:'youhui',
        component:() => import(/*webpackChunkName:"MiddleLeft"*/'@v/home/index/MiddleLeft.vue'),
    },
    {
        path:'/tuangou',
        name:'tuangou',
        component:() => import(/*webpackChunkName:"MiddleCenter"*/'@v/home/index/MiddleCenter.vue'),
    },
    {
        path:'/choujiang',
        name:'choujiang',
        component:() => import(/*webpackChunkName:"MiddleRight"*/'@v/home/index/MiddleRight.vue'),
    },
]

const router = new VueRouter({
    mode:'hash',
    routes
})

export default router