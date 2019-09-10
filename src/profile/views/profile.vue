<template>
  <div class="profile-page">
    <aside-component :active="active" />
    <section class="content">
      <header-component class="navbar" />
      <main class="page">
        <section class="infopage">
          <article class="information" :class="{ active: active.personal }">
            <p @click="switchComponent">
              PERSONAL INFORMATION
            </p>
          </article>
          <article class="information" :class="{ active: active.account }">
            <p @click="switchComponent">
              ACCOUNT INFORMATION
            </p>
          </article>
        </section>
        <personal-component v-if="active.personal" />
        <account-component v-if="active.account" />
      </main>
    </section>
  </div>
</template>

<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';
import accountComponent from '../components/accountComponent';
import personalComponent from '../components/personalComponent';
import api from '../../shared/services/api.services';

export default {
  name: 'Profile',
  components: { asideComponent, headerComponent, accountComponent, personalComponent },
  data() {
    return {
      active: {
        user: true,
        account: false,
        personal: true,
      },
      user: JSON.parse(localStorage.getItem('user')),
    };
  },
  mounted() {
    
  },
  methods: {
    switchComponent() {
      this.active.account = !this.active.account;
      this.active.personal = !this.active.personal;
    },
  },
};
</script>

<style scoped lang="scss">

.page {
  flex-direction: column;
  width: calc(100% - 400px);
  padding: 40px 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06);
  box-sizing: content-box;
}

.infopage {
  width: 100%;
  display: flex;
  align-items: center;
}

.information {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50px;
  box-shadow: inset 0 -2px 0 0 #e9e9e9;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  &.active {
    box-shadow: inset 0 -2px 0 0 #2a74db;
    a {
      color: #01134e;
      text-decoration: none;
    }
  }
  a {
    color: #ccd0dc;
    text-decoration: none;
  }
}

</style>
