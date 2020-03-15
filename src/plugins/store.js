import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    darkMode: true,
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    }
  },
  plugins: [createPersistedState()]
});
