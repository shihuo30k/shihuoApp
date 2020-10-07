import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import {BRAND, CATE, ORDER, SEX, COMMING, KEY} from './mutationsTypes'

Vue.use(Vuex)

const store = new Store({
    state:{
        cartType:'',
        channelType:'',
        brand:'',
        category:'',
        order:'rank',
        sex:'',
        coming:'0',
        key:''
    },

    mutations:{
        setCartType(state,cType){
            state.cartType = cType
            // console.log(state.cartType)
        },
        setChannelType(state,channelType){
            state.channelType = channelType
            // console.log(state.channelType)
        },
        [BRAND](state, val){
            state.brand = val
        },
        [CATE](state, val){
            state.category = ''
        },
        [ORDER](state, val){
            // console.log(val)
            state.order = val
        },
        [SEX](state, val){
            state.sex = val
        },
        [COMMING](state, val){
            state.coming = val
        },
        [KEY](){

        },
    },

    actions:{
        changeCartType({commit},cartType){
            commit('setCartType',cartType)
        },
        changeChannelType({commit},channelType){
            commit('setChannelType',channelType)
        },
        changeBrand({commit}, val){
            commit(BRAND, val)
        },
        changeCate({commit}, val){
            commit(CATE, val)
        },
        changeOrder({commit}, val){
            commit(ORDER, val)
        },
        changeSex({commit}, val){
            commit(SEX, val)
        },
        changeComming({commit}, val){
            commit(COMMING, val)
        },
        changeKey({commit}, val){

        },
    }
})

export default store