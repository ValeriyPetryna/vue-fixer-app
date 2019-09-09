<template>
  <div class="profile-page">
    <aside-component :active="active" />
    <section class="content">
      <header-component class="navbar" />
      <main class="page">
        <section class="account">
          <article class="avatar">
            <img
              class="photo"
              :src="profile.photo"
            >
            <div class="changephoto">
              <input
                id="file"
                ref="file"
                type="file"
                class="form__input--file"
              >
            </div>
          </article>
          <article class="infoblock">
            <div class="item">
              <p class="title">
                First name
              </p>
              <input
                id="name"
                v-model="profile.name"
                disabled="disabled"
                type="text"
                class="holder"
              >
            </div>
            <div class="item">
              <p class="title">
                Last name
              </p>
              <input
                id="name"
                v-model="profile.surname"
                disabled="disabled"
                type="text"
                class="holder"
              >
            </div>
            <div class="item">
              <p class="title">
                Email
              </p>
              <input
                id="name"
                v-model="profile.email"
                disabled="disabled"
                type="text"
                class="holder"
              >
            </div>
            <div class="item">
              <p class="title">
                Stack
              </p>
              <input
                id="name"
                v-model="profile.stack"
                disabled="disabled"
                type="text"
                class="holder"
              >
            </div>
            <div class="item">
              <p class="title">
                Phone number
              </p>
              <input
                id="name"
                v-model="profile.mobile"
                disabled="disabled"
                type="text"
                class="holder"
              >
            </div>
          </article>
        </section>
      </main>
    </section>
  </div>
</template>






<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';
import api from '../../shared/services/api.services';

export default {
  components: {
    asideComponent,
    headerComponent
  },
  // name: "personal",
  data() {
    return {
      active: {
        search: true
      },
      profile: {}
    };
  },
  mounted() {
    api.init('http://localhost:3000/');
    api.get(`/search/profile${this.$route.params.id}`).then(res => {
      this.profile = res.data.profile;
    });
  }
  //   methods:{
  //   }
};
</script>

<style scoped lang="scss">
.profile-page {
  display: flex;
  width: 100%;
}

.personal-page {
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
  min-width: 30%;
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
    white-space: nowrap;
    color: #ccd0dc;
    text-decoration: none;
  }
}

.account {
  display: flex;
  margin-top: 50px;
  width: 90%;
  flex-wrap: wrap;
}

.infoblock {
  display: flex;
  flex-direction: column;
}

.avatar {
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
}

.photo {
  height: 350px;
  width: auto;
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
  height: 44px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
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
.form__input--file {
  display: none;
}
@media (max-width: 1024px) {
  .avatar,
  .infoblock,
  .personal-page,
  .holder {
    width: 100% !important;
  }
  .account {
    width: calc(100% - 150px) !important;
  }
}
</style>