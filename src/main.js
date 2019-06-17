// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import './assets/bootstrap-3.3.7-dist/js/bootstrap.min.js'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import 'animate.css'
import {WOW} from 'wowjs';
new WOW({live: false,offset: 5, }).init();
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
