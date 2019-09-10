<template>
  <form class="form" method="GET">
    <div class="search">
      <div class="search-filters">
        <p class="search-filters__text">
          Location
        </p>
        <img class="search-filters__location" src="../../assets/Location.svg" />
        <select v-model="itemSearch.country" class="search-filters__dropdown">
          <option selected="selected">Uganda</option>
          <option>USA</option>
          <option>Ukraine</option>
        </select>
      </div>
      <div class="search-filters">
        <p class="search-filters__text">
          SEARCH
        </p>
        <input ref="nameInput" v-model="itemSearch.name" class="search-filters__dropdown" placeholder="Enter name" name="name" />
      </div>

      <div class="search-filters">
        <p class="search-filters__text">
          CATEGORY
        </p>
        <select v-model="itemSearch.stack" class="search-filters__dropdown" name="category">
          <option v-for="stack in categories" :key="stack.name" :value="stack.name">
            {{ stack.name }}
          </option>
        </select>
      </div>
      <div class="search-filters">
        <p class="search-filters__text">
          SERVICE
        </p>
        <select class="search-filters__dropdown">
          <option selected="selected">3 services </option>
        </select>
      </div>
      <div class="search-filters">
        <p class="search-filters__text">
          PERIOD
        </p>
        <input class="search-filters__dropdown" type="date" placeholder="11/01/19 - 14/01/19" />
      </div>
    </div>
    <div class="category__radio">
      <input id="price" v-model="itemSearch.sort" type="radio"  value="dailyRate" />
      <label for="price">by price</label>
      <input id="rating" v-model="itemSearch.sort" type="radio"  value="rating" checked />
      <label for="rating">by rating</label>
    </div>
    <div>
      <button class="search-filters__button" @click.prevent="searchFunc()">
        SEARCH
      </button>
    </div>
  </form>
</template>


<script>
import api from '../../shared/services/api.services';

export default {
  name: 'FormComponent',
  data() {
    return {
      test: [],
      search: '',
      itemSearch: {
        name: '',
        stack: '',
        country: '',
        sort: '',
      },
      categories: [{ name: 'Front-end' }, { name: 'Back-end' }],
      active: {
        search: true,
      },
      data: [],
    };
  },
  computed: {
    filteredList() {
      return this.workers.filter(worker => {
        return worker.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    searchFunc() {
      api.post('/search/workers', this.itemSearch).then(res => {
        this.test = res.data.sortedArray;
        this.$emit('filteredArray', {
          data: this.test,
        });
      });
    },
  },
};
</script>



<style scoped lang="scss">
.form {
  display: flex;
  width: 29%;
  margin-top: 40px;
  margin-left: 45px;
  flex-wrap: wrap;
  flex-direction: column;
  border-right: 1px solid #e7eaf5;
  box-shadow: 20px 0px 20px -15px rgba(85, 85, 85, 0.25);
}
@media (max-width: 1024px) {
  .form {
    width: 100%;
  }
}
.search {
  display: flex;
  flex-direction: column;
  margin-right: 3.5%;
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

.img-date {
  left: 19px;
  position: absolute;
  top: 27px;
}
</style>