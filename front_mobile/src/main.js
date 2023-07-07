import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
// import axios from 'axios';

Vue.use(Vant);

Vue.config.productionTip = false

// 配置全局axios
// Vue.prototype.$http = axios
// 配置统一url
// axios.defaults.baseURL = 'http://127.0.0.1:3000'
// 上面方式如果有不同的baseUrl没法复用，所有需要使用axios.create创建，写在request.js中封装


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
