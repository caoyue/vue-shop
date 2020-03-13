<template>
    <div class="user" v-if="user.username" @click="goProfile">
        <div>
            <IconFont iconClass="money" />
            <span>{{ user.username }}</span>
        </div>
    </div>
    <div class="user" v-else @click="Login">
        Login
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { User } from '../types';

@Component
export default class UserCardView extends Vue {
    @State user!: User;

    private goProfile() {
        this.$router.push('/user').catch(e => e);
    }

    private Login() {
        this.$router.push('/login').catch(e => e);
    }
}
</script>

<style lang="less" scoped>
.user {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 150px;
}

.user:hover {
    cursor: pointer;
    color: @menuFontColor;
    background-color: @menuColor;
}
</style>
