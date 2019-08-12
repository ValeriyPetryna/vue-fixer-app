<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/signup">Signup</router-link>|
      <router-link to="/login">Login</router-link>
      <router-link to="/registration">reg</router-link>
      <router-link to="/signin">SIgnin</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import api from "./shared/services/api.services";
export default {
  // mounted: function () {
  //   api.init('https')
  // }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
