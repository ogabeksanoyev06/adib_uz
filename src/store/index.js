import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    sections: [],
  },
  getters: {
    loading: (state) => state.isLoading,
    sections: (state) => state.sections,
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setSections(state, payload) {
      state.sections = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },
    async getSections({ commit }) {
      try {
        commit("setLoading", true);
        await axios
          .get("http://api.uzbekliterature.uz/api/davr/")
          .then((res) => {
            if (!res.error && res.data) {
              commit("setSections", res.data);
            }
          })
          .catch((error) => {
            commit("setLoading", false);
            console.log(error);
          })
          .finally(() => {
            commit("setLoading", false);
          });
      } catch (error) {
        commit("setLoading", false);
        console.log(error);
      }
    },
  },
  modules: {},
});
