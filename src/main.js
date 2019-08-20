import Vue from 'vue';
import Axios from 'axios';
import VeeValidate from 'vee-validate';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.use(VeeValidate);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBNSRoMIfBJuZnYuCui18cCjKtKc0K-2rQ',
    libraries: 'places'
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
