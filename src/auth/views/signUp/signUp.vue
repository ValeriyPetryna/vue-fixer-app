<template>
  <div>
    <form @submit.prevent="login" method="get">
      <main class="wrapper">
        <nav class="navbar">
          <div class="logo-container">
            <img class="logo-container__image" src="../../../assets/myfixerlogo.svg" />
          </div>
          <div class="auth">
            <p class="auth__text">Already have an account?</p>
            <a class="auth__link">
              <router-link to="/login">Log In</router-link>
            </a>
          </div>
        </nav>
        <div class="container">
          <form class="login-form">
            <h1 class="login-form__title">Sign up</h1>
            <div class="fullname">
              <input class="login-form__input" type="text" placeholder="First name" />
              <input class="login-form__input right" type="text" placeholder="Last name" />
            </div>

            <input class="login-form__input" type="text" placeholder="Username" />
            <input class="login-form__input" type="text" placeholder="E-mail" />
            <button class="login-form__submit" type="submit">Get started</button>
          </form>
        </div>
      </main>
    </form>
  </div>
</template>

<script>
import api from "@/shared/services/api.services";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      setTimeout(() => {
        this.saveUser({
          token: "asdaskmdoisamdiua78dya78sd",
          user: {
            firstName: "Vasya",
            lastName: "Pupkin",
            photo: ""
          }
        });
      }, 2000);
    },
    saveUser(user) {
      localStorage.setItem("user", JSON.stringify(user));
      api.init("https://swapi.co/api");
      api.setHeader();
      this.$router.push("/signin");
    }
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto";
}

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
}

.auth__text {
  margin: 0;
  padding: 0;
}

.auth__link {
  font-weight: bold;
  padding-left: 10px;
  color: #002396;
  cursor: pointer;
}

.container {
  max-width: 632px;
  background: #fff;
  margin: 50px auto;
  box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);
  border-radius: 10px;
}

.login-form {
  padding: 80px 116px;
  margin-top: 100px;
}

.login-form__title {
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.4px;
  color: #002396;
}

.login-form__input {
  width: 100%;
  margin-bottom: 25px;
  padding: 12px 14px;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  transition: 0.2s;
  box-sizing: border-box;
  outline: none;
}
.login-form__input:hover {
  border-left: 2px solid #2a74db;
}

.login-form__submit {
  margin-left: auto;
  margin-right: 0;
  display: block;
  background: #0ad69c;
  border-radius: 2px;
  border: none;
  outline: none;
  padding: 12px 44px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}

.login-form__link {
  text-align: right;
  display: block;
  margin-bottom: 15px;
}

.right {
  margin-left: 25px;
}

.login-form__input {
  width: 99.5%;
  margin-bottom: 25px;
  padding: 12px 14px;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  transition: 0.2s;
  box-sizing: border-box;
  outline: none;
}
.fullname {
  display: flex;
}
.login-form__input--name:hover {
  border-left: 2px solid #2a74db;
}
.login-form__input:hover {
  border-left: 2px solid #2a74db;
}


</style>
