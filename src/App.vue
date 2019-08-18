<template>
  <div id="app">
    <router-view></router-view>
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
  // }
};
</script>
<style lang="sass">
</style>
