<template>
    <div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class LogoutView extends Vue {
    @Action logout!: () => Promise<void>;

    private created() {
        this.logout().then(() => {
            this.$router.replace('/');
        });
    }
}
</script>
