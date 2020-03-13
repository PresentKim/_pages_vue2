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
    created() {
      this.$vuetify.theme.dark = true;
    },
  
    components: {
      Navigation,
      AppBar
    },
  }
</script>