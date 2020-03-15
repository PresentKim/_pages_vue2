<template>
    <v-content id="home">
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col class="shrink">
                    <v-tooltip right>
                        <v-btn :href="source" icon large target="_blank" v-on="on">
                            <v-icon large>mdi-github</v-icon>
                        </v-btn>
                        <span>Source</span>
                    </v-tooltip>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({
            source: "https://github.com/PresentKim/vue-site",
        })
    };
</script>