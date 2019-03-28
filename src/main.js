import Vue from 'vue'
import App from './App.vue'
import router from '@/router/'
import store from './store'
import ElementUI from 'element-ui'
import Methods from '@/server/'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'
Vue.use(ElementUI)
Vue.use(Methods)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
