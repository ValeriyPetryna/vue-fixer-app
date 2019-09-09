<template>
  <section class="navbar">
    <section class="navbar-menu">
      <breadcrumbs class="navbar-menu" />
    </section>
    <section class="navbar-user">
      <span class="navbar-user__avatar">
        <img :src="userData.photo">
      </span>
      <div class="navbar-user__name">
        <router-link
          class="navbar-user__name"
          to="/profile"
        >
          {{ userData.name + ' ' + userData.surname }}
        </router-link>
      </div>
      <div>
        <ul id="navigation">
          <li
            v-for="(item, index) in navList"
            :key="index"
          >
            <template v-if="item.children">
              <a
                :title="item.name"
                :class="{ active }"
                @click="(isOpen = !isOpen), (active = !active)"
              >
                {{ item.name }}
                <svg
                  viewBox="0 0 451.847 451.847"
                  width="12"
                >
                  <path
                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    fill="#000000"
                  />
                </svg>
              </a>
              <div
                :class="{ isOpen }"
                class="dropdown"
              >
                <ul>
                  <li
                    v-for="{ name, index } in item.children"
                    :key="index"
                  >
                    <a
                      :title="name"
                      @click="logout"
                    >{{ name }}</a>
                  </li>
                </ul>
              </div>
            </template>
            <template v-else>
              <a :title="item.name">{{ item.name }}</a>
            </template>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import breadcrumbs from './breadcrumbs';

export default {
  name: 'HeaderComponent',
  components: { breadcrumbs },
  data() {
    return {
      isOpen: false,
      active: false,
      userData: JSON.parse(localStorage.getItem('userData')),
      navList: [
        {
          name: '',
          children: [
            {
              name: 'Log Out'
            }
          ]
        }
      ]
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }
};
</script>


<style scoped lang="scss">
*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
$color_1: black;
$background_color_1: blue;
$black: #212529;
$white: #ffffff;
$col1: #9f1414;
$col2: #dc3545;

.user__menu {
	width: 100px;
	height: 20px;
	opacity: 0;
	background-color: $background_color_1;
	transition: opacity 0.5s;
	display: flex;
	justify-content: center;
	align-items: center;
  &--active {
    opacity: 1;
	  transition: opacity 0.5s;
  }
}

.navbar {
	display: flex;
	width: 100%;
	height: 60.94px;
	border-bottom: 1px solid #dae4f2;
	margin-left: 80px;
  @media (max-width: 1024px) {
    .navbar {
      margin-left: 20px;
    }
  }
  &-menu {
    display: inline-flex;
	  align-items: center;
	  padding-left: 40px;
  }
  &-user {
    display: flex;
    margin-left: auto;
    line-height: 62px;
    margin-right: 100px;
    align-items: center;
      &__avatar {
        display: flex;
	      padding: 10px;
          > img {
            width: 45px;
            border-radius: 50%;
            height: 45px;
            object-fit: cover;
          }
      }
      &__name {
		      padding-right: 15px;
          text-decoration: none;
          color: $color_1;
      }
  }
}

ul {
  list-style-type: none;
  li {
    position: relative;
    margin: 0.25em;
    text-align: center;
    a {
      width: 70px;
      display: block;
      padding: 0.55em 1em;
      text-decoration: none;
      color: black;
      border-radius: 0.35em;
      background-color: grey;
      transition: all 200ms ease;
      > svg {
        vertical-align: top;
      }
      &:hover {
        color: $white;
        background-color: black;
      }
      &.active {
        background-color: rgba($black, 0.45);
      }
    }
  }
  &#navigation {
    a {
      width: 110px;
      height: 40px;
      background: none;
      height: 2em;
      line-height: 1em;
    }
  }
}
.dropdown {
  position: absolute;
  left: 50%;
  transform: translatex(-50%) rotatex(90deg) scale(0);
  margin-top: 0.55em;
  transform-origin: 0 0;
  border-radius: 0.35em;
  background-color: rgba($black, 0.15);
  visibility: hidden;
  opacity: 0;
  transition: all 200ms linear;
  &.isOpen {
    transform: translatex(-50%);
    visibility: visible;
    opacity: 1;
    margin-top: 20px;
  }
}
</style>
