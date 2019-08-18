<template>
  <div>
    <main class="wrapper">
      <nav class="navbar">
        <div class="logo-container">
          <img class="logo-container__image" src="../../../assets/myfixerlogo.svg" />
        </div>
        <div class="auth">
          <p class="auth__text">Do not have an account?</p>
          <a class="auth__link">
            <router-link to="/signup">Sign up</router-link>
          </a>
        </div>
      </nav>
      <div class="container">
        <div class="login-form">
          <h1 class="login-form__title">Sign in</h1>
          <form @submit.prevent="login">
            <div class="login-form__email">
              <input
                v-validate.continues="'required|email'"
                v-model="user.email"
                name="email"
                class="login-form__input"
                type="text"
                placeholder="Login"
              />
            </div>
            <span class="validation">{{ errors.first('email') }}</span>
            <div class="login-form__password">
              <input
                v-validate="'required|min:6'"
                v-model="user.password"
                class="login-form__input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <span class="validation">{{ errors.first('password') }}</span>
            <a class="login-form__link">Forgot password?</a>
            <button class="login-form__submit" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import api from '../../../shared/services/api.services';

export default {
  name: 'app',
  components: {},
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      this.$validator.validate().then(valid => {
        if (valid) {
          api
            .post('http://localhost:3000/api/auth/sign-in', this.user)
            .then(res => {
              if (!res.data.error) {
                const { data } = res;
                this.saveUser({
                  token: data.token,
                  user: data.user
                });
              }
            })
            .catch(err => {
              alert(`Form not submitted + ${err}`);
            });
        } else {
          this.$refs.emailInput.focus();
          this.valide.show = true;
        }
      });
    },
    saveUser(user) {
      localStorage.setItem('user', JSON.stringify(user));
      api.setHeader();
      this.$router.push('/signin');
    }
  }
};
</script>

<style scoped lang="css">
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
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
  cursor: pointer;
}

.login-form__link {
  text-align: right;
  display: block;
  margin-bottom: 15px;
}
.validation {
  color: red;
  display: flex;
  margin-bottom: 10px;
}
</style>
