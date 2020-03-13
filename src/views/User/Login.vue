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
            <button @click="onLogin">login</button>
            <span class="reg">
                <router-link :to="{ path: '/register' }">Register</router-link>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component
export default class LoginView extends Vue {
    @Mutation login!: (username: string) => void;

    private username = '';
    private password = '';

    private onLogin() {
        this.login(this.username);
        this.$router.push('/user');
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
