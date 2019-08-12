<template>
  <div>
    <div class="panel">
      <form @submit.prevent="login">
        <div class="field">
          <div class="control">
            <input v-model="user.email" class="input is-primary"
             type="email" placeholder="Email" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input v-model="user.password" class="input is-info"
             type="text" placeholder="Password" />
          </div>
        </div>
        <button type="submit" class="button is-primary">LOGIN</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/shared/services/api.services'

export default {
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
      setTimeout(() => {
        this.saveUser({
          token: 'asdaskmdoisamdiua78dya78sd',
          user: {
            firstName: 'Vasya',
            lastName: 'Pupkin',
            photo: '',
          },
        });
      }, 2000);
    },
    saveUser(user) {
      localStorage.setItem('user', JSON.stringify(user));
      api.init('');
      api.setHeader();
      this.$router.push('/signin');
    },
  },
};
</script>
