import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';
import VueScrollmagic from 'vue-scrollmagic';
import VueTippy from "vue-tippy";
import VueClipboard from 'vue-clipboard2';
import titleMixin from '@/helpers/titleMixin.js';
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueSmoothScroll, {
  duration: 500,
  offset: 100,
  updateHistory: false,
})

Vue.mixin(titleMixin);
Vue.use(VueClipboard);
Vue.use(VueTippy);
Vue.use(VueScrollmagic)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
