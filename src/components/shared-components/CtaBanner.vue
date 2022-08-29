<template>
  <div class="cta__banner">
    <div class="cta__banner-photo">
      <img :src="photo" alt="dsdsds" />
    </div>
    <div class="cta__banner-content" style="padding: 30px">
      <h2 class="cta__banner-title">{{ title }}</h2>
      <p class="cta__banner-text">{{ content }}</p>
      <button v-if="buttonText" class="cta__banner-btn" @click="info">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "cta-banner",
  components: {},
  data() {
    return {};
  },
  props: {
    title: String,
    content: String,
    photo: String,
    link: Boolean,
    buttonText: String,
  },
  methods: {
    info() {
      this.$emit("info");
    },
  },
  mounted() {
    console.log(this.link);
  },
};
</script>
<style scoped>
.cta__banner {
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #f5f9fd;
  border-radius: 15px;
  margin: 20px 0;
}
.cta__banner-photo {
  max-width: 450px;
  height: 450px;
  width: 100%;
}
.cta__banner-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cta__banner-content {
  width: calc(100% - 450px);
}
.cta__banner-title {
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #181818;
}
.cta__banner-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #95abc6;
  margin-bottom: 30px;
}
.cta__banner-btn {
  background: linear-gradient(278.92deg, #00d06c -7.77%, #a6ffdf 158.52%);
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  padding: 0px 20px;
  border-radius: 10px;
  height: 50px;
  max-width: 130px;
  width: 100%;
  line-height: 50px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.cta__banner-btn:hover {
  box-shadow: none;
}
.cta__banner-btn:active {
  transform: scale(0.9);
}

@media (max-width: 991px) {
  .cta__banner-photo {
    max-width: 40%;
  }
  .cta__banner-content {
    width: calc(100% - 40%);
  }
}
@media (max-width: 650px) {
  .cta__banner {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .cta__banner-content {
    padding: 20px;
    width: 100%;
  }
  .cta__banner-photo {
    max-width: 100%;
  }
}
</style>
