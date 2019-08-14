import Vue from 'vue';
import Axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
