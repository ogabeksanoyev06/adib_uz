<template>
  <div>
    <AppHeader />
    <div class="page__wrap">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/default/app-header/AppHeader.vue";
import AppFooter from "@/components/layouts/default/app-footer/AppFooter.vue";
export default {
  name: "MainLayout",
  components: { AppHeader, AppFooter },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
};
</script>
