import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'assets/iconfont/icon.css'
import 'assets/iconfont/font.js'

import toast from "components/common/toast"

//添加事件总线
Vue.prototype.$bus = new Vue()

Vue.use(toast)
//解决移动端300ms延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false);
}

Vue.use(VueLazyload)
// Vue.use(VueLazyload, {
//     loading: 'common/img/default.png'
// })


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
