<template>
  <section class="account">
    <article class="infoblock">
      <div class="item">
        <p class="title">
          Username
        </p>
        <input id="username" v-model="userData.username" type="text" class="holder" @change="updateData($event)" />
      </div>
    </article>
    <article class="infoblock">
      <div class="item-left">
        <p class="title">
          E-mail
        </p>
        <input id="email" v-model="userData.email" type="text" class="holder" @change="updateData($event)" />
      </div>
      <div class="item-left">
        <article class="change">
          <div class="delete">
            <button @click="deleteAccount" class="delete-account"><span>DELETE ACCOUNT </span></button>
          </div>
        </article>
      </div>
    </article>
  </section>
</template>

<script>
import api from '../../shared/services/api.services';

export default {
  name: 'AccountInfo',
  data() {
    return {
      active: {
        user: true,
      },
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
    updateData(event) {
      const timer = setTimeout(() => {
        api.put('/accounts/profile', this.userData).catch(err => {
          alert(err);
        });
      }, 1000);
    },
    deleteAccount() {
      api.delete('/accounts/destroy').catch(err => {
        alert(err);
      });
      localStorage.removeItem('user');
      localStorage.removeItem('userData');
      this.$router.push('/signup');
    },
  },
};
</script>

<style scoped lang="scss">
@import './../../shared/styles/responsive.scss';

.account {
  display: flex;
  margin-top: 50px;
  justify-content: end;
  width: 90%;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @include max('tablet-wide') {
    margin-left: 5px;
    margin-top: 40px;
  }
  @include max('tablet') {
    margin-left: 5px;
    margin-top: 35px;
  }
  @include max('phone') {
    margin-top: 30px;
  }
}

.infoblock {
  display: flex;
  flex-direction: column;
  width: 280px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.item-left {
  margin-left: 80px;
  width: 100%;
  @include max('tablet') {
    margin-left: 0;
  }
}

.change {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}

.change-password a {
  color: #01134e;
  text-decoration: none;
}

.title {
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #546087;
  margin-bottom: 0;
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
.delete-account {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.delete-account span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.delete-account span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -10px;
  transition: 0.5s;
}

.delete-account:hover span {
  padding-right: 20px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

#right {
  width: 90%;
  margin-left: 20px;
}
@media (max-width: 1024px) {
  .change {
    justify-content: start;
  }
}
</style>