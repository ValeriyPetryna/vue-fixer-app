<template>
  <div class="sidebar">
    <aside class="sidebar-logo">
      <div @click="logout">
        <img class="image" src="../assets/Logo.svg" />
      </div>
    </aside>
    <aside class="sidebar-tools">
      <router-link class="sidebar-tools__item" :class="{ active: active.search }" to="/search">
        <img src="../assets/find.svg" />
      </router-link>

      <router-link class="sidebar-tools__item" :class="{ active: active.user }" to="/profile">
        <img src="../assets/user.svg" />
      </router-link>

      <router-link class="sidebar-tools__item" :class="{ active: active.messenger }" to="/messenger">
        <img src="../assets/messages.svg" />
      </router-link>

      <router-link class="sidebar-tools__item" :class="{ active: active.calendar }" to="/calendar">
        <img src="../assets/icon-3.svg" />
      </router-link>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'AsideComponent',
  props: {
    active: Object,
  },
  computed: {},
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  height: 100vh;
  background: #01134e;
  width: 80px;
  position: absolute;
}

.sidebar-logo {
  width: 35px;
  height: 35px;
  margin: 18px auto;
}

.sidebar-tools {
  margin-top: 100px;
  display: grid;
}

.sidebar-tools__item {
  width: 100%;
  height: 50px;
  margin: 0px 0px 40px 0px;
  img {
    position: relative;
    left: 35%;
    top: 28%;
    height: 20px;
  }
  &.active {
    display: flex;
    border-left: 4px solid #0ad69c;
    img {
      position: relative;
      left: 30%;
      top: 28%;
      height: 20px;
    }
  }
}
</style>
