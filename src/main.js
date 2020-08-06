import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'assets/iconfont/icon.css'
import 'assets/iconfont/font.js'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
