// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './vuex/index.js'
import iView from 'iview'
import BScorll from 'better-scroll'
import './common/index.styl'
import 'iview/dist/styles/iview.css';
import './mytheme/index.less';
import './filter/index.js'
import './baseUrl.js'
Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render:h=>h(App),
  created:function(){
    router.push({path:'/Login'})
  },
  mounted:function(){
  	document.body.addEventListener('touchstart', function () { });//移动端实现button:active
    //fastclick 消除click 300ms延迟
	if ('addEventListener' in document) {
	    document.addEventListener('DOMContentLoaded', function() {
	        FastClick.attach(document.body);
	    }, false);
	}
  }

})
