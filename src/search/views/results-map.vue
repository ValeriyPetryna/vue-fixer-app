<template>
  <div class="search-page">
    <aside-component :active="active" />
    <section class="content">
      <header-component />
      <div class="page">
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
// .search-page {
//   display: flex;
//   margin: 0;
// }

// .page {
//   display: flex;
//   background: #ffffff;
//   box-shadow: 0px 0px 30px rgba(153, 163, 174, 0.06);
//   border-radius: 4px;
//   margin: 62px 124px 0px 142px;
//   height: 72vh;
//   padding: 41px 61px 0px 44px;
//   &::-webkit-scrollbar {
//     width: 6px;
//     background: #f5f7fa;
//     mix-blend-mode: normal;
//     border-radius: 4px;
//     margin: 6px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: #e0e6f0;
//     border-radius: 4px;
//   }
// }

// ::-webkit-scrollbar-button {
//   background-image: url('');
//   background-repeat: no-repeat;
//   height: 0;
//   width: 5px;
// }

// ::-webkit-scrollbar-track {
//   background-color: #ecedee;
// }

// ::-webkit-scrollbar-thumb {
//   -webkit-border-radius: 0;
//   background-color: #dadada;
//   border-radius: 0;
//   &:hover {
//     background-color: #dadada;
//   }
// }

// ::-webkit-resizer {
//   background-image: url('');
//   background-repeat: no-repeat;
//   height: 0;
//   width: 4px;
// }

// ::-webkit-scrollbar {
//   width: 4px;
// }
</style>