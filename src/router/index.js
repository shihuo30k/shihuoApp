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