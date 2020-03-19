import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
  theme: {
    themes: {
      dark: {
        primary:    "#D8DEE9", //nord4
        info:       "#ECEFF4", //nord6
        secondary:  "#E5E9F0", //nord5
        accent:     "#88C0D0", //nord7
        error:      "#BF616A", //nord11
        warning:    "#EBCB8B", //nord13
        success:    "#A3BE8C", //nord14
      },
      light: {
        primary:    "#2E3440", //nord0
        info:       "#3B4252", //nord1
        secondary:  "#434C5E", //nord2
        accent:     "#88C0D0", //nord7
        error:      "#BF616A", //nord11
        warning:    "#EBCB8B", //nord13
        success:    "#A3BE8C", //nord14
      }
    }
  }
});
