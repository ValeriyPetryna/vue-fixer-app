<template>
  <div class="search-page">
    <aside-component :active="active" />
    <section class="content">
      <header-component />
      <main class="page">
        <div class="page-table">
          <div class="page-table__search"></div>
          <div class="page-table"></div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';

export default {
  name: 'Search',
  components: { asideComponent, headerComponent },
  data() {
    return {
      active: {}
    };
  },
  methods: {}
};
</script>

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

.page {
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(153, 163, 174, 0.06);
  border-radius: 4px;
  margin: 62px 124px 0px 142px;
  height: 72vh;
  padding: 41px 61px 0px 44px;
}
.page::-webkit-scrollbar {
  width: 6px;
  background: #f5f7fa;
  mix-blend-mode: normal;
  border-radius: 4px;
  margin: 6px;
}
.page::-webkit-scrollbar-thumb {
  background-color: #e0e6f0;
  border-radius: 4px;
}

::-webkit-scrollbar-button {
  background-image: url('');
  background-repeat: no-repeat;
  height: 0;
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: #ecedee;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0;
  background-color: #dadada;
  border-radius: 0;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #dadada;
}

::-webkit-resizer {
  background-image: url('');
  background-repeat: no-repeat;
  height: 0;
  width: 4px;
}

::-webkit-scrollbar {
  width: 4px;
}
</style>
