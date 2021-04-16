import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';
import VueScrollmagic from 'vue-scrollmagic';

Vue.use(VueScrollmagic)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
