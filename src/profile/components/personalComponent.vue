<template>
  <main class="personal-page">
    <notifications group="update" :duration="3000" position="top center" />
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
        <div class="item mobile">
          <p class="title">
            Mobile Phone
          </p>

          <div class="number">
            <VuePhoneNumberInput id="mobile" v-model="userData.mobile" type="text" @change="updateMobile(onUpdate)" />
          </div>
        </div>
        <div class="item">
          <p class="title">
            DailyRate
          </p>
          <input id="dailyRate" v-model="userData.dailyRate" type="number" class="holder" @change="updateData($event)" />
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
import Notifications from 'vue-notification';
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
          this.show('update', 'error', 'Failed. Check your network connection!');
          console.log(err);
        });
      }, 500);
      this.show('update', 'success', 'Your mobile was successfully updated!');
    },
    updatePhoto(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.set('photo', file);
      api.put('/accounts/photo', formData).catch(err =>{
        this.show('update', 'error', 'Failed. Check your network connection!');
        console.log(err);
      }).then(res => {
        this.profile.photo = res.data.photo;
      });
      this.show('update', 'success', 'Your profile photo was successfully updated!');
    },
    updateData(event) {
      const timer = setTimeout(() => {
        api.put('/accounts/profile', this.userData).catch(err => {
          this.show('update', 'error', 'Failed. Check your network connection!');
          console.log(err);
        });
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.show('update', 'success', 'Your profile information was successfully updated!');
      }, 1000);
    },
    show(group, type = '', text) {
      this.$notify({
        group,
        title: `This is ${type} notification: `,
        text,
        type,
      });
    },
    clean(group) {
      this.$notify({ group, clean: true });
    },
  },
};
</script>

<style scoped lang="scss">
@import './../../shared/styles/vue-phone-number-input.css';
@import './../../shared/styles/responsive.scss';

.account {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  width: 90%;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @include max('tablet-wide') {
    width: calc(100% - 150px) !important;
    margin-left: 5px;
    margin-top: 40px;
  }
  @include max('tablet') {
    margin-left: 5px;
    margin-top: 0;
  }
  @include max('phone') {
    margin-top: 0;
  }
}

.infoblock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include max('tablet-wide') {
    width: 45%;
    justify-content: end;
  }
  @include max('tablet') {
    width: 40%;
    justify-content: end;
  }
  @include max('tablet-wide') {
    width: 100%;
  }
}

.avatar {
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
  @include max('tablet-wide') {
    width: 100%;
  }
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
  @include max('tablet') {
    margin-left: 0;
  }
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
  @include max('tablet-wide') {
    width: 100%;
  }
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

.form__input--file {
  display: none;
}

.mobile {
  width: 90%;
  @include max('tablet') {
    width: 100%;
  }
}
</style>