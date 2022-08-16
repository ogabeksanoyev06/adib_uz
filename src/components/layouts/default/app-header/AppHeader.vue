<template>
  <div class="header">
    <marquee behavior="" direction="left" style="color: #95abc6">
      Sayt test rejimida ishlamoqda...Kamchiliklar uchun uzr so'raymiz
    </marquee>
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <router-link to="/" class="logo">
            <img src="@/assets/logo2.png" alt="logo" />
          </router-link>
          <ul class="header__menu">
            <li
              class="header__menu-item"
              v-for="(item, index) in menu"
              :key="index"
              :class="$route.name === item.name ? 'active' : ''"
              @click="$route.name === item.name"
            >
              <router-link :to="item.url" class="header__menu-link">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="header__right">
          <div class="header__search">
            <div class="input__block-prepend">
              <img src="/icons/search.svg" alt="" />
            </div>
            <div class="input__block-input">
              <input
                type="text"
                class="input__block"
                placeholder="Qidirish"
                v-model="search"
                @keyup.enter="searchProduct"
              />
            </div>
          </div>
          <div class="header__auth">
            <button
              class="a-btn header__login"
              @click="$router.push({ name: 'login' })"
            >
              Kirish
            </button>
            <button
              class="a-btn header__register"
              @click="$router.push({ name: 'register' })"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
          <div class="header__language">
            <div
              class="header__language-icon"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
            >
              <img src="/icons/globe.svg" alt="" />
            </div>
            <div
              class="header__dropdown"
              :class="languageDropdown ? 'active' : ''"
            >
              <ul class="header__dropdown-wrap">
                <li @click="changeLanguage('ru')" class="header__dropdown-item">
                  <a class="header__dropdown-link"> <span>Russian</span> </a>
                </li>
                <li @click="changeLanguage('uz')" class="header__dropdown-item">
                  <a class="header__dropdown-link"> <span>Uzbek</span> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./header.css";
export default {
  components: {},
  name: "app-header",
  data() {
    return {
      languageDropdown: false,
      search: "",
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
  methods: {
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
  },
};
</script>
