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
          <form class="login-form" @submit.prevent="FirstStage">
            <h1 class="login-form__title">
              Sign up
            </h1>
            <div class="fullname">
              <input v-model="user.name" v-validate="'required'" class="login-form__input" type="text" placeholder="First name" name="name" />
              <span class="validation">{{ errors.first('name') }}</span>
              <input v-model="user.surname" v-validate="'required'" class="login-form__input right" type="text" placeholder="Last name" name="surname" />
              <span class="validation">{{ errors.first('surname') }}</span>
            </div>

            <input v-model="user.username" v-validate="'required'" class="login-form__input" type="text" placeholder="Username" name="username" />
            <span class="validation">{{ errors.first('username') }}</span>
            <input
              v-model="user.email"
              v-validate="{
                required: true,
                regex: /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/,
              }"
              class="login-form__input"
              type="text"
              placeholder="E-mail"
              name="email"
            />
            <span class="validation">{{ errors.first('email') }}</span>
            <button class="login-form__submit" type="submit">
              Get started
            </button>
          </form>
        </div>
      </main>
    </form>
  </div>
</template>

<script>
import api from '@/shared/services/api.services';
import Notifications from 'vue-notification';

export default {
  data() {
    return {
      user: {
        name: '',
        surname: '',
        username: '',
        email: '',
        fullname: '',
      },
    };
  },
  mounted() {},
  methods: {
    FirstStage() {
      this.$validator.validate().then(valid => {
        if (!valid) {
          this.show('auth', 'warn', 'Form is not valid! Fix it, please! ');
        } else {
          this.user.fullname = '' + `${this.user.name} ${this.user.surname}`;
          api
            .get(`/users?email=${this.user.email}`)
            .then(res => {
              if (res.data.users.length == 0) {
                localStorage.setItem('registration', JSON.stringify(this.user));
                this.$router.push('/signup2');
              } else {
                this.show('auth', 'error', 'This mail is busy! Please, choose another one! ');
              }
            })
            .catch(err => {
              alert(err);
            });
        }
      });
    },
    saveUser(user) {
      localStorage.setItem('userData', JSON.stringify(user));
      api.setHeader();
      this.$router.push('/search');
    },
    show(group, type = '', text) {
      this.$notify({
        group,
        title: `This is ${type} notification: `,
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
</style>
