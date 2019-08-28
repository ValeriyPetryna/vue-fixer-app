<template>
  <div class="views">
    <aside-component :active="active" />
    <section class="content">
      <header-component />
      <main>
        <div class="page">
          <form-component />
          <div class="results">
            <p @click="switchComponent">
              {{ showContent }}
            </p>
            <search-component v-if="!active.map" />
            <google-map v-if="active.map" />
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';
import formComponent from '../components/formComponent';
import searchComponent from '../components/searchComponent';
import GoogleMap from '../components/map';

export default {
  name: 'Search',
  components: { asideComponent, headerComponent, formComponent, searchComponent, GoogleMap },
  data() {
    return {
      active: {
        search: true,
        map: false
      }
    };
  },
  computed: {
    showContent() {
      if (!this.active.map) {
        return 'SHOW MAP';
      } 
        return 'SHOW RESULTS';
      
    }
  },
  methods: {
    switchComponent() {
      this.active.map = !this.active.map;
    }
  }
};
</script>

<style scoped lang="scss">
.views {
  display: flex;
  margin: 0;
}
.results {
  display: flex;
  flex-direction: column;
  width: 74%;
  margin-left: 3.5%;
  height: 100%;
  margin: 0 5%;
}
.page {
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(153, 163, 174, 0.06);
  border-radius: 4px;
  margin: 62px 124px 0px 142px;
  height: 72vh;
  padding: 41px 61px 0px 44px;
  &::-webkit-scrollbar {
    width: 6px;
    background: #f5f7fa;
    mix-blend-mode: normal;
    border-radius: 4px;
    margin: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e0e6f0;
    border-radius: 4px;
  }
}
</style>
