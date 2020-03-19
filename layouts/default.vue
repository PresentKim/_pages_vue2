<template>
    <v-app>
        <AppBar />
        <Navigation />
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
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
            this.$vuetify.theme.dark = this.$store.state.darkMode;
            this.$store.subscribe((mutation, state) => this.$vuetify.theme.dark = state.darkMode);
        }
    }
</script>