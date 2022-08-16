<template>
  <div class="container" style="padding: 30px 0">
    <div class="module__title">Bo'limlar</div>
    <div class="module__items">
      <app-module-item
        v-for="(item, index) in modules"
        :key="index"
        :modules="item"
      />
    </div>
  </div>
</template>
<script>
import AppModuleItem from "./AppModuleItem.vue";
export default {
  components: { AppModuleItem },
  name: "moduleItems",
  data() {
    return {
      modules: [
        {
          id: 1,
          title: "Xalq og‘zaki ijodi.",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
        {
          id: 2,
          title: "O‘zbek mumtoz adabiyoti davri",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
        {
          id: 3,
          title: "Alisher Navoiy davri.",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
        {
          id: 4,
          title: "Milliy Uyg‘onish adabiyoti davri. ",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
        {
          id: 5,
          title: "XX asr o‘zbek adabiyoti. ",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
        {
          id: 6,
          title: "Mustaqillik davri o‘zbek adabiyoti.",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
        {
          id: 7,
          title: "Adabiyotshunoslik terminlarining izohli lug‘ati",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
        {
          id: 8,
          title: "Chet ellarda nashr etilgan o‘zbek adabiyoti namunalari",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
        {
          id: 9,
          title: "O‘zbek adabiyoti elektron kutubxonasi",
          text: "You will take an online exam based on the requirements of the admission test system in this section. The test option is based on the DTM requirements. The questions will be selected from 40,000 questions. Passing the exam in 5 subjects costs 3,000 soms",
        },
      ],
    };
  },
};
</script>
<style scoped>
.module__items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.module__title {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #232c3c;
  margin-bottom: 30px;
}
</style>
