<template>
  <div class="detailed-page" style="">
    <div class="detailed-page__wrap">
      <div class="container">
        <p class="title">Alisher Navoiy</p>
        <p class="text">
          Alisher Navoiy (1441-1501) - buyuk shoir va mutafakkir, davlat arbobi.
          To‘liq ismi Nizomiddin Mir Alisher. Navoiy tahallusi ostida chig‘atoy
          (eki o‘zbek tili) hamda forsiyda (fors tilidagi asarlarida) ijod
          qilgan. G‘arbda chig‘atoy adabiyoti hisoblanmish o‘zbek adabiyotining
          eng yirik namoyondasi. Umuman olganda, butun turkiy xalqlari orasida u
          kabi yirik shaxs yo‘qdir. Navoiy yoshligidan Xurosonning
          (Transoksaniya) bo‘lajak hukmdori Husayn Boyqaro bilan (1469-1506)
          do‘st bo‘lgan. 10-12 yoshidan she’rlar yozishni boshlagan. Navoiyning
          zamondoshi bo‘lmish tarixchi Xondamir (1473(76) -1534) qoldirgan
          ma’lumotlarga ko‘ra, mashhur o‘zbek shoiri Lutfiy (1369-1465) qarigan
          chog‘larida bolakay Navoiy bilan ko‘rishadi va uning she’riy
          iqtidorini yuqori baholaydi.
        </p>
        <p class="text">
          Hayoti davomida Navoiy musulmon Sharqining turli mamlakatlarida
          bo‘ladi, o‘z davrining taniqli shaxslari bilan ko‘rishadi. O‘zining
          she’riy mahoratini oshiradi. 1464-1465 yillar Navoiy ijodining
          shinavandalari uning ilk she’riy to‘plamini (devonlari) tayyorlashadi.
          Bundan ko‘rinib turibdiki, o’sha davrlardayoq Navoiy mashhur shoir
          bo‘lib ulgurgan. 1469 yilgacha temuriylar o‘rtasidagi o‘zaro ichki
          nizolar tufayli Navoiy o‘zining ona shahri Hirotdan uzoqda yashashga
          majbur bo‘lgan. 1469 yil temuriy Husayn Boyqaro Hirotni egallaydi va
          Xuroson hukmdori bo‘ladi. Shu vaqtdan e’tiboran, Navoiy hayotining
          yangi bosqichi boshlanadi. U mamlakatning siyosiy hayotida faol
          ishtirok etadi. Shu yili Xuroson hukmdori Navoiyni davlat muhrdori
          etib tayinlaydi, 1472 yil vazir bo‘ladi. Egallagan mansabi orqali u
          mamlakatning madaniy va ilmiy taraqqiyotida katta yordam ko‘rsatadi.
          Katta mulk egasiga aylanadi.
        </p>
        <p class="text">
          1480 yil Hirot shahrida va boshqa viloyatlarda o‘z hisobidan bir
          nechta madrasa, 40 ta rabot (yo‘lovchilar uchun bekat), 17 ta masjid,
          10 ta so‘fiylar turarjoyi (xonaqoh), 9 ta hammom, 9 ta ko‘prik va
          boshqalarni qurdiradi. Biroq, saroy amaldorlariga Navoiyning bu kabi
          faoliyati yoqmaydi va turli fitnalar orqali Husayn Boyqaro bilan
          munosabatlarini buzishadi. Shunday qilib, Navoiy egallab turgan
          mansabidan ozod etilib, 1487 yil Astrobod shahriga hukmdor sifatida
          yuboriladi. Bu yerda u ikki yil xizmat qiladi. Mazkur muddat
          nihoyasiga yetgachgina, X. Boyqaro unga Hirotga qaytib, hokimiyatda
          mansabga ega bo‘lishiga ruhsat beradi. Lekin Navoiy bu taklifni rad
          etadi. Rad javobiga qaramay, Boyqaro sultonning yaqin kishisi
          lavozimini (“mukarrabi xazrati sultani”) taklif etadi. Bunday
          lavozimda Navoiy barcha davlat ishlari bilan bog‘liq ishlarda qaror
          qabul qilish huquqiga ega edi.
        </p>
        <p class="text">
          Shu vaqtdan Navoiy hayotining yangi bosqichi boshlanadi va u ko‘proq
          ijod bilan shug‘ullanadi. U yaratgan asarlarining katta qismi aynan
          shu davrga tegishli. Navoiy temuriylarning so‘nggi hukmronlik
          yillarida (1370-1506) yashab ijod qilgan. Shuning uchun uning
          asarlarida jamoat ruhi, davrga xos muhim muammolar ustundir. 1490-1501
          yillar Navoiy eng nafis, ijtimoiy-falsafiy va ilmiy asarlarini
          yaratgan. Alisher Navoiyning ijodi ulkan. Olti dostonining hajmi 60
          000 ga yaqin misrani tashkil etadi. 1483-1485 yillar Navoiy o‘z ichiga
          besh dostonni olgan “Hamsa” asarini yaratgan: “Hayrat ul-Abror”
          (“Yaxshi kishilariing hayratlanishi”), “Farhod va Shirin”, “Layli va
          Majnun”, “Sab’ai sayyor” (“Yetti sayyora”), “Saddi Iskandariy”
          (“Iskandar devori”). Navoiyning “Hamsa”si mazkur janrda yaratilgan
          turkiy tildagi birinchi asar hisoblanadi. U - turkiy tilida ham bu
          kabi yirik ko‘lamdagi asar yaratilishi mumkinligini isbotlab berdi.
          Haqiqatan ham, Navoiy chig‘atoy tilida (eski o‘zbek tili) ham
          fors-tojik adabiyoti bilan bir darajada turuvchi asar yaratish
          mumkinligini isbotlashga harakat qilgan. Va u o‘zining besh hazinasi
          orqali buning uddasidan chiqqan.
        </p>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <p class="title">Asarlar ro'yxati</p>
        <div class="content_file">
          <button
            class="files__item-btn"
            @click="onClick()"
            :class="btnLoading ? 'disabled' : ''"
          >
            <div class="d-flex align-items-center">
              <img src="/icons/document.svg" alt="" />
              <span v-if="!btnLoading"> O'tkan kunlar </span>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./style.css";
import axios from "axios";
export default {
  name: "scien-page",
  components: {},
  data() {
    return {
      btnLoading: false,
    };
  },
  methods: {
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
  },
};
</script>
