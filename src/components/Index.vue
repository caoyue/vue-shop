<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div v-html="html"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Page } from '@/types';

@Component
export default class IndexView extends Vue {
    @Prop() private msg!: string;
    @Action loadPage!: (payload: { tag: string }) => Promise<Page>;

    private html = '';

    created() {
        this.loadPage({ tag: 'home' }).then(s => {
            this.html = s.content;
        });
    }
}
</script>
