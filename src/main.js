import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./assets/styles/main.scss";
import "./plugins/directives/click-outside";
import i18n from "./locales/i18n";
// import VueKatex from "vue-katex";
// import api from "./service/apiService";

Vue.config.productionTip = false;
// Vue.use(api);
// Vue.use(VueKatex, {
//   globalOptions: {
//     delimiters: [
//       { left: "$$", right: "$$", display: true },
//       { left: "$", right: "$", display: true },
//       { left: "\\(", right: "\\)", display: true },
//       { left: "\\[", right: "\\]", display: true },
//     ],
//     trust: true,
//   },
// });
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
