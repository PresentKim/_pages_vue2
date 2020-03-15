<template>
    <v-footer app>
        <span>&copy; 2017-2020</span>
        <v-spacer />
        <v-icon v-html="themeIcon" @click.stop="toggleTheme"></v-icon>
        <v-btn icon :href="source" target="_blank">
            <v-icon>mdi-github</v-icon>
        </v-btn>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
    
        data: () => ({
            source: "https://github.com/PresentKim/vue-site",
        }),
    
        computed: {
            themeIcon() {
                return this.$store.state.darkMode ? 'mdi-weather-night' : 'mdi-weather-sunny';
            }
        },
    
        methods: {
            toggleTheme: function() {
                this.$store.commit('toggleTheme');
            }
        }
    };
</script>