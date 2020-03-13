<template>
    <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component
export default class LogoutView extends Vue {
    @Mutation logout!: () => void;

    private created() {
        this.logout();
        this.$router.push('/');
    }
}
</script>
