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
        path:'/evamore',
        name:'evamore',
        component:()=>import(
            /*webpackChunkName="evamore" */
            '@v/home/discover/evaluation/evaluationmore/EvaluationMore.vue'
        )  
    },
    {
        path:'/hottalk/:id',
        name:'hottalk',
        component:()=>import(
            /*webpackChunkName="hottalk" */
            '@v/home/discover/hottalkclick/HotTalkClick.vue'
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
        path:'/hottest/:id',
        name:'hottest',
        component:()=>import(
            /*webpackChunkName="hottest" */
            '@v/home/discover/hottest/Hottest.vue'
        )
    },
    {
        //discover最热
        path:'/det',
        name:'det',
        component:()=>import(
            /*webpackChunkName="det" */
            '@v/home/discover/evaluation/evaluationdetails/EvaluationDetails'
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

    //首页团购
    {
        path:'/tuangou',
        name:'tuangou',
        component:() => import(/*webpackChunkName:"MiddleTuangou"*/'@v/home/index/indexMiddleComp/MiddleTuangou'),
    },

    //首页抽奖
    {
        path:'/choujiang',
        name:'choujiang',
        component:() => import(/*webpackChunkName:"MiddleChoujiang"*/'@v/home/index/indexMiddleComp/MiddleChoujiang.vue'),
    },

    //首页详情页
    {
        path:'/index_detail/:good_id',
        name:'index_detail',
        component:() => import(/*webpackChunkName:"index_detail"*/'@v/home/detail/IndexDetail.vue')
    },

    //首页金刚区
        //篮球路由
    {
        path:'/basketball',
        name:'basketball',
        component:() => import(/*webpackChunkName:"basketball"*/'@v/home/indexNavComp/Basketball.vue')
    },
    {
        path:'/running',
        name:'running',
        component:() => import(/*webpackChunkName:"running"*/'@v/home/indexNavComp/Running.vue')
    },
    {
        path:'/fitness',
        name:'fitness',
        component:() => import(/*webpackChunkName:"fitness"*/'@v/home/indexNavComp/Fitness.vue')
    },
    {
        path:'/football',
        name:'football',
        component:() => import(/*webpackChunkName:"football"*/'@v/home/indexNavComp/Football.vue')
    },
    {
        path:'/freestyle',
        name:'freestyle',
        component:() => import(/*webpackChunkName:"freestyle"*/'@v/home/indexNavComp/Freestyle.vue')
    },
    {
        path:'/digital',
        name:'index_digital',
        component:() => import(/*webpackChunkName:"digital"*/'@v/home/indexNavComp/Digital.vue')
    },
]

const router = new VueRouter({
    mode:'hash',
    routes
})

export default router