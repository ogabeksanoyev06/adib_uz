<template>
  <div class="news" style="padding: 30px 0">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-center">
        <div v-for="(item, i) in news" :key="i">
          <AppCardNews
            :link="item.link"
            :title="item.title"
            :subtitle="item.subtitle"
            :photo="item.photo"
            :id="item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppCardNews from "@/components/shared-components/AppCardNews";
export default {
  name: "app-news",
  components: { AppCardNews },
  data() {
    return {
      news: [
        {
          title: "ERKIN VA FAROVON HAYOTIMIZ GAROVI",
          subtitle:
            "'Xalq so‘zi'  gazetasining 187-sonida universitetimiz rektori, filologiya fanlari doktori, professor,  O‘zbekistonda xizmat ko‘rsatgan yoshlar murabbiysi Shuhrat Sirojiddinovning 'Erkin va farovon hayotimiz garovi'  nomli maqolasi chop etildi.  Maqolada mustaqillik va u bergan imkoniyatlar, universitetimizning qisqa muddatda erishgan muvaffaqiyatlari haqida so‘z yuritilgan.",
          photo: "/images/news.jpg",
          value: "2",
          link: null,
        },
      ],
    };
  },
};
</script>
<style scoped>
.news {
  background-image: url("https://tsuull.uz/sites/all/themes/sap/img/dist/bg.png");
  background-attachment: fixed;
  background-color: #f2f8ff;
  background-position: 50% 0;
  background-repeat: repeat;
}
</style>
