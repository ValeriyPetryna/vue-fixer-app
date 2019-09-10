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

</style>