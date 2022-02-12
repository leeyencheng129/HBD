import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './route/route.js';
import VuePageTransition from 'vue-page-transition'
import VueYoutube from 'vue-youtube'
import VueAudio from 'vue-audio';
import './styles/UI-theme/index.css'


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VuePageTransition);
Vue.use(VueYoutube);
Vue.use(VueAudio);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');

