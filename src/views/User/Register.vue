<template>
    <div class="login">
        <div class="row">
            <label for="username">Username</label>
            <input type="text" name="username" v-model="username" />
        </div>
        <div class="row">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" />
        </div>
        <div class="row">
            <label for="confirmPassword">Password</label>
            <input
                type="password"
                name="confirmPassword"
                v-model="confirmPassword"
            />
        </div>
        <div class="row">
            <button @click="register">Register</button>
            <span class="reg">
                <router-link :to="{ path: '/login' }">Login</router-link>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LoginView extends Vue {
    private username = '';
    private password = '';
    private confirmPassword = '';

    private register() {
        console.log(this.username, this.password);
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
}

.row button {
    font-size: inherit;
    padding: 5px 20px;
}

.reg {
    margin-left: 30px;
}
</style>
