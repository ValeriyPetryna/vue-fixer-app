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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      beforeEnter(to, from, next) {
        if (localStorage.getItem('user')) {
          next();
        } else {
          next({
            path: '/login',
          });
        }
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegistrationComponent,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent,
    },
  ],
});
