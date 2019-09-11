<template>
  <main class="wrapper">
    <nav class="navbar">
      <div class="logo-container">
        <img class="logo-container__image" src="@/assets/myfixerlogo.svg" />
      </div>
      <div class="auth">
        <p class="auth__text">
          Already have an account?
        </p>
        <a class="auth__link"><router-link to="/login">Log In</router-link></a>
      </div>
    </nav>
    <div class="container-circle">
      <img class="container-circle" src="@/assets/Group.svg" />
    </div>
    <div class="container-circle__text">
      <p class="container-circle__text--title">
        You are almost ready to go!
      </p>
      <p class="auth__text">
        Please check your email to activate your account
      </p>
    </div>
  </main>
</template>

<script>
import api from '@/shared/services/api.services';

export default {
  name: 'SIgnUp3',
  data() {
    return {
      user: {
        name: '',
        surname: '',
        username: '',
        email: '',
      },
    };
  },
  created() {
    setTimeout(() => this.$router.push({ path: '/login' }), 1000);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  background: #f9fafc;
}

.navbar {
  padding-top: 20px;
  position: relative;
  display: flex;
}

.logo-container__image {
  width: 138px;
  margin-left: 140px;
}

.auth {
  margin-top: 10px;
  display: inherit;
  position: absolute;
  right: 137px;
  &__text {
    margin: 0;
    padding: 0;
  }
  &__link {
    font-weight: bold;
    padding-left: 10px;
    color: #002396;
    cursor: pointer;
  }
}

.container-circle {
  position: fixed;
  left: 25%;
  width: 50%;
  &__text {
    top: 60%;
    position: fixed;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    &--title {
      font-family: Exo 2;
      font-style: normal;
      font-weight: 600;
      font-size: 50px;
      line-height: 60px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #2a74db;
    }
  }
}
</style>
