<template>
  <section class="navbar">
    <section class="navbar-menu">
      <breadcrumbs class="navbar-menu" />
    </section>
    <section class="navbar-user">
      <div class="navbar-user__name">
        <router-link to="/profile">
          {{ user.user.name + ' ' + user.user.surname }}
        </router-link>
      </div>

      <span class="navbar-user__avatar">
        <img src="../assets/shape.svg" />
      </span>
    </section>
  </section>
</template>

<script>
import breadcrumbs from './breadcrumbs';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user'))
    };
  },
  components: { breadcrumbs },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  display: flex;
  width: 100%;
  height: 60.94px;
  border-bottom: 1px solid #dae4f2;
}

.navbar-menu {
  display: inline-flex;
  align-items: center;
  padding-left: 40px;
}

.navbar-user {
  display: flex;
  margin-left: auto;
  line-height: 62px;
  margin-right: 100px;
  align-items: center;
}

.navbar-user__avatar {
  display: flex;
  padding: 10px;
}

.navbar-user__name {
  padding-right: 15px;
}
</style>
