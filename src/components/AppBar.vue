<template>
    <v-app-bar app clipped-left dense collapse-on-scroll>
        <v-app-bar-nav-icon @click.stop="toggleDrawer" />
        <router-link class="title-anchor" to="/">
            <v-toolbar-title>PresentKim Site</v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-icon @click.stop="toggleTheme" v-html="themeIcon"></v-icon>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",
    
        computed: {
            themeIcon() {
                return this.$store.state.darkMode ? 'mdi-weather-night' : 'mdi-weather-sunny';
            }
        },
    
        methods: {
            toggleDrawer: function() {
                this.$store.commit('toggleDrawer');
            },
            toggleTheme: function() {
                this.$store.commit('toggleTheme');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .title-anchor {
        text-decoration: none;
    }
</style>