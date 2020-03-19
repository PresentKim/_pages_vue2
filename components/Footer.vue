<template>
    <v-footer app>
        <v-btn :href="telegram" target="_blank">
            <v-icon>mdi-telegram</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn :href="github" target="_blank">
            <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-spacer />
    
        <br />
    
        <span>&copy; 2017-2020 PresentKim</span>
        <v-spacer />
        <v-icon v-html="themeIcon" @click.stop="toggleTheme" />
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
    
        data: () => ({
            github: "https://github.com/PresentKim/",
            telegram: "https://t.me/PresentKim"
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