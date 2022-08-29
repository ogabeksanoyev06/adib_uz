<template>
  <router-link
    class="module-item"
    :to="{ name: 'category-detail', params: { id: modules.id } }"
  >
    <div>
      <div class="module-item__img">
        <img src="" alt="" />
      </div>
      <div class="module-item__content">
        <p class="module-item__title">{{ modules.name }}</p>
        <p class="module-item__text"></p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "moduleItem",
  data() {
    return {};
  },
  props: {
    modules: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.module-item {
  max-width: 400px;
  width: 100%;
  min-height: 300px;
  background: #ffffff;
  border: 1px solid #e5ecf5;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  transition: box-shadow 0.3s ease-in-out;
}
.module-item:hover {
  box-shadow: 0px 8px 36px rgba(70, 93, 122, 0.08);
}
.module-item__title {
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #232c3c;
  margin-bottom: 30px;
}
.module-item__text {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #95abc6;
}
</style>
