import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@v/home/Home'

import DiscoverEvaluating from '@v/home/discover/DiscoverEvaluating.vue'
import ColumnDetails from "@v/home/discover/column/columndetails/ColumnDetails.vue"

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
                path: 'hot-search/:brand',
                name: 'hot-search',
                component: () => import(/* webpackChunkName: "hot-search" */ '@v/home/preferential/hotSearch/HotSearch.vue')
            },
               
            {
                path:'preferential',
                name:'preferential',
                component:() => import(/*webpackChunkName:"coupon"*/'@v/home/preferential/Preferential.vue'),
                redirect: '/preferential/selected',
                children: [
        
                    {
                      path: 'selected',
                      name: 'selected',
                      component: () => import(/* webpackChunkName: "selected" */ '@v/home/preferential/Selected.vue')
                    },
                    {
                      path: 'shoe',
                      name: 'shoe',
                      component: () => import(/* webpackChunkName: "shoe" */ '@v/home/preferential/Shoe.vue')
                    },
                    {
                     path: 'clothes',
                     name: 'clothes',
                     component: () => import(/* webpackChunkName: "clothes" */ '@v/home/preferential/Clothes.vue')
                   },
                   {
                    path: 'digital',
                    name: 'digital',
                    component: () => import(/* webpackChunkName: "digital" */ '@v/home/preferential/Digital.vue')
                  },
                  {
                   path: 'interest',
                   name: 'interest',
                   component: () => import(/* webpackChunkName: "interest" */ '@v/home/preferential/Interest.vue')
                 }
               ]  
            },

            {
                path: 'details',
                name: 'details',
                component: () => import(/* webpackChunkName: "details" */ '@v/home/preferential/Details.vue')
              },
                {
                path: 'daily-special',
                name: 'daily-special',
                component: () => import(/* webpackChunkName: "daily-special" */ '@v/home/preferential/DailySpecial.vue'),
    
              },
            {
              path: 'search-volume',
              name: 'search-volume',
              component: () => import(/* webpackChunkName: "search-volume" */ '@v/home/preferential/SearchVolume.vue')
            },

            {
                path:'discover',
                name:'discover',
                component:() => import(/*webpackChunkName:"find"*/'@v/home/discover/Discover.vue'),
                redirect:"/discover/recommend",
                children:[
                    {
                        path:'/discover/:id',
                        component:DiscoverEvaluating,
                    },
                ]
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

    /* discover-start */
    {
        //discover众测
        path:'/eva',
        name:'eva',
        component:()=>import(
            /*webpackChunkName="eva" */
            '@v/home/discover/evaluation/Evaluation.vue'
        )
    },
    {
        //discover栏目
        path:'/column',
        name:'column',
        component:()=>import(
            /*webpackChunkName="column" */
            '@v/home/discover/column/Column.vue'
        ),
    },
    {
        path:'/column/:id',
        component:ColumnDetails
     },
    {
        //discover最新
        path:'/newest',
        name:'newest',
        component:()=>import(
            /*webpackChunkName="newest" */
            '@v/home/discover/newest/Newest.vue'
        )
    },
    {
        //discover最热
        path:'/hottest',
        name:'hottest',
        component:()=>import(
            /*webpackChunkName="hottest" */
            '@v/home/discover/hottest/Hottest.vue'
        )
    },

    /* discover-end */

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
    // {
    //     path:'/youhui',
    //     name:'youhui',
    //     component:() => import(/*webpackChunkName:"MiddleLeft"*/'@v/home/index/MiddleLeft.vue'),
    // },
    {
        path:'/tuangou',
        name:'tuangou',
        component:() => import(/*webpackChunkName:"MiddleTuangou"*/'@v/home/index/indexMiddleComp/MiddleTuangou'),
    },
    {
        path:'/choujiang',
        name:'choujiang',
        component:() => import(/*webpackChunkName:"MiddleChoujiang"*/'@v/home/index/indexMiddleComp/MiddleChoujiang.vue'),
    },
]

const router = new VueRouter({
    mode:'hash',
    routes
})

export default router