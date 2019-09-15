<template>
  <div class="worker">
    <img :src="worker.photo" class="worker__avatar" />
    <div class="worker-information">
      <span class="worker-information__name">
        {{ worker.name + ' ' + worker.surname }}
        <rating-component class="worker-information__rating" v-bind:rating="worker.rating" />
        <!-- raiting -->
      </span>
      <div class="worker-information__location">
        <svg width="12" height="15" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.49985 0C1.57013 0 3.63724e-08 1.57013 3.63724e-08 3.50005C3.63724e-08 4.00345 0.103034 4.48408 0.306086 4.92871C1.18115 6.84355 2.85888 8.86522 3.35236 9.43916C3.38933 9.48207 3.44323 9.50678 3.49995 9.50678C3.55667 9.50678 3.61057 9.48207 3.64755 9.43916C4.14083 8.86532 5.81856 6.84375 6.69391 4.92871C6.89706 4.48408 7 4.00345 7 3.50005C6.99981 1.57013 5.42968 0 3.49985 0ZM3.49985 5.31799C2.49744 5.31799 1.68182 4.50237 1.68182 3.49995C1.68182 2.49744 2.49744 1.68182 3.49985 1.68182C4.50227 1.68182 5.31789 2.49744 5.31789 3.49995C5.31798 4.50237 4.50237 5.31799 3.49985 5.31799Z"
            fill="#2A74DB"
          />
        </svg>
        <p>{{ worker.country }}</p>
      </div>
      <div class="worker-information__stack">
        <p class="strong">
          Stack:
        </p>
        <p>{{ worker.stack }}</p>
        <router-link :to="'/search/profile/' + worker._id" class="more-link">
          More
        </router-link>
      </div>
      <div class="worker-information__price">
        <p class="strong">
          Base Daily Rate:
        </p>
        <p>{{ worker.dailyRate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ratingComponent from './ratingComponent';

export default {
  props: {
    worker: Object,
  },
  components: {
    ratingComponent,
  },
};
</script>

<style scoped lang="scss">
@import './../../shared/styles/responsive.scss';
.results {
  display: flex;
  flex-direction: column;
  width: 74%;
  margin-left: 3.5%;
  height: 100%;
  margin: 0 5%;
  @include max('tablet-wide') {
    width: 100%;
    min-width: 100% !important;
  }
  @include max('phone') {
    margin: 0;
  }
}

.workers {
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  justify-content: space-between;
  min-width: 750px;
  overflow: auto;
  @include max('tablet-wide') {
    width: 100%;
  }
}

.worker {
  border: 1px solid rgba(237, 237, 237, 0.2);
  border-radius: 2px;
  box-shadow: 10px 9px 30px rgba(23, 31, 76, 0.06);
  box-sizing: border-box;
  display: flex;
  height: 150px;
  justify-content: space-around;
  margin: 18px 18px 18px 0;
  width: 330px;
  @include max('tablet-wide') {
    width: 100%;
    min-width: 100% !important;
  }
  &__avatar {
    height: 76px;
    width: 76px;
    margin-top: 33px;
    border-radius: 50%;
    object-fit: cover;
  }
  &-information {
    width: 57%;
    margin-top: 15px;
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    letter-spacing: -0.046704px;
    line-height: 12px;
    &__name {
      font-weight: 450;
      font-size: 16px;
    }
    &__rating {
      vertical-align: middle;
      display: table-caption;
    }
    &__location {
      display: flex;
      align-items: center;
      img {
        width: 14px;
        height: 21px;
        margin-right: 5px;
      }
    }
    &__stack {
      display: flex;
    }
    &__price {
      display: flex;
    }
  }
}

.category__button input[type='radio'] {
  &:checked,
  &:not(:checked) {
    position: absolute;
    visibility: hidden;
  }
  &:checked + label,
  &:not(:checked) + label {
    cursor: pointer;
    display: inline-block;
    line-height: 20px;
    padding-left: 1.725rem;
    position: relative;
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 100%;
    content: '';
    height: 18px;
    left: 0;
    position: absolute;
    top: 0;
    width: 18px;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    -webkit-transition: all 0.2s ease;
    background: #0ad69c;
    border-radius: 100%;
    content: '';
    height: 12px;
    left: 4px;
    position: absolute;
    top: 4px;
    transition: all 0.2s ease;
    width: 12px;
  }
}

input[type='radio'] {
  &:not(:checked) + label:after {
    -webkit-transform: scale(0);
    opacity: 0;
    transform: scale(0);
  }
  &:checked + label:after {
    -webkit-transform: scale(1);
    opacity: 1;
    transform: scale(1);
  }
}
.strong {
  font-size: 12px;
  font-weight: 600;
  margin-right: 5px;
}

.more-link {
  color: #2a74db;
  font-size: inherit;
  text-decoration: none;
  margin-right: 0;
  margin-left: auto;
  cursor: pointer;
  font-size: 16px;
}
</style>

