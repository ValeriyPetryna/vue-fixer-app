<template>
  <section class="navbar">
    <section class="navbar-menu">
      <breadcrumbs class="navbar-menu" />
    </section>
    <section class="navbar-user">
      <div class="navbar-user__name">
        Faruh Bernandez
      </div>
      <span class="navbar-user__avatar">
        <img src="../assets/shape.svg">
      </span>
    </section>
  </section>
</template>

<script>
import breadcrumbs from './breadcrumbs';

export default {
  name: 'HeaderComponent',
  components: { breadcrumbs },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.search-page {
  margin: 0;
  display: flex;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
}

.content {
  width: 100%;
  background: #f8f9fb;
}

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
