<template>
  <div class="search-page">
    <aside-component v-bind:active="active"></aside-component>
    <section class="content">
      <header-component></header-component>
      <main>
        <div class="page">
          <form class="search">
            <div class="search-filters">
              <p class="search-filters__text">Location</p>
              <img class="search-filters__location" src="../../assets/Location.svg" />
              <select class="search-filters__dropdown">
                <option></option>
              </select>
            </div>
            <div class="search-filters">
              <p class="search-filters__text">SEARCH</p>
              <input class="search-filters__dropdown" type="text" placeholder="Type..." />
            </div>
            <div class="search-filters">
              <p class="search-filters__text">CATEGORY</p>
              <select class="search-filters__dropdown">
                <option>Subcategory</option>
              </select>
            </div>
            <div class="search-filters">
              <p class="search-filters__text">SERVICE</p>
              <select class="search-filters__dropdown">
                <option>3 services</option>
              </select>
            </div>
            <div class="search-filters">
              <p class="search-filters__text">PERIOD</p>
              <input class="search-filters__dropdown" placeholder="11/01/19 - 14/01/19" />
            </div>
            <button class="search-filters__button">SEARCH</button>
          </form>
          <div class="results">
            <div class="category">
              <p class="category__text">show map</p>
              <div class="category__button">
                <input id="price" type="radio" name="category" value="by price" />
                <label for="price">by price</label>
                <input id="rating" type="radio" name="category" value="by rating" />
                <label for="rating">by rating</label>
              </div>
            </div>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
              <article class="worker">
                <img class="worker__avatar" src="../../assets/barry.svg" alt />
                <div class="info">
                  <span class="info__name">
                    Richard Thompson
                    <img class="img__star" src="../../assets/bronze.svg" />
                  </span>
                  <div class="info__location">
                    <img src="../../assets/Location.svg" alt />
                    <p>Vancouver, Canada</p>
                  </div>
                  <div class="info__stack">
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
              <article class="worker">
                <img class="worker__avatar" src="../../assets/barry.svg" alt />
                <div class="info">
                  <span class="info__name">
                    Richard Thompson
                    <img class="img__star" src="../../assets/silver.svg" />
                  </span>
                  <div class="info__location">
                    <img src="../../assets/Location.svg" alt />
                    <p>Vancouver, Canada</p>
                  </div>
                  <div class="info__stack">
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
              <article class="worker">
                <img class="worker__avatar" src="../../assets/barry.svg" alt />
                <div class="info">
                  <span class="info__name">
                    Richard Thompson
                    <img class="img__star" src="../../assets/silver.svg" />
                  </span>
                  <div class="info__location">
                    <img src="../../assets/Location.svg" alt />
                    <p>Vancouver, Canada</p>
                  </div>
                  <div class="info__stack">
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
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
                    <p class="inf">Stack:</p>
                    <p>Python, Django, Sketch</p>
                  </div>
                  <div class="info__price">
                    <p class="inf">Base Daily Rate:</p>
                    <p>$ 1,200 USD</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import asideComponent from '../../components/asideComponent';
import headerComponent from '../../components/headerComponent';

export default {
  name: 'search',
  components: { asideComponent, headerComponent },
  data() {
    return {
      active: {
        search: true
      }
    };
  },
  methods: {}
};
</script>

<style lang="css">
.search-page {
  margin: 0;
  display: flex;
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

.page {
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(153, 163, 174, 0.06);
  border-radius: 4px;
  margin: 62px 124px 0px 142px;
  height: 72vh;
  padding: 41px 61px 0px 44px;
}
.page::-webkit-scrollbar {
  width: 6px;
  background: #f5f7fa;
  mix-blend-mode: normal;
  border-radius: 4px;
  margin: 6px;
}
.page::-webkit-scrollbar-thumb {
  background-color: #e0e6f0;
  border-radius: 4px;
}

.search {
  display: flex;
  flex-direction: column;
  margin-right: 3.5%;
  width: 21%;
}
.search-filters {
  width: 100%;
}
.search-filters__text {
  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #546087;
}
.search-filters__location {
  position: absolute;
  margin-top: 11px;
  margin-left: 5px;
}
.search-filters__dropdown {
  background: #fcfcfc;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 40px;
  padding-left: 14px;
  margin-bottom: 24px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}
.search-filters__dropdown:focus {
  background-color: #fff;
  border-left: 2px solid #2a74db;
}
.search-filters__button {
  width: 100%;
  height: 42px;
  background: #0ad69c;
  border-radius: 2px;
  font-size: 16px;
  font-family: 'Exo 2', sans-serif;
  color: #fff;
  border: none;
  cursor: pointer;
}

.results {
  display: flex;
  flex-direction: column;
  width: 74%;
  margin-left: 3.5%;
}

.results {
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
}
.category__button label {
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.046704px;
  line-height: 28px;
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
}
.info p {
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: -0.046704px;
  line-height: 12px;
}
.info__location {
  display: flex;
  align-items: center;
}
.info__location img {
  width: 10px;
  height: 21px;
  margin-right: 5px;
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
}

::-webkit-scrollbar-thumb:hover {
  background-color: #dadada;
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

.category__button input[type='radio']:checked,
.category__button input[type='radio']:not(:checked) {
  position: absolute;
  visibility: hidden;
}
.category__button input[type='radio']:checked + label,
.category__button input[type='radio']:not(:checked) + label {
  cursor: pointer;
  display: inline-block;
  line-height: 20px;
  padding-left: 1.725rem;
  position: relative;
}
.category__button input[type='radio']:checked + label:before,
.category__button input[type='radio']:not(:checked) + label:before {
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
.category__button input[type='radio']:checked + label:after,
.category__button input[type='radio']:not(:checked) + label:after {
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

input[type='radio']:not(:checked) + label:after {
  -webkit-transform: scale(0);
  opacity: 0;
  transform: scale(0);
}

input[type='radio']:checked + label:after {
  -webkit-transform: scale(1);
  opacity: 1;
  transform: scale(1);
}

.img-date {
  left: 19px;
  position: absolute;
  top: 27px;
}
</style>