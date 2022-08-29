<template>
  <div class="navigation-drawer" :class="{ active: this.isActive }">
    <div class="navigation__auth">
      <button
        class="a-btn navigation__login"
        @click="$router.push({ name: 'login' })"
      >
        Kirish
      </button>
      <button
        class="a-btn navigation__register"
        @click="$router.push({ name: 'register' })"
      >
        Ro'yxatdan o'tish
      </button>
    </div>
    <div class="navigation__search">
      <div class="input__block-prepend">
        <img src="/icons/search.svg" alt="" />
      </div>
      <div class="input__block-input">
        <input
          type="text"
          class="input__block"
          placeholder="Qidirish"
          v-model="search"
          @keyup.enter="search"
        />
      </div>
    </div>
    <div class="navigation__language">
      <div class="navigation__language-title">Tilni tanglang:</div>
      <ul class="navigation__language-wrap">
        <li @click="changeLanguage('ru')" class="navigation__language-item">
          <a class="navigation__language-link"> <span>Russian</span> </a>
        </li>
        <li @click="changeLanguage('uz')" class="navigation__language-item">
          <a class="navigation__language-link"> <span>Uzbek</span> </a>
        </li>
      </ul>
    </div>
    <div class="navigation__menu">
      <span class="navigation__menu-title">Menu</span>
      <ul class="navigation__menu-wrap">
        <li class="navigation__menu-item" @click="clickMenu">
          <router-link to="/" class="navigation__menu-link">
            Bosh sahifa
          </router-link>
        </li>
        <li class="navigation__menu-item" @click="clickMenu">
          <router-link :to="{ name: 'category' }" class="navigation__menu-link">
            Bo'limlar
          </router-link>
        </li>
        <li class="navigation__menu-item" @click="clickMenu">
          <router-link :to="{ name: 'news' }" class="navigation__menu-link">
            Yangiliklar
          </router-link>
        </li>
        <li class="navigation__menu-item" @click="clickMenu">
          <router-link :to="{ name: 'category' }" class="navigation__menu-link">
            Biz haqimizda
          </router-link>
        </li>
        <li class="navigation__menu-item" @click="clickMenu">
          <router-link :to="{ name: 'contact' }" class="navigation__menu-link">
            Bog'lanish
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navigation__socials">
      <div class="navigation__socials-wrap">
        <a href="#" target="_blank" class="navigation__socials-item">
          <img data-v-15b19dee="" src="/icons/facebook.svg" alt="" />
        </a>
        <a href="#" target="_blank" class="navigation__socials-item">
          <img data-v-15b19dee="" src="/icons/youtube.svg" alt="" />
        </a>
        <a href="#" target="_blank" class="navigation__socials-item">
          <img data-v-15b19dee="" src="/icons/instagram.svg" alt="" />
        </a>
        <a href="#" target="_blank" class="navigation__socials-item">
          <img data-v-15b19dee="" src="/icons/telegram.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="navigation__close-btn" @click="clickMenu">
      <img src="/icons/close.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      search: "",
    };
  },
  props: {
    isActive: Boolean,
  },
  methods: {
    clickMenu() {
      this.$emit("closeNavigationDrawer");
    },
  },
};
</script>
<style scoped>
.navigation-drawer {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 320px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(279.37deg, #008ae4, #a6dcff 158.68%);
  z-index: 50;
  overflow-y: auto;
  padding: 30px;
  padding-top: 50px;
  transform: translateX(-100%);
  transition: transform 0.25s ease-in-out;
}
.navigation-drawer.active {
  transform: translateX(0);
}
.navigation__auth {
  display: flex;
  justify-content: space-between;
}
.navigation__auth .a-btn {
  font-weight: 700;
  padding: 0 15px;
  border-radius: 4px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  color: #000;
  font-family: inherit;
  position: relative;
  text-align: center;
  transition: transform 0.15s ease-out;
  cursor: pointer;
  transform: scale(1);
}
.navigation__auth .navigation__login {
  margin-right: 10px;
}
.a-btn:active {
  transform: scale(0.94);
}
.navigation__search {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #e5ecf5;
  border-radius: 4px;
  background-color: white;
  margin-top: 15px;
}
.input__block-prepend {
  display: flex;
  align-items: center;
}
.navigation__search img {
  margin-left: 20px;
}
.input__block-input input {
  border-radius: 4px;
  width: 100%;
  height: 50px;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
}
.input__block-input input::placeholder {
  color: #95abc6;
  font-size: 18px;
  line-height: 17px;
}

.navigation__language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 15px;
  padding: 10px;
}
.navigation__language-title {
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #008ae4;
}
.navigation__language-wrap {
  display: flex;
}
.navigation__language-item {
  margin-right: 10px;
  cursor: pointer;
}
.navigation__language-link span {
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  color: #95abc6;
}
.navigation__language-item:hover span {
  color: #000;
}
.navigation__menu {
  margin-top: 15px;
}
.navigation__menu-title {
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: #000;
}
.navigation__menu-wrap {
  margin-top: 20px;
}
.navigation__menu-item {
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 4px;
}
.navigation__menu-link {
  font-size: 16px;
  font-weight: 700;
  display: flex;
  width: 100%;
  padding: 10px;
  transition: 0.3s;
}
.navigation__menu-link:hover {
  color: #008ae4;
}
.navigation__socials {
  margin-top: 40px;
}
.navigation__socials-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.navigation__socials-item {
  margin-right: 15px;
}
.navigation__close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: rgba(4, 103, 167, 0.10980392156862745);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
</style>
