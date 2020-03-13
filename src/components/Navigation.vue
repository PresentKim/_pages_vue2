<template>
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
        <v-footer app>
            <span>&copy; 2019</span>
        </v-footer>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Navigation",
    
        computed: {
            drawer: {
                get() {
                    return this.$store.state.drawer;
                },
                set(value) {
                    return this.$store.state.drawer = value;
                }
            }
        },
    };
</script>