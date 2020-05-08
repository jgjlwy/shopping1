import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Myjs from './common/js/myjs.js'

//引入公共css
import '../static/css/reset.css'
import './common/css/css.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  Myjs
}).$mount('#app')
