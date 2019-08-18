<template>
  <section class="sidebar">
    <aside class="sidebar-logo">
      <div>
        <img
          class="image"
          src="../assets/logo.svg"
        >
      </div>
    </aside>
    <aside class="sidebar-tools">
      <a class="sidebar-tools__item">
        <img src="../assets/Vector.svg">
      </a>
      <a class="sidebar-tools__item">
        <img src="../assets/myprofile.svg">
      </a>
      <a class="sidebar-tools__item">
        <img src="../assets/handyman-tools.svg">
      </a>
      <a class="sidebar-tools__item">
        <img src="../assets/team-2.svg">
      </a>
      <a class="sidebar-tools__item active">
        <img src="../assets/messages.svg">
      </a>
    </aside>
  </section>
</template>

<script>
export default {
  name: 'Aside',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto&display=swap);
.sidebar {
  height: 100vh;
  background: #01134e;
  width: 80px;
  position: fixed;
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
}
.sidebar-tools__item img {
  position: relative;
  left: 35%;
  top: 28%;
}
.sidebar-tools__item.active {
  display: flex;
  border-left: 4px solid #0ad69c;
  height: 65px;
}
.sidebar-tools__item.active img {
  position: relative;
  left: 30%;
  top: 28%;
  height: 20px;
}
</style>
