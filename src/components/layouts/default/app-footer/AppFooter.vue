<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left">
          <router-link :to="{ name: 'home' }" class="footer__logo">
            <img src="@/assets/logo2.png" alt="" />
          </router-link>
          <div class="footer__details">
            <div class="footer__details-item">
              <p class="footer__details-title">Bog'laning</p>
              <div class="footer__contacts-item">
                <div class="footer__contacts-icon">
                  <img src="/icons/phone.svg" alt="" />
                </div>
                <a href="tel: +99(871) 281-45-11">
                  <p class="footer__details-text">+99(871) 281-45-11</p>
                </a>
              </div>
              <div class="footer__contacts-item">
                <div class="footer__contacts-icon">
                  <img src="/icons/location.svg" alt="" />
                </div>
                <p class="footer__details-text">
                  Toshkent shahri, Yakkasaroy tumani, Yusuf Xos Hojib ko‘chasi,
                  103-uy
                </p>
              </div>
            </div>
            <div class="footer__details-item">
              <p class="footer__details-title">Linklar</p>
              <div class="footer__links">
                <router-link
                  :to="{ name: link.name }"
                  v-for="(link, i) in menu"
                  :key="i"
                >
                  {{ link.title }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__right">
          <div class="footer__socials">
            <p class="footer__details-title">Ijtimoiy tarmoqlar</p>
            <div class="footer__socials-wrap">
              <a href="#" target="_blank" class="footer__socials-item">
                <img data-v-15b19dee="" src="/icons/facebook.svg" alt="" />
              </a>
              <a href="#" target="_blank" class="footer__socials-item">
                <img data-v-15b19dee="" src="/icons/youtube.svg" alt="" />
              </a>
              <a href="#" target="_blank" class="footer__socials-item">
                <img data-v-15b19dee="" src="/icons/instagram.svg" alt="" />
              </a>
              <a href="#" target="_blank" class="footer__socials-item">
                <img data-v-15b19dee="" src="/icons/telegram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./footer.css";
export default {
  name: "app-footer",
  data() {
    return {
      menu: [
        {
          id: 0,
          title: "Bosh sahifa",
          name: "home",
          url: "/",
        },
        {
          id: 1,
          title: "Bo'limlar",
          name: "category",
          url: "category",
        },
        {
          id: 2,
          title: "Yangiliklar",
          name: "news",
          url: "news",
        },
        {
          id: 3,
          title: "Biz haqimizda",
          name: "about",
          url: "about",
        },
        {
          id: 4,
          title: "Bog'lanish",
          name: "contact",
          url: "contact",
        },
      ],
    };
  },
  methods: {},
};
</script>
