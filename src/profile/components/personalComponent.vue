<template>
  <main class="page">
    <section class="account">
      <article class="avatar">
        <img class="photo" src="../../assets/faruh.svg" />
        <div class="changephoto">
          <img src="../../assets/Pen.svg" />
          <a>Change photo</a>
        </div>
      </article>
      <article class="infoblock">
        <div class="item">
          <p class="title">
            First Name
          </p>
          <form action>
            <input class="holder" type="text" placeholder="Faruh" />
          </form>
        </div>
        <div class="item">
          <p class="title">
            Title
          </p>
          <form action="select" method="POST">
            <input class="holder" type="text" list="title" placeholder="Boss" />
            <datalist id="title">
              <option>Mr</option>
              <option>Mrs</option>
              <option>Boss</option>
            </datalist>
          </form>
        </div>
        <div class="item">
          <p class="title">
            Country
          </p>
          <form action="select" method="POST">
            <input class="holder holderchoose" type="text" list="country" placeholder="USA" />
            <datalist id="country">
              <option>Ukraine</option>
              <option>France</option>
              <option>USA</option>
            </datalist>
          </form>
        </div>
      </article>
      <article class="infoblock">
        <div class="item">
          <p class="title">
            Last Name
          </p>
          <form action>
            <input class="holder" type="text" placeholder="Bernandez" />
          </form>
        </div>
        <div class="item">
          <p class="title">
            Mobile Phone
          </p>
          <div class="mobile-prefix">
            <div class="country">
              <img src="../../assets/Flag.svg" />
              <img src="../../assets/shape.svg" />
            </div>
            <form action="select" method="POST">
              <input id="right" class="holder" type="text" list="mobile" placeholder="+65" />
              <datalist id="mobile">
                <option>+65</option>
                <option>+380</option>
                <option>+980</option>
              </datalist>
            </form>
          </div>
        </div>
        <div class="item">
          <p class="title">
            Company
          </p>
          <form action="select" method="POST">
            <input class="holder" type="text" list="company" placeholder="Amazon" />
            <datalist id="company">
              <option>Amazon</option>
              <option>Google</option>
              <option>FB</option>
            </datalist>
          </form>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'personalComponent',

  data() {
    return {
      active: {
        user: true
      }
    };
  },
  methods: {}
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

.account {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  width: 90%;
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