import Vue from 'vue';
import Router from 'vue-router';
import RegistrationComponent from './auth/views/signUp/signUp.vue';
import LoginComponent from './auth/views/signIn/Login.vue';
import SearchComponent from './search/views/searchPage.vue';
import SearchMapComponent from './search/views/results-map.vue';
import AccountInfoComponent from './profile/views/accountInfo.vue';
import PersonalInfoComponent from './profile/views/personalInfo.vue';
import ManageUsersComponent from './admin/views/manageUsers.vue';
import MessengerComponent from './messenger/views/messenger.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: RegistrationComponent
    },
    {
      path: '/admin',
      name: 'admin',
      component: ManageUsersComponent,
      meta: {
        breadcrumb: [
          {
            name: 'Home'
          },
          {
            name: 'Manage users'
          }
        ]
      }
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
            name: 'Home'
          },
          {
            name: 'Search'
          },
          {
            name: 'Results'
          }
        ]
      }
    },
    {
      path: '/search-map',
      name: 'search-map',
      component: SearchMapComponent,
      meta: {
        breadcrumb: [
          {
            name: 'Home'
          },
          {
            name: 'Search'
          },
          {
            name: 'Results'
          }
        ]
      }
    },
    {
      path: '/profile/account',
      name: 'account',
      component: AccountInfoComponent,
      meta: {
        breadcrumb: [
          {
            name: 'Home'
          },
          {
            name: 'My profile'
          }
        ]
      }
    },
    {
      path: '/profile/personal',
      name: 'personal',
      component: PersonalInfoComponent,
      meta: {
        breadcrumb: [
          {
            name: 'Home'
          },
          {
            name: 'My profile'
          }
        ]
      }
    },
    {
      path: '/messenger',
      name: 'messenger',
      component: MessengerComponent,
      meta: {
        breadcrumb: [
          {
            name: 'Home',
            link: 'search'
          },
          {
            name: 'Network'
          }
        ]
      }
    }
  ]
});
