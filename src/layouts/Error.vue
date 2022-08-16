<template>
  <div>
    <AppHeader />
    <div class="container">
      <div class="page__wrap">
        <router-view />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";

export default {
  name: "Error",
  components: { AppHeader, AppFooter },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
