// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

//引入axios
import axios from "axios"

axios.defaults.headers ={
  "Content-Type":"application/json;charset=UTF-8",
  "Access-Control-Allow-Methods": "*"
}

axios.defaults.baseURL = "http://140.143.186.207:8091";//设置初始URL

axios.defaults.withCredentials=true;  // 跨域携带cookie

//挂在在vue的原型上
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
