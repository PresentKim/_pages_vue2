<template>
    <v-content id="SVGPathTracer">
        <h1 id="test">Drop an <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d" target="_blank">SVG path definition</a> in the box</h1>
    
        <v-text-field label="Path definition:" v-model="definition" required/>
    
        <br/>
    
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
                    try {
                        path.setAttribute('d', value);
                    } catch {
                        path.setAttribute('d', '');
                    } finally {
                        this._definition = value;
                        this.path = path.getPointAtLength(Number.MAX_SAFE_INTEGER);
                    }
                }
            }
        },
    
        created() {
            this.$store.state.title = "SVG :: Path tracer";
        },
    };
</script>