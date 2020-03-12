<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped temporary>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense collapse-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <router-link class="router-anchor" to="/">
        <v-toolbar-title>PresentKim Site</v-toolbar-title>
      </router-link>
    </v-app-bar>

    <router-view></router-view>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>

<style lang="scss" scoped>
  .router-link-active{
    text-decoration: none;
  }
</style>