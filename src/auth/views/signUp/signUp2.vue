<template>
  <div>
    <form>
      <main class="wrapper">
        <nav class="navbar">
          <div class="logo-container">
            <img
              class="logo-container__image"
              src="../../../assets/myfixerlogo.svg"
            >
          </div>
          <div class="auth">
            <p class="auth__text">
              Already have an account?
            </p>
            <a class="auth__link">
              <router-link to="/login">Log In</router-link>
            </a>
          </div>
        </nav>
        <div class="container">
          <form
            class="login-form"
            @submit.prevent="Second"
          >
            <h1 class="login-form__title">
              Complete your account
            </h1>
            <input
              ref="password"
              v-model="password"
              v-validate.continues="{ min: 6, regex: /[0-9]/ }"
              v-validate="'required'"
              class="login-form__input"
              type="password"
              placeholder="Create a password"
              name="password"
            >
            <password
              v-model="password"
              :strength-meter-only="true"
            />
            <span class="validation">{{ errors.first('password') }}</span>
            <input
              v-validate="'required|confirmed:password'"
              class="login-form__input"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
            >
            <span class="validation">{{ errors.first('confirmPassword') }}</span>
            <label class="checkbox">
              <div class="checkbox-text">
                <p class="auth__text">I agree to the myFixer.com</p>
                <a class="auth__link">Terms of Service </a>
              </div>
              <input
                id="checkTerms"
                ref="checkTerms"
                type="checkbox"
                checked="checked"
              ><span
                class="checkmark"
              />
            </label>
            <label class="checkbox">
              <div class="checkbox-text">
                <p class="auth__text">I agree to the myFixer.com</p>
                <a class="auth__link">Privacy Policy</a>
              </div>
              <input
                id="checkPolicy"
                ref="checkPolicy"
                type="checkbox"
                checked=""
              ><span
                class="checkmark"
              />
            </label>
            <img
              class="recaptcha"
              src="@/assets/recaptcha.svg"
            >
            <button
              class="login-form__submit"
              type="submit"
            >
              Done!
            </button>
          </form>
        </div>
      </main>
    </form>
  </div>
</template>

<script>
import Password from 'vue-password-strength-meter';
import api from '@/shared/services/api.services';

export default {
  name: 'SignUp2',
  components: { Password },
  data() {
    return {
      password: ''
    };
  },
  mounted() {
  },
  methods: {
    Second() {
      this.$validator.validate().then(valid => {
        if (valid && this.$refs.checkTerms.checked && this.$refs.checkPolicy.checked) {
          const user = JSON.parse(localStorage.getItem('registration'));

          user.password = this.password;
          api
            .post('/accounts/sign-up', user)
            .then(() => {
              localStorage.removeItem('registration');
              this.$router.push('/signup3');
            })
            .catch(err => {
              alert(err);
            });
        } else {
          console.log('err');
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
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

.validation {
  color: red;
  margin: 5px;
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

body {
  overflow: hidden;
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
.login-form__input--name {
  width: 49%;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  transition: 0.2s;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 25px;
  padding: 12px 14px;
}
.login-form__input--name:hover {
  border-left: 2px solid #2a74db;
}
.login-form__input:hover {
  border-left: 2px solid #2a74db;
}

.checkbox {
  display: flex;
  position: relative;
  padding-left: 35px;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 14px;
}
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkbox-text {
  display: flex;
  margin-top: 6px;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border: 1px solid grey;
}

.checkbox:hover input ~ .checkmark {
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  background-color: #0ad69c;
}

.checkbox input:checked ~ .checkmark {
  background-color: rgba(245, 247, 250, 0.5);
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #0ad69c;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.form-group__steps {
  display: flex;
  justify-content: space-between;
  margin: -20px 2px 25px 0;
}
.form-group__steps--item {
  height: 5px;
  width: 30%;
  background: #ebeff3;
  border-radius: 2px;
}
.form-group__steps--item.red {
  background: #ff6359;
  border-radius: 2px;
}
.form-group__steps--item.orange {
  background: #ffb966;
  border-radius: 2px;
}
.form-group__steps--item.green {
  background: #38ecac;
  border-radius: 2px;
}

.container-circle {
  position: fixed;
  left: 25%;
  width: 50%;
}
.container-circle__text {
  top: 60%;
  position: fixed;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
}
.container-circle__text--title {
  font-family: Exo 2;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #2a74db;
}
.Password__strength-meter {
  height: 30px;
}
</style>
