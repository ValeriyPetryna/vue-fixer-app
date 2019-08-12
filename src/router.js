import Vue from 'vue';
import Router from 'vue-router';
import SignIn from './views/SignIn.vue';
import RegistrationComponent from './auth/views/registration.vue';
import LoginComponent from './auth/views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
      beforeEnter(to, from, next) {
        if (localStorage.getItem('user') && to.fullPath === '/login') {
          next();
        } else {
          next({
            path: '/login',
          });
        }
      },
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationComponent,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent,
    },
  ],
});
