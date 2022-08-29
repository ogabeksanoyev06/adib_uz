// moduleni ichidagi page
<template>
  <div style="padding: 30px 0" class="category" v-if="product">
    <div class="container">
      <div class="category__title">Xalq og‘zaki ijodi.</div>
      <app-slider :list="product.art">
        <template #default="{ item }">
          <div
            class="list__item"
            :class="activeIdx === item.id ? 'activeX' : ''"
            @click="setActive(item.id)"
          >
            <span>{{ item.name }}</span>
          </div>
        </template>
      </app-slider>
      <app-loader v-if="loading" />
      <div class="category__items">
        <div
          class="category__item"
          v-for="(item, i) in product.art[0].partys"
          :key="i"
        >
          <div class="category__item-img">
            <img
              :src="'http://api.uzbekliterature.uz' + item.img"
              alt="photo"
              v-if="item.img !== ''"
            />
            <img src="/images/post.jpg" alt="" v-else />
          </div>
          <div class="category__item-content">
            <div class="category__item-title">
              <span> {{ item.name }}</span>
            </div>
            <div class="category__item-text">
              <!-- <span> text </span> -->
            </div>
            <div class="category__item-btn">
              <button
                class="category__download-btn"
                @click="onClick()"
                :class="btnLoading ? 'disabled' : ''"
              >
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
              <button class="category__more-btn" @click="infoModal(item.name)">
                <span>Batafsil</span>
              </button>
            </div>
          </div>
          <app-modal v-if="isModal" @close="closeModal">
            <div class="modal__wrap">
              <div class="modal__body">
                <div class="modal__body-info">
                  <p class="modal__body-title">Janr:</p>
                  <p class="modal__body-text">{{ infoModalId.genre }}</p>
                </div>
                <div class="modal__body-info">
                  <p class="modal__body-title">Muallif:</p>
                  <p class="modal__body-text">{{ infoModalId.author[0] }}</p>
                </div>
                <div class="modal__body-info">
                  <p class="modal__body-title">Nomi:</p>
                  <p class="modal__body-text">{{ infoModalId.name }}</p>
                </div>
                <div>
                  <p class="modal__body-text">
                    {{ infoModalId.name }}
                  </p>
                  <p class="modal__body-text"></p>
                </div>
              </div>
            </div>
          </app-modal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.css";
import AppModal from "@/components/shared-components/AppModal.vue";
import AppLoader from "@/components/shared-components/AppLoader.vue";
import axios from "axios";
import { mapActions, mapGetters, mapState } from "vuex";
import AppSlider from "@/components/shared-components/AppSlider.vue";
export default {
  name: "detailed-page",
  components: { AppModal, AppLoader, AppSlider },
  data() {
    return {
      product: null,
      isModal: false,
      btnLoading: false,
      cardsSlider: null,
      infoModalId: null,
      activeIdx: 0,
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
    ...mapState([""]),
    ...mapGetters(["loading", "sections"]),
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
    getProduct() {
      this.$route.params.id;
      axios
        .get(`http://api.uzbekliterature.uz/api/davr/${this.$route.params.id}/`)
        .then((res) => {
          if (res.data) {
            this.product = res.data;
            console.log(this.product.art[0].partys);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapActions(["getSections", "setLoading"]),
    infoModal(name) {
      this.product.art[0].partys.forEach((element) => {
        if (name === element.name) {
          this.isModal = true;
          this.infoModalId = element;
          console.log(this.infoModalId);
        }
      });
    },
    closeModal() {
      this.isModal = false;
    },
    onClick() {
      this.btnLoading = true;
      axios({
        url: "http://api.uzbekliterature.uz/media/files/538071.pdf",
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
    this.getSections();
    this.getProduct();
    console.log(this.$route.params.id);
  },
  watch: {},
  beforeDestroy() {},
};
</script>
