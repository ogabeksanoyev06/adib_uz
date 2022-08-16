<template>
  <div style="padding: 30px 0" class="category">
    <div class="container">
      <div class="category__title">Xalq og‘zaki ijodi.</div>
      <div class="app-slider">
        <div class="splide" ref="slider">
          <div class="splide__slider">
            <div class="splide__track">
              <div class="splide__list">
                <div
                  v-for="(item, idx) in list"
                  :key="idx"
                  class="splide__slide"
                  :class="activeIdx === idx ? 'activeX' : ''"
                  @click="setActive(idx)"
                >
                  <span>{{ item.category }}</span>
                </div>
              </div>
            </div>

            <button
              class="app-slider__button-previous"
              key="1"
              @click="previous"
            >
              <img src="/icons/angle-left.svg" alt="" />
            </button>
            <button class="app-slider__button-next" key="2" @click="next">
              <img src="/icons/angle-right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="category__items">
        <div class="category__item" v-for="(item, i) in products" :key="i">
          <div class="category__item-img">
            <img src="/images/post.jpg" alt="" />
          </div>
          <div class="category__item-content">
            <div class="category__item-title">
              <span> Lorem ipsum dolor sit amet. </span>
            </div>
            <div class="category__item-text">
              <span>
                {{ sliceText(item.info) }}
              </span>
            </div>
            <div class="category__item-btn">
              <button class="category__download-btn" @click="onClick()">
                <div class="d-flex align-items-center">
                  <img src="/icons/document.svg" alt="" />
                  <span v-if="!btnLoading"> Yuklab olish </span>
                  <span v-if="btnLoading">Loading...</span>
                </div>
                <img v-if="!btnLoading" src="/icons/download.svg" alt="" />
                <span
                  v-if="btnLoading"
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
              <button class="category__more-btn" @click="infoModal">
                <span>Batafsil</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-modal v-if="isModal" @close="closeModal">
      <div class="modal__wrap">
        <div class="modal__body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti in
          saepe vel vitae architecto, beatae ullam aliquam doloremque. Corporis
          nulla cupiditate nemo nihil alias autem architecto perspiciatis enim,
          facere iure.
        </div>
      </div>
    </app-modal>
  </div>
</template>
<script>
import "./style.css";
const SplideJS = () => import("@splidejs/splide");
import "@splidejs/splide/dist/css/splide-core.min.css";
import AppModal from "@/components/shared-components/AppModal.vue";
import axios from "axios";
export default {
  name: "detailed-page",
  components: { AppModal },
  data() {
    return {
      isModal: false,
      btnLoading: false,
      cardsSlider: null,
      activeIdx: 0,
      products: [],
      list: [
        {
          id: 0,
          category: "Xalq dostonlari",
        },
        {
          id: 1,
          category: "Maqollar",
        },
        {
          id: 2,
          category: "Topishmoqlar",
        },
        {
          id: 3,
          category: "Ertaklar",
        },
        {
          id: 4,
          category: "Xalq qo‘shiqlari",
        },
        {
          id: 5,
          category: "Ilmiy tadqiqotlar.",
        },
      ],
    };
  },
  props: {
    slideCount: {
      type: [String, Number],
      default: 4,
    },
  },
  computed: {
    count() {
      return this.slideCount;
    },
    options() {
      return {
        rewind: true,
        drag: this.list.length > this.count,
        perPage: this.count,
        perMove: 1,
        gap: 15,
        arrows: false,
        pagination: false,
        breakpoints: {
          1240: {
            gap: 15,
          },
          1100: {
            perPage: 3,
            gap: 15,
          },
          900: {
            perPage: 2,
            gap: 15,
          },

          550: {
            perPage: 1,
          },
        },
      };
    },
  },
  methods: {
    infoModal() {
      this.isModal = true;
    },
    closeModal() {
      this.isModal = false;
    },
    onClick() {
      this.btnLoading = true;
      axios({
        url: "https://adibuz.herokuapp.com/media/files/57d67edf6aceda3f5120bc08d36ed9144166957e.pdf",
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "my.pdf");
          document.body.appendChild(link);
          link.click();
          this.btnLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkArrows(idx) {
      this.showPreviousArrow = idx > 0;
      this.showNextArrow = this.count - 1 < this.list.length - 1;
    },
    next() {
      if (this.cardsSlider) {
        this.cardsSlider.go("+1");
      }
    },
    previous() {
      if (this.cardsSlider) {
        this.cardsSlider.go("-1");
      }
    },
    async init() {
      const refSlider = this.$refs["slider"];
      const Splide = await SplideJS();
      const slider = new Splide.default(refSlider, this.options);
      slider.mount();
      this.checkArrows(0);
      slider.on("move", (newIndex) => {
        this.checkArrows(newIndex);
        this.$emit("select", { index: newIndex });
      });
      this.cardsSlider = slider;
    },
    // page function
    setActive(idx) {
      this.activeIdx = idx;
    },
    sliceText(text) {
      if (text.length > 100) {
        return text.slice(0, 100) + "...";
      } else {
        return text;
      }
    },
  },
  mounted() {
    this.init();
    axios.get("https://adibuz.herokuapp.com/api/ertak/").then((res) => {
      this.products = res.data;
      console.log(this.products);
    });
  },
  watch: {
    list() {
      this.init();
    },
  },
  beforeDestroy() {
    if (this.cardsSlider) {
      const cardsSlider = this.cardsSlider;
      setTimeout(() => {
        cardsSlider.destroy();
      }, 150);
    }
  },
};
</script>
