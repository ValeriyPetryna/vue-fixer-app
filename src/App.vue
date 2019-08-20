<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import api from './shared/services/api.services';

export default {
  computed: {},
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }
  // mounted: function () {
  //   api.init('https')
  // api key: AIzaSyBNSRoMIfBJuZnYuCui18cCjKtKc0K-2rQ
  // }
};
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
}

.page {
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(153, 163, 174, 0.06);
  border-radius: 4px;
  margin: 62px 124px 0px 142px;
  height: 72vh;
  padding: 41px 61px 0px 44px;
  box-sizing: content-box;
}

.content {
  width: 100%;
  background: #f8f9fb;
}

#app {
  width: 100% !important;
}
.views {
  display: flex;
}
</style>
