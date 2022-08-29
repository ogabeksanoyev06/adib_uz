<template>
  <kinesis-container>
    <div class="auth">
      <div class="auth__column auth__content">
        <div class="auth__wrap">
          <div class="auth__header w-100">
            <div class="d-flex">
              <router-link to="/" class="d-flex align-items-center">
                <img src="@/assets/logo2.png" class="w-100" alt="" />
              </router-link>
            </div>
          </div>
          <RouterView />
          <div class="auth__footer">
            <p>Copyright © 2022 Adib.uz platforma</p>
          </div>
        </div>
      </div>
      <div class="auth__column auth__photo greyBg">
        <img src="/images/login/login-2.png" class="auth__banner" alt="" />
        <div class="auth__professor">
          <kinesis-element class="layer" :strength="8">
            <img src="/images/login/login-professor.png" alt="" />
          </kinesis-element>
        </div>
        <div class="auth__science">
          <kinesis-element class="layer" :strength="10">
            <img src="/images/login/login-science.png" alt="" />
          </kinesis-element>
        </div>
        <div class="auth__test">
          <kinesis-element class="layer" :strength="12">
            <img src="/images/login/login-test.png" alt="" />
          </kinesis-element>
        </div>
        <div class="auth__round">
          <kinesis-element class="layer" :strength="15">
            <img src="/icons/round.svg" alt="" />
          </kinesis-element>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "AppAuth",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },

  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss">
.auth {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
.auth__header {
  display: flex;
  justify-content: center;
}
.auth__header img {
  margin-right: 15px;
}
.auth__header {
  color: #00419e;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
}
.auth .logo img {
  max-width: 80px !important;
  height: 100% !important;
  -o-object-fit: contain;
  object-fit: contain;
}
.auth__content {
  justify-content: center;
  overflow-y: auto;
  height: 100vh;
}
.auth__column {
  width: 50%;
  position: relative;
  display: flex;
}
.auth__wrap {
  max-width: 480px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px;
  align-items: center;
}
// kinesis photo
.auth__photo {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  padding: 20px 20px 0;
}
.auth__column {
  width: 50%;
  position: relative;
  display: flex;
}
.greyBg {
  background-color: #e7eef5;
}
.auth__photo img {
  max-width: 100%;
}
.auth__banner {
  position: relative;
  z-index: 2;
  -o-object-fit: cover !important;
  object-fit: cover !important;
  min-height: 300px;
  margin-top: auto;
}
.auth__professor {
  position: absolute;
  z-index: 2;
  bottom: 10%;
  right: 10%;
}
.auth__science {
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 10%;
}
.auth__test {
  position: absolute;
  z-index: 2;
  top: 25%;
  right: 50px;
  max-width: 280px;
}
.auth__round {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 560px;
  max-height: 560px;
  width: 100%;
}
.auth__footer {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

@media (max-width: 1650px) {
  .auth__round {
    max-width: 600px;
    max-height: 600px;
  }
  .auth__test {
    max-width: 200px;
  }
  .auth__banner {
    max-height: 750px;
  }
}
@media (max-width: 1300px) {
  .auth__professor {
    max-width: 300px;
  }
  .auth__science {
    max-width: 170px;
    left: 5%;
    top: 50%;
  }
  .auth__test {
    right: 15px;
    max-width: 150px;
    top: 40%;
  }
  .auth__round {
    max-width: 500px;
    max-height: 500px;
  }
}
@media (max-width: 1040px) {
  .auth__photo {
    display: none;
  }
  .auth__content {
    overflow-y: unset;
    height: unset;
    width: 100%;
  }
  .auth__wrap {
    padding: 40px 10px;
  }
}
</style>
