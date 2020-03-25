<template>
  <v-app id="app">
    <AppBar />
    <Navigation />
    <router-view />
  </v-app>
</template>

<script>
  import AppBar from "@/components/core/AppBar.vue"
  import Navigation from "@/components/core/Navigation.vue";
  
  export default {
    components: {
      Navigation,
      AppBar
    },
  
    created() {
      this.$store.state.drawer = false;
      this.$store.state.title = "PresentKim Site";
      this.$vuetify.theme.dark = this.$store.state.darkMode;
      this.$store.subscribe((mutation, state) => this.$vuetify.theme.dark = state.darkMode);
  
      let notFoundPage = this.getQueryVariable('404');
      if (notFoundPage) {
        this.$router.push(notFoundPage);
      }
    },
  
    methods: {
      getQueryVariable: function(variable) {
        let query = window.location.search.substring(1);
        let vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split('=');
          if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
          }
        }
        return undefined;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    padding: 40px;
  }
</style>