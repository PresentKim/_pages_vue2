<template>
  <v-app id="inspire">
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
      this.$vuetify.theme.dark = this.$store.state.darkMode;
      this.$store.subscribe((mutation, state) => this.$vuetify.theme.dark = state.darkMode);
    }
  }
</script>