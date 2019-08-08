<template lang="en">
  <div id="app">
  <h1>Users</h1>
  <button v-on:click="fetchUsersName">GET</button>
  <p>{{users}}</p>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsersName() {
      const baseURI = 'http://localhost:3000/users';
      axios.get(baseURI)
        .then((result) => {
          this.users = result.data;
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
