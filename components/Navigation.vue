<template>
    <v-navigation-drawer v-model="drawer" app clipped temporary>
        <v-list flat subheader>
            <v-subheader>General</v-subheader>
            <v-list-item to="/">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-spacer />
            <v-subheader>Tools</v-subheader>
            <v-list-item to="/tools/skindataconverter">
                <v-list-item-action>
                    <v-icon>mdi-file-replace</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Skindata Converter</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/tools/passwordstength">
                <v-list-item-action>
                    <v-icon>mdi-textbox-lock</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Password Stength</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/tools/svgpathtracer">
                <v-list-item-action>
                    <v-icon>mdi-ray-end</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>SVG Path Tracer</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-spacer />
            <v-subheader>Fun</v-subheader>
            <v-list-item to="/fun/rotaterainbowball">
                <v-list-item-action>
                    <v-icon>mdi-rotate-left</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>RotateRainbowball</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <Footer />
    </v-navigation-drawer>
</template>

<script>
    import Footer from "@/components/Footer.vue";
    
    export default {
        name: "Navigation",
    
        components: {
            Footer
        },
    
        computed: {
            drawer: {
                get() {
                    return this.$store.state.drawer;
                },
                set(value) {
                    return this.$store.state.drawer = value;
                }
            }
        }
    };
</script>