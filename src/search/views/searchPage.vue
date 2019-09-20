<template>
  <div class="views">
    <aside-component :active="active" />
    <section class="content">
      <header-component />
      <main>
        <div class="page">
          <form-component :workers="workers" @filteredArray="filtered" />
          <div class="results">
            <p @click="switchComponent">
              {{ showContent }}
            </p>
            <div v-if="active.map">
              <google-map />
            </div>
            <div v-if="!active.map" class="workers">
              <worker-component v-for="worker in workers" :key="worker._id" :worker="worker" />
            </div>
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
import GoogleMap from '../components/map';
import workerComponent from '../components/workerComponent';
import api from '../../shared/services/api.services';

export default {
  name: 'Search',
  // props: {
  //   data: Array,
  // },
  components: {
    asideComponent,
    headerComponent,
    formComponent,
    GoogleMap,
    workerComponent,
  },
  data() {
    return {
      active: {
        search: true,
        map: false,
      },
      search: '',
      filteredAr: [],
      workers: undefined,
      data: [],
    };
  },
  computed: {
    showContent() {
      if (!this.active.map) {
        return 'SHOW MAP';
      }
      return 'SHOW RESULTS';
    },
  },
  mounted() {
    api.get(`/search/workers`).then(res => {
      this.workers = res.data.allUsers;
    });
  },
  methods: {
    switchComponent() {
      this.active.map = !this.active.map; 
    },
    filtered(data) {
      this.workers = data.data; // TODO: add lazy load, add loading
    },
  },
};
</script>

<style scoped lang="scss">
@import './../../shared/styles/responsive.scss';

.views {
  overflow-x: hidden !important;
}
.content {
  overflow-x: hidden !important;
  overflow-y: scroll;
}
.results {
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-left: 3.5%;
  height: 100%;
  margin: 0 5%;
   @include max('phone') {
  margin: 0 !important;
  width: 85%;
  }
}
.page {
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(153, 163, 174, 0.06);
  border-radius: 4px;
  margin: 62px 124px 0px 142px;
  height: 72vh;
  padding: 41px 61px 0px 44px;
  @include max('phone') {
  margin: 0 !important;
  }
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
.workers {
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  justify-content: space-between;
  overflow: auto;
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
  background-color: #86f508;
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
