<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import api from './shared/services/api.services';

export default {
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
  },
  beforeCreate() {
    // api.init('http://3.13.50.233');
    api.init('http://localhost:3000');
  },
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
.profile-page {
  display: flex;
  width: 100%;
  height: 100%;
}
.personal-page {
  flex-direction: column;
  width: calc(100% - 400px);
  padding: 40px 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06);
  box-sizing: content-box;
}

#app {
  width: 100%;
  height: 100vh;
}
@media (max-width: 1024px) {
  .page {
    width: 100% !important;
    margin: 20px 0 0 20px !important;
    flex-wrap: wrap;
    overflow-x: hidden;
    height: 100% !important;
    padding: 0 0 0 60px !important;
  }
}
.views {
  display: flex;
  overflow: hidden !important;
  height: 100%;
  margin: 0;
}
</style>
