<template>
  <section class="account">
    <article class="infoblock">
      <div class="item">
        <p class="title">
          Username
        </p>
        <input
          id="username"
          v-model="userData.username"
          type="text"
          class="holder"
          @change="updateData($event)"
        >
      </div>
    </article>
    <article class="infoblock">
      <div class="item-left">
        <p class="title">
          E-mail
        </p>
        <input
          id="email"
          v-model="userData.email"
          type="text"
          class="holder"
          @change="updateData($event)"
        >
      </div>
      <div class="item-left">
        <article class="change">
          <div class="change-password">
            <a href="#">CHANGE PASSWORD ></a>
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
        user: true
      },
      userData: {},
      user: JSON.parse(localStorage.getItem('user'))
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
    updateData(event) {
      const timer = setTimeout(() => {
        api.put('/accounts/profile', this.userData).catch(err => {
          alert(err);
        });
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.account {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
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
}

#right {
  width: 90%;
  margin-left: 20px;
}
@media (max-width: 1024px) {
  .account {
    margin-left: 20px;
  }
  .infoblock {
    width: 100%;
  }
  .item-left {
    margin-left: 0;
  }
  .change {
    justify-content: start;
  }
  .infopage {
    overflow-x: auto;
  }
}
</style>