import createPersistedState from 'vuex-persistedstate';

export const state = () => ({
    drawer: false,
    darkMode: true
});

export const mutations = {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    }
};

export const plugins = [
    createPersistedState()
];