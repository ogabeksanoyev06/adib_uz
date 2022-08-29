<template>
  <div class="news-card">
    <div class="news-card__photo" @click="goToLink">
      <img :src="photo" :alt="title" />
    </div>
    <div class="news-card__content">
      <div class="news-card__days">
        <span>08/28/2022</span>
      </div>
      <span class="news-card__title">{{ sliceTitle(title) }}</span>
      <span class="news-card__text">{{ sliceText(subtitle) }}</span>
      <div class="news-card_btn" @click="goToLink"><span>Batafsil</span></div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/components/app-card-news.css";
export default {
  name: "AppCardNews",
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
        name: "news-content",
        params: { news_id: 1 },
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
      if (text.length > 120) {
        return text.slice(0, 117) + "...";
      } else {
        return text;
      }
    },
  },
};
</script>
<style scoped></style>
