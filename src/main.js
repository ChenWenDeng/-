// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import VueLazyLoad from 'vue-lazyload'  //图片懒加载

import { pca, pcaa } from 'area-data'; // v5 or higher
import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage';
 

import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueAreaLinkage);
Vue.use(ElementUI);
Vue.use(VueLazyLoad,{
	loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545674875170&di=a9245dc3fb7f2a7350ba8916ce8a296e&imgtype=0&src=http%3A%2F%2Fwww.internetke.com%2Fuploads%2Fallimg%2F150114%2F1-1501142133230-L.gif'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
