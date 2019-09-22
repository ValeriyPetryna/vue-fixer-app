<template>
  <div>
    <notifications group="auth" :duration="5000" position="top center" />
    <form>
      <main class="wrapper">
        <nav class="navbar">
          <div class="logo-container">
            <img class="logo-container__image" src="../../../assets/myfixerlogo.svg" />
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
          <form class="login-form" @submit.prevent="secondStep">
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
            />
            <password v-model="password" :strength-meter-only="true" />
            <a class="validation">{{ errors.first('password') }}</a>
            <input v-validate="'required|confirmed:password'" class="login-form__input" type="password" placeholder="Confirm password" name="confirmPassword" />
            <span class="validation">{{ errors.first('confirmPassword') }}</span>
            <label class="checkbox">
              <div class="checkbox-text">
                <p class="auth__text">I agree to the myFixer.com</p>
                <a class="auth__link">Terms of Service </a>
              </div>
              <input id="checkTerms" ref="checkTerms" type="checkbox" checked="checked" /><span class="checkmark" />
            </label>
            <label class="checkbox">
              <div class="checkbox-text">
                <p class="auth__text">I agree to the myFixer.com</p>
                <a class="auth__link">Privacy Policy</a>
              </div>
              <input id="checkPolicy" ref="checkPolicy" type="checkbox" checked="" /><span class="checkmark" />
            </label>
            <img class="recaptcha" src="@/assets/recaptcha.svg" />
            <button class="login-form__submit" type="submit">
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
import Notifications from 'vue-notification';
import api from '@/shared/services/api.services';

export default {
  name: 'SignUp2',
  components: { Password },
  data() {
    return {
      password: '',
    };
  },
  mounted() {},
  methods: {
    secondStep() {
      this.$validator.validate().then(valid => {
        if (valid && this.$refs.checkTerms.checked && this.$refs.checkPolicy.checked) {
          const user = JSON.parse(localStorage.getItem('registration'));

          user.password = this.password;
          console.log(this.user)
          api
            .post('/users', user)
            .then(() => {
              localStorage.removeItem('registration');
              this.$router.push('/signup3');
            })
            .catch(err => {
              alert(err);
            });
        } else {
          this.show('auth', 'error', 'Check Terms of Service or Privacy policy! ');
        }
      });
    },
    show(group, type = '', text) {
      this.$notify({
        group,
        title: `This form is not valid! `,
        text,
        type,
      });
    },
    clean(group) {
      this.$notify({ group, clean: true });
    },
  },
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

.container {
  width: 632px;
  background: #fff;
  margin: 50px auto;
  box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);
  border-radius: 10px;
  @include max('tablet') {
    width: 100%;
    margin: 0 auto;
  }
}

.login-form {
  padding: 80px 116px;
  margin-top: 100px;
  @include max('tablet') {
    padding: 15% 15%;
    margin-top: 50px;
  }
  @include max('phone') {
    padding: 25% 5%;
    margin-top: 25px;
  }
  @include max('phone') {
    padding: 10% 5%;
    margin-top: 20px;
  }
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.4px;
    color: #002396;
    @include max('phone') {
      font-size: 24px;
      text-align: center;
    }
  }
  &__input {
    width: 100%;
    margin-bottom: 25px;
    padding: 12px 14px;
    border: 2px solid #f2f2f2;
    border-radius: 2px;
    transition: 0.2s;
    box-sizing: border-box;
    outline: none;
    &--name {
      width: 49%;
      border: 2px solid #f2f2f2;
      border-radius: 2px;
      transition: 0.2s;
      box-sizing: border-box;
      outline: none;
      margin-bottom: 25px;
      padding: 12px 14px;
      &:hover {
        border-left: 2px solid #2a74db;
      }
    }
    &:hover {
      border-left: 2px solid #2a74db;
    }
  }
  &__submit {
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
  &__link {
    text-align: right;
    display: block;
    margin-bottom: 15px;
  }
}
.validation {
  color: red;
  display: flex;
  margin-bottom: 10px;
}

.right {
  margin-left: 25px;
}
.fullname {
  display: flex;
  @include max('phone') {
    flex-direction: column;
    .right {
      margin: 0 0 25px 0;
    }
  }
}

.checkbox {
  display: flex;
  position: relative;
  padding-left: 35px;
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 14px;
  &-text {
    display: flex;
    margin-top: 6px;
  }
}
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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

.Password__strength-meter {
  height: 30px;
}
</style>
