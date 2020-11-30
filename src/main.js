import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#7e191d',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
