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
            <button @click="onLogin">login</button>
            <span class="reg">
                <router-link :to="{ path: '/register' }">Register</router-link>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import { User } from '@/types';

@Component
export default class LoginView extends Vue {
    @State user!: User;
    @Getter isAuthenticated!: boolean;
    @Action login!: (payload: {
        username: string;
        password: string;
    }) => Promise<string>;

    private username = '';
    private password = '';
    private error = '';

    private created() {
        if (this.user.username) {
            this.$router.push('/user');
        }
    }

    private onLogin() {
        this.error = '';
        if (this.validate()) {
            this.login({
                username: this.username,
                password: this.password,
            }).then(err => {
                if (this.isAuthenticated) {
                    const redirect = this.$route.query.redirect || '/';
                    this.$router.replace({ path: redirect as string });
                } else {
                    this.error = err;
                }
            });
        } else {
            this.error = 'Not valid.';
        }
    }

    private validate() {
        return this.username && this.password;
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
