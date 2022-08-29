<template>
  <div class="app-card" style="padding: 30px 0">
    <div class="app-card__photo">
      <img :src="photo" :alt="title" />
    </div>
    <div class="app-card__content">
      <div class="app-card__link" @click="goToLink">
        <img src="/icons/redirect.svg" alt="" />
      </div>
      <span class="app-card__title">{{ sliceTitle(title) }}</span>
      <span class="app-card__text">{{ sliceText(subtitle) }}</span>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/components/app-card.css";
export default {
  name: "AppCard",
  data() {
    return {};
  },
  props: {
    id: Number,
    link: String,
    title: String,
    subtitle: String,
    photo: String,
  },
  methods: {
    goToLink() {
      this.$router.push({
        name: "scien-tists",
        params: { scientists_id: 1 },
      });
    },
    sliceTitle(title) {
      if (title.length > 35) {
        return title.slice(0, 32) + "...";
      } else {
        return title;
      }
    },
    sliceText(text) {
      if (text.length > 140) {
        return text.slice(0, 137) + "...";
      } else {
        return text;
      }
    },
  },
};
</script>
<style scoped></style>
