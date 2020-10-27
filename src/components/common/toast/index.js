import Toast from "./Toast.vue"

const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);

  // new出一个组件对象
  const toast = new toastConstructor()

  //将组件对象挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //将挂载的div追加到body中
  document.body.appendChild(toast.$el)

  //在Vue原型中添加toast
  Vue.prototype.$toast = toast;
}

export default obj
