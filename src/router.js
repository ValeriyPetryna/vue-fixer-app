import Vue from 'vue';
import Router from 'vue-router';
import RegistrationComponent from './auth/views/signUp/signUp.vue';
import LoginComponent from './auth/views/signIn/Login.vue';
import SearchComponent from './search/views/searchPage.vue';
import AccountInfoComponent from './profile/views/accountInfo.vue';
import PersonalInfoComponent from './profile/views/personalInfo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
    {
      path: '/search',
      name: 'search',
      component: SearchComponent,
      meta: {
        breadcrumb: [
          {
            name: 'Home',
          },
          {
            name: 'Search',
          },
          {
            name: 'Results',
          },
        ],
      },
    },
    {
      path: '/profile/account',
      name: 'account',
      component: AccountInfoComponent,
      meta: {
        breadcrumb: [
          {
            name: 'Home',
          },
          {
            name: 'My profile',
          },
        ],
      },
    },
    {
      path: '/profile/personal',
      name: 'personal',
      component: PersonalInfoComponent,
      meta: {
        breadcrumb: [
          {
            name: 'Home',
          },
          {
            name: 'My profile',
          },
        ],
      },
    },
    {
      path: '/search2',
      name: 'search2',
      component: SearchComponent,
      meta: {
        breadcrumb: [
          {
            name: 'search',
            link: 'search',
          },
          {
            name: 'search1',
            link: 'search1',
          },
          {
            name: 'search2',
          },
        ],
      },
    },
  ],
});
