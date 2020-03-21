<template>
    <v-content id="PasswordStength">
        <h3>Type password to check</h3>
        <v-text-field solo @input="checkPassword" v-model="password" required autocomplete="off" placeholder="Password" />
        <v-divider /><br />
        <v-list-item-group>
            <v-list-item v-for="(rule, i) in rules" :key="i" inactive>
                <v-list-item-avatar>
                    <v-icon v-html="rule.icon" :class="{is_valid: rule.value}" />
                </v-list-item-avatar>
                <v-list-item-content :class="{is_valid: rule.value}">
                    <v-list-item-title v-html="rule.title" />
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-content>
</template>

<script>
    export default {
        name: "PasswordStength",
    
        data: () => ({
            password: null,
            rules: {
                eight_char: {
                    icon: "mdi-format-letter-matches",
                    title: "More than 8 characters",
                    value: false
                },
                contains_number: {
                    icon: "mdi-numeric",
                    title: "Contains Numbers",
                    value: false
                },
                contains_uppercase: {
                    icon: "mdi-alphabetical-variant",
                    title: "Contains Uppercase",
                    value: false
                },
                contains_special_char: {
                    icon: "mdi-bash",
                    title: "Contains Special symbol",
                    value: false
                }
            }
        }),
    
        computed: {
            valid_password() {
                return this.rules.eight_char.value && this.rules.contains_number.value && this.rules.contains_uppercase.value && this.rules.contains_special_char.value;
            }
        },
    
        methods: {
            checkPassword() {
                //check password length
                this.rules.eight_char.value = this.password.length >= 8;
    
                //password regex tests
                const NUMBER = /\d/;
                const UPPERCASE = /[A-Z]/;
                const SPECIAL_CHAR = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    
                this.rules.contains_number.value = NUMBER.test(this.password);
                this.rules.contains_uppercase.value = UPPERCASE.test(this.password);
                this.rules.contains_special_char.value = SPECIAL_CHAR.test(this.password);
            }
        },
    
        created() {
            this.$store.state.title = "Password strength";
        },
    };
</script>

<style lang="scss" scoped>
    .is_valid {
        color: #88C0D0; //nord8
    }
</style>