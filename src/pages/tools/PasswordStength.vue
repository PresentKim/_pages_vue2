<template>
    <v-content id="PasswordStength">
        <v-container fluid>
            <h1> Password Strength </h1>
            <v-container id="input_container" fluid>
                <ul>
                    <li :class="{is_valid: eight_char}">8 Characters</li>
                    <li :class="{is_valid: contains_number}">Contains Number</li>
                    <li :class="{is_valid: contains_uppercase}">Contains Uppercase</li>
                    <li :class="{is_valid: contains_special_char}">Contains Special Character</li>
                </ul>
    
                <input type="password" @input="checkPassword" v-model="password" autocomplete="off" placeholder="Password" />
            </v-container>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "PasswordStength",
    
        data: () => ({
            password: null,
            eight_char: false,
            contains_number: false,
            contains_uppercase: false,
            contains_special_char: false
        }),
    
        computed: {
            valid_password() {
                return this.eight_char && this.contains_special_char && this.contains_uppercase && this.contains_number;
            }
        },
    
        methods: {
            checkPassword() {
                //check password length
                this.eight_char = this.password.length >= 8;
    
                //password regex tests
                const NUMBER = /\d/;
                const UPPERCASE = /[A-Z]/;
                const SPECIAL_CHAR = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    
                this.contains_number = NUMBER.test(this.password);
                this.contains_uppercase = UPPERCASE.test(this.password);
                this.contains_special_char = SPECIAL_CHAR.test(this.password);
            }
        },
    
        created() {
            this.$store.state.title = "Password strength";
        },
    };
</script>

<style lang="scss" scoped>
    #input_container {
        padding: 20px;
        border-radius: 5px;
        background: #4C566A; //nord3
        li {
            margin-bottom: 8px;
            position: relative;
            &:before {
                position: absolute;
                display: block;
                content: "";
                width: 0;
                height: 2px;
                top: 50%;
                background: #A3BE8C; //nord14
                transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
        }
        input[type="password"] {
            color: #ECEFF4; //nord6
            width: 100%;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #D8DEE9; //nord4
            background-color: #4C566A; //nord3
            outline: 0;
            &:focus {
                border-color: #88C0D0; //nord8
            }
        }
        .is_valid {
            color: #88C0D0; //nord8
            &:before {
                width: 100%;
            }
        }
    }
</style>