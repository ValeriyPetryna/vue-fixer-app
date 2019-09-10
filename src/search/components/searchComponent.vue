<template>
  <div class="results">
    <div class="workers">
      <article class="worker">
        <img class="worker__avatar" src="../../assets/barry.svg" alt />
        <div class="info">
          <span class="info__name">
            Richard Thompson
            <img class="img__star" src="../../assets/gold.svg" />
          </span>
          <div class="info__location">
            <img src="../../assets/Location.svg" alt />
            <p>Vancouver, Canada</p>
          </div>
          <div class="info__stack">
            <p class="inf">
              Stack:
            </p>
            <p>Python, Django, Sketch</p>
          </div>
          <div class="info__price">
            <p class="inf">
              Base Daily Rate:
            </p>
            <p>$ 1,200 USD</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data() {
    return {
      active: {
        search: true,
      },
    };
  },

  mounted() {},
};
</script>

<style scoped lang="scss">
.results {
  display: flex;
  flex-direction: column;
  width: 74%;
  margin-left: 3.5%;
  height: 100%;
  margin: 0 5%;
}

.category {
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: space-between;
}

.category__text {
  color: #01134e;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.28px;
  line-height: 14px;
  text-transform: uppercase;
}

.category__button {
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 200px;
  label {
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    letter-spacing: -0.046704px;
    line-height: 28px;
  }
}

.workers {
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  justify-content: space-between;
  min-width: 750px;
  overflow: auto;
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
}

.worker__avatar {
  height: 76px;
  width: 76px;
  margin-top: 33px;
}

.info {
  width: 57%;
  p {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    letter-spacing: -0.046704px;
    line-height: 12px;
  }
}

.info__location {
  display: flex;
  align-items: center;
  img {
    width: 14px;
    height: 21px;
    margin-right: 5px;
  }
}

.info__stack,
.info__price {
  display: flex;
}

.inf {
  color: #01134e;
  font-weight: normal;
}

::-webkit-scrollbar-button {
  background-image: url('');
  background-repeat: no-repeat;
  height: 0;
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: #ecedee;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 0;
  background-color: #dadada;
  border-radius: 0;
  &:hover {
    background-color: #dadada;
  }
}

::-webkit-resizer {
  background-image: url('');
  background-repeat: no-repeat;
  height: 0;
  width: 4px;
}

::-webkit-scrollbar {
  width: 4px;
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

.img-date {
  left: 19px;
  position: absolute;
  top: 27px;
}
</style>