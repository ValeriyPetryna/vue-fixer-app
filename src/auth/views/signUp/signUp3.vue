<template>
  <main class="wrapper">
    <nav class="navbar">
      <div class="logo-container">
        <img src="@/assets/myfixerlogo.svg" />
      </div>
      <div class="auth">
        <p class="auth__text">
          Already have an account?
        </p>
        <a class="auth__link"><router-link to="/login">Log In</router-link></a>
      </div>
    </nav>
    <div class="container-circle">
      <img class="container-circle__img" src="@/assets/Group.svg" />
    </div>
    <div class="container-circle__text">
      <p class="container-circle__text--title">
        You are almost ready to go!
      </p>
      <p class="container-circle__text--info">
        Please check your email to activate your account
      </p>
    </div>
  </main>
</template>

<script>
import api from '@/shared/services/api.services';

export default {
  name: 'SignUp3',
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
@import './../../../shared/styles/responsive.scss';

.wrapper {
  height: 100vh;
  background: #f9fafc;
}

.navbar {
  padding-top: 20px;
  position: relative;
  display: flex;
}

.logo-container {
  margin-left: 7%;
}

.auth {
  margin-top: 10px;
  position: absolute;
  right: 7%;
  display: flex;

  &__text {
    margin: 0;
    padding: 0;
    @include max('phone') {
      display: none;
    }
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
  width: 100%;
  text-align: center;
  &__img {
    @include max('tablet') {
      margin-top: 30%;
      text-align: center;
      width: 100%;
    }
  }
  &__text {
    top: 60%;
    position: fixed;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    @include max('tablet-wide') {
      font-size: 20px;
      font-weight: 300;
    }
    @include max('phone') {
      top: 50%;
    }
    &--title {
      font-family: Exo 2;
      font-style: normal;
      font-weight: 600;
      font-size: 50px;
      line-height: 60px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #2a74db;
      @include max('tablet-wide') {
        font-size: 40px;
      }
    }
  }
}
</style>
