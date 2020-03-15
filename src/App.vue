<template>
  <v-app id="app">
    <AppBar />
    <Navigation />
    <router-view></router-view>
  </v-app>
</template>

<script>
  import AppBar from "@/components/AppBar.vue"
  import Navigation from "@/components/Navigation.vue";
  
  export default {
    components: {
      Navigation,
      AppBar
    },
  
    created() {
      this.$store.state.drawer = false;
      this.$vuetify.theme.dark = this.$store.state.darkMode;
      this.$store.subscribe((mutation, state) => this.$vuetify.theme.dark = state.darkMode);
    }
  }
</script>