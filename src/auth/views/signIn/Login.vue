<template>
  <div>
    <notifications group="auth" :duration="5000" position="top center" />
    <main class="wrapper">
      <nav class="navbar">
        <div class="logo-container">
          <img class="logo-container__image" src="../../../assets/myfixerlogo.svg" />
        </div>
        <div class="auth">
          <p class="auth__text">
            Do not have an account?
          </p>
          <a class="auth__link">
            <router-link to="/signup">Sign up</router-link>
          </a>
        </div>
      </nav>
      <div class="container">
        <div class="login-form">
          <h1 class="login-form__title">
            Sign in
          </h1>
          <form @submit.prevent="login">
            <div class="login-form__email">
              <input v-model="user.email" v-validate.continues="'required|email'" name="email" class="login-form__input" type="text" placeholder="Login" />
            </div>
            <span class="validation">{{ errors.first('email') }}</span>
            <div class="login-form__password">
              <input v-model="user.password" v-validate="'required|min:6'" class="login-form__input" type="password" name="password" placeholder="Password" />
            </div>
            <span class="validation">{{ errors.first('password') }}</span>
            <a class="login-form__link">Forgot password?</a>
            <button class="login-form__submit" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import api from '../../../shared/services/api.services';
import Notifications from 'vue-notification';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$validator.validate().then(valid => {
        if (valid) {
          api
            .post('/login', this.user)
            .then(res => {
              if (!res.data.error) {
                const { data } = res;
                this.show('auth', 'success', '', `Hello,  ${data.user.gender}  ${data.user.name}`);
                this.saveUser({
                  token: data.token,
                  user: { _id: data.user.id, name: data.user.name, surname: data.user.surname, photo:data.user.photo, gender: data.user.gender},
                });
              } else {
                this.show('auth', 'warn', 'Check your login / password again! ', `This is warning notification: `);
              }
            })
            .catch(err => {
              alert(`Login error + ${err}`);
            });
        } else {
          alert(err);
        }
      });
    },
    saveUser(user) {
      localStorage.setItem('userData', JSON.stringify(user));
      api.setHeader();
      setTimeout(() => this.$router.push({ path: '/search' }), 2000);
    },
    show(group, type = '', text, title) {
      this.$notify({
        group,
        title,
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
  @include max('phone') {
    height: 100%;
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
  &__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.4px;
    color: #002396;
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
</style>

<style lang="css">
.notifications {
  display: block;
  position: fixed;
  z-index: 5000;
}
.notification-wrapper {
  display: block;
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}
.notification-title {
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  font-style: italic;
  border-bottom: 1px solid rgb(104, 25, 25);
}
.vue-notification-template {
  background: #fff;
}
.vue-notification,
.vue-notification-template {
  display: block;
  box-sizing: border-box;
  text-align: left;
}
.vue-notification {
  font-size: 12px;
  padding: 8px;
  margin: 0 5px 5px;
  color: #fff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
.vue-notification.warn {
  background: #1e1bc9;
  border-left-color: #270d86;
}
.vue-notification.error {
  background: #9c3535;
  border-left-color: #b82e24;
}
.vue-notification.success {
  background: rgb(2, 189, 12);
  border-left-color: #42a85f;
}
.vn-fade-enter-active,
.vn-fade-leave-active,
.vn-fade-move {
  transition: all 0.5s;
}
.vn-fade-enter,
.vn-fade-leave-to {
  opacity: 0;
}
</style>