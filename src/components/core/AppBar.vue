<template>
    <v-app-bar app clipped-left dense collapse-on-scroll>
        <v-app-bar-nav-icon @click.stop="toggleDrawer" />
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer />
        <router-link class="title-anchor" to="/">
            <v-icon>mdi-home</v-icon>
        </router-link>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",
    
        computed: {
            title: function() {
                return this.$store.state.title;
            }
        },
    
        methods: {
            toggleDrawer: function() {
                this.$store.commit('toggleDrawer');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .title-anchor {
        text-decoration: none;
    }
</style>