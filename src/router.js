import Vue from 'vue';
import Router from 'vue-router';
import RegistrationComponent from './auth/views/signUp/signUp.vue';
import SignUp2Component from './auth/views/signUp/signUp2.vue';
import SignUp3Component from './auth/views/signUp/signUp3.vue';
import LoginComponent from './auth/views/signIn/Login.vue';
import SearchComponent from './search/views/searchPage.vue';
import ProfileComponent from './profile/views/profile.vue';
import MessengerComponent from './messenger/views/messenger.vue';
import SearchProfile from './search/views/getProfile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/signup', name: 'signup', component: RegistrationComponent },
    { path: '/signup2', name: 'signup2', component: SignUp2Component },
    { path: '/signup3', name: 'signup3', component: SignUp3Component },
    //{ path: '/admin', name: 'admin', component: ManageUsersComponent, meta: { breadcrumb: [{ name: 'Home' }, { name: 'Manage users' }] } },
    { path: '/login', name: 'login', component: LoginComponent },
    { path: '/search/profile/:id', component: SearchProfile },
    {
      path: '/search',
      name: 'search',
      component: SearchComponent,
      meta: {
        breadcrumb: [{ name: 'Home', link: '/profile' }, { name: 'Search', link: '/search' }, { name: 'Results', link: '/search' }],
      },
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
      path: '/profile',
      name: 'profile',
      component: ProfileComponent,
      meta: {
        breadcrumb: [{ name: 'Home' }, { name: 'My profile', link: '/profile' }],
      },
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
      path: '/messenger',
      name: 'messenger',
      component: MessengerComponent,
      meta: {
        breadcrumb: [{ name: 'Home', link: '/profile' }, { name: 'Network', link: '/search' }],
      },
    },
  ],
});
