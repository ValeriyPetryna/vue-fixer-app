<template>
  <div class="breadcrumb">
    <ul>
      <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        :class="{ linked: !!breadcrumb.link }"
        @click="routeTo(idx)"
      >
        {{ breadcrumb.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: []
    };
  },
  watch: {
    $route() {
      this.updateList();
    }
  },
  mounted() {
    this.updateList();
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link);
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  > li {
    display: flex;
    float: left;
    height: 10px;
    width: auto;
    cursor: default;
    align-items: center;
    line-height: 62px;
    font-size: 16px;
    letter-spacing: 0.685714px;
    text-decoration: none;
    color: #252f48;
    &:not(:last-child)::after {
      content: url('../assets/Chevron-right.svg');
      float: right;
      font-size: 1em;
      margin: 0 0.6em;
      cursor: default;
    }
  }
}

.linked {
  cursor: pointer;
  font-size: 1em;
  font-weight: normal;
}
</style>
