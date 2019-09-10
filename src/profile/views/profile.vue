<template>
  <div class="profile-page">
    <aside-component :active="active" />
    <section class="content">
      <header-component class="navbar" />
      <main class="page">
        <section class="infopage">
          <article class="information" :class="{ active: active.personal }">
            <p @click="switchComponent">
              PERSONAL INFORMATION
            </p>
          </article>
          <article class="information" :class="{ active: active.account }">
            <p @click="switchComponent">
              ACCOUNT INFORMATION
            </p>
          </article>
        </section>
        <personal-component v-if="active.personal" />
        <account-component v-if="active.account" />
      </main>
    </section>
  </div>
</template>

<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';
import accountComponent from '../components/accountComponent';
import personalComponent from '../components/personalComponent';
import api from '../../shared/services/api.services';

export default {
  name: 'Profile',
  components: { asideComponent, headerComponent, accountComponent, personalComponent },
  data() {
    return {
      active: {
        user: true,
        account: false,
        personal: true,
      },
      user: JSON.parse(localStorage.getItem('user')),
    };
  },
  mounted() {
    // api.init()
    // api.setHeader();
  },
  methods: {
    switchComponent() {
      this.active.account = !this.active.account;
      this.active.personal = !this.active.personal;
    },
  },
};
</script>

<style scoped lang="scss">
.profile-page {
  display: flex;
  width: 100%;
  height: 100% !important;
}

.page {
  flex-direction: column;
  width: calc(100% - 400px);
  padding: 40px 40px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06);
  box-sizing: content-box;
}

.infopage {
  width: 100%;
  display: flex;
  align-items: center;
}

.information {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50px;
  box-shadow: inset 0 -2px 0 0 #e9e9e9;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  &.active {
    box-shadow: inset 0 -2px 0 0 #2a74db;
    a {
      color: #01134e;
      text-decoration: none;
    }
  }
  a {
    color: #ccd0dc;
    text-decoration: none;
  }
}

.infoblock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.avatar {
  display: flex;
  flex-direction: column;
  width: 130px;
}

.photo {
  height: 130px;
  width: 130px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.item-left {
  margin-left: 80px;
}

.changephoto {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.title {
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  color: #546087;
  margin-bottom: 0;
}

.mobile-prefix {
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.country {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  height: 40px;
  border: 2px solid #f2f2f2;
  border-radius: 4px;
  background-color: #fcfcfc;
  padding: 0 13px;
  margin-top: 4px;
  input {
    display: flex;
    align-items: center;
    width: 180px;
    padding: 0 13px;
    border: 2px solid #f2f2f2;
    border-radius: 4px;
    background-color: #fcfcfc;
  }
}

.holder {
  border: 2px solid #f2f2f2;
  border-radius: 4px;
  background-color: #fcfcfc;
  margin-top: 4px;
  width: 280px;
  line-height: 40px;
  padding: 0 13px;
}

.holderchoose {
  background-image: url('../../assets/Location.svg');
  background-position: 10px 10px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 40px;
  margin-top: 4px;
  line-height: 40px;
  padding: 0 13px;
  border: 2px solid #f2f2f2;
  border-radius: 4px;
  text-indent: 1.5em;
}

#right {
  width: 77%;
  margin-left: 20px;
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
</style>
