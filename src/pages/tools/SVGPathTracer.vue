<template>
    <v-content id="SVGPathTracer">
        <h3>Type an <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d" target="_blank">path definition</a></h3>
        <v-text-field solo placeholder="i.e. M820,560 L620,460" v-model="definition" required/>
        <v-divider /><br />
        <v-text-field :value="path.x" label="X:" readonly />
        <v-text-field :value="path.y" label="Y:" readonly />
    </v-content>
</template>

<script>
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    export default {
        name: "SVGPathTracer",
    
        data: () => ({
            _definition: "",
            path: {
                x: 0,
                y: 0
            }
        }),
    
        computed: {
            definition: {
                get() {
                    return this._definition;
                },
                set(value) {
                    path.setAttribute('d', value);
                    this.path = path.getPointAtLength(Number.MAX_SAFE_INTEGER);
                }
            }
        },
    
        created() {
            this.$store.state.title = "SVG :: Path tracer";
        },
    };
</script>