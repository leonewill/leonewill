import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';
import VueScrollmagic from 'vue-scrollmagic';
import VueTippy from "vue-tippy";
import VueClipboard from 'vue-clipboard2';
import titleMixin from '@/helpers/titleMixin.js';
import VueSmoothScroll from 'vue2-smooth-scroll'
import VueI18n from 'vue-i18n';
import content from  '@/helpers/content.json'

// here
Vue.use(VueI18n)

const messages = content;

const lang = navigator.language;

function checkLang() {
  lang !== 'pt-BR' ? 'en' : 'pt';
}

checkLang()

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: lang, // set locale
  messages, // set locale messages
});

Vue.use(VueSmoothScroll, {
  duration: 500,
  offset: 100,
  updateHistory: false,
})

Vue.mixin(titleMixin);
Vue.use(VueClipboard);
Vue.use(VueTippy);
Vue.use(VueScrollmagic);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
