// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview'  //引入ivew库
import 'iview/dist/styles/iview.css'  // 使用 CSS
import echarts from 'echarts'

import './css/iconfont.css'



Vue.use(iView);
Vue.use(VueAxios, axios);
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
