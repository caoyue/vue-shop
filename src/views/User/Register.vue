<template>
    <div class="login">
        <p class="errors" v-if="error">
            <IconFont iconClass="error-" />
            {{ error }}
        </p>
        <div class="row">
            <label for="username">Username</label>
            <input type="text" name="username" v-model="username" />
        </div>
        <div class="row">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" />
        </div>
        <div class="row">
            <label for="confirmPassword">Confirm</label>
            <input
                type="password"
                name="confirmPassword"
                v-model="confirmPassword"
            />
        </div>
        <div class="row">
            <button @click="onRegister" :disabled="disabled">Register</button>
            <span class="reg">
                <router-link :to="{ path: '/login' }">Login</router-link>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class LoginView extends Vue {
    @Getter isAuthenticated!: boolean;
    @Action register!: (payload: {
        username: string;
        password: string;
    }) => Promise<string>;

    private username = '';
    private password = '';
    private confirmPassword = '';
    private error = '';
    private disabled = false;

    private onRegister() {
        this.error = '';
        if (this.validate()) {
            this.disabled = true;
            this.register({
                username: this.username,
                password: this.password,
            }).then(err => {
                if (this.isAuthenticated) {
                    this.$router.replace('/user');
                } else {
                    this.error = err;
                    this.disabled = false;
                }
            });
        } else {
            this.error = 'Not valid';
        }
    }

    private validate() {
        return (
            this.username &&
            this.password &&
            this.password === this.confirmPassword
        );
    }
}
</script>

<style lang="less" scoped>
.row {
    font-size: @normalFont;
    padding: 10px 10px;
}
.row label {
    display: inline-block;
    width: 120px;
}

.row input {
    font-size: inherit;
    text-align: left;
    padding: 10px 10px;
}

.row button {
    font-size: inherit;
    padding: 5px 20px;
}

.reg {
    margin-left: 30px;
}

.errors {
    font-size: @bigFont;
    color: @errorColor;
}
</style>
