<template>
  <div class="search-page">
    <aside-component :active="active" />
    <section class="content">
      <header-component />
      <div class="page">
        <form class="search">
          <div class="search-filters">
            <p class="search-filters__text">
              Location
            </p>
            <img
              class="search-filters__location"
              src="../../assets/Location.svg"
            >
            <select class="search-filters__dropdown">
              <option />
            </select>
          </div>
          <div class="search-filters">
            <p class="search-filters__text">
              SEARCH
            </p>
            <input
              class="search-filters__dropdown"
              type="text"
              placeholder="Type..."
            >
          </div>
          <div class="search-filters">
            <p class="search-filters__text">
              CATEGORY
            </p>
            <select class="search-filters__dropdown">
              <option>Subcategory</option>
            </select>
          </div>
          <div class="search-filters">
            <p class="search-filters__text">
              SERVICE
            </p>
            <select class="search-filters__dropdown">
              <option>3 services</option>
            </select>
          </div>
          <div class="search-filters">
            <p class="search-filters__text">
              PERIOD
            </p>
            <input
              class="search-filters__dropdown"
              placeholder="11/01/19 - 14/01/19"
            >
          </div>
          <button class="search-filters__button">
            SEARCH
          </button>
        </form>
        <div class="results">
          <google-map />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GoogleMap from '../components/map';
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';

export default {
  name: 'GoogleMaps',
  components: {
    asideComponent,
    headerComponent,
    GoogleMap
  },
  data() {
    return {
      active: {
        search: true
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.search-page {
  display: flex;
  margin: 0;
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

.search {
  display: flex;
  flex-direction: column;
  margin-right: 3.5%;
  width: 21%;
}

.search-filters {
  width: 100%;
}

.search-filters__text {
  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #546087;
}

.search-filters__location {
  position: absolute;
  margin-top: 11px;
  margin-left: 5px;
}

.search-filters__dropdown {
  background: #fcfcfc;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 40px;
  padding-left: 14px;
  margin-bottom: 24px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    background-color: #fff;
    border-left: 2px solid #2a74db;
  }
}

.search-filters__button {
  width: 100%;
  height: 42px;
  background: #0ad69c;
  border-radius: 2px;
  font-size: 16px;
  font-family: 'Exo 2', sans-serif;
  color: #fff;
  border: none;
  cursor: pointer;
}

.results {
  display: flex;
  flex-direction: column;
  width: 74%;
  margin-left: 3.5%;
  height: 100%;
  margin: 0 5%;
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
  &:hover {
    background-color: #dadada;
  }
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