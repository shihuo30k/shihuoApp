import Vue from 'vue'
import Vuex, {Store} from 'vuex'

Vue.use(Vuex)

const store = new Store({
    state:{
        cartType:'',
        channelType:''
    },

    mutations:{
        setCartType(state,cType){
            state.cartType = cType
            // console.log(state.cartType)
        },
        setChannelType(state,channelType){
            state.channelType = channelType
            // console.log(state.channelType)
        }
    },

    actions:{
        changeCartType({commit},cartType){
            commit('setCartType',cartType)
        },
        changeChannelType({commit},channelType){
            commit('setChannelType',channelType)
        },
    }
})

export default store