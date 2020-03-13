<template>
    <div class="profile">
        <h1>User Profile</h1>
        <p>{{ user.username }}</p>
        <router-link :to="{ path: '/logout' }">
            <a>Logout</a>
        </router-link>
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
