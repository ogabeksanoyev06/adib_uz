<template>
  <div class="home-page">
    <div class="home__img-gif">
      <img src="https://uzlang.navoiy-uni.uz/assets/Header-bg.gif" alt="" />
    </div>
    <app-module-items />
  </div>
</template>
<script>
import AppModuleItems from "@/components/shared-components/module/AppModuleItems.vue";
export default {
  components: { AppModuleItems },
  name: "app-home",
  data() {
    return {};
  },
};
</script>
<style scoped>
.home__img-gif {
  width: 100%;
  height: 80vh;
}
.home__img-gif img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
