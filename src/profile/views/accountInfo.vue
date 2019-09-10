<template>
  <div class="profile-page">
    <aside-component :active="active" />
    <section class="content">
      <header-component class="navbar" />
      <main class="page">
        <section class="infopage">
          <article class="information">
            <router-link to="/profile/personal">
              PERSONAL INFORMATION
            </router-link>
          </article>
          <article class="information active">
            <router-link to="/profile/account">
              ACCOUNT INFORMATION
            </router-link>
          </article>
        </section>
        <section class="account">
          <article class="infoblock">
            <div class="item">
              <p class="title">
                Username
              </p>
              <form action>
                <input class="holder" type="text" placeholder="sarahbarnez" />
              </form>
            </div>
          </article>
          <article class="infoblock">
            <div class="item-left">
              <p class="title">
                E-mail
              </p>
              <form action>
                <input class="holder" type="text" placeholder="sarah228@gmail.com" />
              </form>
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
      </main>
    </section>
  </div>
</template>

<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';

export default {
  name: 'AccountInfo',
  components: { asideComponent, headerComponent },
  data() {
    return {
      active: {
        user: true,
      },
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.profile-page {
  display: flex;
  width: 100%;
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
  text-decoration: none;
  letter-spacing: 0.6px;
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

.account {
  display: flex;
  margin-top: 50px;
}

.infoblock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
</style>
