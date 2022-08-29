<template>
  <div class="container" style="padding: 30px 0">
    <div class="module__title">Bo'limlar</div>
    <div class="module__items">
      <app-module-item
        v-for="(item, index) in sections"
        :key="index"
        :modules="item"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AppModuleItem from "./AppModuleItem.vue";
export default {
  components: { AppModuleItem },
  name: "moduleItems",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getSections", "setLoading"]),
  },
  computed: {
    ...mapGetters(["sections"]),
  },
  mounted() {
    this.getSections();
    console.log(this.sections);
  },
};
</script>
<style scoped>
.module__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.module__title {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #232c3c;
  margin-bottom: 30px;
}
</style>
