<template>
  <div class="views">
    <aside-component :active="active" />
    <section class="content">
      <header-component />
      <main>
        <div class="page">
          <div class="table">
            <v-app id="inspire">
              <v-data-table
                :headers="headers"
                :items="users"
                :total-items="users.length"
                rows-per-page-items="5"
                hide-action
                item-key="fistName"
              >
                <template
                  slot="items"
                  slot-scope="props"
                >
                  <tr>
                    <td>{{ props.item.firstName }}</td>
                    <td>{{ format(props.item.lastName) }}</td>
                    <td>{{ props.item.country }}</td>
                  </tr>
                </template>
              </v-data-table>
            </v-app>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';
import dataTable from '../components/dataTable';

export default {
  el: '#app',
  components: {
    asideComponent,
    headerComponent
  },
  data: () => ({
    headers: [
      {
        text: 'FIRST NAME',
        value: 'firstName',
        align: 'left',
        sortable: true
      },
      {
        text: 'LAST NAME',
        value: 'lastName',
        sortable: true
      },
      { text: 'COUNTRY', value: 'country' },
      { text: 'STATUS', value: 'status' },
      { text: 'LEVEL', value: 'level' },
      { text: 'E-MAIL', value: 'email' }
    ],
    users: [
      {
        firstName: 'RIchard',
        lastName: 'Tompson',
        country: 'Australia',
        status: 'requested',
        level: 1,
        email: 'vasya@pupkin.com'
      },
      {
        firstName: 'Vasya',
        lastName: 'Tompson',
        country: 'Australia',
        status: 'requested',
        level: 2,
        email: 'vasya@pupkin.com'
      },
      {
        firstName: 'Vasya',
        lastName: 'Tompson',
        country: 'Australia',
        status: 'requested',
        level: 2,
        email: 'vasya@pupkin.com'
      },
      {
        firstName: 'Vasya',
        lastName: 'Tompson',
        country: 'Australia',
        status: 'true',
        level: 3,
        email: 'vasya@pupkin.com'
      }
    ],
    active: {
      calendar: true
    }
  })
};
</script>

<style scoped lang="css">
.views {
  margin: 0;
  display: flex;
  overflow: hidden;
}
.table {
  width: 100%;
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
