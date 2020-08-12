import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'assets/iconfont/icon.css'
import 'assets/iconfont/font.js'

//添加事件总线
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
