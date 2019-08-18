import Vue from 'vue';
import Router from 'vue-router';
import RegistrationComponent from './auth/views/signUp/signUp.vue';
import LoginComponent from './auth/views/signIn/Login.vue';
import SearchComponent from './search/views/searchPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        breadcrumb: [
          {
            name: 'About'
          }
        ]
      }
    },
    {
      path: '/aside',
      name: 'aside',
      component: () => import(/* webpackChunkName: "about" */ './components/aside.vue')
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
            path: '/login'
          });
        }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegistrationComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/search',
      name: 'search',
      component: SearchComponent,
      meta: {
        breadcrumb: [
          {
            name: 'search'
          }
        ]
      }
    },
    {
      path: '/search1',
      name: 'search1',
      component: SearchComponent,
      meta: {
        breadcrumb: [
          {
            name: 'search',
            link: 'search'
          },
          {
            name: 'search1'
          }
        ]
      }
    },
    {
      path: '/search2',
      name: 'search2',
      component: SearchComponent,
      meta: {
        breadcrumb: [
          {
            name: 'search',
            link: 'search'
          },
          {
            name: 'search1',
            link: 'search1'
          },
          {
            name: 'search2'
          }
        ]
      }
    }
  ]
});
