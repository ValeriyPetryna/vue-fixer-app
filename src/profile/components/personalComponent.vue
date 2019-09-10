<template>
  <main class="personal-page">
    <section class="account">
      <article class="avatar">
        <img class="photo" :src="userData.photo" />
        <div class="changephoto">
          <img src="../../assets/Pen.svg" />
          <label for="file" href="#">Change photo</label>
          <input id="file" ref="file" type="file" class="form__input--file" @change="updatePhoto($event)" />
        </div>
      </article>
      <article class="infoblock">
        <div class="item">
          <p class="title">
            First name
          </p>
          <input id="name" v-model="userData.name" type="text" class="holder" @change="updateData($event)" />
        </div>
        <div class="item">
          <p class="title">
            Title
          </p>

          <select v-model="userData.gender" class="holder input" @change="updateData">
            <option :selected="userData.gender == 'Mr'">
              Mr
            </option>
            <option :selected="userData.gender == 'Ms'">
              Ms
            </option>
          </select>
        </div>
        <div class="item">
          <p class="title">
            Stack
          </p>

          <select v-model="userData.stack" class="holder input" @change="updateData">
            <option :selected="userData.stack == 'Front-end'">
              Front-end
            </option>
            <option :selected="userData.stack == 'Back-end'">
              Back-end
            </option>
          </select>
        </div>
        <div class="item">
          <p class="title">
            DailyRate
          </p>
          <input id="dailyRate" v-model="userData.dailyRate" type="number" class="holder" @change="updateData($event)" />
        </div>
        <div class="item">
          <p class="title">
            Country
          </p>
          <input id="country" v-model="userData.country" type="text" class="holder" @change="updateData($event)" />
        </div>
      </article>
      <article class="infoblock">
        <div class="item">
          <p class="title">
            Last name
          </p>
          <form action>
            <input id="surname" v-model="userData.surname" type="text" class="holder" @change="updateData($event)" />
          </form>
        </div>
        <div class="item">
          <p class="title">
            Mobile Phone
          </p>

          <div class="number">
            <VuePhoneNumberInput id="mobile" v-model="userData.mobile" type="text" @change="updateMobile(onUpdate)" />
          </div>
        </div>

        <div class="item">
          <p class="title">
            Company
          </p>
          <input id="company" v-model="userData.company" type="text" class="holder" @change="updateData($event)" />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import api from '../../shared/services/api.services';

export default {
  name: 'PersonalComponent',
  components: { VuePhoneNumberInput },
  data() {
    return {
      active: {
        user: true,
      },
      mobile: {},
      fullMobile: {},
      userData: {},
      user: JSON.parse(localStorage.getItem('user')),
    };
  },
  mounted() {
    api.init('http://localhost:3000/');
    api.setHeader();
    api.get('/accounts/profile').then(res => {
      this.userData = res.data.user;
    });
  },
  methods: {
    updateMobile() {
      const prefix = document.getElementById('mobile_country_selector').value;
      const number = document.getElementById('mobile_phone_number').value;
      this.fullMobile.full = prefix;
      this.userData.mobile = number;
      const timer = setTimeout(() => {
        api.put('/accounts/profile', this.userData.mobile).catch(err => {
          alert(err);
        });
      }, 500);
    },
    updatePhoto(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.set('photo', file);
      api.put('/accounts/photo', formData).then(res => {
        this.profile.photo = res.data.photo;
      });
    },
    updateData(event) {
      const timer = setTimeout(() => {
        api.put('/accounts/profile', this.userData).catch(err => {
          alert(err);
        });
        localStorage.setItem('userData', JSON.stringify(this.userData));
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
@import './vue-phone-number-input.css';
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
  justify-content: space-between;
  width: 90%;
  flex-wrap: wrap;
}

.infoblock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.avatar {
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
}

.photo {
  height: 136px;
  width: 136px;
  border-radius: 50%;
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