import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入全局样式
import './assets/reset.css'
import 'vant/lib/index.css';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
