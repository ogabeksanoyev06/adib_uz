<template>
  <div class="home-page">
    <div
      id="btn"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/images/homeCaruselImg/1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/homeCaruselImg/2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/homeCaruselImg/3.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/homeCaruselImg/3.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/homeCaruselImg/4.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/homeCaruselImg/5.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/homeCaruselImg/6.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/homeCaruselImg/7.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/images/homeCaruselImg/8.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#btn"
        data-bs-slide="prev"
      >
        <span aria-hidden="true">
          <img src="/icons/angle-left.svg" alt="" />
        </span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#btn"
        data-bs-slide="next"
      >
        <span aria-hidden="true">
          <img src="/icons/angle-right.svg" alt="" />
        </span>
      </button>
    </div>
    <div class="container">
      <app-module-items />
      <CtaBanner
        title="O‘zbekiston arboblari"
        content="Ushbu bo'limda o'zbek adabiyot durdonalari , arboblari haqida to'liq ma'lumotlar joylashtirildi.Arboblarning tarjimai hollari."
        photo="/images/homeCaruselImg/7.jpg"
      />
      <div class="section__top">
        <div class="section__top-title">Bizning ajdodlar</div>
        <router-link to="/" class="section__top-link">Barchasi</router-link>
      </div>
      <AppSlider :list="scientists">
        <template #default="{ item }">
          <AppCard
            :link="item.link"
            :title="item.title"
            :subtitle="item.subtitle"
            :photo="item.photo"
            :id="item.id"
          />
        </template>
      </AppSlider>
      <CtaBanner
        title="O'zbekiston va Jahon yangiliklari"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius rerum nemo ipsa officia quaerat vitae, id nihil, ad, at doloremque nam modi aut facilis amet nobis! Minima, delectus cupiditate. Necessitatibus?"
        photo="/images/cta-banner.jpg"
      />
      <div class="section__top" style="margin-bottom: 30px">
        <div class="section__top-title">Yangiliklar</div>
        <router-link :to="{ name: 'news' }" class="section__top-link">
          Barchasi
        </router-link>
      </div>
      <AppSlider :list="news">
        <template #default="{ item }">
          <AppCardNews
            :link="item.link"
            :title="item.title"
            :subtitle="item.subtitle"
            :photo="item.photo"
            :id="item.id"
          />
        </template>
      </AppSlider>
    </div>
  </div>
</template>
<script>
import AppModuleItems from "@/components/shared-components/module/AppModuleItems.vue";
import CtaBanner from "@/components/shared-components/CtaBanner.vue";
import AppSlider from "@/components/shared-components/AppSlider";
import AppCard from "@/components/shared-components/AppCard";
import AppCardNews from "@/components/shared-components/AppCardNews";
import "./style.css";
export default {
  components: { AppModuleItems, CtaBanner, AppSlider, AppCard, AppCardNews },
  name: "app-home",
  data() {
    return {
      scientists: [
        {
          title: "Alisher Navoiy",
          subtitle:
            "Alisher Navoiy (1441-1501) - buyuk shoir va mutafakkir, davlat arbobi. To‘liq ismi Nizomiddin Mir Alisher. Navoiy tahallusi ostida chig‘atoy (eki...",
          photo: "/images/alishernavoiy.jpg",
          value: "2",
          link: null,
        },
      ],
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
  props: {},
  methods: {},
  mounted() {},
};
</script>
