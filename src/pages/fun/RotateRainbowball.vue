<template>
    <v-content id="RotateRainbowball">
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000">
            <circle v-for="circle in circles" :key="circle" :cx="circle.x" :cy="circle.y" :r="circle.radius" :stroke="circle.color" stroke-width="5" fill="none"/>
            <circle v-for="ball in balls" :key="ball" :cx="ball.x" :cy="ball.y" :r="ball.radius" :fill="ball.color"/>
        </svg>
    </v-content>
</template>

<script>
    class Vector2 {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
    
        add(vec, newc = false) {
            if (newc) return new Vector2(this.x, this.y).add(vec);
    
            if (vec instanceof Vector2) {
                this.x += vec.x;
                this.y += vec.y;
            } else if (!isNaN(vec)) {
                this.x += vec;
                this.y += vec;
            } else throw Error(vec + " is not Vector2 or number");
    
            return this;
        }
    
        subtract(vec, newc = false) {
            if (newc) return new Vector2(this.x, this.y).subtract(vec);
    
            if (vec instanceof Vector2) {
                this.x -= vec.x;
                this.y -= vec.y;
            } else if (!isNaN(vec)) {
                this.x -= vec;
                this.y -= vec;
            } else throw Error(vec + " is not Vector2 or number");
    
            return this;
        }
    
        multiply(vec, newc = false) {
            if (newc) return new Vector2(this.x, this.y).multiply(vec);
    
            if (vec instanceof Vector2) {
                this.x *= vec.x;
                this.y *= vec.y;
            } else if (!isNaN(vec)) {
                this.x *= vec;
                this.y *= vec;
            } else throw Error(vec + " is not Vector2 or number");
    
            return this;
        }
    }
    class Hue {
        static toHex(h = 0, a = 1) {
            h = h / 360;
            const s = 1;
            const l = 0.5;
            let r, g, b;
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
            const toHex = x => {
                const hex = Math.round(x * 255).toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            };
            return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}`;
        }
    }
    class Vector {
        static angleToDirection(angle, isRadian = false) {
            if (isRadian) angle = angle * Math.PI / 180;
            return new Vector2(-Math.sin(angle), -Math.cos(angle));
        }
    
        static vecToAngle(vec1, vec2) {
            /*
            var distX = vec1.x - circle2.x;
            var distY = vec1.y - circle2.y;
            return Math.atan2(distX, distY) * 180 / Math.PI;
            */
            return Math.atan2(vec1.y - vec2.y, vec1.x - vec2.x) * 180 / Math.PI;
        }
    }
    class RotateBall extends Vector2 {
        constructor(x = 0, y = 0, radius = 1, color = null) {
            super(x, y);
            this.radius = radius;
            this.color = color === null ? "#00000000" : color;
        }
    }
    class RotateCircle extends RotateBall {
        constructor(index, rotate_radius, circle_radius) {
            let vec = Vector.angleToDirection(index * 30, true);
            vec.multiply(rotate_radius);
            super(vec.x + 500, vec.y + 500, circle_radius);
    
            this.index = index;
            this.angle = Math.PI / 2 + Math.PI / 12 * index;
            this.startAngle = this.angle;
            this.enable = false;
    
            this.balls = [];
            for (let i = 0; i < 2; ++i) {
                this.balls.push(new RotateBall(0, 0, 20));
            }
            this.renderBalls();
        }
    
        renderBalls() {
            let velocity = Vector.angleToDirection(
                this.angle + this.index * Math.PI / 12
            ).multiply(this.radius);
            let vecs = [this.add(velocity, true), this.subtract(velocity, true)];
            for (let i in vecs) {
                let ball = this.balls[i];
    
                ball.x = vecs[i].x;
                ball.y = vecs[i].y;
    
                //Set color of ball
                ball.color = Hue.toHex(Vector.vecToAngle(ball, new Vector2(500, 500)) + 120);
            }
        }
    }
    
    export default {
        name: "RotateRainbowball",
    
        data() {
            return {
                circles: [],
    
                rotate_radius: 320,
                circle_radius: 135
            };
        },
        computed: {
            balls: function() {
                let balls = [];
                for (let i in this.circles) {
                    for (let j in this.circles[i].balls) {
                        balls.push(this.circles[i].balls[j]);
                    }
                }
                return balls;
            }
        },
        methods: {
            requestAnimationFrame: function() {
                const center = new Vector2(500, 500);
    
                //Move circles
                for (let i in this.circles) {
                    let circle = this.circles[i];
    
                    if (circle.enable) {
                        circle.angle -= Math.PI / 90;
                        if (circle.angle + Math.PI < circle.startAngle) {
                            circle.angle = circle.startAngle;
                            circle.enable = false;
                        } else if (circle.angle + Math.PI / 5 < circle.startAngle) {
                            this.circles[i == 0 ? 11 : i - 1].enable = true;
                        }
    
                        //Set color of circle
                        let calcAngle = Math.abs(circle.angle - circle.startAngle + Math.PI / 2);
                        let hue = Vector.vecToAngle(circle, center) + 120;
                        let alpha = calcAngle < Math.PI / 2 ? 1 - calcAngle / Math.PI * 1.8 : 0;
                        circle.color = Hue.toHex(hue, alpha);
    
                        //Render balls of circle
                        circle.renderBalls();
                    }
                }
                window.requestAnimationFrame(this.requestAnimationFrame);
            }
        },
    
        mounted() {
            //Generate circles (360 / 30 = 12)
            for (let i = 0; i < 12; ++i) {
                this.circles.push(new RotateCircle(i, this.rotate_radius, this.circle_radius));
            }
    
            //Enable first circle
            this.circles[0].enable = true;
    
            this.requestAnimationFrame();
        },
    
        created() {
            this.$store.state.title = "Fun :: Rotate ball";
        },
    }
</script>