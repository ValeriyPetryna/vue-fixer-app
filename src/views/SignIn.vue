<template>
  <main class="wrapper">
    <nav class="navbar">
      <div class="logo-container">
        <img
          class="logo-container__image"
          src="images/myfixerlogo.svg"
        >
      </div>
      <div class="auth">
        <p class="auth__text">
          Do not have an account?
        </p>
        <a
          class="auth__link"
          href="signup1.html"
        >Sign up</a>
      </div>
    </nav>
    <div class="container">
      <form class="login-form">
        <h1 class="login-form__title">
          Sign in
        </h1>
        <input
          class="login-form__input"
          type="text"
          placeholder="Login"
        >
        <input
          class="login-form__input"
          type="password"
          placeholder="Password"
        >
        <a
          class="login-form__link"
          href="passwordrecovery.html"
        >Forgot password?</a>
        <button
          class="login-form__submit"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'SignIn',
  components: {},
};
</script>
<style scoped lang="css">
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
}

.wrapper {
  height: 100vh;
  background: #f9fafc;
}

.navbar {
  padding-top: 20px;
  position: relative;
  display: flex;
}

.logo-container__image {
  width: 138px;
  margin-left: 140px;
}

.auth {
  margin-top: 10px;
  display: inherit;
  position: absolute;
  right: 137px;
}

.auth__text {
  margin: 0;
  padding: 0;
}

.auth__link {
  font-weight: bold;
  padding-left: 10px;
  color: #002396;
  cursor: pointer;
}

.container {
  max-width: 632px;
  background: #fff;
  margin: 50px auto;
  box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06);
  border-radius: 10px;
}

.login-form {
  padding: 80px 116px;
  margin-top: 100px;
}

.login-form__title {
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.4px;
  color: #002396;
}

.login-form__input {
  width: 100%;
  margin-bottom: 25px;
  padding: 12px 14px;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  transition: 0.2s;
  box-sizing: border-box;
  outline: none;
}
.login-form__input:hover {
  border-left: 2px solid #2a74db;
}

.login-form__submit {
  margin-left: auto;
  margin-right: 0;
  display: block;
  background: #0ad69c;
  border-radius: 2px;
  border: none;
  outline: none;
  padding: 12px 44px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}

.login-form__link {
  text-align: right;
  display: block;
  margin-bottom: 15px;
}
</style>
