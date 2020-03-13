<template>
    <div class="profile">
        <h2>UserName: {{ user.username }}</h2>
        <p>This is a profile page.</p>
        <p>
            <router-link :to="{ path: '/logout' }">
                Logout
            </router-link>
        </p>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { User } from '../../types';

@Component
export default class ProfileView extends Vue {
    @State user!: User;
}
</script>

<style lang="less" scoped>
.profile p {
    font-size: @bigFont;
    padding: 50px 0px;
}
</style>
